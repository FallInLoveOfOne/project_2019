define("inno/switchable/1.0.0/tabs-debug",["$","tabs","./tabs-debug.css"],function(require, exports, module) {
	var $=require("$"),
		AraleTabs=require("tabs");

	require("./tabs-debug.css");

	var Tabs=AraleTabs.extend({
		    attrs: {
		    	triggers: {
                    value: [],
                    getter: function(val) {
                        return this.element.find(val);
                    }
                },
                panels: {
                    value: [],
                    getter: function(val) {
                        return this.element.find(val);
                    }
                },
            	classPrefix: "ui-tabs",
                closeStatus:false
        	},
            events:{
                "click [data-role=close]":"_dePanel"
            },
        	setup: function () {
                if(this.get("closeStatus")){
                    this.get("triggers").append("<a class='iconfont ui-tabs-trigger-close' data-role='close'>&#xf0097;</a>");
                }
            	Tabs.superclass.setup.call(this);
        	},
            addPanel:function(triggerName,panelContent,closeStatus,closeId){
                var nav= this.nav,
                    panelsParent =this.get("panels").parent(),
                    that=this;
                if(closeStatus){
                    triggerName += "<a class='iconfont ui-tabs-trigger-close' data-role='close' id='"+ closeId +"'>&#xf0097;</a>";
                }
                nav.append("<li class='ui-tabs-trigger'>"+ triggerName  +"</li>");
                panelsParent.append("<div class='hidden ui-tabs-panel'>"+ panelContent +"</div>");

                nav.find("li").last().data("value", nav.children().length-1);
                this.set("triggers",nav.children());
                this.set("panels",panelsParent.find(".ui-tabs-panel"));
                if (this.get("triggerType") === "click") {
                     nav.find("li").last().click(focus);
                } else {
                     nav.find("li").last().hover(focus, leave);
                }
                function focus(ev) {
                    that._onFocusTrigger(ev.type, $(this).data("value"));
                }
                function leave() {
                    clearTimeout(that._switchTimer);
                }

            },
            _dePanel:function(e){
                var triggers= this.get("triggers"),
                    panels =this.get("panels"),
                    activeIndex =this.get("activeIndex"),
                    toIndex =activeIndex-1;
                
                triggers[activeIndex].remove();
                panels[activeIndex].remove();
                
                this.switchTo(toIndex);
                for(var i=0,len=this.get("triggers").length;i<len;i++){
                    $(this.get("triggers")[i]).data("value",i);
                }
            }
	});

	module.exports = Tabs;
})