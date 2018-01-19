angular.module('userApp').component('userDataView', {
    templateUrl: 'components/userDataView/userDataView.comp.html',
    controllerAs: 'userDataViewCntr',
    controller: function ($rootScope) {
        var vm = this;
        $rootScope.$on('userSelectedEvent', function (event, data) {
            vm.user = data;
        });

        var isEditing = true;

        vm.editUser = function () {
            $rootScope.$broadcast('onEditedEvent', isEditing);
        };
    }
});

