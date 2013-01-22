/**
 * @class ImageGridList.model.Image
 * @extends Ext.ux.ImageGridList.model.Image
 * Description image model to display Ext.ux.ImageGridList
 */
Ext.define('ImageGridList.model.Image', {

	requires: [
		'Ext.ux.ImageGridList.model.Image'
	],

    extend: 'Ext.ux.ImageGridList.model.Image',
    
    config: {
       fields: [

       		// image url
            {name: 'url', type: 'string'},
        ] 
    }
});