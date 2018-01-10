angular.module('userApp').component('userDataEdit', {
    templateUrl: 'components/userDataEdit/userDataEdit.comp.html',
    controller: function ($scope, $rootScope) {
        $scope.$on('userSelectedEvent', function (event, data) {
            $scope.tempUser = angular.copy(data);

            $scope.saveEditing = function () {
                var user = angular.merge(data, $scope.tempUser);
                $rootScope.$broadcast('saveUserEvent', user);
            };

            $scope.cancelEditing = function () {
                $rootScope.$broadcast('editCanceledEvent');
            };

            $scope.deleteUserHandlerButton = function () {
                $rootScope.$broadcast('deleteUserEvent', data);
            };

            $scope.popup = {
                opened: false
            };

            $scope.openPopup = function () {
                $scope.popup.opened = true;
            };
        });
    }
});