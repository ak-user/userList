angular.module('userApp').component('userDataView', {
    templateUrl: 'components/userDataView/userDataView.comp.html',
    controller: function ($scope, $rootScope) {

        $scope.$on('userSelectedEvent', function (event, data) {
            $scope.user = data;
        });

        var isEditing = true;

        $scope.editUser = function () {
            $rootScope.$broadcast('onEditedEvent', isEditing);
        };
    }
});

