angular.module('userApp').component('mainComponent', {
    templateUrl: 'components/mainСomponent/main.comp.html',
    controllerAs: 'mainComponentCntr',
    controller: function ($rootScope) {
        var vm = this;

        vm.isEditing = false;

        angular.forEach([
            'saveUserEvent',
            'editCanceledEvent',
            'deleteUserEvent'
        ], function (value) {
            $rootScope.$on(value, function () {
                vm.isEditing = false;
            });
        });

        $rootScope.$on('onEditedEvent', function () {
            vm.isEditing = true;
        });

    }
});
