# AnimateJs
![npm](https://img.shields.io/npm/v/@zionbuilder/animatejs) ![npm](https://img.shields.io/npm/dt/@zionbuilder/animatejs) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/@zionbuilder/animatejs?label=gzip%20size) ![npm bundle size](https://img.shields.io/bundlephobia/min/@zionbuilder/animatejs)

A lightweight alternative to wowjs, aos and other libraries that allows you to animate content on scroll.

It is using the IntersectionObserver API to watch elements when they enter the viewport instead of traditional "scroll" event.

#### Installation:
1. Via NPM
```
$ npm install @zionbuilder/animatejs
```
2. In browser
- Download Animate.css and add it to your page. You can use any animation css library so if you do not want animate.css, use a different library or use your own
- Download the script from [https://github.com/zionbuilder/animatejs/releases](https://github.com/zionbuilder/animatejs/releases)
- Add the animatejs script to your page

#### Usage:
Markup:

    <div  class="ajs__element"  data-ajs-animation="bounce">
    	My fancy element
    </div>

Script:

    <script  type="text/javascript">
        animateJs({
    	    selectorClass: 'ajs__element', // The selector for which you want to enable the anim
    	    animationClass: 'animated' // The class to apply when the element enters the viewport
        })
    </script>

#### Browser support:
| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| > 16 | > 55 | > 58 | > 12.1 | > 12.2 | > 7.2 | > 45

[https://caniuse.com/#search=intersectionobserver](https://caniuse.com/#search=intersectionobserver)

If you need to support older browsers, please load a polyfill like [https://github.com/w3c/IntersectionObserver/tree/master/polyfill](https://github.com/w3c/IntersectionObserver/tree/master/polyfill)

#### TODO:

 - [ ] Implement Mutation observer in order to watch for newly added elements
 - [ ] Implement testing
 - [ ] Create a better documentation
