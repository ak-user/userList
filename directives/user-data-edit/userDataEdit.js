angular.module('userApp').directive('userDataEdit', function ($rootScope) {
    return {
        restrict: 'E',
        scope: {
            user: '=',
            onFinish: '&'
        },
        templateUrl: 'directives/user-data-edit/user-data-edit.html',
        link: function (scope) {

            // scope.userName = '';
            // scope.userLastName = '';
            // scope.userBirthday = '';
            //
            // scope.handlerSave = function () {
            //
            //     scope.userList.push({
            //         name: scope.userName,
            //         lastName: scope.userLastName,
            //         birthday: scope.userBirthday,
            //         date: new Date(),
            //         isEditing: false
            //     });
            //
            //     scope.userName = '';
            //     scope.userLastName = '';
            //     scope.userBirthday = '';
            //
            // };

            scope.$watch('user', function (user) {
                scope.tempUser = angular.copy(user);
            });

            scope.saveEditing = function () {
                scope.onFinish();
                scope.user = angular.merge(scope.user, scope.tempUser);
            };

            scope.cancelEditing = function () {
                scope.onFinish();
                scope.user = angular.merge(scope.tempUser, scope.user);
            };

            scope.deleteUserHandlerButton = function () {
                $rootScope.$broadcast('deleteUserEvent', scope.tempUser)
            };
        }
    }
});

