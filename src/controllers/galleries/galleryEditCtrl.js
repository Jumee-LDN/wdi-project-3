function editCtrl($scope, $http, $state){
  $http({
    method: 'GET',
    url: `/api/galleries/${$state.params.id}`
  }).then(result => $scope.gallery = result.data);
  $scope.handleSubmit = function() {
    // Here we request the UPDATE route:
    $http({
      method: 'PUT',
      url: `/api/galleries/${$state.params.id}`,
      data: $scope.gallery
    }).then(result => $state.go('galleryShow', {id: result.data._id}));
  };
}

export default editCtrl;
