angular.module('userApp').directive('userDataEdit', function ($rootScope) {
    return {
        restrict: 'E',
        templateUrl: 'directives/user-data-edit/user-data-edit.html',
        link: function (scope) {

            scope.$on('userSelectedEvent', function (event, data) {
                scope.tempUser = angular.copy(data);

                scope.saveEditing = function () {
                    var user = angular.merge(data, scope.tempUser);
                    $rootScope.$broadcast('saveUserEvent', user);
                };

                scope.cancelEditing = function () {
                    $rootScope.$broadcast('editCanceledEvent')
                };

                scope.deleteUserHandlerButton = function () {
                    $rootScope.$broadcast('deleteUserEvent', data);
                };
            });
        }
    }
});

