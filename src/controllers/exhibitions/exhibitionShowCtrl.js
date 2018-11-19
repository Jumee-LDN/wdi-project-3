
function exhibitionShowCtrl($scope, $http, $state) {
  $http({
    method: 'GET',
    url: `/api/exhibitions/${$state.params.id}`
  })
    .then(result => {
      $scope.exhibition = result.data;
    });

  $scope.handleDelete = function(){
    $http({
      method: 'DELETE',
      url: `/api/magazines/${$scope.magazine._id}`
    }).then(()=> $state.go('magazinesIndex'));
  };
}


export default exhibitionShowCtrl;
