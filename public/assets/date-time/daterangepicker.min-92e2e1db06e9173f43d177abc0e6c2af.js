!function(b){var a=function(k,s,i){var q=typeof s=="object";var f;this.startDate=moment().startOf("day");this.endDate=moment().endOf("day");this.minDate=false;this.maxDate=false;this.changed=false;this.cleared=false;this.showDropdowns=false;this.dropdownAdjusts=false;this.ranges={};this.dateLimit=false;this.opens="right";this.cb=function(){};this.format="MM/DD/YYYY";this.separator=" - ";this.showWeekNumbers=false;this.buttonClasses=["btn"];this.applyClass="btn btn-small btn-success";this.clearClass="btn btn-small";this.locale={applyLabel:"Apply",clearLabel:"Clear",fromLabel:"From",toLabel:"To",weekLabel:"W",customRangeLabel:"Custom Range",daysOfWeek:moment()._lang._weekdaysMin,monthNames:moment()._lang._monthsShort,firstDay:0};f=this.locale;this.leftCalendar={month:moment([this.startDate.year(),this.startDate.month(),1]),calendar:[]};this.rightCalendar={month:moment([this.endDate.year(),this.endDate.month(),1]),calendar:[]};this.element=b(k);if(this.element.hasClass("pull-right")){this.opens="left"}if(this.element.is("input")){this.element.on({click:b.proxy(this.show,this),focus:b.proxy(this.show,this)})}else{this.element.on("click",b.proxy(this.show,this))}if(q){if(typeof s.locale=="object"){b.each(f,function(t,c){f[t]=s.locale[t]||c})}if(s.applyClass){this.applyClass=s.applyClass}if(s.clearClass){this.clearClass=s.clearClass}}var d='<div class="daterangepicker dropdown-menu"><div class="calendar left"></div><div class="calendar right"></div><div class="ranges"><div class="range_inputs"><div class="daterangepicker_start_input" style="float: left"><label for="daterangepicker_start">'+this.locale.fromLabel+'</label><input class="input-mini" type="text" name="daterangepicker_start" value="" disabled="disabled" /></div><div class="daterangepicker_end_input" style="float: left; padding-left: 11px"><label for="daterangepicker_end">'+this.locale.toLabel+'</label><input class="input-mini" type="text" name="daterangepicker_end" value="" disabled="disabled" /></div><button class="'+this.applyClass+' applyBtn" disabled="disabled">'+this.locale.applyLabel+'</button>&nbsp;<button class="'+this.clearClass+' clearBtn">'+this.locale.clearLabel+"</button></div></div></div>";this.container=b(d).appendTo("body");if(q){if(typeof s.format=="string"){this.format=s.format}if(typeof s.separator=="string"){this.separator=s.separator}if(typeof s.startDate=="string"){this.startDate=moment(s.startDate,this.format).startOf("day")}if(typeof s.endDate=="string"){this.endDate=moment(s.endDate,this.format).endOf("day")}if(typeof s.minDate=="string"){this.minDate=moment(s.minDate,this.format).startOf("day")}if(typeof s.maxDate=="string"){this.maxDate=moment(s.maxDate,this.format).endOf("day")}if(typeof s.startDate=="object"){if(s.startDate instanceof Date){this.startDate=moment(s.startDate).startOf("day")}else{this.startDate=s.startDate.startOf("day")}}if(typeof s.endDate=="object"){if(s.endDate instanceof Date){this.endDate=moment(s.endDate).endOf("day")}else{this.endDate=s.endDate.endOf("day")}}if(typeof s.minDate=="object"){if(s.minDate instanceof Date){this.minDate=moment(s.minDate).startOf("day")}else{this.minDate=s.minDate.startOf("day")}}if(typeof s.maxDate=="object"){if(s.maxDate instanceof Date){this.maxDate=moment(s.maxDate).endOf("day")}else{this.maxDate=s.maxDate.endOf("day")}}if(typeof s.ranges=="object"){for(var m in s.ranges){var e=moment(s.ranges[m][0]).startOf("day");var j=moment(s.ranges[m][1]).endOf("day");if(this.minDate&&e.isBefore(this.minDate)){e=moment(this.minDate)}if(this.maxDate&&j.isAfter(this.maxDate)){j=moment(this.maxDate)}if((this.minDate&&j.isBefore(this.minDate))||(this.maxDate&&e.isAfter(this.maxDate))){continue}this.ranges[m]=[e,j]}var n="<ul>";for(var m in this.ranges){n+="<li>"+m+"</li>"}n+="<li>"+this.locale.customRangeLabel+"</li>";n+="</ul>";this.container.find(".ranges").prepend(n)}if(typeof s.dateLimit=="object"){this.dateLimit=s.dateLimit}if(typeof s.locale=="object"){if(typeof s.locale.firstDay=="number"){this.locale.firstDay=s.locale.firstDay;var l=s.locale.firstDay;while(l>0){this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());l--}}}if(typeof s.opens=="string"){this.opens=s.opens}if(typeof s.showWeekNumbers=="boolean"){this.showWeekNumbers=s.showWeekNumbers}if(typeof s.buttonClasses=="string"){this.buttonClasses=[s.buttonClasses]}if(typeof s.buttonClasses=="object"){this.buttonClasses=s.buttonClasses}if(typeof s.showDropdowns=="boolean"){this.showDropdowns=s.showDropdowns}if(typeof s.dropdownAdjusts=="boolean"){this.dropdownAdjusts=s.dropdownAdjusts}}var p=this.container;b.each(this.buttonClasses,function(c,t){p.find("button").addClass(t)});if(this.opens=="right"){var h=this.container.find(".calendar.left");var r=this.container.find(".calendar.right");h.removeClass("left").addClass("right");r.removeClass("right").addClass("left")}if(typeof s=="undefined"||typeof s.ranges=="undefined"){this.container.find(".calendar").show();this.move()}if(typeof i=="function"){this.cb=i}this.container.addClass("opens"+this.opens);if(!q||(typeof s.startDate=="undefined"&&typeof s.endDate=="undefined")){if(b(this.element).is("input[type=text]")){var g=b(this.element).val();var o=g.split(this.separator);if(o.length==2){this.startDate=moment(o[0],this.format).startOf("day");this.endDate=moment(o[1],this.format).endOf("day")}}}this.container.on("mousedown",b.proxy(this.mousedown,this));this.container.find(".calendar").on("click",".prev",b.proxy(this.clickPrev,this));this.container.find(".calendar").on("click",".next",b.proxy(this.clickNext,this));this.container.find(".ranges").on("click","button.applyBtn",b.proxy(this.clickApply,this));this.container.find(".ranges").on("click","button.clearBtn",b.proxy(this.clickClear,this));this.container.find(".calendar").on("click","td.available",b.proxy(this.clickDate,this));this.container.find(".calendar").on("mouseenter","td.available",b.proxy(this.enterDate,this));this.container.find(".calendar").on("mouseleave","td.available",b.proxy(this.updateView,this));this.container.find(".ranges").on("click","li",b.proxy(this.clickRange,this));this.container.find(".ranges").on("mouseenter","li",b.proxy(this.enterRange,this));this.container.find(".ranges").on("mouseleave","li",b.proxy(this.updateView,this));this.container.find(".calendar").on("change","select.yearselect",b.proxy(this.updateYear,this));this.container.find(".calendar").on("change","select.monthselect",b.proxy(this.updateMonth,this));this.element.on("keyup",b.proxy(this.updateFromControl,this));this.updateView();this.updateCalendars()};a.prototype={constructor:a,mousedown:function(c){c.stopPropagation();if(!this.showDropdowns||b(c.target).not("select").length){c.preventDefault()}},updateView:function(){this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year());this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year());this.container.find("input[name=daterangepicker_start]").val(this.startDate.format(this.format));this.container.find("input[name=daterangepicker_end]").val(this.endDate.format(this.format));if(this.startDate.isSame(this.endDate)||this.startDate.isBefore(this.endDate)){this.container.find("button.applyBtn").removeAttr("disabled")}else{this.container.find("button.applyBtn").attr("disabled","disabled")}},updateFromControl:function(){if(!this.element.is("input")){return}if(!this.element.val().length){return}var d=this.element.val().split(this.separator);var e=moment(d[0],this.format).startOf("day");var c=moment(d[1],this.format).endOf("day");if(e==null||c==null){return}if(c.isBefore(e)){return}this.startDate=e;this.endDate=c;this.updateView();this.cb(this.startDate,this.endDate);this.updateCalendars()},notify:function(){if(!this.cleared){this.updateView()}if(this.element.is("input")){this.element.val(this.cleared?"":this.startDate.format(this.format)+this.separator+this.endDate.format(this.format))}var d=(this.cleared?null:this.startDate),c=(this.cleared?null:this.endDate);this.cleared=false;this.cb(d,c)},move:function(){var c=b(this.container).find(".ranges").outerWidth();if(b(this.container).find(".calendar").is(":visible")){var d=24;c+=b(this.container).find(".calendar").outerWidth()*2+d}if(this.opens=="left"){this.container.css({top:this.element.offset().top+this.element.outerHeight(),right:b(window).width()-this.element.offset().left-this.element.outerWidth(),left:"auto","min-width":c});if(this.container.offset().left<0){this.container.css({right:"auto",left:9})}}else{this.container.css({top:this.element.offset().top+this.element.outerHeight(),left:this.element.offset().left,right:"auto","min-width":c});if(this.container.offset().left+this.container.outerWidth()>b(window).width()){this.container.css({left:"auto",right:0})}}},show:function(c){this.container.show();this.move();if(c){c.stopPropagation();c.preventDefault()}this.changed=false;this.element.trigger("shown",{target:c.target,picker:this});b(document).on("mousedown",b.proxy(this.hide,this))},hide:function(c){this.container.hide();b(document).off("mousedown",this.hide);if(this.changed){this.changed=false;this.notify()}},enterRange:function(f){var c=f.target.innerHTML;if(c==this.locale.customRangeLabel){this.updateView()}else{var d=this.ranges[c];this.container.find("input[name=daterangepicker_start]").val(d[0].format(this.format));this.container.find("input[name=daterangepicker_end]").val(d[1].format(this.format))}},clickRange:function(f){var c=f.target.innerHTML;if(c==this.locale.customRangeLabel){this.container.find(".calendar").show();this.move()}else{var d=this.ranges[c];this.startDate=d[0];this.endDate=d[1];this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year());this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year());this.updateCalendars();this.changed=true;this.container.find(".calendar").hide();this.move();this.hide()}},clickPrev:function(d){var c=b(d.target).parents(".calendar");if(c.hasClass("left")){this.leftCalendar.month.subtract("month",1)}else{this.rightCalendar.month.subtract("month",1)}this.updateCalendars()},clickNext:function(d){var c=b(d.target).parents(".calendar");if(c.hasClass("left")){this.leftCalendar.month.add("month",1)}else{this.rightCalendar.month.add("month",1)}this.updateCalendars()},enterDate:function(f){var h=b(f.target).attr("data-title");var g=h.substr(1,1);var c=h.substr(3,1);var d=b(f.target).parents(".calendar");if(d.hasClass("left")){this.container.find("input[name=daterangepicker_start]").val(this.leftCalendar.calendar[g][c].format(this.format))}else{this.container.find("input[name=daterangepicker_end]").val(this.rightCalendar.calendar[g][c].format(this.format))}},clickDate:function(j){var k=b(j.target).attr("data-title");var l=k.substr(1,1);var g=k.substr(3,1);var d=b(j.target).parents(".calendar");if(d.hasClass("left")){var f=this.leftCalendar.calendar[l][g];var i=this.endDate;if(typeof this.dateLimit=="object"){var c=moment(f).add(this.dateLimit).endOf("day");if(i.isAfter(c)){i=c}}this.element.trigger("clicked",{dir:"left",picker:this})}else{var f=this.startDate;var i=this.rightCalendar.calendar[l][g];if(typeof this.dateLimit=="object"){var h=moment(i).subtract(this.dateLimit).startOf("day");if(f.isBefore(h)){f=h}}this.element.trigger("clicked",{dir:"right",picker:this})}d.find("td").removeClass("active");if(f.isSame(i)||f.isBefore(i)){b(j.target).addClass("active");if(!f.isSame(this.startDate)||!i.isSame(this.endDate)){this.changed=true}this.startDate=f;this.endDate=i}else{if(f.isAfter(i)){b(j.target).addClass("active");this.changed=true;this.startDate=f;this.endDate=moment(f).add("day",1).endOf("day")}}this.leftCalendar.month.month(this.startDate.month()).year(this.startDate.year());this.rightCalendar.month.month(this.endDate.month()).year(this.endDate.year());this.updateCalendars()},clickApply:function(c){this.hide()},clickClear:function(c){this.changed=true;this.cleared=true;this.hide()},updateYear:function(d){var c=parseInt(b(d.target).val());var f=b(d.target).closest(".calendar").hasClass("left");if(f){this.leftCalendar.month.month(this.startDate.month()).year(c)}else{this.rightCalendar.month.month(this.endDate.month()).year(c)}this.updateCalendars()},updateMonth:function(d){var c=parseInt(b(d.target).val());var f=b(d.target).closest(".calendar").hasClass("left");if(f){this.leftCalendar.month.month(c).year(this.startDate.year())}else{this.rightCalendar.month.month(c).year(this.endDate.year())}this.updateCalendars()},updateCalendars:function(){this.leftCalendar.calendar=this.buildCalendar(this.leftCalendar.month.month(),this.leftCalendar.month.year(),"left");this.rightCalendar.calendar=this.buildCalendar(this.rightCalendar.month.month(),this.rightCalendar.month.year(),"right");this.container.find(".calendar.left").html(this.renderCalendar(this.leftCalendar.calendar,this.startDate,this.minDate,this.maxDate));this.container.find(".calendar.right").html(this.renderCalendar(this.rightCalendar.calendar,this.endDate,this.startDate,this.maxDate));this.container.find(".ranges li").removeClass("active");var c=true;var e=0;for(var d in this.ranges){if(this.startDate.isSame(this.ranges[d][0])&&this.endDate.isSame(this.ranges[d][1])){c=false;this.container.find(".ranges li:eq("+e+")").addClass("active")}e++}if(c){this.container.find(".ranges li:last").addClass("active")}this.element.trigger("updated",this)},buildCalendar:function(m,o,n){var c=moment([o,m,1]);var k=moment(c).subtract("month",1).month();var j=moment(c).subtract("month",1).year();var p=moment([j,k]).daysInMonth();var e=c.day();var h=[];for(var g=0;g<6;g++){h[g]=[]}var l=p-e+this.locale.firstDay+1;if(l>p){l-=7}if(e==this.locale.firstDay){l=p-6}var f;if(n=="right"){f=moment([j,k,l]).endOf("day")}else{f=moment([j,k,l]).startOf("day")}for(var g=0,d=0,q=0;g<42;g++,d++,f=moment(f).add("day",1)){if(g>0&&d%7==0){d=0;q++}h[q][d]=f}return h},renderDropdowns:function(h,g,c){var k=h.month();var f='<select class="monthselect">';var d=false;var p=false;for(var e=0;e<12;e++){if((!d||e>=g.month())&&(!p||e<=c.month())){f+="<option value='"+e+"'"+(e===k?" selected='selected'":"")+">"+this.locale.monthNames[e]+"</option>"}}f+="</select>";var j=h.year();var i=(c&&c.year())||(j+5);var o=(g&&g.year())||(j-50);var n='<select class="yearselect">';for(var l=o;l<=i;l++){n+='<option value="'+l+'"'+(l===j?' selected="selected"':"")+">"+l+"</option>"}n+="</select>";return f+n},renderCalendar:function(h,g,f,c){var j='<table class="table-condensed">';j+="<thead>";j+="<tr>";if(this.showWeekNumbers){j+="<th></th>"}if(!f||f.isBefore(h[1][1])){j+='<th class="prev available"><i class="icon-arrow-left"></i></th>'}else{j+="<th></th>"}var d=this.locale.monthNames[h[1][1].month()]+h[1][1].format(" YYYY");if(this.showDropdowns){d=this.renderDropdowns(h[1][1],f,c)}j+='<th colspan="5" style="width: auto">'+d+"</th>";if(!c||c.isAfter(h[1][1])){j+='<th class="next available"><i class="icon-arrow-right"></i></th>'}else{j+="<th></th>"}j+="</tr>";j+="<tr>";if(this.showWeekNumbers){j+='<th class="week">'+this.locale.weekLabel+"</th>"}b.each(this.locale.daysOfWeek,function(n,m){j+="<th>"+m+"</th>"});j+="</tr>";j+="</thead>";j+="<tbody>";for(var l=0;l<6;l++){j+="<tr>";if(this.showWeekNumbers){j+='<td class="week">'+h[l][0].week()+"</td>"}for(var e=0;e<7;e++){var i="available ";i+=(h[l][e].month()==h[1][1].month())?"":"off";if((f&&h[l][e].isBefore(f))||(c&&h[l][e].isAfter(c))){i=" off disabled "}else{if(h[l][e].isSame(g)){i+=" active ";if(h[l][e].isSame(this.startDate)){i+=" start-date "}if(h[l][e].isSame(this.endDate)){i+=" end-date "}}else{if(h[l][e]>=this.startDate&&h[l][e]<=this.endDate){i+=" in-range ";if(h[l][e].isSame(this.startDate)){i+=" start-date "}if(h[l][e].isSame(this.endDate)){i+=" end-date "}}}}var k="r"+l+"c"+e;j+='<td class="'+i.replace(/\s+/g," ").replace(/^\s?(.*?)\s?$/,"$1")+'" data-title="'+k+'">'+h[l][e].date()+"</td>"}j+="</tr>"}j+="</tbody>";j+="</table>";return j}};b.fn.daterangepicker=function(d,c){this.each(function(){var e=b(this);if(!e.data("daterangepicker")){e.data("daterangepicker",new a(e,d,c))}});return this}}(window.jQuery);
