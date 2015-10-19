// User Details Controller.
function UserDetailsCtrl($routeParams, $location) {
    this.userId = $routeParams.userId;

    console.log($location.absUrl());
}

app.controller('UserDetailsCtrl', UserDetailsCtrl);

