(function(e){"use strict";e.fn.superfish=function(t){var n=e.fn.superfish,r=n.c,i=e(['<span class="',r.arrowClass,'"> &#187;</span>'].join("")),s=function(){var t=e(this),n=u(t);clearTimeout(n.sfTimer);t.showSuperfishUl().siblings().hideSuperfishUl()},o=function(){var t=e(this),r=u(t),i=n.op;clearTimeout(r.sfTimer);r.sfTimer=setTimeout(function(){i.retainPath=e.inArray(t[0],i.$path)>-1;t.hideSuperfishUl();if(i.$path.length&&t.parents(["li.",i.hoverClass].join("")).length<1){s.call(i.$path)}},i.delay)},u=function(e){var t=e.parents(["ul.",r.menuClass,":first"].join(""))[0];n.op=n.o[t.serial];return t},a=function(e){e.addClass(r.anchorClass).append(i.clone())};return this.each(function(){var i=this.serial=n.o.length;var u=e.extend({},n.defaults,t);u.$path=e("li."+u.pathClass,this).slice(0,u.pathLevels).each(function(){e(this).addClass([u.hoverClass,r.bcClass].join(" ")).filter("li:has(ul)").removeClass(u.pathClass)});n.o[i]=n.op=u;e("li:has(ul)",this)[e.fn.hoverIntent&&!u.disableHI?"hoverIntent":"hover"](s,o).each(function(){if(u.autoArrows)a(e(">a:first-child",this))}).not("."+r.bcClass).hideSuperfishUl();var f=e("a",this);f.each(function(e){var t=f.eq(e).parents("li");f.eq(e).focus(function(){s.call(t)}).blur(function(){o.call(t)})});u.onInit.call(this)}).each(function(){var t=[r.menuClass];if(n.op.dropShadows&&!(e.browser.msie&&e.browser.version<7))t.push(r.shadowClass);e(this).addClass(t.join(" "))})};var t=e.fn.superfish;t.o=[];t.op={};t.IE7fix=function(){var n=t.op;if(e.browser.msie&&e.browser.version>6&&n.dropShadows&&n.animation.opacity!=undefined)this.toggleClass(t.c.shadowClass+"-off")};t.c={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",arrowClass:"sf-sub-indicator",shadowClass:"sf-shadow"};t.defaults={hoverClass:"sfHover",pathClass:"overideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},speed:"normal",autoArrows:true,dropShadows:true,disableHI:false,onInit:function(){},onBeforeShow:function(){},onShow:function(){},onHide:function(){}};e.fn.extend({hideSuperfishUl:function(){var n=t.op,r=n.retainPath===true?n.$path:"";n.retainPath=false;var i=e(["li.",n.hoverClass].join(""),this).add(this).not(r).removeClass(n.hoverClass).find(">ul").hide().css("visibility","hidden");n.onHide.call(i);return this},showSuperfishUl:function(){var e=t.op,n=t.c.shadowClass+"-off",r=this.addClass(e.hoverClass).find(">ul:hidden").css("visibility","visible");t.IE7fix.call(r);e.onBeforeShow.call(r);r.animate(e.animation,e.speed,function(){t.IE7fix.call(r);e.onShow.call(r)});return this}})})(jQuery)