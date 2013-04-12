describe("Test for Ext.ux.touch.ImageGridList.view.Image", function() {

    var img;

    beforeEach(function() {

    });

    afterEach(function() {
        img.destroy();
    });

    describe("onLoad", function() {

        it("called show function", function() {
            var spy;

            img = Ext.create('Ext.ux.touch.ImageGridList.view.Image');
            spy = sinon.spy(img, 'show');

            img.onLoadImg();

            expect(spy).toHaveBeenCalled();

            spy.reset();
        });
    });

    describe("addSelectFunc", function() {

        it("add onTapImg function to tap event if isSelectable is true", function() {
            var spy;

            img = Ext.create('Ext.ux.touch.ImageGridList.view.Image', {
                isSelectable: true
            });
            spy = sinon.spy(img, 'on');

            img.addSelectFunc();

            expect(spy).toHaveBeenCalledWith('tap', 'onTapImg');

            spy.reset();
        });

        it("don't add onTapImg function to tap event if isSelectable is false", function() {
            var spy;

            img = Ext.create('Ext.ux.touch.ImageGridList.view.Image', {
                isSelectable: false
            });
            spy = sinon.spy(img, 'on');

            img.addSelectFunc();

            expect(spy).not.toHaveBeenCalled();

            spy.reset();
        });
    });

    describe("onTapImg", function() {

        it("call toggleChecked with model", function() {
            var spy,
                model = Ext.create(Ext.ux.touch.ImageGridList.model.Image);

            img = Ext.create('Ext.ux.touch.ImageGridList.view.Image', {
                record: model
            });
            spy = sinon.spy(img, 'toggleChecked');

            img.onTapImg();

            expect(spy).toHaveBeenCalledWith(model);

            spy.reset();
        });
    });

    describe("toggleChecked", function() {

        it("change model.selected from false to true", function() {

            var model = Ext.create(Ext.ux.touch.ImageGridList.model.Image);
            img = Ext.create('Ext.ux.touch.ImageGridList.view.Image');

            expect(model.get('selected')).toBeFalsy();

            img.toggleChecked(model);

            expect(model.get('selected')).toBeTruthy();
        });

        it("change model.selected from true to false", function() {

            var model = Ext.create(Ext.ux.touch.ImageGridList.model.Image);
            img = Ext.create('Ext.ux.touch.ImageGridList.view.Image');

            model.set('selected', true)
            expect(model.get('selected')).toBeTruthy();

            img.toggleChecked(model);

            expect(model.get('selected')).toBeFalsy();
        });
    });
});