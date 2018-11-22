function loginCtrl($scope, $state, $auth, Flash) {
  $scope.handleLogin = function() {
    $auth.login($scope.user)
      .then(() => {
        $state.go('home');
      })
      .catch(err => {
        Flash.create('danger', 'Login failed: ' + err.data.message);
        // $scope.errors = err.data;
        console.log('There was an error', err);
      });
  };
}

export default loginCtrl;
