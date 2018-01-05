angular.module('userApp').directive('userList', function () {
    return {
        restrict: 'E',
        scope: {selectedUser: '='},
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

            scope.selectedUser = scope.userList[0];

            scope.selectUser = function (user) {
                scope.selectedUser = user;
            };

            scope.$on('deleteUserEvent', function (event, data) {
                var index = scope.userList.indexOf(data);
                scope.userList.splice(index, 1);

            });
        }
    }
});