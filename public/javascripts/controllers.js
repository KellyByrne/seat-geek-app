app.controller("SearchCtrl", ['$scope', '$http', function($scope, $http) {
  $scope.searchSeatGeek = function() {
    $http.get('https://api.seatgeek.com/2/events?q='+ $scope.queryData)
    .then(function(data){
       $scope.events = data.data.events;
    })
  }
}])

app.controller("ShowCtrl", ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  $scope.param1 = $routeParams.param1;
  console.log($scope.param1)
  $http.get('https://api.seatgeek.com/2/events?id=' + $scope.param1).then(function(data){
    $scope.theEvent = data.data.events[0];
    console.log($scope.theEvent)
  })

}])