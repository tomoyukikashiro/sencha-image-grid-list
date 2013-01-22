sencha-image-grid-list
========================


## Outline

This is grid component to show some images.

## Function

### gird display

The image display in a grid pattern.

### selectable

The images can be selected.

## Image


## Demo

check [here](http://kashiro.github.com/sencha-image-grid-list/)

## How to use

1. copy some resources
	> * ux folder to aplication root
	> * resources/sass/_image-grid-list.scss to sass directory and import it in your app.scss

2. add class path to your application
	> check [here](http://scriptogr.am/tkashiro/post/how-to-use-senchatouch-custom-components). 

3. define model
	> Define Ext.data.Model in your application extend Ext.ux.ImageGridList.model.Image.

	> ```
	> Ext.define('ImageGridList.model.Image', {
	>
	>	requires: [
	>		'Ext.ux.ImageGridList.model.Image'
	>	],
	>
	>    extend: 'Ext.ux.ImageGridList.model.Image',
	>    
	>    config: {
	>```

4. define store
	> Define Ext.data.Store contain model property extend Ext.ux.ImageGridList.model.Image.

	> ```
	>    config: {
	>        model: 'ImageGridList.model.Image' // extend Ext.ux.ImageGridList.model.Image.
	>    }
	> ```



## Licence

The MIT License

Copyright (c) 2013 Tomoyuki Kashiro <kashiro@github>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
