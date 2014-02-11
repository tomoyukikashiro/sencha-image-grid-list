/**
 * Image component of Ext.ux.touch.ImageGridList
 *
 * @class Ext.ux.touch.ImageGridList.view.Image
 * @extends Ext.Img
 * @version 0.1.0
 * @author Tomoyuki Kashiro <kashiro@github>
 * @license MIT
 */
'use strict';
Ext.define('Ext.ux.touch.ImageGridList.view.Image', {

    requires: [
    ],

    extend: 'Ext.Img',

    alias: 'widget.image-grid-list-image',

    config: {

        /**
         * image model
         * @type {Ext.ux.touch.ImageGridList.model.Image}
         */
        record: undefined,

        // image can be selected
        isSelectable: false,

        tpl: new Ext.XTemplate(
            '<tpl if="selected === true">',
                '<div class="checked"></div>',
            '</tpl>'
        ),

        cls: 'image-grid-list-image',

        hiddenCls: 'ig-hide',

        listeners: {
            initialize: 'addSelectFunc',
            load: 'onLoadImg'
        }

    },

    /**
     * call when image is loaded
     */
    onLoadImg: function(){
        var me = this;
        me.show();
    },

    /**
     * add event when image is taped
     */
    addSelectFunc: function(){
        var me = this,
            selectable = me.getIsSelectable();

        if(selectable){
            me.on('tap', 'onTapImg');
        }
    },

    /**
     * call when image is tapped
     */
    onTapImg: function(){
        var me = this,
            model = me.getRecord();

        me.toggleChecked(model);
    },

    /**
     * change selected flag in model
     * @param {Ext.ux.touch.ImageGridList.model.Image} model
     */
    toggleChecked: function(model){

        var selected = model.get('selected');
        model.set('selected',!selected);
    }
});
