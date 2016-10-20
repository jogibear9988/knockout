describe('Binding: Property', function() {
    beforeEach(jasmine.prepareTestNode);

    it('Should be able to set arbitrary property values', function() {
        var model = { myValue: "first value" };
        testNode.innerHTML = "<div data-bind='property: {firstProperty: myValue}'></div>";
        ko.applyBindings(model, testNode);
        expect(testNode.childNodes[0]["firstAttribute"]).toEqual("first value");
    });

    it('Should respond to changes in an observable value', function() {
        var model = { myprop : ko.observable("initial value") };
        testNode.innerHTML = "<div data-bind='property: { somePrp: myprop }'></div>";
        ko.applyBindings(model, testNode);
        expect(testNode.childNodes[0]["somePrp"]).toEqual("initial value");

        // Change the observable; observe it reflected in the DOM
        model.myprop("new value");
        expect(testNode.childNodes[0]["somePrp"]).toEqual("new value");
    });
});