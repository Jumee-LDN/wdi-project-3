function userProfileCtrl ($state, $scope, $http){
  $http({
    method: 'GET',
    url: `/api/users/${$state.params.id}`
  }).then(result => {
    $scope.user = result.data;
    console.log('this is user', $scope.user)
  });
}

export default userProfileCtrl;
