
function exhibitionShowCtrl($scope, $http, $state) {
  $http({
    method: 'GET',
    url: `/api/exhibitions/${$state.params.id}`
  }).then(result => {
    $scope.exhibition = result.data;
  })
  $scope.handleDelete = function(){
    console.log('You got this far, yay!');
    $http({
      method: 'DELETE',
      url: `/api/exhibitions/${$scope.exhibition._id}`
    })
      .then(() => $state.go('exhibitionIndex'));
  };

}

export default exhibitionShowCtrl;
