angular.module('userApp').component('userDataEdit', {
    templateUrl: 'components/userDataEdit/userDataEdit.comp.html',
    controllerAs: 'userDataEditCntr',
    controller: function ($rootScope) {
        var vm = this;
        $rootScope.$on('userSelectedEvent', function (event, data) {
            vm.tempUser = angular.copy(data);

            vm.saveEditing = function () {
                var user = angular.merge(data, vm.tempUser);
                $rootScope.$broadcast('saveUserEvent', user);
            };

            vm.cancelEditing = function () {
                $rootScope.$broadcast('editCanceledEvent');
            };

            vm.deleteUserHandlerButton = function () {
                $rootScope.$broadcast('deleteUserEvent', data);
            };

            vm.popup = {
                opened: false
            };

            vm.openPopup = function () {
                vm.popup.opened = true;
            };
        });
    }
});