/**
 * @class ImageGridList.store.Images
 * @extends Ext.data.Store
 * Description image store to display Ext.ux.touch.ImageGridList
 */
Ext.define('ImageGridList.store.Images', {

    extend: 'Ext.data.Store',

    requires: [
    	'ImageGridList.model.Image'
    ],

    config: {
    	model: 'ImageGridList.model.Image'
    }
});