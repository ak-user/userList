angular.module('userApp').directive('userDataView', function () {
    return {
        restrict: 'E',
        scope: {
            user: '=',
            isEditing: '=',
            userData: '='
        },
        templateUrl: 'directives/user-data-view/user-data-view.html',
        link: function (scope) {

            scope.editUser = function () {
                scope.isEditing = true;
                scope.userData = scope.user;
            }
        }
    }
});

