/**
 * main component of Ext.ux.touch.ImageGridList
 *
 * @class Ext.ux.touch.ImageGridList.view.Panel
 * @extend Ext.Panel
 * @version 0.1.0
 * @author Tomoyuki Kashiro <kashiro@github>
 * @license MIT
 */
Ext.define('Ext.ux.touch.ImageGridList.view.Panel', {

    requires: [
        'Ext.ux.touch.ImageGridList.view.List'
    ],

    extend: 'Ext.Panel',

    alias: 'widget.image-grid-list-panel',

    config: {

        itemId: 'image-grid-list-panel',

        cls: 'image-grid-list-panel',

        layout: 'fit',

        /**
         * innler margin (right and left)
         * @type {Number}
         */
        innerMargin: 1,

        /**
         * image width
         * @type {Number}
         */
        imageWidth: 73,

        /**
         * image height
         * @type {Number}
         */
        imageHeight: 73,

        /**
         * border width
         * @type {Number}
         */
        borderWidth: 1,

        /**
         * image url name space of Ext.data.Model
         * ex. "image.url"
         * @type {String}
         */
        urlNameSpace: 'url',

        /**
         * image can be selected
         * @type {Boolean} 
         */
        isSelectable: true,

        /**
         * show animation of Ext.Img component
         * you set null, Ext.Img don't animate when showing
         * @type {String/Mixed}
         */
        ImgShowAnim: {type: 'fadeIn', duration: 3000},

        items: [
            {
                xtype: 'image-grid-list'
            }
        ],

        listeners: {
            initialize: 'onInitThisPanel'
        }
    },

    /**
     * call when initialized
     */
    onInitThisPanel: function(){
        var me = this,
            list = me.down('image-grid-list'),
            uns = me.getUrlNameSpace(),
            selectable = me.getIsSelectable();

        me.setRLMargin();
        list.setUrlNameSpace(uns);
        list.setIsSelectable(selectable);
    },

    /**
     * set inner margin
     */
    setRLMargin: function(){
        var me = this,
            margin = me.getInnerMargin();

        me.setStyle({
            'margin-left': margin + 'px',
            'margin-right': margin + 'px'
        });
    },

    /**
     * render images in grid list
     * @param {Ext.data.store} store store of Ext.ux.touch.ImageGridList.model.Image
     */
    renderImages: function(store){
        var me = this,
            list = me.down('#image-grid-list'),
            imgOuter = list.down('#image-grid-list-imageouter'),
            style = {
                borderWidth: me.getBorderWidth(),
                margin: me.getImageMargin(),
                width : me.getImageWidth(),
                height: me.getImageHeight()
            };

        list.addImages({
            store: store,
            style: style,
            anim: me.getImgShowAnim()
        });
    },

    /**
     * calculate each image margin (left and right)
     * @return {Number} margin(Left) is set each image
     */
    getImageMargin: function(){
        var me = this,
            bWidth = me.getBorderWidth(),
            innerMargin = me.getInnerMargin(),
            pWidth = Ext.Viewport.getWindowWidth() - (innerMargin * 2),
            imgWidth = me.getImageWidth() + (bWidth * 2),
            ImgNum = Math.floor(pWidth / imgWidth),
            margins = pWidth - (ImgNum * imgWidth),
            margin = Math.floor(margins / ImgNum);

        return margin;
    }
});
