// import mapLib from '../lib/map';
function mapCtrl($scope, $state, $http){
  $http({
    method: 'GET',
    url: '/api/galleries'
  }).then(result => {
    console.log('This is result.data', result.data);
    $scope.galleries = result.data;
  });
}

export default mapCtrl;
