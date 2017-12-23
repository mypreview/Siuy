/* -------------------------------------------------------- /*
 * The core JS libraries can be found in /assets/js/vendor/
/* -------------------------------------------------------- */
/*!
 * modernizr v3.3.1
 * Build http://modernizr.com/download?-cssanimations-csstransforms-csstransforms3d-csstransitions-flexbox-touchevents-addtest-domprefixes-hasevent-mq-prefixed-prefixes-setclasses-shiv-testallprops-testprop-teststyles-dontmin-cssclassprefix:support-
 * MIT License
 */
!function(e,t,n){function r(e,t){return typeof e===t}function o(e){var t=S.className,n=b._config.classPrefix||"";if(E&&(t=t.baseVal),b._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}b._config.enableClasses&&(t+=" "+n+e.join(" "+n),E?S.className.baseVal=t:S.className=t)}function i(e,t){if("object"==typeof e)for(var n in e)T(e,n)&&i(n,e[n]);else{var r=(e=e.toLowerCase()).split("."),a=b[r[0]];if(2==r.length&&(a=a[r[1]]),void 0!==a)return b;t="function"==typeof t?t():t,1==r.length?b[r[0]]=t:(!b[r[0]]||b[r[0]]instanceof Boolean||(b[r[0]]=new Boolean(b[r[0]])),b[r[0]][r[1]]=t),o([(t&&0!=t?"":"no-")+r.join("-")]),b._trigger(e,t)}return b}function a(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):E?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(){var e=t.body;return e||((e=a(E?"svg":"body")).fake=!0),e}function u(e,n,r,o){var i,u,l,c,f="modernizr",d=a("div"),p=s();if(parseInt(r,10))for(;r--;)(l=a("div")).id=o?o[r]:f+(r+1),d.appendChild(l);return i=a("style"),i.type="text/css",i.id="s"+f,(p.fake?p:d).appendChild(i),p.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",c=S.style.overflow,S.style.overflow="hidden",S.appendChild(p)),u=n(d,e),p.fake?(p.parentNode.removeChild(p),S.style.overflow=c,S.offsetHeight):d.parentNode.removeChild(d),!!u}function l(e,t){return!!~(""+e).indexOf(t)}function c(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function f(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(c(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+c(t[o])+":"+r+")");return i=i.join(" or "),u("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function p(e,t,o,i){function s(){c&&(delete k.style,delete k.modElem)}if(i=!r(i,"undefined")&&i,!r(o,"undefined")){var u=f(e,o);if(!r(u,"undefined"))return u}for(var c,p,m,h,v,g=["modernizr","tspan"];!k.style;)c=!0,k.modElem=a(g.shift()),k.style=k.modElem.style;for(m=e.length,p=0;p<m;p++)if(h=e[p],v=k.style[h],l(h,"-")&&(h=d(h)),k.style[h]!==n){if(i||r(o,"undefined"))return s(),"pfx"!=t||h;try{k.style[h]=o}catch(e){}if(k.style[h]!=v)return s(),"pfx"!=t||h}return s(),!1}function m(e,t){return function(){return e.apply(t,arguments)}}function h(e,t,n){var o;for(var i in e)if(e[i]in t)return!1===n?e[i]:(o=t[e[i]],r(o,"function")?m(o,n||t):o);return!1}function v(e,t,n,o,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+N.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?p(s,t,o,i):(s=(e+" "+_.join(a+" ")+a).split(" "),h(s,t,n))}function g(e,t,r){return v(e,n,n,t,r)}var y=[],C={_version:"3.3.1",_config:{classPrefix:"support-",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){y.push({name:e,fn:t,options:n})},addAsyncTest:function(e){y.push({name:null,fn:e})}},b=function(){};b.prototype=C,b=new b;var x=[],S=t.documentElement,E="svg"===S.nodeName.toLowerCase(),_=C._config.usePrefixes?"Moz O ms Webkit".toLowerCase().split(" "):[];C._domPrefixes=_;var w=C._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];C._prefixes=w;var T;!function(){var e={}.hasOwnProperty;T=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),C._l={},C.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),b.hasOwnProperty(e)&&setTimeout(function(){b._trigger(e,b[e])},0)},C._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e]}},b._q.push(function(){C.addTest=i});var z=function(){var e=!("onblur"in t.documentElement);return function(t,r){var o;return!!t&&(r&&"string"!=typeof r||(r=a(r||"div")),t="on"+t,!(o=t in r)&&e&&(r.setAttribute||(r=a("div")),r.setAttribute(t,""),o="function"==typeof r[t],r[t]!==n&&(r[t]=n),r.removeAttribute(t)),o)}}();C.hasEvent=z;var j=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return u("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();C.mq=j;var N=C._config.usePrefixes?"Moz O ms Webkit".split(" "):[];C._cssomPrefixes=N;var P={elem:a("modernizr")};b._q.push(function(){delete P.elem});var k={style:P.elem.style};b._q.unshift(function(){delete k.style}),C.testAllProps=v;var M=function(t){var r,o=w.length,i=e.CSSRule;if(void 0===i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),(r=t.replace(/-/g,"_").toUpperCase()+"_RULE")in i)return"@"+t;for(var a=0;a<o;a++){var s=w[a];if(s.toUpperCase()+"_"+r in i)return"@-"+s.toLowerCase()+"-"+t}return!1};C.atRule=M;C.prefixed=function(e,t,n){return 0===e.indexOf("@")?M(e):(-1!=e.indexOf("-")&&(e=d(e)),t?v(e,t,n):v(e,"pfx"))};C.testAllProps=g;C.testProp=function(e,t,r){return p([e],n,t,r)};var A=C.testStyles=u;E||function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=h[e[p]];return t||(t={},m++,e[p]=m,h[m]=t),t}function i(e,n,r){if(n||(n=t),l)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():d.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||f.test(e)||i.tagUrn?i:r.frag.appendChild(i)}function a(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return v.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function s(e){e||(e=t);var r=o(e);return!v.shivCSS||u||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||a(e,r),e}var u,l,c=e.html5||{},f=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,d=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",m=0,h={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,l=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){u=!0,l=!0}}();var v={elements:c.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==c.shivCSS,supportsUnknownElements:l,shivMethods:!1!==c.shivMethods,type:"default",shivDocument:s,createElement:i,createDocumentFragment:function(e,n){if(e||(e=t),l)return e.createDocumentFragment();for(var i=(n=n||o(e)).frag.cloneNode(),a=0,s=r(),u=s.length;a<u;a++)i.createElement(s[a]);return i},addElements:function(e,t){var n=v.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),v.elements=n+" "+e,s(t)}};e.html5=v,s(t),"object"==typeof module&&module.exports&&(module.exports=v)}(void 0!==e?e:this,t),b.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var r=["@media (",w.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");A(r,function(e){n=9===e.offsetTop})}return n}),b.addTest("cssanimations",g("animationName","a",!0)),b.addTest("flexbox",g("flexBasis","1px",!0)),b.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&g("transform","scale(1)",!0)});var F="CSS"in e&&"supports"in e.CSS,L="supportsCSS"in e;b.addTest("supports",F||L),b.addTest("csstransforms3d",function(){var e=!!g("perspective","1px",!0),t=b._config.usePrefixes;if(e&&(!t||"webkitPerspective"in S.style)){var n;b.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),A("#modernizr{width:0;height:0}"+(n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}"),function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),b.addTest("csstransitions",g("transition","all",!0)),function(){var e,t,n,o,i,a;for(var s in y)if(y.hasOwnProperty(s)){if(e=[],(t=y[s]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)1===(a=e[i].split(".")).length?b[a[0]]=o:(!b[a[0]]||b[a[0]]instanceof Boolean||(b[a[0]]=new Boolean(b[a[0]])),b[a[0]][a[1]]=o),x.push((o?"":"no-")+a.join("-"))}}(),o(x),delete C.addTest,delete C.addAsyncTest;for(var D=0;D<b._q.length;D++)b._q[D]();e.Modernizr=b}(window,document);
/*! js-Offcanvas - v1.2.1 - 2017-12-23
jQuery Accesible Offcanvas Panels
 * https://github.com/vmitsaras/js-offcanvas
 * Copyright (c) 2017 Vasileios Mitsaras (@vmitsaras)
 * MIT License */
!function(a){"use strict";var b={};b.classes={hiddenVisually:"u-hidden-visually",modifier:"--",isActive:"is-active",isClosed:"is-closed",isOpen:"is-open",isClicked:"is-clicked",isAnimating:"is-animating",isVisible:"is-visible",hidden:"u-hidden"},b.keyCodes={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},b.a11yclick=function(a){var c=a.charCode||a.keyCode,d=a.type;return"click"===d||"keydown"===d&&(c===b.keyCodes.SPACE||c===b.keyCodes.ENTER||void 0)},b.a11yclickBind=function(b,c,d){b.on("click."+d+" keydown."+d,function(e){a.utils.a11yclick(e)&&(e.preventDefault(e),c&&"function"==typeof c&&c.call(),b.trigger("clicked."+d))})},b.doc=a.document,b.supportTransition=Modernizr.csstransitions,b.supportAnimations=Modernizr.cssanimations,b.transEndEventNames={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},b.animEndEventNames={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd",animation:"animationend"},b.transEndEventName=b.transEndEventNames[Modernizr.prefixed("transition")],b.animEndEventName=b.animEndEventNames[Modernizr.prefixed("animation")],b.onEndTransition=function(a,c){var d=function(a){if(b.supportTransition){if(a.target!=this)return;this.removeEventListener(b.transEndEventName,d)}c&&"function"==typeof c&&c.call()};b.supportTransition?a.addEventListener(b.transEndEventName,d):d()},b.onEndAnimation=function(a,c){var d=function(a){if(b.supportAnimations){if(a.target!=this)return;this.removeEventListener(b.animEndEventName,d)}c&&"function"==typeof c&&c.call()};b.supportAnimations?a.addEventListener(b.animEndEventName,d):d()},b.createModifierClass=function(a,c){return a+b.classes.modifier+c},b.cssModifiers=function(a,c,d){for(var e=a.split(","),f=0,g=e.length;f<g;f++)c.push(b.createModifierClass(d,e[f]))},b.getMetaOptions=function(a,b,c){var d="data-"+b,e=d+"-options",f=a.getAttribute(d)||a.getAttribute(e);try{return f&&JSON.parse(f)||{}}catch(g){return void(console&&console.error("Error parsing "+d+" on "+a.className+": "+g))}};var c=function(a){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}();b.raf=function(a){c(a)},a.utils=b}(this),function(a,b){"use strict";var c="trab-tab",d=c+"-component";a.componentNamespace=a.componentNamespace||{};var e=a.componentNamespace.TrapTabKey=function(a,c){if(!a)throw new Error("Element required to initialize object");this.element=a,this.$element=b(a),c=c||{},this.options=b.extend({},this.defaults,c)};e.prototype.init=function(){this.$element.data(d)||this.$element.data(d,this)},e.prototype.bindTrap=function(){var a=this;this.$element.on("keydown."+c,function(b){a._trapTabKey(a.$element,b)})},e.prototype.unbindTrap=function(){this.$element.off("keydown."+c)},e.prototype.giveFocus=function(){var a=this,b=a.options,c=a.$element.find("*");c.filter(b.focusableElementsString).filter(":visible").first().focus()},e.prototype._trapTabKey=function(a,b){var c=this,d=c.options;if(9==b.which){var e,f=a.find("*");e=f.filter(d.focusableElementsString).filter(":visible");var g;g=jQuery(":focus");var h;h=e.length;var i;i=e.index(g),b.shiftKey?0==i&&(e.get(h-1).focus(),b.preventDefault()):i==h-1&&(e.get(0).focus(),b.preventDefault())}},e.prototype.defaults={focusableElementsString:"a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]"},e.defaults=e.prototype.defaults}(this,jQuery),function(a,b){"use strict";var c="button",d=c+"-component",e=a.utils,f={iconOnly:"icon-only",withIcon:"icon",toggleState:"toggle-state",showHide:"visible-on-active"};a.componentNamespace=a.componentNamespace||{};var g=a.componentNamespace.Button=function(a,d){if(!a)throw new Error("Element required to initialize object");this.element=a,this.$element=b(a),this.options=d=d||{},this.metadata=e.getMetaOptions(this.element,c),this.options=b.extend({},this.defaults,this.metadata,d)};g.prototype.init=function(){this.$element.data(d)||(this.$element.data(d,this),this.hasTitle=!!this.$element.attr("title"),this.$element.trigger("beforecreate."+c),this.isPressed=!1,this._create())},g.prototype._create=function(){var d=this.options,g=[d.baseClass],h=[d.baseClass+"__text"];null===d.label&&(d.label=this.$element.html()),d.wrapText&&(this.$buttonText=b("<span></span>").html(d.label).appendTo(this.$element.empty())),d.icon&&(this.$buttonIcon=b("<span class='"+d.iconFamily+" "+e.createModifierClass(d.iconFamily,d.icon)+"'></span>").prependTo(this.$element),g.push(e.createModifierClass(d.baseClass,f.withIcon)),d.iconActive&&(d.toggle=!0,this.$buttonIconActive=b("<span class='"+d.iconFamily+" "+e.createModifierClass(d.iconFamily,d.iconActive)+" "+e.createModifierClass(d.iconFamily,f.showHide)+"'></span>").insertAfter(this.$buttonIcon),g.push(e.createModifierClass(d.baseClass,f.toggleState))),d.hideText&&(h.push(e.classes.hiddenVisually),g.push(e.createModifierClass(d.baseClass,f.iconOnly)))),d.modifiers&&e.cssModifiers(d.modifiers,g,d.baseClass),d.wrapText&&this.$buttonText.addClass(h.join(" ")),d.textActive&&d.wrapText&&(d.toggle=!0,h.push(e.createModifierClass(d.baseClass+"__text",f.showHide)),g.push(e.createModifierClass(d.baseClass,f.toggleState)),this.$buttonTextActive=b("<span></span>").addClass(h.join(" ")).html(d.textActive).insertAfter(this.$buttonText),this.$element.attr("aria-live","polite")),this.$element.addClass(g.join(" ")),d.role&&this.$element.attr("role",d.role),d.controls&&this.controls(d.controls),d.pressed&&this._isPressed(d.pressed),d.expanded&&(this.isPressed=!0,this._isExpanded(d.expanded)),this.hasTitle||!d.hideText||d.hideTitle||this.$element.attr("title",this.$element.text()),d.ripple&&a.componentNamespace.Ripple&&new a.componentNamespace.Ripple(this.element).init(),this.$element.trigger("create."+c)},g.prototype._isPressed=function(a){this.isPressed=a,this.$element.attr("aria-pressed",a)[a?"addClass":"removeClass"](e.classes.isActive)},g.prototype._isExpanded=function(a){this._isPressed(a),this.$element.attr("aria-expanded",a)},g.prototype.controls=function(a){this.$element.attr("aria-controls",a)},g.prototype.defaults={baseClass:"c-button",role:"button",label:null,modifiers:null,controls:null,textActive:null,wrapText:!0,hideText:!1,hideTitle:!1,icon:null,iconActive:null,iconFamily:"o-icon",iconPosition:null,pressed:!1,expanded:!1,ripple:!1},g.defaults=g.prototype.defaults}(this,jQuery),function(a,b){"use strict";var c="jsButton",d=".js-button";b.fn[c]=function(){return this.each(function(){new a.componentNamespace.Button(this).init()})},b(document).bind("enhance",function(a){b(b(a.target).is(d)&&a.target).add(d,a.target).filter(d)[c]()})}(this,jQuery),function(a,b){"use strict";var c="offcanvas",d=c+"-component",e=a.utils,f=a.document;a.componentNamespace=a.componentNamespace||{};var g=a.componentNamespace.Offcanvas=function(a,d){if(!a)throw new Error("Element required to initialize object");this.element=a,this.$element=b(a),this.options=d=d||{},this.metadata=e.getMetaOptions(this.element,c),this.options=b.extend({},this.defaults,this.metadata,d),this.isOpen=!1,this.onOpen=this.options.onOpen,this.onClose=this.options.onClose,this.onInit=this.options.onInit};g.prototype.init=function(){this.$element.data(d)||(this.$element.data(d,this),this.$element.trigger("beforecreate."+c),this._addAttributes(),this._initTrigger(),this._createModal(),this._trapTabKey(),this._closeButton(),this.onInit&&"function"==typeof this.onInit&&this.onInit.call(this.element),this.$element.trigger("create."+c))},g.prototype._addAttributes=function(){var c=this.options,d=[c.baseClass,e.classes.isClosed],f={tabindex:"-1","aria-hidden":!this.isOpen};c.role&&(f.role=c.role),a.utils.supportTransition||d.push(e.createModifierClass(c.baseClass,c.supportNoTransitionsClass)),e.cssModifiers(c.modifiers,d,c.baseClass),this.$element.attr(f).addClass(d.join(" ")),this.$content=b("."+c.contentClass),this._contentOpenClasses=[],e.cssModifiers(c.modifiers,this._contentOpenClasses,c.contentClass),this._modalOpenClasses=[c.modalClass,e.classes.isClosed],e.cssModifiers(c.modifiers,this._modalOpenClasses,c.modalClass),this._bodyOpenClasses=[c.bodyModifierClass+"--visible"],e.cssModifiers(c.modifiers,this._bodyOpenClasses,c.bodyModifierClass),c.modifiers.toLowerCase().indexOf("reveal")>=0?this.transitionElement=this.$content[0]:this.transitionElement=this.element},g.prototype._createModal=function(){var a=this,d=a.$element.parent();this.options.modal&&(this.$modal=b("<div></div>").on("mousedown."+c,function(){a.close()}).appendTo(d),this.$modal.addClass(this._modalOpenClasses.join(" ")))},g.prototype._trapTabKey=function(){this.trapTabKey=new a.componentNamespace.TrapTabKey(this.element),this.trapTabKey.init()},g.prototype._trapTabEscKey=function(){var a=this;b(f).on("keyup."+c,function(c){var d=c.keyCode||c.which;if(d===e.keyCodes.ESCAPE&&a.isOpen){if(b("input").is(":focus"))return;a.close()}})},g.prototype._closeButton=function(){function b(){d.close()}var d=this,f=d.options;this.$closeBtn=this.$element.find("."+f.closeButtonClass),this.$closeBtn.length&&(this.closeBtn=new a.componentNamespace.Button(this.$closeBtn[0]),this.closeBtn.init(),this.closeBtn.controls(this.$element.attr("id")),e.a11yclickBind(this.$closeBtn,b,c))},g.prototype.open=function(){var a=this,g=a.options;this.isOpen||(g.resize&&this.resize(),this.$trigger||(this.$trigger=this.$element.data(d+"-trigger")),f.activeElement&&(this.lastFocus=f.activeElement),this.isOpen=!0,b("body").addClass(this._bodyOpenClasses.join(" ")),this._addClasses(this.$element,this.isOpen,!0),this._addClasses(this.$content,this.isOpen,!0),g.modal&&this._addClasses(this.$modal,this.isOpen,!0),this.$element.attr("aria-hidden","false").addClass(e.createModifierClass(g.baseClass,"opening")).trigger("opening."+c),this.$content.addClass(this._contentOpenClasses.join(" ")),e.onEndTransition(this.transitionElement,function(){a.trapTabKey.giveFocus(),a.trapTabKey.bindTrap(),a._addClasses(a.$element,a.isOpen,!1),a._addClasses(a.$content,a.isOpen,!1),g.modal&&a._addClasses(a.$modal,a.isOpen,!1),a.$element.removeClass(e.createModifierClass(g.baseClass,"opening"))}),this.$trigger&&this.$trigger.button._isExpanded(!0),this.onOpen&&"function"==typeof this.onOpen&&this.onOpen.call(this.$element),this.$element.trigger("open."+c),this._trapTabEscKey())},g.prototype.close=function(){var a=this,d=a.options;this.isOpen&&(this.isOpen=!1,this._addClasses(this.$element,this.isOpen,!0),this._addClasses(this.$content,this.isOpen,!0),this.options.modal&&this._addClasses(this.$modal,this.isOpen,!0),this.$element.attr("aria-hidden","true").addClass(e.createModifierClass(d.baseClass,"closing")).trigger("closing."+c),this.trapTabKey.unbindTrap(),a.$trigger&&a.$trigger.button._isExpanded(!1),e.onEndTransition(this.transitionElement,function(){a._addClasses(a.$element,a.isOpen,!1),a._addClasses(a.$content,a.isOpen,!1),a.options.modal&&a._addClasses(a.$modal,a.isOpen,!1),a.$content.removeClass(a._contentOpenClasses.join(" ")),a.$element.removeClass(e.createModifierClass(d.baseClass,"closing")),b("body").removeClass(a._bodyOpenClasses.join(" ")),a.lastFocus&&a.lastFocus.focus()}),this.onClose&&"function"==typeof this.onClose&&this.onClose.call(this.element),this.$element.trigger("close."+c),b(f).off("keyup."+c),b(window).off("."+c))},g.prototype._addClasses=function(a,b,c){b?c?a.removeClass(e.classes.isClosed).addClass(e.classes.isAnimating).addClass(e.classes.isOpen):a.removeClass(e.classes.isAnimating):c?a.removeClass(e.classes.isOpen).addClass(e.classes.isAnimating):a.addClass(e.classes.isClosed).removeClass(e.classes.isAnimating)},g.prototype.toggle=function(){this[this.isOpen?"close":"open"]()},g.prototype.resize=function(){function a(){g=!1}function d(){g||e.raf(a),g=!0}function f(){d(),h.$element.trigger("resizing."+c),h.options.resize&&h.close()}var g,h=this;b(window).on("resize."+c+" orientationchange."+c,f)},g.prototype._initTrigger=function(){var c,d=this,e=d.options,f=this.$element.attr("id"),g="data-offcanvas-trigger";c=b(e.triggerButton?e.triggerButton:"["+g+"='"+f+"']"),new a.componentNamespace.OffcanvasTrigger(c[0],{offcanvas:f}).init()},g.prototype.setButton=function(a){this.$element.data(d+"-trigger",a)},g.prototype.defaults={role:"dialog",modifiers:"left,overlay",baseClass:"c-offcanvas",modalClass:"c-offcanvas-bg",contentClass:"c-offcanvas-content-wrap",closeButtonClass:"js-offcanvas-close",bodyModifierClass:"has-offcanvas",supportNoTransitionsClass:"support-no-transitions",resize:!0,triggerButton:null,modal:!0,onOpen:null,onClose:null,onInit:null},g.defaults=g.prototype.defaults}(this,jQuery),function(a,b){"use strict";var c="offcanvas",d=".js-"+c;b.fn[c]=function(b){return this.each(function(){new a.componentNamespace.Offcanvas(this,b).init()})},b(a.document).on("enhance",function(a){b(b(a.target).is(d)&&a.target).add(d,a.target).filter(d)[c]()})}(this,jQuery),function(a,b){"use strict";var c="offcanvas-trigger",d=c+"-component",e=a.utils;a.componentNamespace=a.componentNamespace||{};var f=a.componentNamespace.OffcanvasTrigger=function(a,c){if(!a)throw new Error("Element required to initialize object");this.element=a,this.$element=b(a),this.options=c=c||{},this.options=b.extend({},this.defaults,c)};f.prototype.init=function(){this.$element.data(d)||(this.$element.data(d,this),this._create())},f.prototype._create=function(){if(this.options.offcanvas=this.options.offcanvas||this.$element.attr("data-offcanvas-trigger"),this.$offcanvas=b("#"+this.options.offcanvas),this.offcanvas=this.$offcanvas.data("offcanvas-component"),!this.offcanvas)throw new Error("Offcanvas Element not found");this.button=new a.componentNamespace.Button(this.element),this.button.init(),this.button.controls(this.options.offcanvas),this.button._isExpanded(!1),this._bindbehavior()},f.prototype._bindbehavior=function(){function a(){b.offcanvas.toggle()}var b=this;this.offcanvas.setButton(b),e.a11yclickBind(this.$element,a,c)},f.prototype.defaults={offcanvas:null}}(this,jQuery),function(a,b){"use strict";var c="offcanvasTrigger",d="[data-offcanvas-trigger],.js-"+c;b.fn[c]=function(b){return this.each(function(){new a.componentNamespace.OffcanvasTrigger(this,b).init()})},b(a.document).on("enhance",function(a){b(b(a.target).is(d)&&a.target).add(d,a.target).filter(d)[c]()})}(this,jQuery);
// https://github.com/filamentgroup/AppendAround
/*! appendAround markup pattern. [c]2012, @scottjehl, Filament Group, Inc. MIT/GPL */
!function(n){n.fn.appendAround=function(){return this.each(function(){function t(t){return"none"===n(t).css("display")}function i(){if(t(r)){var n=0;o.each(function(){t(this)||n||(a.appendTo(this),n++,r=this)})}}var a=n(this),e=a.parent(),r=e[0],s=e.attr("data-set"),o=n("[data-set='"+s+"']");i(),n(window).bind("resize",i)})}}(jQuery);
/*
 * Slinky
 * Rather sweetmenus
 * @author Ali Zahid <ali.zahid@live.com>
 * @license MIT
 */
"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},_createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),Slinky=function(){function e(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};_classCallCheck(this,e),this.settings=_extends({},this.options,i),this._init(t)}return _createClass(e,[{key:"options",get:function(){return{resize:!0,speed:300,theme:"slinky-theme-default",title:!1}}}]),_createClass(e,[{key:"_init",value:function(e){this.menu=jQuery(e),this.base=this.menu.children().first();this.base;var t=this.menu,i=this.settings;t.addClass("slinky-menu").addClass(i.theme),this._transition(i.speed),jQuery("a + ul",t).prev().addClass("next"),jQuery("li > a",t).wrapInner("<span>");var n=jQuery("<li>").addClass("header");jQuery("li > ul",t).prepend(n);var s=jQuery("<a>").prop("href","#").addClass("back");jQuery(".header",t).prepend(s),i.title&&jQuery("li > ul",t).each(function(e,t){var i=jQuery(t).parent().find("a").first().text();if(i){var n=jQuery("<header>").addClass("title").text(i);jQuery("> .header",t).append(n)}}),this._addListeners(),this._jumpToInitial()}},{key:"_addListeners",value:function(){var e=this,t=this.menu,i=this.settings;jQuery("a",t).on("click",function(n){if(e._clicked+i.speed>Date.now())return!1;e._clicked=Date.now();var s=jQuery(n.currentTarget);(0===s.attr("href").indexOf("#")||s.hasClass("next")||s.hasClass("back"))&&n.preventDefault(),s.hasClass("next")?(t.find(".active").removeClass("active"),s.next().show().addClass("active"),e._move(1),i.resize&&e._resize(s.next())):s.hasClass("back")&&(e._move(-1,function(){t.find(".active").removeClass("active"),s.parent().parent().hide().parentsUntil(t,"ul").first().addClass("active")}),i.resize&&e._resize(s.parent().parent().parentsUntil(t,"ul")))})}},{key:"_jumpToInitial",value:function(){var e=this.menu.find(".active");e.length>0&&(e.removeClass("active"),this.jump(e,!1))}},{key:"_move",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(0!==e){var i=this.settings,n=this.base,s=Math.round(parseInt(n.get(0).style.left))||0;n.css("left",s-100*e+"%"),"function"==typeof t&&setTimeout(t,i.speed)}}},{key:"_resize",value:function(e){this.menu.height(e.outerHeight())}},{key:"_transition",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300,t=this.menu,i=this.base;t.css("transition-duration",e+"ms"),i.css("transition-duration",e+"ms")}},{key:"jump",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e){var i=this.menu,n=this.settings,s=jQuery(e),a=i.find(".active"),r=0;a.length>0&&(r=a.parentsUntil(i,"ul").length),i.find("ul").removeClass("active").hide();var l=s.parentsUntil(i,"ul");l.show(),s.show().addClass("active"),t||this._transition(0),this._move(l.length-r),n.resize&&this._resize(s),t||this._transition(n.speed)}}},{key:"home",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this.base,i=this.menu,n=this.settings;e||this._transition(0);var s=i.find(".active"),a=s.parentsUntil(i,"ul");this._move(-a.length,function(){s.removeClass("active").hide(),a.not(t).hide()}),n.resize&&this._resize(t),!1===e&&this._transition(n.speed)}},{key:"destroy",value:function(){var e=this,t=this.base,i=this.menu;jQuery(".header",i).remove(),jQuery("a",i).removeClass("next").off("click"),i.css({height:"","transition-duration":""}),t.css({left:"","transition-duration":""}),jQuery("li > a > span",i).contents().unwrap(),i.find(".active").removeClass("active"),i.attr("class").split(" ").forEach(function(e){0===e.indexOf("slinky")&&i.removeClass(e)}),["settings","menu","base"].forEach(function(t){return delete e[t]})}}]),e}();jQuery.fn.slinky=function(e){return new Slinky(this,e)};
/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
!function(){function e(){for(var e=this;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement}var a,t,n,s,i,l;if((a=document.getElementById("site-navigation"))&&void 0!==(t=a.getElementsByTagName("button")[0]))if(void 0!==(n=a.getElementsByTagName("ul")[0])){for(n.setAttribute("aria-expanded","false"),-1===n.className.indexOf("nav-menu")&&(n.className+=" nav-menu"),i=0,l=(s=n.getElementsByTagName("a")).length;i<l;i++)s[i].addEventListener("focus",e,!0),s[i].addEventListener("blur",e,!0);!function(e){var a,t,n=e.querySelectorAll(".menu-item-has-children > a, .page_item_has_children > a");if("ontouchstart"in window)for(a=function(e){var a,t=this.parentNode;if(t.classList.contains("focus"))t.classList.remove("focus");else{for(e.preventDefault(),a=0;a<t.parentNode.children.length;++a)t!==t.parentNode.children[a]&&t.parentNode.children[a].classList.remove("focus");t.classList.add("focus")}},t=0;t<n.length;++t)n[t].addEventListener("touchstart",a,!1)}(a)}else t.style.display="none"}();
/*!
* FitVids 1.1
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*/
!function(t){"use strict";t.fn.fitVids=function(e){var i={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var r=document.head||document.getElementsByTagName("head")[0],a=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",d=document.createElement("div");d.innerHTML='<p>x</p><style id="fit-vids-style">'+a+"</style>",r.appendChild(d.childNodes[1])}return e&&t.extend(i,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];i.customSelector&&e.push(i.customSelector);var r=".fitvidsignore";i.ignore&&(r=r+", "+i.ignore);var a=t(this).find(e.join(","));a=a.not("object object"),a=a.not(r),a.each(function(){var e=t(this);if(!(e.parents(r).length>0||"embed"===this.tagName.toLowerCase()&&e.parent("object").length||e.parent(".fluid-width-video-wrapper").length)){e.css("height")||e.css("width")||!isNaN(e.attr("height"))&&!isNaN(e.attr("width"))||(e.attr("height",9),e.attr("width",16));var i="object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height(),a=isNaN(parseInt(e.attr("width"),10))?e.width():parseInt(e.attr("width"),10),d=i/a;if(!e.attr("name")){var o="fitvid"+t.fn.fitVids._count;e.attr("name",o),t.fn.fitVids._count++}e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*d+"%"),e.removeAttr("height").removeAttr("width")}})})},t.fn.fitVids._count=0}(window.jQuery||window.Zepto);
/**
 * Siuy scripts & custom methods
 *
 * @author      Mahdi Yazdani
 * @package     Siuy
 * @since       1.1.1
 */
(function(window, $, undefined) {
    'use strict';

    /* -------------------------------------------------------- /*
     * Initializing accesible offcanvas panel and slinky nav
    /* -------------------------------------------------------- */
    if (('#right.siuy-offcanvas').length > 0) {
		$(document).trigger('enhance');
	    $('#right.siuy-offcanvas').offcanvas({
	        modifiers: 'right,overlay,push',
	        triggerButton: '.js-primary-offcanvas-toggler',
	        onInit: function() {
	            $(this).removeClass('is-hidden');
	        }
	    });
	    $('.js-append-around').appendAround();
	    if ($('#masthead #primary-menu').length > 0) {
	        $('#masthead #primary-menu').clone().appendTo('.c-offcanvas > #primary-slinky-menu');
	        if ($('#right.siuy-offcanvas #primary-slinky-menu').length > 0) {
	            var slinky = $('#right.siuy-offcanvas #primary-slinky-menu').slinky();
	        }
	    }
    }

    /* --------------------------------------------------------------------------------- /*
     * If adminbar exist (should check for visible?) then add margin to offcanvas panel
    /* --------------------------------------------------------------------------------- */
    $(window).on('load resize scroll', function() {
        var navbar = $('.siuy-offcanvas'),
            width = Math.max($(window).width(), window.innerWidth),
            topScroll = $(window).scrollTop(),
            $wpAdminBar = $('#wpadminbar');
        if ($wpAdminBar.length) {
            if (width > 600) {
                navbar.css('top', $wpAdminBar.height() + 'px');
            } else if (width <= 600 && topScroll >= 5) {
                navbar.css('top', '0');
            } else if (width <= 600 && topScroll <= 5) {
                navbar.css('top', $wpAdminBar.height() + 'px');
            }
        }
    });

    /* ---------------------------------------------- /*
     * Fluid width video embeds.
    /* ---------------------------------------------- */
	if($('iframe[src*="youtube"]').length > 0 || $('iframe[src*="vimeo"]').length > 0 || $('iframe[src*="videopress"]').length > 0 || $('iframe[src*="soundcloud"]').length > 0 || $('iframe[src*="mixcloud"]').length > 0) {
		$('iframe[src*="youtube"], iframe[src*="vimeo"], iframe[src*="videopress"], iframe[src*="soundcloud"], iframe[src*="mixcloud"]').parent().fitVids();
	}

})(this, jQuery);