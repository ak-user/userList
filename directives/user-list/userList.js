angular.module('userApp').directive('userList', function ($rootScope, $timeout) {
    return {
        restrict: 'E',
        templateUrl: 'directives/user-list/user-list.html',
        link: function (scope) {

            scope.userList = [
                {
                    name: 'Vasya',
                    lastName: 'Nitrogen',
                    birthday: '12.12.2012'
                },
                {
                    name: 'Olya',
                    lastName: 'Oxygen',
                    birthday: '22.05.2002'
                }
            ];

            scope.selectUser = function (user) {
                scope.selectedUser = user;
                $rootScope.$broadcast('userSelectedEvent', user);
            };

            $timeout(function () {
                scope.selectUser(scope.userList[0]);
            });

            scope.$on('saveUserEvent', function (event, data) {
                scope.selectedUser = data;
            });

            scope.$on('deleteUserEvent', function (event, data) {
                var index = scope.userList.indexOf(data);
                scope.userList.splice(index, 1);

            });

            scope.onAdded = function () {
                scope.userList.unshift({
                    name: 'Name',
                    lastName: 'Last_name',
                    birthday: 'New Birthday'
                });
                scope.selectUser(scope.userList[0]);
                scope.$broadcast('onEditedEvent');
            }
        }
    }
});