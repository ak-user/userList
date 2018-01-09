angular.module('userApp', []).controller('myCntr', function ($scope) {

    $scope.isEditing = false;

    angular.forEach([
            'saveUserEvent',
            'editCanceledEvent',
            'deleteUserEvent'
        ], function (value) {
            $scope.$on(value, function (event) {
                $scope.isEditing = false;
        });
    });

    angular.forEach([
        'onEditedEvent',
    ], function (value) {
        $scope.$on(value, function (event) {
            $scope.isEditing = true;
        });
    });


});


