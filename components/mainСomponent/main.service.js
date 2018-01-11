angular.module('userApp').factory('userService', function ($http) {

    var basedUrl = 'http://localhost:3000';

    function getUsers() {
        return $http.get(basedUrl + '/users');
    }

    function postUser(data) {
        return $http.post(basedUrl + '/users', data);
    }

    function putUser(id, data) {
        return $http.put(basedUrl + '/users/' + id, data);
    }

    function deleteUser(id) {
        return $http.delete(basedUrl + '/users/' + id);
    }

    return {
        getUsers: getUsers,
        postUser: postUser,
        putUser: putUser,
        deleteUser: deleteUser
    };

});


