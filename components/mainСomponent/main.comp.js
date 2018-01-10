angular.module('userApp').component('mainComponent', {
    templateUrl: 'components/mainСomponent/main.comp.html',
    controller: function ($scope) {
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

        $scope.$on('onEditedEvent', function (event) {
            $scope.isEditing = true;
        });

    }
});
