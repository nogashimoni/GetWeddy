/**
 * Created by ophir on 07/05/2016.
 */

var app = angular.module('app', []);

app.controller('httpCtrl', function($scope, $http) {

    $http.get('https://getweddy.rapidapi.io/getallsuppliers').success(function (data, status) {
        $scope.allSuppliers = data;
        console.log(data);
    })

});