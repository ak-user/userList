"use strict";

describe('userDataView', function () {
    var componentController, rootScope;

    beforeEach(function () {
        module('userApp');
        inject(function (_$componentController_, _$rootScope_) {
            rootScope = _$rootScope_;
            componentController = _$componentController_;
        });
    });

    var fakeUser = [
        {
            _id: 1,
            name: 'Vasya',
            lastName: 'Pupkin',
            birthday: '12.12.2012',
            sex: 'Male'
        }
    ];

    var isEditingFalse = true;


    it('userSelectedEvent in view', function () {
        spyOn(rootScope, '$broadcast').and.callThrough();

        var cntr = componentController('userDataView', null, null);

        rootScope.$broadcast('userSelectedEvent', fakeUser);
        rootScope.$digest();
        expect(cntr.user).toEqual(fakeUser);
        cntr.editUser();
        expect(rootScope.$broadcast).toHaveBeenCalledWith('onEditedEvent', isEditingFalse);
    });

});