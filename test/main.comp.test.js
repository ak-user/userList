"use strict";

describe('mainComponent', function () {
    var componentController, rootScope;

    beforeEach(function () {
        module('userApp');
        inject(function (_$componentController_, _$rootScope_) {
            rootScope = _$rootScope_;
            componentController = _$componentController_;
        });
    });

    it('change state in main component', function () {
        spyOn(rootScope, '$broadcast').and.callThrough();

        var cntr = componentController('mainComponent', null, null);
        rootScope.$digest();

        rootScope.$broadcast('onEditedEvent');
        expect(rootScope.$broadcast).toHaveBeenCalledWith('onEditedEvent');
        expect(cntr.isEditing).toEqual(true);
        rootScope.$broadcast('saveUserEvent');
        expect(cntr.isEditing).toEqual(false);
        rootScope.$broadcast('editCanceledEvent');
        expect(cntr.isEditing).toEqual(false);
        rootScope.$broadcast('deleteUserEvent');
        expect(cntr.isEditing).toEqual(false);
    });

});