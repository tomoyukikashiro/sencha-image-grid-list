/**
 * List of Ext.ux.touch.ImageGridList
 *
 * @class Ext.ux.touch.ImageGridList.view.List
 * @extend Ext.Container
 * @version 0.1.0
 * @author Tomoyuki Kashiro <kashiro@github>
 * @license MIT
 */
Ext.define('Ext.ux.touch.ImageGridList.view.List', {

    requires: [
        'Ext.ux.touch.ImageGridList.view.ImageOuter'
    ],

    extend: 'Ext.Container',

    alias: 'widget.image-grid-list',

    config: {

        scrollable: true,

        itemId: 'image-grid-list',

        cls: 'image-grid-list',

        // store of Ext.ux.touch.model.Image
        store: undefined,

        // cache
        itemCmp: undefined,

        // url name space of model
        urlNameSpace: null,

        // image can be selected
        isSelectable: false,

        items: [
            {
                // insert image to this component
                xtype: 'container',
                itemId: 'image-grid-listinner'
            }
        ],

        listeners: {
            initialize: 'initCmp'
        }
    },

    /**
     * call when component is initialized
     */
    initCmp: function(){
        var me = this,
            itemCmp = me.down('#image-grid-listinner');

        me.setItemCmp(itemCmp);

    },

    /**
     * insert image components
     * @param {Object} conf configuration of image
     */
    addImages: function(conf){
        var me = this,
            records = conf.store.getRange(),
            style = conf.style,
            anim = conf.anim,
            images = [],
            img,
            itemCmp = me.getItemCmp(),
            length = records.length,
            i;

        for(i = 0;i < length; i++){
            img = me.createImg({
                model : records[i],
                style  : style,
                anim: anim
            });
            images.push(img);
        }

        itemCmp.add(images);
    },

    /**
     * create image component
     * @param {Object} conf configation of image component
     * @param {Ext.ux.touch.ImageGridList.model.Image} conf.model image model
     * @param {String/Mixed} anim show animation property
     * @param {Number} conf.style.width image width
     * @param {Number} conf.style.height image height
     * @param {Number} conf.style.margin image margin 
     * @param {Number} conf.style.borderWidth border width
     * @returns {Ext.ux.touch.ImageGridList.view.ImageOuter}
     */
    createImg: function(conf){
        var me = this,
            selectable = me.getIsSelectable(),
            showAnim = conf.anim,
            hidden = showAnim ? true : false,
            imgCmp = Ext.widget('image-grid-list-imageouter'),
            img = Ext.create('Ext.ux.touch.ImageGridList.view.Image', {
                isSelectable: selectable,
                hidden: hidden,
                showAnimation: showAnim
            }),
            model = conf.model,
            url = me.getUrlFromModel(model),
            style = conf.style,
            width = style.width,
            height = style.height,
            bWidth = style.borderWidth,
            marginLeft = style.margin;

        img.setSrc(url);
        img.setIsSelectable(selectable);
        img.setRecord(model);
        img.setWidth(width);
        img.setHeight(height);

        imgCmp.setStyle({
            'margin-left': marginLeft + 'px',
            'border-width': bWidth + 'px'
        });
        imgCmp.setWidth(width);
        imgCmp.setHeight(height);
        imgCmp.add(img);

        return imgCmp;
    },

    /**
     * get image url string from model
     * @param  {Ext.Model} model model contain image url
     * @return {String} image url
     */
    getUrlFromModel: function(model){
        var me = this,
            nameSpace = me.getUrlNameSpace().split('.'),
            data = model.data,
            key = nameSpace[0],
            url = data[key];

        for(var i = 0, length = nameSpace.length; i < length; i++){
            key = nameSpace[i];
            url = url[key];
        }

        return url;
    },

    /**
     * clear images
     */
    clearList: function(){
        var me = this,
            itemCmp = me.getItemCmp();

        if(itemCmp){
            itemCmp.removeAll(true);
        }
    }
});
