/**
 * Created 3/15/2016.
 * Copyright 2016 Focus Technologies
 * featureA.model.spec
 */
describe('FeatureA model', function(){
 'use strict';
    var featureA;
    var FeatureA;
    var fixture;
    var baseProperties = [];

    beforeEach(module('agile.featureA'));
    beforeEach(module('agile.fixtures'));

    beforeEach(function(){
        inject(function(_FeatureA_, fixtureriskdefault){

            FeatureA = _FeatureA_;
            featureA = new FeatureA();

        });
    });

    it('should make an object', function(){
        expect(featureA).not.toBeNull();
    });

     it('should make an object of type FeatureA', function(){
        expect(featureA instanceof FeatureA).toBeTruthy();
    });

    it('should check properties', function(){
        _.each(baseProperties, function(prop){
            expect(featureA.hasOwnProperty(prop)).toBeTruthy();
        });
    });

});
