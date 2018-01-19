"use strict";

describe('userDataEdit', function () {
    var componentController, rootScope;

    beforeEach(function () {
        module('userApp');
        inject(function (_$componentController_, _$rootScope_) {
            rootScope = _$rootScope_;
            componentController = _$componentController_;
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


    it('userSelectedEvent in edit', function () {
        spyOn(rootScope, '$broadcast').and.callThrough();

        var cntr = componentController('userDataEdit', null, null);

        rootScope.$broadcast('userSelectedEvent', fakeUsers[0]);
        rootScope.$digest();
        expect(fakeUsers[0]).toEqual(cntr.tempUser);
        cntr.saveEditing();
        expect(rootScope.$broadcast).toHaveBeenCalledWith('saveUserEvent', fakeUsers[0]);
        cntr.cancelEditing();
        expect(rootScope.$broadcast).toHaveBeenCalledWith('editCanceledEvent');
        cntr.deleteUserHandlerButton();
        expect(rootScope.$broadcast).toHaveBeenCalledWith('deleteUserEvent', fakeUsers[0]);
        cntr.openPopup();
    });

});