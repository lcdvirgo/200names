function hideScrollBar(){var e=$(document.body);var t=e.scrollTop();setTimeout(function(){e.scrollTop(t-1);e.scrollTop(t)},0)}function removeHash(){var e,t,n=window.location;if("pushState"in history)history.pushState("",document.title,n.pathname+n.search);else{e=document.body.scrollTop;t=document.body.scrollLeft;n.hash="";document.body.scrollTop=e;document.body.scrollLeft=t}}function addHash(e){location.hash="#"+e}function isMobile(){var e=false;(function(t){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))e=true})(navigator.userAgent||navigator.vendor||window.opera);return e}function isSafari(){var e=navigator.userAgent.toLowerCase();if(e.indexOf("safari")!=-1){if(e.indexOf("chrome")>-1){return false}else{return true}}return false}function isIE(){return navigator.appName=="Microsoft Internet Explorer"||navigator.appName=="Netscape"&&(new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})")).exec(navigator.userAgent)!=null}function isMobile2(){if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)){return true}else{return false}}var base=function(){var e;var t;var n;var r;var i;var s;var o;var u=function(){a();c()};var a=function(){e=$("header");t=$(".menu");n=$("header .close");r=$(document.body);i=$(".overlay");o=$(".right-draw");s=$(".side-panel")};var f=function(e){setTimeout(function(){r.addClass("stop-scroll");hideScrollBar()},e)};var l=function(e){setTimeout(function(){r.removeClass("stop-scroll")},e)};var c=function(){t.click(function(){if(r.hasClass("active")){t.removeClass("close");l(600);p();return}r.toggleClass("active");t.toggleClass("close");f(600)});$(document.body).on("click",".overlay",function(){p();l(600)});$(".right-draw-close").click(function(){p();l(600)});$(".image-container").click(function(){sketchItem.start();mouseScroll.stop();p();l(600);home.cancelLoad()});$(".button, .main-menu-section li, .team-item").click(function(){h($(this).attr("data-item"))})};var h=function(e){if(!e){return}s.removeClass("visible");o.scrollTop(0);var t="."+e;addHash(e);$(t,o).addClass("visible");r.addClass("side-active");f(600)};var p=function(){if(r.hasClass("side-active")){r.addClass("side-removing")}r.addClass("removing");r.removeClass("active");r.removeClass("side-active");if(r.hasClass("image-active")){setTimeout(function(){$(".image-container .image").html("");$(".image-container .fact-badge-item").attr("src","")},400)}r.removeClass("image-active");t.removeClass("close");removeHash();setTimeout(function(){r.removeClass("removing");r.removeClass("side-removing");s.removeClass("visible")},600)};var d=function(e){o.empty();var t="/"+e+"?json=1";$.ajax({type:"GET",url:t,success:function(e){v(e)}})};var v=function(e){var t=$('<div class="draw-content"></div>');var n=$("<h1>"+e.page.title+"</h1>");var r=$('<div class="post">'+e.page.content+"</div>");t.append(n);t.append(r);o.append(t);setTimeout(function(){t.fadeIn(300)},1)};return{init:u,openSidebarItem:h}}();var home=function(){var e,t,n,r,i,s;var o,u,a;var f;var l;var c=true;var h={x:960,y:540};var p=[];var d=[1175];var v=[];var m;var g,y,b,w,E,S;var x;var T;var N;var C,k,L,A;var O=[];var M;var _=[];var D=new Date(2014,6,20);var P=false;var H;var B;var j=0;var F,I;var q=function(){U();R();mt();gt();yt();V();it();z();at();if(isMobile2()===true){$(".second .quote").addClass("active");$(".fourth .quote").addClass("active");$(".long-tall-sally").css({"-webkit-transition":"all 0ms"});W();$(".fifth hr").addClass("active");$(".fifth .amazing-row").addClass("active");$(".fifth .row").addClass("active");tt();$(".real-map").addClass("active");ft();var e=$(".timer-circle.shadowed").attr("class");$(".timer-circle.shadowed").attr("class",e+" active");nt($(".timer-circle.shadowed"));rt()}else{X();window.onresize=yt}setInterval(function(){z()},3e4);setTimeout(function(){ut()},100)};var R=function(){var e=["partners","contact","our-dream","the-mission","creatures","route","the-vessel","the-show","the-team","alex"];var t=location.hash.slice(1);if(t!==""){var n=e.indexOf(t);if(n==-1){removeHash;return}P=true;var r=e[n];base.openSidebarItem(r)}else{removeHash()}};var U=function(){e=$(".intro");$headerBackground=$(".intro-background");t=$("video, .video");n=$(".logo");r=$(".sixth");o=$(".countdown .days");u=$(".countdown .hours");a=$(".countdown .minutes");f=$(".image-container")};var z=function(){var e=countdown(D);o.html(countdown(D).days);u.html(countdown(D).hours);a.html(countdown(D).minutes)};var W=function(){var e=1.5;var t=1.05;var n=$(".long-tall-sally");var r={x:2200,y:1511};var i={x:window.innerWidth,y:670};var s=window.innerWidth*e/r.x;var o={x:window.innerWidth*e,y:r.y*s};var u=window.innerWidth/r.x;var a={x:window.innerWidth*t,y:r.y*u*t};var f={x:-((a.x-i.x)/2),y:a.y-i.y};n.css({transform:"scale(1.05) translate("+ -f.x+"px, "+Math.floor(-f.y)*.75+"px)"});setTimeout(function(){$(".long-tall-sally",y).css({opacity:.4})},1e3);setTimeout(function(){$(".internal-border",y).css({opacity:1});setTimeout(function(){$(".bottom.left",y).addClass("animate");$(".bottom.right",y).addClass("animate");$(".left.lefted",y).addClass("animate");$(".right.righted",y).addClass("animate");$(".top.left",y).addClass("animate");$(".top.right",y).addClass("animate")},100)},1500);setTimeout(function(){$(".badge",y).addClass("transition-down")},2e3);setTimeout(function(){$(".chapter-number",y).addClass("transition-down")},2200);setTimeout(function(){$("h1",y).addClass("transition-down")},2400);setTimeout(function(){$(".split",y).addClass("transition-down")},2800);setTimeout(function(){$(".button",y).addClass("transition-down")},3e3)};var X=function(){dt($(".second .button"),400,Z);dt($(".fourth .button"),380,Z);dt($(".seventh .button"),80,Z);dt($(".eighth .button"),40,Z);dt($(".eighth .pulser"),40,et);dt($(".timer-circle.shadowed"),40,nt);dt($(".percentage-of-awesome-achieved"),40,rt,true);dt($(".second .quote"),100);dt($(".fourth .quote"),-100);dt($(".third"),-100,W);dt($("hr.top"),80);dt($(".fifth .amazing-row").eq(0),0,st);dt($(".fifth .row"),0,tt);dt($(".fifth .amazing-row").eq(1),0,st);dt($(".fifth .amazing-row").eq(2),0,st);dt($(".real-map"),-200,ft);dt($("hr.bottom"),40)};var V=function(){T=$(document);g=$(".second");y=$(".third");b=$(".fourth .quote");w=$(".fifth");E=$(".sixth");S=$(".seventh");$eighth=$(".eighth");l=$("video").get(0);s=$(".map-info");m=$(".team-lockup > div");i=$(".red-container");x=$(".node");$status=$(".seventh .status");$status.click(function(){$(".seventh .route").toggleClass("collapsed")});p=[g,y,b,w,E,S,$eighth];var e=[];var t=$(".main-wrapper").height();for(var n=0;n<p.length;n++){var r=p[n].offset().top+L-100;if(r>t){r=t}v.push(r);d.push(p[n].height())}var o=81;$("nav svg").click(function(){$("html, body").animate({scrollTop:0},1e3)});$(".inhale").click(function(){$("html, body").animate({scrollTop:$(".first").offset().top-80},1e3)});$(".fifth .amazing-row img").click(function(){$(document.body).addClass("image-active");var e=$(this).attr("data-large");var t=$(this).attr("data-badge");J(e,t)});$(document).scroll(function(){k=T.scrollTop();A=T.scrollTop()+L;vt();Y(k);var e=0;for(var t=0;t<v.length;t++){if(A>v[t]){e=t;x.eq(t).addClass("active")}else{x.eq(t).removeClass("active")}}var n=0;if(A<v[0]){var r=(A-v[e])/(v[e+1]-v[e]);var s=o+e*o+r*o;s=s*.4;i.width(.6*o+s)}else if(A>v[6]){i.width(o*(e+1))}else if(e<p.length){var r=(A-v[e])/(v[e+1]-v[e]);var s=o+e*o+r*o;i.width(s)}})};var J=function(e,t){intervalCount=0;var n=new Image;var r=new Image;n.onload=function(){home.imageLoaded(n,r)};n.src=e;r.onload=function(){home.imageLoaded(n,r)};r.src=t;$(".content-loader").css({display:"block"});B=10;H=setInterval(K,1500)};var K=function(){if(B<75){B+=Math.floor(Math.random()*15+5)}var e=Math.floor(B/100*162);$(".content-loader").css({"stroke-dashoffset":162+e})};var Q=function(e,t){intervalCount++;if(intervalCount!==2){return}clearInterval(H);B=0;$(".content-loader").css({"stroke-dashoffset":324});F=setTimeout(function(){$(".image",f).append(e);$(".fact-badge-item",f).attr("src",t.src);sketchItem.stop();hideScrollBar();mouseScroll($(".image-container .image img"),$(".image-container"));$(".content-loader").css({display:"none"})},620);timeoutab=setTimeout(function(){$(".content-loader").css({"stroke-dashoffset":162})},621)};var G=function(){clearInterval(H);clearTimeout(F);clearTimeout(I);$(".content-loader").css({"stroke-dashoffset":162});$(".image-container").css({background:"none"});B=0};var Y=function(e){if(c===true&&k>L){l.pause();c=false;$(l).hide()}else if(k<L&&c===false){$(l).show();l.play();c=true}};var Z=function(e){e.addClass("pulse")};var et=function(e){e.addClass("animatePulse")};var tt=function(){var e=$(".blue .number");var t=7345;var n=$(".orange .number");var r=2345;jQuery({value:0}).animate({value:t},{duration:2e3,easing:"easeInOutQuint",step:function(){e.text(Math.ceil(this.value))}})};var nt=function(e){var t=$("line",e);for(var n=0;n<t.length;n++){t.eq(t.length-n).css("-webkit-transition-delay",n*.015+"s");t.eq(t.length-n).css("-moz-transition-delay",n*.015+"s");t.eq(t.length-n).css("transition-delay",n*.015+"s");t.eq(t.length-n).css("-webkit-animation-delay",n*.015+"s");t.eq(t.length-n).css("-moz-animation-delay",n*.015+"s");t.eq(t.length-n).css("animation-delay",n*.015+"s")}e.attr("class","timer-circle shadowed active")};var rt=function(){var e=$(".percentage-of-awesome-achieved line");var t=Math.min(countdown(D).days,40);var n=Math.min(countdown(D).hours,24);percentage=1-Math.min(t,35)/40-n/24/24;var r=Math.ceil(percentage*e.length);var i=e.length*.015;for(var s=r;s>0;s--){var o=r-s;e.eq(o).css("-webkit-transition-delay",i+o*.015+"s");e.eq(o).css("-moz-transition-delay",i+o*.015+"s");e.eq(o).css("transition-delay",i+o*.015+"s");e.eq(o).css("-webkit-animation-delay",o*.015+"s");e.eq(o).css("-moz-animation-delay",o*.015+"s");e.eq(o).css("animation-delay",o*.015+"s");e.eq(o).attr("class","activatable")}setTimeout(function(){var e=$(".percentage-of-awesome-achieved");e.attr("class","timer-circle percentage-of-awesome-achieved active")},1)};var it=function(){x.each(function(e){var t=$(this);t.click(function(){$("html, body").animate({scrollTop:v[e]-L+10},1e3)})})};var st=function(e){setTimeout(function(){$("img",e).css({"transition-delay":"0ms"})},500)};var ot=function(){if(P===true){$("nav").addClass("active");$(".menu").addClass("active");$(".logo").addClass("reveal");$(".inhale").addClass("active");$(".inhale").addClass("animate");return}setTimeout(function(){$("nav").addClass("active");$(".menu").addClass("active")},0);var e=$(".intro-text");setTimeout(function(){e.addClass("phase-1")},0e3);setTimeout(function(){e.addClass("phase-2")},4e3);/*setTimeout(function(){e.addClass("phase-3")},3e3);*/setTimeout(function(){e.addClass("phase-4")},7500);setTimeout(function(){$(".logo").addClass("reveal")},9e3);setTimeout(function(){$(".inhale").addClass("active")},7e3);setTimeout(function(){$(".inhale").addClass("animate")},8e3)};var ut=function(){m.each(function(){})};var at=function(){var e=$(".map-canvas .path");$(".map-canvas").overscroll({direction:"horizontal",captureWheel:false,showThumbs:false});var t=e.width();var n=e.height();var r=$('<div class="item-container start"><span class="dot"></span> START </div>');pt(1152,186,3470,3470,5653,e,r);lt(595,271,2633,3470,5653,e,"Sargasso Sea","This sea has no outer shore, it is outlined by surrounding currents. Its unique ecological conditions make it an ideal birthplace for a multitude of sea fauna.","32°23′54″N, 65°55′04″W");lt(567,201,2541,3470,5653,e,"Lion's Mane Jellyfish","The largest known jelly was found here in 1870. Its diameters was 7.5 feet and the length of its arm was 120 feet.","42°22′30″N 70°44′58″W");lt(539,277,2261,3470,5653,e,"The Great Blue Hole","A deep and narrow area of the ocean. The waters here break the rays of light in a spectacular way, making the sea a saturated bright blue colour. It's also a great location to observe the reef shark and parrotfish.","17°18′55″N 87°32′04″W");lt(647,685,1631,3470,5653,e,"Cape Horn","The Everest of sailing. A legendary stretch of sea, shrouded in legend. After passing it, the sailors of yore were allowed to wear a silver ear-ring - the distinguishing mark of sea-wolves.","55°59′47″S 67°16′18″W");lt(547,439,1249,3470,5653,e,"El-Niño","A stretch of anomolously warm water which sometimes occurs in this area. This leads to mass deaths of creatures in these waters and the development of weather anomalies, such as hurricanes.","10°18′53″S 82°31′45″W");lt(391,269,940,3470,5653,e,"Tongue-eating louse","Here lives one of the stragest parasites known to science. This creatures enfiltrates a fish through its gills, drenches its tongue and stays in its mouth, replacing the tongue.","27°09′24″N, 111°21′06″W");lt(120,269,613,3470,5653,e,"Great Pacific<br>garbage patch","An area of the Pacific twice the size of Texas, housing over 100 tonnes of garbage. Home to some of the weirdest lifeforms on the planet.","36°35′52″N, 166°38′26″W");lt(1920,656,2430,6138,1e4,e,"Colossal Antarctic Squid","The largest colossal squid known to science was captured here in 2007. This monster weighed a whooping 1/2 tonne (over 1000 lb) and measured around 50 feet.","63°04′29″S 164°10′47″E");lt(1345,447,810,6138,1e4,e,"Saya de Malha Bank","Biggest underwater bank in the world - stretching over 15,700 square miles. Its floor is covered in unique vegetation which hides countless creatures that can't be found anywhere else.","10°30′00″S, 61°30′00″E");lt(1053,485,400,6138,1e4,e,"Plankton clusters","Little is known about swarms of gelata. Our route will cover the largest known such clusters, located here. We will be the first to thouroughly inspect these masses and find new ones.","22°52′34″S, 14°29′22″W");var i=$('<div class="item-container end"><span class="dot"></span> FINISH </div>');pt(879,193,0,1e4,1e4,e,i);$("svg",s).click(function(){ht()})};var ft=function(){setTimeout(function(){$(".route.collapsed").removeClass("collapsed")},5653)};var lt=function(e,t,n,r,i,s,o,u,a){var f=(r-n)/r*i;var l=$('<div class="pin-box"><span class="pin"></span><span class="pin-shadow"></span></div>');var c=$(".pin",l);var h=$(".pin-shadow",l);l.attr("data-name",o);l.attr("data-desc",u);l.attr("data-coords",a);l.css({left:e,top:t});c.css({transition:"all 300ms ease "+f+"ms"});h.css({transition:"all 300ms ease "+f+"ms"});l.mouseover(function(){var e=$(this);e.addClass("hovering");e.addClass("over")});l.mouseout(function(){var e=$(this);setTimeout(function(){if(!e.hasClass("over")){e.removeClass("hovering")}},350);e.removeClass("over")});l.click(function(){var e=$(this);ct(e)});s.append(l)};var ct=function(e){var t=e.attr("data-name");var n=e.attr("data-coords");var r=e.attr("data-desc");$(".location",s).html(t);$(".coordinates",s).html(n);$(".amazing-info",s).html(r);s.removeClass("hidden")};var ht=function(){s.addClass("hidden")};var pt=function(e,t,n,r,i,s,o){var u=(r-n)/r*i;o.css({transition:"all 300ms ease "+u+"ms",left:e,top:t});s.append(o)};var dt=function(e,t,n,r){if(!t){t=0}if(!r){r=false}var i=e.offset().top-t;O.push({element:e,position:i,triggerFunction:n,dontAddActive:r})};var vt=function(){if(O.length===0){return}var e=k+C;for(var t=O.length-1;t>=0;t--){var n=O[t];if(n.position<e){if(n.dontAddActive===false){n.element.addClass("active")}if(n.triggerFunction){n.triggerFunction(n.element)}O.splice(t,1)}}};var mt=function(e){$.getJSON("http://graph.facebook.com/http://aquatilis.tv/",function(e){if(!e.shares){e.shares=0}$(".facebook-shares .sharer").text(e.shares+" fishies")})};var gt=function(e){$.ajax({type:"GET",url:"http://urls.api.twitter.com/1/urls/count.json?url=http://aquatilis.tv/",dataType:"jsonp",success:function(e){$(".twitter-shares .sharer").text(e.count+" birdies")}})};var yt=function(){var r=document.querySelector(".background-stars");var i=r.offsetWidth-(r.offsetWidth-r.clientWidth);var s=window.innerHeight+1;L=s;C=s-s/6;e.height(s);$headerBackground.height(s);var o={x:e.width(),y:e.height()};var u,a;var f=Math.min(h.x/o.x,h.y/o.y);u=h.x/f;a=h.y/f;t.css({width:u,height:a,marginTop:-a/2+"px",marginLeft:-u/2+"px"});n.css({"margin-top":o.y/2-n.height()});$(".background-final-chapter").height($(".main-wrapper").height());$(".background-final-chapter").width(i);$(".background-fix").width(i);$(document.body).width(i);$(document.body).height(document.innerHeight)};var bt=function(){N=skrollr.init()};var wt=function(){setTimeout(function(){home.resize()},1e3);setTimeout(function(){home.activateScrollr()},1200);setTimeout(function(){$(document.body).css({overflow:"visible"});$(".preloader").fadeOut(2e3);home.resize();$("video").animate({opacity:1},2e3);l.pause();l.playbackRate=1;l.currentTime=0;l.play()},2500);setTimeout(function(){home.runIntro()},4500)};var Et=function(){$("video").replaceWith('<img class="video" src="/wp-content/themes/twentyfourteen/images/background-poster.png" />');$(".canvas-container").remove();U();$("nav").width(window.innerWidth);$(document.body).addClass("mobile");home.resize();setTimeout(function(){$(".preloader").fadeOut(2e3);t.animate({opacity:.25},2e3)},2500);setTimeout(function(){home.runIntro()},3200)};return{init:q,resize:yt,runIntro:ot,activateScrollr:bt,initSequence:wt,initMobile:Et,imageLoaded:Q,cancelLoad:G}}();$(document).ready(function(){if($(document.body).hasClass("home")){home.init();if(isMobile2()==false){var e=$("video");var t=e.get(0);var n=false;if(isSafari()){$(document.body).addClass("safari")}if(isIE()){$(document.body).addClass("explorer")}sketchItem.start();e.on("canplaythrough",function(){if(n===true){t.oncanplaythrough=null;return}else{n=true;home.initSequence()}})}else{$(document.body).css({overflow:"visible"});home.initMobile()}}})