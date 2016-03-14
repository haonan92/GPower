var app = angular.module("Passport", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
     .when('/home', {
         templateUrl: 'view/home.html'
     })
    .when('/login', {
        templateUrl: 'view/login/login.html',
        controller: 'LoginCtrl'
    })
    .when('/logout', {
        templateUrl: 'view/logout/logout.html'
    })
    .when('/register', {
        templateUrl: 'view/register/register.html',
        controller: 'RegisterCtrl'
    })
    .when('/profile/:username', {
        templateUrl: 'view/profile/profile.html',
        controller: 'ProfileCtrl',
        resolve: {
            logincheck: checkLoggedin
        }
    })
    .when('/timeline', {
        templateUrl: 'view/timeline/timeline.html',
        resolve: {
        logincheck: checkLoggedin
        }
    })
    .when('/members', {
        templateUrl: 'view/members/members.html'
    })
    .when('/photos', {
        templateUrl: 'view/photos/photos.html'
    })
    .when('/aboutus', {
        templateUrl: 'view/aboutus/aboutus.html'
    })
    
    .otherwise({
        redirectTo: '/home'
    })
});

var checkLoggedin = function ($q, $timeout, $http, $location, $rootScope) {
    var deferred = $q.defer();

    $http.get('/loggedin').success(function (user) {
        $rootScope.errorMessage = null;
        // User is Authenticated
        if (user !== '0') {
            $rootScope.currentUser = user;
            deferred.resolve();
        }
            // User is Not Authenticated
        else {
            $rootScope.errorMessage = 'You need to log in.';
            deferred.reject();
            $location.url('/login');
        }
    });

    return deferred.promise;
};


//----------------for logout--------------
app.controller("NavCtrl", function ($rootScope, $scope, $http, $location) {
    $scope.logout = function () {
        $http.post("/logout")
        .success(function () {
            $rootScope.currentUser = null;
            $location.url("/home");
        });
    }
});