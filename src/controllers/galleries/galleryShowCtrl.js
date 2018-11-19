function showCtrl($state, $scope, $http) {
  $http({
    method: 'GET',
    url: `/api/galleries/${$state.params.id}`
  }).then(result => {
    $scope.gallery = result.data;
  });

  $scope.handleDelete = function() {
    $http({
      method: 'DELETE',
      url: `/api/galleries/${$scope.gallery._id}`
    }).then(() => $state.go('galleriesIndex'));
  };
}

export default showCtrl;
