                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                }),this.after("hide",function(){this.activeTrigger&&this.activeTrigger.focus()})},_setupKeyEvents:function(){this.delegateEvents(f(document),"keyup",function(a){27===a.keyCode&&this.get("visible")&&this.hide()})},_showIframe:function(){var a=this;this.iframe||this._createIframe(),this.iframe.attr({src:this._fixUrl(),name:"dialog-iframe"+(new Date).getTime()}),this.iframe.one("load",function(){a.get("visible")&&(a.get("autoFit")&&(clearInterval(a._interval),a._interval=setInterval(function(){a._syncHeight()},300)),a._syncHeight(),a._setPosition(),a.trigger("complete:show"))})},_fixUrl:function(){var a=this.get("content").match(/([^?#]*)(\?[^#]*)?(#.*)?/);return a.shift(),a[1]=(a[1]&&"?"!==a[1]?a[1]+"&":"?")+"t="+(new Date).getTime(),a.join("")},_createIframe:function(){var a=this;this.iframe=f("<iframe>",{src:"javascript:'';",scrolling:"no",frameborder:"no",allowTransparency:"true",css:{border:"none",width:"100%",display:"block",height:"100%",overflow:"hidden"}}).appendTo(this.contentElement),i.mixTo(this.iframe[0]),this.iframe[0].on("close",function(){a.hide()})},_syncHeight:function(){var a;if(this.get("height"))clearInterval(this._interval),delete this._interval;else{try{this._errCount=0,a=e(this.iframe)+"px"}catch(b){this._errCount=(this._errCount||0)+1,this._errCount>=6&&(a=this.get("initialHeight"),clearInterval(this._interval),delete this._interval)}this.contentElement.css("height",a),this.element[0].className=this.element[0].className}}});c.exports=k,c.exports.outerBoxClass="arale-dialog-1_2_1"}),define("arale/dialog/1.2.1/dialog.handlebars",["gallery/handlebars/1.0.2/runtime"],function(a,b,c){var d=a("gallery/handlebars/1.0.2/runtime"),e=d.template;c.exports=e(function(a,b,c,d,e){this.compilerInfo=[3,">= 1.0.0-rc.4"],c=c||{};for(var f in a.helpers)c[f]=c[f]||a.helpers[f];e=e||{};var g,h="",i="function",j=this.escapeExpression;return h+='<div class="',(g=c.classPrefix)?g=g.call(b,{hash:{},data:e}):(g=b.classPrefix,g=typeof g===i?g.apply(b):g),h+=j(g)+'">\n    <a class="',(g=c.classPrefix)?g=g.call(b,{hash:{},data:e}):(g=b.classPrefix,g=typeof g===i?g.apply(b):g),h+=j(g)+'-close" title="关闭本框" href="javascript:;" data-role="close"></a>\n    <div class="',(g=c.classPrefix)?g=g.call(b,{hash:{},data:e}):(g=b.classPrefix,g=typeof g===i?g.apply(b):g),h+=j(g)+'-content" data-role="content"></div>\n</div>\n'})});
