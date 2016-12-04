"use strict";
var testing_1 = require('@angular/core/testing');
var herolist_component_ts_1 = require('./herolist.component.ts');
describe('App', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({ declarations: [herolist_component_ts_1.AppComponent] });
    });
    it('should work', function () {
        var fixture = testing_1.TestBed.createComponent(herolist_component_ts_1.AppComponent);
        expect(fixture.componentInstance instanceof herolist_component_ts_1.AppComponent).toBe(true, 'should create AppComponent');
    });
});
//# sourceMappingURL=herolist.component.spec.js.map