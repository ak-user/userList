"use strict";

describe('userList', function () {
    var componentController, userService, q, rootScope, timeout;

    beforeEach(function () {
        module('userApp');
        inject(function (_$componentController_, _userService_, _$q_, _$rootScope_, _$timeout_) {
            rootScope = _$rootScope_;
            componentController = _$componentController_;
            userService = _userService_;
            q = _$q_;
            timeout = _$timeout_
        });
    });

    var fakeUsers = [
        {
            _id: 1,
            name: 'Vasya',
            lastName: 'Pupkin',
            birthday: '12.12.2012',
            sex: 'Male'
        },
        {
            _id: 2,
            name: 'John',
            lastName: 'Lolit',
            birthday: '12.12.2012',
            sex: 'Male'
        }
    ];

    it('Selected User', function () {
        spyOn(userService, 'getUsers').and.returnValue(q.when({data: fakeUsers}));
        spyOn(rootScope, '$broadcast');

        var cntr = componentController('userList', null, null);

        rootScope.$digest();
        expect(cntr.userList).toEqual(fakeUsers);
        timeout.flush();
        expect(cntr.selectedUser).toEqual(fakeUsers[0]);
        expect(rootScope.$broadcast).toHaveBeenCalledWith('userSelectedEvent', fakeUsers[0]);
    });


    it('handle saveUserEvent if addingUser is false', function () {
        spyOn(userService, 'getUsers').and.returnValue(q.when({data: fakeUsers}));
        spyOn(userService, 'putUser').and.returnValue(q.when({data: fakeUsers}));


        var cntr = componentController('userList', null, null);

        rootScope.$broadcast('saveUserEvent', fakeUsers[0]);
        rootScope.$digest();

        expect(cntr.selectedUser).toEqual(fakeUsers[0]);

        expect(userService.putUser).toHaveBeenCalledWith(fakeUsers[0]._id, fakeUsers[0]);
    });

    it('handle saveUserEvent if addingUser is true', function () {
        spyOn(userService, 'getUsers').and.returnValue(q.when({data: fakeUsers}));
        spyOn(userService, 'postUser').and.returnValue(q.when({data: fakeUsers}));
        spyOn(userService, 'putUser').and.returnValue(q.when({data: fakeUsers}));

        var cntr = componentController('userList', null, null);
        rootScope.$digest();

        cntr.onAdded();
        rootScope.$broadcast('saveUserEvent', fakeUsers[0]);
        rootScope.$digest();

        expect(userService.postUser).toHaveBeenCalledWith(fakeUsers[0]);
    });

    it('handle delete user if addingUser is false', function () {
        spyOn(userService, 'getUsers').and.returnValue(q.when({data: fakeUsers}));
        spyOn(userService, 'postUser').and.returnValue(q.when({data: fakeUsers}));
        spyOn(userService, 'putUser').and.returnValue(q.when({data: fakeUsers}));
        spyOn(userService, 'deleteUser').and.returnValue(q.when({data: fakeUsers}));

        componentController('userList', null, null);
        rootScope.$digest();

        var fakeUser = fakeUsers[0];
        rootScope.$broadcast('deleteUserEvent', fakeUser);
        rootScope.$digest();

        expect(userService.deleteUser).toHaveBeenCalledWith(fakeUser._id);
    });

    it('handle delete user if addingUser is true', function () {
        spyOn(userService, 'getUsers').and.returnValue(q.when({data: fakeUsers}));
        spyOn(userService, 'postUser').and.returnValue(q.when({data: fakeUsers}));
        spyOn(userService, 'putUser').and.returnValue(q.when({data: fakeUsers}));
        spyOn(userService, 'deleteUser').and.returnValue(q.when({data: fakeUsers}));

        var cntr = componentController('userList', null, null);
        rootScope.$digest();

        cntr.onAdded();
        var fakeUser = fakeUsers[0];
        rootScope.$broadcast('deleteUserEvent', fakeUser);
        rootScope.$digest();
    });

    it('handle cancel editing user addingUser is false', function () {

        spyOn(userService, 'getUsers').and.returnValue(q.when({data: fakeUsers}));
        spyOn(userService, 'postUser').and.returnValue(q.when({data: fakeUsers}));
        spyOn(userService, 'putUser').and.returnValue(q.when({data: fakeUsers}));
        spyOn(userService, 'deleteUser').and.returnValue(q.when({data: fakeUsers}));

        componentController('userList', null, null);
        rootScope.$digest();

        rootScope.$broadcast('editCanceledEvent');

    });

    it('handle cancel editing user addingUser is true', function () {

        spyOn(userService, 'getUsers').and.returnValue(q.when({data: fakeUsers}));
        spyOn(userService, 'postUser').and.returnValue(q.when({data: fakeUsers}));
        spyOn(userService, 'putUser').and.returnValue(q.when({data: fakeUsers}));
        spyOn(userService, 'deleteUser').and.returnValue(q.when({data: fakeUsers}));

        var cntr = componentController('userList', null, null);
        rootScope.$digest();

        spyOn(cntr, 'selectUser');

        cntr.onAdded();
        rootScope.$broadcast('editCanceledEvent');

        expect(cntr.selectUser).toHaveBeenCalledWith(cntr.userList[0]);
    });

    it('add new User if addingUser is false', function () {

        spyOn(userService, 'getUsers').and.returnValue(q.when({data: fakeUsers}));
        spyOn(userService, 'postUser').and.returnValue(q.when({data: fakeUsers}));
        spyOn(userService, 'putUser').and.returnValue(q.when({data: fakeUsers}));
        spyOn(userService, 'deleteUser').and.returnValue(q.when({data: fakeUsers}));

        var cntr = componentController('userList', null, null);
        rootScope.$digest();

        spyOn(cntr, 'selectUser');


        var newUser = {
            name: 'New name',
            lastName: 'New last name',
            birthday: Date.now(),
            sex: 'Male'
        };

        cntr.selectUser(newUser);
        expect(cntr.selectUser).toHaveBeenCalledWith(newUser);
    });

    it('add new User if addingUser is true', function () {
        spyOn(userService, 'getUsers').and.returnValue(q.when({data: fakeUsers}));
        spyOn(userService, 'postUser').and.returnValue(q.when({data: fakeUsers}));
        spyOn(userService, 'putUser').and.returnValue(q.when({data: fakeUsers}));
        spyOn(userService, 'deleteUser').and.returnValue(q.when({data: fakeUsers}));

        var cntr = componentController('userList', null, null);
        rootScope.$digest();
        cntr.onAdded();
        cntr.onAdded();
    });



});