function exhibitionNewCtrl($scope, $http, $state){
  //
  // $http({
  //   method: 'GET',
  //   url: `/api/galleries/${$state.params._id}`
  // }).then(result => $scope.gallery = result.data);
  //
  $scope.handleSubmit =  function(){
    $http({
      method: 'POST',
      url: '/api/exhibitions',
      data: $scope.exhibition
    }).then(result => $state.go('exhibitionIndex', {
      id: result.data._id
    }));
  };
}
export default exhibitionNewCtrl;
