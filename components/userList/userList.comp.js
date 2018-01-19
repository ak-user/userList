angular.module('userApp').component('userList', {
    templateUrl: 'components/userList/userList.comp.html',
    controllerAs: 'userListCntrl',
    controller: function ($rootScope, $timeout, userService) {
        var vm = this;
        var addingUser = false;

        userService.getUsers().then(function (value) {
            vm.userList = value.data;
        });

        vm.selectUser = function (user) {
            vm.selectedUser = user;
            $rootScope.$broadcast('userSelectedEvent', user);
        };

        $timeout(function () {
            vm.selectUser(vm.userList[0]);
        });

        $rootScope.$on('saveUserEvent', function (event, editedUser) {
            vm.selectedUser = editedUser;
            if (addingUser) {
                userService.postUser(vm.selectedUser).then(function () {
                    vm.selectUser(vm.userList[vm.userList.length - 1]);
                    addingUser = false;
                });
            } else {
                userService.putUser(vm.selectedUser._id, vm.selectedUser);
            }
        });

        $rootScope.$on('deleteUserEvent', function (event, editedUser) {
            if (addingUser) {
                var lastUserIndex = vm.userList.length - 1;
                vm.userList.splice(lastUserIndex, 1);
                addingUser = false;
            } else {
                userService.deleteUser(editedUser._id).then(function () {
                    var index = vm.userList.indexOf(editedUser);
                    vm.userList.splice(index, 1);
                    vm.selectUser(vm.userList[0]);
                });
            }
        });

        $rootScope.$on('editCanceledEvent', function () {
            if (addingUser) {
                var lastUserIndex = vm.userList.length - 1;
                vm.userList.splice(lastUserIndex, 1);
                vm.selectUser(vm.userList[0]);
                addingUser = false;
            }
        });

        vm.onAdded = function () {
            if (addingUser) {
                var lastUserIndex = vm.userList.length - 1;
                vm.userList.splice(lastUserIndex, 1);
            }

            addingUser = true;

            var newUser = {
                name: 'New name',
                lastName: 'New last name',
                birthday: Date.now(),
                sex: 'Male'
            };

            vm.selectUser(newUser);

            vm.userList.push(newUser);
            $rootScope.$broadcast('onEditedEvent');
        };
    }
});