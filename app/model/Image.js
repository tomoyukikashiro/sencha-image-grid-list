/**
 * @class ImageGridList.model.Image
 * @extends Ext.ux.touch.ImageGridList.model.Image
 * Description image model to display Ext.ux.touch.ImageGridList
 */
Ext.define('ImageGridList.model.Image', {

	requires: [
		'Ext.ux.touch.ImageGridList.model.Image'
	],

    extend: 'Ext.ux.touch.ImageGridList.model.Image',
    
    config: {
       fields: [

       		// image url
            {name: 'url', type: 'string'},
        ] 
    }
});