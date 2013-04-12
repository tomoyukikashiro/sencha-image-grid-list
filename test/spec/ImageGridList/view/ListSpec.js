describe("Test for Ext.ux.touch.ImageGridList.view.List", function() {

    var list;

    beforeEach(function() {

    });

    afterEach(function() {
        list.destroy();
    });

    describe("initCmp", function() {

        it("cache image list component", function() {

            list = Ext.create('Ext.ux.touch.ImageGridList.view.List');

            list.initCmp();

            expect(list.getItemCmp().getItemId()).toEqual('image-grid-listinner');
        });
    });

    describe("addImages", function() {

        xit("There are ImageOuter components which you sat", function() {
            // TODO
        });
    });

    describe("createImgList", function() {

        it("create image outer components", function() {

            var store = Ext.create('ImageGridList.store.Images'),
                model1 = Ext.create('ImageGridList.model.Image', {
                    url : 'resources/images/1.jpg'
                }),
                model2 = Ext.create('ImageGridList.model.Image', {
                    url : 'resources/images/2.jpg'
                }),
                conf = {},
                images;

            list = Ext.create('Ext.ux.touch.ImageGridList.view.List', {
                urlNameSpace: 'url'
            });
            store.add([model1, model2]);

            conf.store = store;
            conf.style = {
                borderWidth: 1,
                margin: 1,
                width : 73,
                height: 73
            };
            conf.anim = {};

            images = list.createImgList(conf);

            expect(images[0].$className).toEqual('Ext.ux.touch.ImageGridList.view.ImageOuter');
            expect(images[1].$className).toEqual('Ext.ux.touch.ImageGridList.view.ImageOuter');
        });
    });

    describe("createImg", function() {

        // separete two function
        //  * create Image component
        //  * create ImageOuter component
    });

    describe("getUrlFromModel", function() {

        it("get url string from model ( url namespace = url", function() {
            var model = Ext.create('ImageGridList.model.Image', {
                    url : 'resources/images/1.jpg'
                });
            list = Ext.create('Ext.ux.touch.ImageGridList.view.List', {
                urlNameSpace: 'url'
            }),
            url = list.getUrlFromModel(model);

            expect(url).toEqual('resources/images/1.jpg');

        });

        it("get url string from model ( url namespace = image.url", function() {
            var model = Ext.create('ImageGridList.model.Image', {
                    fields: [
                        {name: 'image', type: 'Object'}
                    ]
                });
            model.set('image', {url : 'resources/images/1.jpg'});
            list = Ext.create('Ext.ux.touch.ImageGridList.view.List', {
                urlNameSpace: 'image.url'
            }),
            url = list.getUrlFromModel(model);

            expect(url).toEqual('resources/images/1.jpg');

        });
    });
});