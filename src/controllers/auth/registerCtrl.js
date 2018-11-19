function registerCtrl($scope, $state, $auth) {
  $scope.handleRegister = function() {
    $auth.signup($scope.user)
      .then(() => $state.go('login'))
      .catch(err => {
        console.log('Something is wrong with registration', err);
      });
  };
}

export default registerCtrl;
