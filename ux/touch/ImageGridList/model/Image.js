/**
 * picture model to show grid list.
 *
 * @class Ext.ux.touch.ImageGridList.model.Image
 * @extends Ext.data.Model
 * @version 0.1.0
 * @author Tomoyuki Kashiro <kashiro@github>
 * @license MIT
 */
Ext.define('Ext.ux.touch.ImageGridList.model.Image',{

    requires: [
    ],

    extend: 'Ext.data.Model',

    config: {

        fields: [

            // whether image is selected or not in grid list
            {name: 'selected', type: 'boolean', defaultValue: false}
        ]

    }
});
