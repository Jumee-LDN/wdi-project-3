function loginCtrl($scope, $state, $auth) {
  $scope.handleLogin = function() {
    $auth.login($scope.user)
      .then(() => $state.go('home'))
      .catch(err => {
        // $state.go('login'); ???
        console.log('There was an error', err);
      });
  };
}

export default loginCtrl;
