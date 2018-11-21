
function exhibitionShowCtrl($scope, $http, $state) {
  $scope.comment = {};
  $http({
    method: 'GET',
    url: `/api/exhibitions/${$state.params.id}`
  }).then(result => {
    $scope.exhibition = result.data;
  });

  $scope.handleDelete = function(){
    console.log('You got this far, yay!');
    $http({
      method: 'DELETE',
      url: `/api/exhibitions/${$scope.exhibition._id}`
    })
      .then(() => $state.go('exhibitionIndex'));
  };

  $scope.createComment = function() {
    $http({
      method: 'POST',
      url: `/api/exhibitions/${$state.params.id}/comments`,
      data: $scope.comment
    }).then(result => {
      console.log('$scope.exhibition is: ', $scope.exhibition);
      console.log('result.data is: ', result.data);

      $scope.exhibition = result.data;

      $scope.comment.text = null;

    });

  };

  $scope.deleteComment = function(comment) {
    $http({
      method: 'DELETE',
      url: `/api/exhibitions/${$state.params.id}/comments/${comment._id}`
    }).then(result => $scope.exhibition = result.data);
  };

}

export default exhibitionShowCtrl;
