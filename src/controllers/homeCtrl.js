function homeCtrl($scope, $http) {
  $http({
    method: 'GET',
    url: '/api/exhibitions'
  }).then(result => {
    $scope.allExhibitions = result.data;
    $scope.topExhibitions = $scope.allExhibitions;
  });
}

export default homeCtrl;
