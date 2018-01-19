"use strict";

describe('userService', function () {
    var userService, httpBackend;

    beforeEach(function () {
        module('userApp');
        inject(function ($httpBackend, _userService_) {
            userService = _userService_;
            httpBackend = $httpBackend;
        });
    });

    it('getTest', function () {

        var returnData = [
            {
                name: 'Vasya',
                lastName: 'Pupkin',
                birthday: '12.12.2012',
                sex: 'Male'
            },
            {
                name: 'Vasya',
                lastName: 'Pupkin',
                birthday: '12.12.2012',
                sex: 'Male'
            }
        ];

        httpBackend.expectGET('http://localhost:3000/users').respond(200, returnData);

        var returnedPromise = userService.getUsers();

        returnedPromise.then(function (response) {
            var result = response.data;
            expect(result).toEqual(returnData);
        });

        httpBackend.flush();

    });

    it('postTest', function () {
        var postData = {
            name: 'Vasya',
            lastName: 'Pupkin',
            birthday: '12.12.2012',
            sex: 'Male'
        };

        var returnData = {
            status: 'success'
        };

        httpBackend.expectPOST('http://localhost:3000/users').respond(200, returnData);


        userService.postUser(postData).then(function (response) {
            expect(response.data).toEqual({
                status: 'success'
            });
        });

        httpBackend.flush();


    });

    it('putTest', function () {
        var postData = {
            name: 'Vasya',
            lastName: 'Pupkin',
            birthday: '12.12.2012',
            sex: 'Male'
        };
        var userId = 1;
        httpBackend.expectPUT('http://localhost:3000/users/'+ userId, postData).respond(200, postData);

        userService.putUser(userId, postData).then(function (value) {
            expect(value.data).toEqual(postData);
        });

        httpBackend.flush();
    });

    it('deleteTest', function () {

        var userId = 1;

        httpBackend.expectDELETE('http://localhost:3000/users/' + userId).respond(200);
        userService.deleteUser(userId);

        httpBackend.flush();
    });
});