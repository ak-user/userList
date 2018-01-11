angular.module('userApp').component('userList', {
    templateUrl: 'components/userList/userList.comp.html',
    controller: function ($scope, $rootScope, $timeout, userService) {

        var addingUser = false;



        userService.getUsers().then(function (value) {
            $scope.userList = value.data;
        });

        $scope.selectUser = function (user) {
            $scope.selectedUser = user;
            $rootScope.$broadcast('userSelectedEvent', user);
        };

        $timeout(function () {
            $scope.selectUser($scope.userList[0]);
        });

        $scope.$on('saveUserEvent', function (event, editedUser) {
            $scope.selectedUser = editedUser;
            if (addingUser) {
                userService.postUser($scope.selectedUser).then(function (value) {
                    $scope.selectUser($scope.userList[$scope.userList.length -1]);
                });
            } else {
                userService.putUser($scope.selectedUser.id, $scope.selectedUser);
            }

        });

        $scope.$on('deleteUserEvent', function (event, editedUser) {
            userService.deleteUser(editedUser.id).then(function () {
                var index = $scope.userList.indexOf(editedUser);
                $scope.userList.splice(index, 1);
                $scope.selectUser($scope.userList[0]);
            });
        });

        $scope.$on('editCanceledEvent', function (event) {

            if (addingUser) {
                $scope.userList.splice(0, 1);
                $scope.selectUser($scope.userList[0]);
            }
        });

        $scope.onAdded = function () {

            addingUser = true;

            var newUser = {
                name: '$%6yry',
                lastName: '',
                birthday: '',
                sex: 'Male'
            };

            $scope.selectUser(newUser);

            $scope.userList.push(newUser);
            $rootScope.$broadcast('onEditedEvent');
        };
    }
});