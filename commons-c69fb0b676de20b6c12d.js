(self.webpackChunkgatsby_starter_glass=self.webpackChunkgatsby_starter_glass||[]).push([[351],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,l,u,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(!o(e[l],a[l]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!o(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!o(e[u[l]],a[u[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return l},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},6569:function(e,t,n){"use strict";n.d(t,{Z:function(){return He}});var r,i,o,a,c=n(7294),l=n(5697),u=n.n(l),s=n(4839),f=n.n(s),p=n(2993),d=n.n(p),m=n(6494),h=n.n(m),y="bodyAttributes",g="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",E="href",C="http-equiv",A="innerHTML",S="itemprop",O="name",k="property",x="rel",I="src",j="target",z={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},_="defaultTitle",L="defer",P="encodeSpecialCharacters",N="onChangeClientState",M="titleTemplate",R=Object.keys(z).reduce((function(e,t){return e[z[t]]=t,e}),{}),H=[v.NOSCRIPT,v.SCRIPT,v.STYLE],F="data-react-helmet",q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Q=function(e){var t=J(e,v.TITLE),n=J(e,M);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,_);return t||r||void 0},V=function(e){return J(e,N)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},$=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var c=o[a],l=c.toLowerCase();-1===t.indexOf(l)||n===x&&"canonical"===e[n].toLowerCase()||l===x&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==A&&c!==T&&c!==S||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][u]&&(i[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var c=o[a],l=h()({},r[c],i[c]);r[c]=l}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;le(v.BODY,r),le(v.HTML,i),ce(f,p);var d={baseTag:ue(v.BASE,n),linkTags:ue(v.LINK,o),metaTags:ue(v.META,a),noscriptTags:ue(v.NOSCRIPT,c),scriptTags:ue(v.SCRIPT,u),styleTags:ue(v.STYLE,s)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),l(e,m,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),le(v.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(F),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===i.indexOf(l)&&i.push(l);var s=o.indexOf(l);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);i.length===o.length?n.removeAttribute(F):n.getAttribute(F)!==a.join(",")&&n.setAttribute(F,a.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(F,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[z[n]||n]=e[n],t}),t)},pe=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[F]=!0,i=fe(n,r),[c.createElement(v.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=se(n),o=ae(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+W(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case g:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[F]=!0,r);return Object.keys(t).forEach((function(e){var n=z[e]||e;if(n===A||n===T){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),c.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===A||e===T)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},de=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(v.BASE,t,r),bodyAttributes:pe(y,n,r),htmlAttributes:pe(g,i,r),link:pe(v.LINK,o,r),meta:pe(v.META,a,r),noscript:pe(v.NOSCRIPT,c,r),script:pe(v.SCRIPT,l,r),style:pe(v.STYLE,u,r),title:pe(v.TITLE,{title:f,titleAttributes:p},r)}},me=f()((function(e){return{baseTag:$([E,j],e),bodyAttributes:G(y,e),defer:J(e,L),encode:J(e,P),htmlAttributes:G(g,e),linkTags:Z(v.LINK,[x,E],e),metaTags:Z(v.META,[O,w,C,k,S],e),noscriptTags:Z(v.NOSCRIPT,[A],e),onChangeClientState:V(e),scriptTags:Z(v.SCRIPT,[I,A],e),styleTags:Z(v.STYLE,[T],e),title:Q(e),titleAttributes:G(b,e)}}),(function(e){ie&&ne(ie),e.defer?ie=te((function(){oe(e,(function(){ie=null}))})):(oe(e),ie=null)}),de)((function(){return null})),he=(i=me,a=o=function(e){function t(){return B(this,t),K(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return U({},r,((t={})[n.type]=[].concat(r[n.type]||[],[U({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case v.TITLE:return U({},i,((t={})[r.type]=a,t.titleAttributes=U({},o),t));case v.BODY:return U({},i,{bodyAttributes:U({},o)});case v.HTML:return U({},i,{htmlAttributes:U({},o)})}return U({},i,((n={})[r.type]=U({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=U({},t);return Object.keys(e).forEach((function(t){var r;n=U({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)}(Y(i,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=U({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(i,r)},D(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(c.Component),o.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind;var ye=n(5444),ge=function(e){var t,n,r,i=e.description,o=e.lang,a=e.meta,l=e.title,u=(0,ye.useStaticQuery)("2714594843").site,s=i||u.siteMetadata.description,f=null===(t=u.siteMetadata)||void 0===t?void 0:t.title;return c.createElement(he,{htmlAttributes:{lang:o},title:l,titleTemplate:"%s - "+f,defaultTitle:f,meta:[{name:"description",content:s},{property:"og:title",content:l},{property:"og:description",content:s},{property:"og:image",content:u.siteMetadata.siteUrl+"/"+u.siteMetadata.openGraphImage},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=u.siteMetadata)||void 0===n||null===(r=n.social)||void 0===r?void 0:r.twitter)||""},{name:"twitter:title",content:l},{name:"twitter:description",content:s}].concat(a)})};ge.defaultProps={lang:"en",meta:[],description:""};var be=ge,ve=n(3917),we=ve.default.div.withConfig({displayName:"container__Container",componentId:"sc-g6pcgm-0"})(["margin-left:auto;margin-right:auto;max-width:1300px;padding-left:var(--size-700);padding-right:var(--size-700);height:100%;@media screen and (max-width:1000px){&{padding-left:var(--size-400);padding-right:var(--size-400);}}"]),Te=function(){var e=(0,ye.useStaticQuery)("3159585216").site;return c.createElement(Ae,null,c.createElement(Se,null,c.createElement(Oe,null,c.createElement(ye.Link,{to:"/"},e.siteMetadata.title)),c.createElement(Ee,null,c.createElement(Ce,null,c.createElement(ye.Link,{to:"/blog"},"게시물")),c.createElement(Ce,null,c.createElement(ye.Link,{to:"/about"},"소개")),c.createElement(Ce,null,c.createElement(ye.Link,{to:"/contact"},"미정")))))},Ee=function(e){var t=e.children;return c.createElement(ke,null,c.createElement(xe,null,t))},Ce=function(e){var t=e.children;return c.createElement(Ie,null,t)},Ae=ve.default.header.withConfig({displayName:"header__StyledHeader",componentId:"sc-1344zpp-0"})(["padding-top:var(--size-300);"]),Se=(0,ve.default)(we).withConfig({displayName:"header__HeaderWrapper",componentId:"sc-1344zpp-1"})(["display:flex;align-items:center;justify-content:space-between;"]),Oe=ve.default.div.withConfig({displayName:"header__HeaderTitle",componentId:"sc-1344zpp-2"})(["& a{text-transform:uppercase;text-decoration:none;font-size:var(--size-400);color:inherit;}"]),ke=ve.default.nav.withConfig({displayName:"header__StyledNav",componentId:"sc-1344zpp-3"})(["position:static;padding:0;background:transparent;backdrop-filter:unset;"]),xe=ve.default.ul.withConfig({displayName:"header__StyledNavList",componentId:"sc-1344zpp-4"})(["display:flex;align-items:center;flex-wrap:wrap;justify-content:space-around;padding:0;list-style-type:none;"]),Ie=ve.default.li.withConfig({displayName:"header__StyledNavListItem",componentId:"sc-1344zpp-5"})(["&:not(:last-of-type){margin-right:2rem;}@media screen and (max-width:700px){&:not(:last-of-type){margin-right:1rem;}}& a{color:inherit;text-transform:uppercase;font-size:var(--size-300);text-decoration:none;letter-spacing:0.1rem;}@media screen and (max-width:700px){& a{font-size:0.7rem;}}"]),je=function(){var e=(0,ye.useStaticQuery)("2555585279").site.siteMetadata.socialLinks.map((function(e){return c.createElement(_e,{key:e.name},c.createElement("a",{href:e.url},e.name))}));return c.createElement(ze,null,e)},ze=ve.default.ul.withConfig({displayName:"social-links__SocialLinkList",componentId:"sc-r9vd8i-0"})(["padding:0;list-style:none;display:flex;"]),_e=ve.default.li.withConfig({displayName:"social-links__SocialLinkItem",componentId:"sc-r9vd8i-1"})(["margin-right:var(--size-400);text-transform:uppercase;& a{color:inherit;font-size:var(--size-300);}"]),Le=function(){return c.createElement(Pe,null,c.createElement(Me,null,c.createElement(je,null),c.createElement(Ne,null,"Start to 2022-6-24.")))},Pe=ve.default.footer.withConfig({displayName:"footer__StyledFooter",componentId:"sc-1d6x338-0"})(["padding-top:var(--size-300);padding-bottom:var(--size-300);"]),Ne=ve.default.p.withConfig({displayName:"footer__FooterAttribution",componentId:"sc-1d6x338-1"})(["font-size:var(--size-300);& a{color:inherit;}"]),Me=(0,ve.default)(we).withConfig({displayName:"footer__FooterWrapper",componentId:"sc-1d6x338-2"})(["display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;"]),Re=(0,ve.createGlobalStyle)(["*,*::before,*::after{box-sizing:border-box;}body,h1,h2,h3,h4,p,figure,blockquote,dl,dd{margin:0;}ul[role='list'],ol[role='list']{list-style:none;}html:focus-within{scroll-behavior:smooth;}html{height:-webkit-fill-available;}body{min-height:100vh;min-height:-webkit-fill-available;text-rendering:optimizeSpeed;line-height:1.5;}a:not([class]){text-decoration-skip-ink:auto;}img,picture{max-width:100%;display:block;}input,button,textarea,select{font:inherit;}@media (prefers-reduced-motion:reduce){html:focus-within{scroll-behavior:auto;}*,*::before,*::after{animation-duration:0.01ms !important;animation-iteration-count:1 !important;transition-duration:0.01ms !important;scroll-behavior:auto !important;}}html{width:100vw;overflow-x:hidden;}body::-webkit-scrollbar{width:10px;}body::-webkit-scrollbar-thumb{background-color:rgba(55,41,44,.4);}body::-webkit-scrollbar-track{background:transparent;}:root{scroll-behavior:smooth;--size-300:0.75rem;--size-400:1rem;--size-500:1.33rem;--size-600:1.77rem;--size-700:2.36rem;--size-800:3.15rem;--size-900:4.2rem;}body{font-family:'Poppins',-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,Ubuntu,roboto,noto,segoe ui,arial,sans-serif;color:#37292C;background-attachment:fixed;background-color:#d9e4f5;background-image:linear-gradient(315deg,#d9e4f5 0%,#f5e3e6 74%);}h1,h2,h3,h4{line-height:1.125;}h1,h2,h3{font-weight:700;}h1{font-size:var(--size-800);}h2{font-size:var(--size-700);}h3{font-size:var(--size-600);}p{font-size:var(--size-400);}::selection{background:rgba(255,255,255,0.9);}p,li{max-width:none;}.gatsby-resp-image-wrapper{margin-left:0 !important;}"]),He=function(e){var t=e.children,n=e.title,r=e.description,i=e.socialImage,o=void 0===i?"":i;return c.createElement(c.Fragment,null,c.createElement(Re,null),c.createElement(be,{title:n,description:r,socialImage:o}),c.createElement(Fe,null,c.createElement(Te,null),c.createElement("main",null,c.createElement(we,null,t)),c.createElement(Le,null)))},Fe=ve.default.div.withConfig({displayName:"layout__LayoutWrapper",componentId:"sc-qrswv8-0"})(["min-height:100vh;display:flex;flex-direction:column;& main{margin-top:auto;margin-bottom:auto;}& footer{margin-top:auto;}"])}}]);
//# sourceMappingURL=commons-c69fb0b676de20b6c12d.js.map