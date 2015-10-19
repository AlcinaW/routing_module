var app = angular.module('myApp', ['ngRoute']);

// Router:
app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'templates/main.html',
      controller: 'MainCtrl as ctrl'
    })
    .when('/user/:userId', {
      templateUrl: 'templates/users.html',
      controller: 'UserDetailsCtrl as ctrl'
    })
    .otherwise({
      redirectTo: '/home'
    });
});

// Change URL location notification:
app.run(function ($rootScope) {
    $rootScope.$on('$locationChangeSuccess', function () {
        console.log('$locationChangeSuccess changed!');
    });
});