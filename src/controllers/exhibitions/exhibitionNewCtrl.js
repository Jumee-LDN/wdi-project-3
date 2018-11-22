function exhibitionNewCtrl($scope, $http, $state){

  $scope.handleSubmit =  function(){
    $http({
      method: 'POST',
      url: `/api/galleries/${$state.params.galleryId}`,
      data: $scope.exhibition
    }).then(result => $state.go('exhibitionIndex', {
      id: result.data._id
    }));
  };
}
export default exhibitionNewCtrl;
