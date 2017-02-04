"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,n,r,a){var o=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,o=t.default.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:n.default}),(0,r.default)(o,a.default.modulePrefix),e.default=o}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var r=n.default.APP.name,a=n.default.APP.version;e.default=t.default.extend({version:a,name:r})}),define("dummy/components/array-path-layer",["exports","ember-leaflet/components/array-path-layer"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/base-layer",["exports","ember-leaflet/components/base-layer"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/circle-layer",["exports","ember-leaflet/components/circle-layer"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/circle-marker-layer",["exports","ember-leaflet/components/circle-marker-layer"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/container-layer",["exports","ember-leaflet/components/container-layer"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/div-overlay-layer",["exports","ember-leaflet/components/div-overlay-layer"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/draw-control",["exports","ember-leaflet-draw/components/draw-control"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/ember-wormhole",["exports","ember-wormhole/components/ember-wormhole"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/geojson-layer",["exports","ember-leaflet/components/geojson-layer"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/image-layer",["exports","ember-leaflet/components/image-layer"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/leaflet-map",["exports","ember-leaflet/components/leaflet-map"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/marker-layer",["exports","ember-leaflet/components/marker-layer"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/path-layer",["exports","ember-leaflet/components/path-layer"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/point-path-layer",["exports","ember-leaflet/components/point-path-layer"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/polygon-layer",["exports","ember-leaflet/components/polygon-layer"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/polyline-layer",["exports","ember-leaflet/components/polyline-layer"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/popup-layer",["exports","ember-leaflet/components/popup-layer"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/tile-layer",["exports","ember-leaflet/components/tile-layer"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/tooltip-layer",["exports","ember-leaflet/components/tooltip-layer"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/wms-tile-layer",["exports","ember-leaflet/components/wms-tile-layer"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/controllers/application",["exports","ember"],function(e,t){e.default=t.default.Controller.extend({lat:38,lng:-77,zoom:8,drawConfig:{polygon:null},restaurants:t.default.A([{name:"Sinju Restaurant",rating:4,lat:38,lng:-78.5},{name:"Burgerville",rating:3.8,lat:37,lng:-78},{name:"Le Pigeon",rating:4.5,lat:37,lng:-79}]),actions:{drawFinished:function(e){console.log("finsihed",e)},editStarted:function(e){console.log("edit started",e)}}})}),define("dummy/helpers/div-icon",["exports","ember-leaflet/helpers/div-icon"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"divIcon",{enumerable:!0,get:function(){return t.divIcon}})}),define("dummy/helpers/icon",["exports","ember-leaflet/helpers/icon"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"icon",{enumerable:!0,get:function(){return t.icon}})}),define("dummy/helpers/lat-lng-bounds",["exports","ember-leaflet/helpers/lat-lng-bounds"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"latLngBounds",{enumerable:!0,get:function(){return t.latLngBounds}})}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e.default=t.default}),define("dummy/helpers/point",["exports","ember-leaflet/helpers/point"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(e,"point",{enumerable:!0,get:function(){return t.point}})}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e.default=t.default}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){e.default={name:"App Version",initialize:(0,t.default)(n.default.APP.name,n.default.APP.version)}}),define("dummy/initializers/browser/leaflet-assets",["exports","ember-get-config"],function(e,t){function n(){L.Icon.Default.imagePath=(t.default.rootURL||t.default.baseURL||"/")+"assets/images/"}e.initialize=n,e.default={name:"leaflet-assets",initialize:n}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e.default={name:"ember-data",initialize:t.default}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function r(){var e=arguments[1]||arguments[0];if(n.default.exportApplicationGlobal!==!1){var r;if("undefined"!=typeof window)r=window;else if("undefined"!=typeof global)r=global;else{if("undefined"==typeof self)return;r=self}var a,o=n.default.exportApplicationGlobal;a="string"==typeof o?o:t.default.String.classify(n.default.modulePrefix),r[a]||(r[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[a]}}))}}e.initialize=r,e.default={name:"export-application-global",initialize:r}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e.default={name:"transforms",before:"store",initialize:function(){}}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e.default={name:"ember-data",initialize:t.default}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e.default=t.default}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var r=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});r.map(function(){}),e.default=r}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){e.default=Ember.HTMLBars.template({id:"I74+5f4N",block:'{"statements":[["open-element","h2",[]],["flush-element"],["text","Ember-Leaflet-Draw Documentation"],["close-element"],["text","\\n"],["open-element","p",[]],["flush-element"],["text","coming soon..."],["close-element"],["text","\\n\\n\\n"],["block",["leaflet-map"],null,[["lat","lng","zoom"],[["get",["lat"]],["get",["lng"]],["get",["zoom"]]]],{"statements":[["text","  "],["append",["helper",["layers","tile"],null,[["url"],["http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"]]],false],["text","\\n  "],["append",["unknown",["draw-control"]],false],["text","\\n  "],["comment"," {{draw-control\\n      position=\\"topright\\"\\n      draw=drawConfig\\n      enableEditing=true\\n      showDrawingLayer=true\\n      onDrawCreated=\\"drawFinished\\"\\n      onDrawEditstart=\\"editStarted\\"}} "],["text","\\n  "],["comment"," {{#each restaurants as |r|}}\\n    {{marker-layer lat=r.lat lng=r.lng}}\\n  {{/each}} "],["text","\\n"]],"locals":["layers"]},null]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",r=document.querySelector('meta[name="'+n+'"]').getAttribute("content"),a=JSON.parse(unescape(r)),o={default:a};return Object.defineProperty(o,"__esModule",{value:!0}),o}catch(e){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app").default.create({name:"ember-leaflet-draw",version:"0.4.1+fc90f198"});