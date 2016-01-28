app.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: '/partials/search.html',
      controller: 'SearchCtrl'
    })
    .when('/:param1', {
      templateUrl: '/partials/show.html',
      controller: 'ShowCtrl'
    })
  $locationProvider.html5Mode(true)
})