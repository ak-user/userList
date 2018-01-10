angular.module('userApp').component('userList', {
    templateUrl: 'components/userList/userList.comp.html',
    controller: function ($scope, $rootScope, $timeout, $http) {

        var addingUser = false;

        // $scope.userList = [
        //     {
        //         name: 'Vasya',
        //         lastName: 'Nitrogen',
        //         birthday: new Date(2012, 11, 12),
        //         sex: 'Male'
        //     },
        //     {
        //         name: 'Olya',
        //         lastName: 'Oxygen',
        //         birthday: new Date(2002, 4, 22),
        //         sex: 'Female'
        //     }
        // ];



        $http({
            method: "GET",
            url: 'http://localhost:3000/users'
        }).then(function (value) {
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

        });

        $scope.$on('deleteUserEvent', function (event, data) {
            var index = $scope.userList.indexOf(data);
            $scope.userList.splice(index, 1);
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
                birthday: ''
            };

            $scope.selectUser(newUser);
            $scope.userList.unshift(newUser);
            $rootScope.$broadcast('onEditedEvent');
        };
    }
});