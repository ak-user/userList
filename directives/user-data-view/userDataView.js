angular.module('userApp').directive('userDataView', function ($rootScope) {
    return {
        restrict: 'E',
        templateUrl: 'directives/user-data-view/user-data-view.html',
        link: function (scope) {

            scope.$on('userSelectedEvent', function (event, data) {
                scope.user = data;
            });

            scope.$on('onAddedEvent', function (event, data) {
                console.log(data);
            });

            var isEditing = true;

            scope.editUser = function () {
                $rootScope.$broadcast('onEditedEvent', isEditing)
            };
        }
    }
});

