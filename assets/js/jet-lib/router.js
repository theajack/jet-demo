"use strict";!function(){function t(){v.id(g)._JT_exist(function(t){t._JT_attr(b._jload,"root.html")._JT_attr(b._jpath,"false"),b._initSingleLoad("$root",t,0,[t],function(){t._JT_removeAttr(b.__comp_id)})})}function e(t){"history"in t&&(Jet.router.history=t.history),"base"in t&&Jet.router.setBase(t.base,t.trueBase),t.history||(Jet.router.base+="/#"),t.router["/404"]||(t.router["/404"]="/404");for(var e in t.router)""==t.router[e]&&(t.router[e]=e),r(e,t.router[e])}function r(t,e){if(t===Jet.router.index&&(Jet.router.indexMap=e),"string"!=typeof e){var n="";if("params"in e){n="?";for(var u in e.params)n+=u+"="+e.params[u]+"&";n=n.substring(0,n.length-1)}o(t,e.name,n);var i=e.children;for(var u in i)r(t+u,i[u])}else o(t,e)}function o(t,e,r){e._JT_has(".html")||(e._JT_has("?")?e=e.replace("?",".html?"):e+=".html"),void 0!=r&&(e+=r),Jet.router.map[Jet.router.base+t]=e}function n(t){var e="";if(-1!=t.indexOf("#")){var r=t.indexOf("?"),o=t.indexOf("#");-1!=r?r>o?(Jet.router.hash=t.substring(o,r),e=t.substring(r+1),t=t.substring(0,o),r=o):(Jet.router.hash=t.substring(o),e=t.substring(r+1,o),t=t.substring(0,r)):(Jet.router.hash=t.substring(o),r=o,t=t.substring(0,o))}else t._JT_has("?")&&(e=t.substring(t.indexOf("?")+1),t=t.substring(0,t.indexOf("?"))),Jet.router.hash="";return"/"==t[t.length-1]&&t.length>1&&(t=t.substring(0,t.length-1)),{url:t,search:e}}function u(t,e){e||i(t),Jet.router[t].forEach(function(t){t._jet?t.call(t._jet,e,Jet.router):t.call(Jet.router,e)})}function i(t){var e;if("__onroute"==t){if(!(e=Jet.$unnamedJets[b.__router_comp]))return;Jet.router.__last_router_comp=e,_(e._tools._beforeunmount),a(e.$child),Jet.router.__last_router_comp=e}else if("__onrouted"==t){if(!(e=Jet.router.__last_router_comp))return;J(e),s(e.$child)}}function a(t){if(t)for(var e in t)_(t[e]._tools._beforeunmount),a(t[e].$child)}function _(t){t&&t()}function s(t){if(t)for(var e in t)J(t[e]),s(t[e].$child)}function J(t){var e=t._tools.name;_(t._tools._onunmounted),c("__onroute",e),c("__onrouted",e),Jet[e]&&Jet[e].$DOM?delete Jet[e]:Jet.$unnamedJets[e]&&delete Jet.$unnamedJets[e]}function c(t,e){var r=Jet.router[t].filter(function(t){return t._name===e});r.length>0&&r.forEach(function(e){Jet.router[t]._JT_remove(e)})}function h(t){return"/"==t[t.length-1]&&"/"!=t&&(t=t.substring(0,t.length-1)),t=t==Jet.router.base?Jet.router.base+Jet.router.index:"/"!=t[0]?Jet.router.path+"/"+t:Jet.router.base+t}function l(t){v.id(d)._JT_exist()&&v.id(d)._JT_remove();var e=v.ct("script")._JT_attr({id:d,type:"text/javascript"});m="T"==m?"F":"T";var r,o=["//# sourceURL=__router_comp_"+m+".js\r\n"],n=t._JT_findTag("script")._JT_toArray(!1);n.length>0&&(r=b.__router_comp,t._JT_attr(b.__comp_id,r));for(var u=-1,i=n.length-1;i>=0;i--)if(n[i]._JT_hasAttr("src")){u=i;break}var a=function(t){return null!==t.match(p)?t.replace(p,'new Jet("'+b.__jet_root+'","'+r+'",{})'):t.replace("new Jet(",'new Jet("'+b.__jet_root+'","'+r+'",')};n._JT_each(function(t,r){t._JT_hasAttr("src")?v.load(b._getSrc(t._JT_attr("src"),"js"),function(t){o[r+1]=a(t),r==u&&(e._JT_html(o.join("")),v.body()._JT_append(e))}):o[r+1]=a(t._JT_html()),t._JT_remove()}),-1==u&&(e._JT_html(o.join(";")),v.body()._JT_append(e))}function f(t){!b._isUd(Jet.__css_conf)&&b._isUd(Jet.__css_conf.conf)?Jet.__css_conf._reloadCssConf(function(){b._loadStyleCall(t,Jet.router.path)}):(b._isUd(Jet.__css_conf)||(Jet.__css_conf.xhr=void 0),b._loadStyleCall(t,Jet.router.path))}var d="JrouteScript",p=new RegExp("new Jet\\([ |\r\n]*\\)","i"),m="F",b=Jet.__base__;Jet.__base__._useList.push("router");var v=b._JT,g=b.__ROOT;Jet.router={base:"",trueBase:!1,history:!1,path:"/",lastTrueHash:"",params:null,map:{},_initRouterOut:function(){return Jet.router.out&&Jet.router.out._JT_exist()||(Jet.router.out=v.attr("Jout")),Jet.router.out},use:function(r){Jet.router.index="index"in r?r.index:"/index",e(r);var o=Jet.router.index;location.pathname._JT_has("index.html")||(Jet.router.history?location.pathname.length-Jet.router.base.length>1&&(o=location.pathname.substring(Jet.router.base.length)+location.search+location.hash):location.hash.length>2&&(o=location.pathname+location.hash,o=o.substring(Jet.router.base.length)+location.search)),Jet.router._initRouterOut(),Jet.router.init(),Jet.router.__await=function(){r.oninit&&"function"==typeof r.oninit&&r.oninit(),Jet.router.__isFresh=!0,Jet.router.route(o),delete Jet.router.__await},Jet.router.__hasInitJet&&(Jet.router.__await(),delete Jet.router.__hasInitJet),t()},conf:{html:"/src/html",js:"/src/js",css:"/src/css",image:"/src/image",media:"/src/media",base:"/src"},init:function(t){var e;e=void 0==t?v.attr("Jrouter"):t._JT_findAttr("Jrouter"),e._JT_each(function(t){t._JT_clk(function(){Jet.router.route(this._JT_attr("Jrouter"))})})},setBase:function(t,e){if(Jet.router.base=t,!0===e){Jet.router.trueBase=!0;for(var r in Jet.router.conf)Jet.router.conf[r]=t+Jet.router.conf[r]}},__xhr:null,__onroute:[],onroute:function(t,e){"function"==typeof t?(t._jet=e,t._name=e._tools.name,Jet.router.__onroute.push(t)):_throw("onroute:参数必须是函数")},__onrouted:[],onrouted:function(t,e){"function"==typeof t?(t._jet=e,t._name=e._tools.name,Jet.router.__onrouted.push(t)):_throw("onroute:参数必须是函数")},back:function(){window.history.back()},forward:function(){window.history.forward()},clearScoped:function(){v.cls(b._scopeStyle)._JT_remove()},activeRouter:function(t){t=t||v.attr('Jrouter="'+Jet.router.url+'"'),t._JT_exist()&&(v.attr("jrouter-active")._JT_removeAttr("jrouter-active"),t._JT_attr("jrouter-active",""),Jet.router.active=t)},route:function(t,e,r){if(t._JT_has("http://")||t._JT_has("https://"))!0===e?Jet.$.open(t):Jet.$.jump(t);else{var o=Jet.router.__isFresh;o&&(Jet.router.__isFresh=!1),u("__onroute",o),null!==Jet.router.__xhr&&(Jet.router.__xhr.abort(),_info("忽略了一个路由："+Jet.router.path+"；可能是由于点击过快"),Jet.router.__xhr=null);var i=n(t),a=i.search;t=i.url;var _=v.attr('Jrouter="'+t+'"');Jet.router.activeRouter(_),t=h(t);var s=!1;t in Jet.router.map||(t=Jet.router.base+"/404",s=!0);var J=Jet.router.map[t];if(void 0!=J){if(J._JT_has("?")){if(""==a)a=J.substring(J.indexOf("?")+1);else{var c=J.substring(J.indexOf("?")+1).split("&"),d=a.split("&");c.forEach(function(t){-1==d.indexOf(t)&&(a+="&"+t)})}J=J.substring(0,J.indexOf("?")),s=!0}""!=a&&(a="?"+a),Jet.router.path=t,Jet.router.url=t.substring(Jet.router.base.length);var p={},m=t,g=t+a+Jet.router.hash;"function"==typeof e&&(r=e,e=void 0),void 0==e&&history.pushState(p,m,g),s&&history.replaceState(p,m,g),Jet.router.params=v.urlParam(),Jet.router.lastTrueHash=location.hash,"undefined"!=typeof JUI&&JUI.dialog.removeAll(),Jet.router.clearScoped(),Jet.router.__xhr=v.load(b._getSrc(J,"html"),function(t){Jet.router.__xhr=null;var e=Jet.router._initRouterOut()._JT_html(t);"undefined"!=typeof JUI&&(JUI._jui_mounted=[]),f(e),l(e),b._loadCompRes(e),b._initValidAndLang(e),Jet.router.init(e),"undefined"!=typeof JUI&&JUI.init(e),Jet.load.init(e),r&&r(),u("__onrouted",o)})}}}},Jet.prototype.$route=function(t,e){Jet.router.route(t,e)},Jet.prototype.$route.back=function(t){Jet.router.back()},Jet.prototype.$route.forward=function(t){Jet.router.forward()},window.onhashchange=function(){Jet.router.lastTrueHash!=location.hash&&window.onpopstate()},window.onpopstate=function(t){Jet.router.history?Jet.router.route(location.pathname.substring(Jet.router.base.length)+location.search+location.hash,!1):Jet.router.route(location.hash.substring(1),!1)}}();