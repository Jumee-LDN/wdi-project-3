function newCtrl($scope, $http, $state){
  $scope.handleSubmit =  function(){
    $http({
      method: 'POST',
      url: '/api/galleries',
      data: $scope.gallery
    }).then(result => $state.go('galleryIndex', {
      id: result.data._id
    }));
  };
}

export default newCtrl;
