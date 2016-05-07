/**
 * Created by ophir on 07/05/2016.
 */

var app = angular.module('app', []);

app.controller('httpCtrl', function($scope, $http) {

    $scope.getServerData = function() {
        $http.get('https://getweddy.rapidapi.io/getallsuppliers').success(function (data, status) {
            $scope.allSuppliers = data;
        })

        $http.get('https://getweddy.rapidapi.io/getfreesuppliers?date='+localStorage.getItem("savedDate")).success(function (data, status) {
            $scope.freeSuppliers = [];
            data.forEach(function (value) {
                value.availavleSuppliers.forEach(function (email) {
                    $http.get('https://getweddy.rapidapi.io/supplierbymailandrol?email=' + email + "&role=stills").success(function (data, status) {
                        $scope.freeSuppliers.push(data);
                        console.log($scope.freeSuppliers);
                    });
                });
            });
        });
    }

});
