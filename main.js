angular.module('userApp', []).controller('myCntr', function ($scope, $rootScope) {
    $scope.selectedUser = {};
    $scope.userData = {};

    $scope.stopEditing = function () {
        $scope.isEditing = false;
    };
});


