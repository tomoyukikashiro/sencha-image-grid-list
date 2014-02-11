/**
 * Image outer component of Ext.ux.touch.ImageGridList
 *
 * @class Ext.ux.touch.ImageGridList.view.ImageOuter
 * @extends Ext.Container
 * @version 0.1.0
 * @author Tomoyuki Kashiro <kashiro@github>
 * @license MIT
 */
'use strict';
Ext.define('Ext.ux.touch.ImageGridList.view.ImageOuter', {

    requires: [
        'Ext.ux.touch.ImageGridList.view.Image'
    ],

    extend: 'Ext.Container',

    alias: 'widget.image-grid-list-imageouter',

    config: {

        cls: 'image-grid-list-imageouter',

        items: [
        ]
    }
});
