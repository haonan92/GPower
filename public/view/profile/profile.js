app.controller("ProfileCtrl", function ($scope, $http)
{
    $http.get("/rest/user")
    .success(function (users) {
        $scope.users = users;
    });

    //for delete user
    $scope.remove = function(id)
    {
        $http.delete("/api/user/"+id)
    .success(function (response) {
        $scope.users = response;
    });
    }

});