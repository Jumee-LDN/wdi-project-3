function exhibitionEditCtrl($scope, $http, $state){
  $http({
    method: 'GET',
    url: `/api/exhibitions/${$state.params.id}`
  }).then(result => $scope.exhibition = result.data);
  console.log('this is state.params.id', $state.params.id)
  $scope.handleSubmit = function() {
    $http({
      method: 'PUT',
      url: `/api/exhibitions/${$state.params.id}`,
      data: $scope.exhibition
    }).then(result => $state.go('exhibitionShow', {id: result.data._id}));
  };
}


export default exhibitionEditCtrl;
