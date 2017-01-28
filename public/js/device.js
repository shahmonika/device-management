angular.module('myApp', ['dataGrid', 'pagination', 'ngMaterial'])
    .controller('myAppController', ['$scope', 'myAppFactory', function ($scope, myAppFactory) {

        {
        $scope.today = new Date();
    }
        $scope.gridOptions = {
            data: [],
            urlSync: false
        };
        myAppFactory.getData().then(function (responseData) {
            $scope.gridOptions.data = responseData.data;
        })

    }])
    .factory('myAppFactory', function ($http) {
        return {
            getData: function () {
                return $http({
                     method: 'GET',
                     url: 'http://localhost:3000/api'
                });
            }
        }
    });


