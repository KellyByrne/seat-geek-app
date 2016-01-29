app.controller("SearchCtrl", ['$scope', '$http', function($scope, $http) {
  $scope.zeroResults = false;

  $scope.searchSeatGeek = function() {
    $http.get('https://api.seatgeek.com/2/events?q='+ $scope.queryData)
    .then(function(data){
       $scope.events = data.data.events;

       if($scope.events.length > 0){
        $scope.zeroResults = false;
       } else if($scope.events.length === 0){
        $scope.zeroResults = true;
       }

       $scope.queryData = "";
    })
  }
}])

app.controller("ShowCtrl", ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $scope.param1 = $routeParams.param1;
  $scope.performersExist = false;

  $http.get('https://api.seatgeek.com/2/events?id=' + $scope.param1).then(function(data){
    $scope.theEvent = data.data.events[0];
    $scope.performers = data.data.events[0].performers;

    if($scope.performers.length > 0){
      $scope.performersExist = true;
    } else if ($scope.performers.length === 0) {
      $scope.performersExist = false;
    }
  

    console.log($scope.theEvent)
    console.log($scope.performers);
  })

}])