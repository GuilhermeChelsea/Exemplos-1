
(function(){function z(a){a.target.h.closest(".mbr-slider").classList.contains("in")&&a.target.playVideo()}function A(a,d){var b=Array.from(a.querySelectorAll(d));a.matches&&a.matches(d)&&b.splice(0,0,a);return b}function l(a){a=a.target;"undefined"!==typeof Masonry&&A(a,".mbr-gallery").forEach(function(a){var b=a.querySelector(".mbr-gallery-row");if(b)imagesLoaded(b).on("progress",function(a,d){var g=new Masonry(b,{itemSelector:".mbr-gallery-item:not(.mbr-gallery-item__hided)",percentPosition:!0,
horizontalOrder:!0});g.reloadItems();b.addEventListener("filter",function(){g.reloadItems();g.layout();window.dispatchEvent(new CustomEvent("update.parallax"))}.bind(this,b));imagesLoaded(b).on("progress",function(){g.layout()})})})}function t(a,d,b,c,e){var g=a.querySelector("img");g.complete&&50<g.naturalWidth&&50<g.naturalHeight?u(g,a,d,b,c,e):g.addEventListener("load",function(){u(g,a,d,b,c,e)},{once:!0})}function u(a,d,b,c,e,g){var m=a.naturalWidth,p=a.naturalHeight;c=c/b>m/p?(b-2*g)*m/p:c-2*
g;c=c>=m?m:c;b=(b-c*p/m)/2;a.style.width=parseInt(c)+"px";a.style.height=c*p/m+"px";d.style.top=b+e+"px";"flex"==getComputedStyle(d.parentElement,null).display&&(d.parentElement.style.display="block")}function B(a,d,b,c,e,g){a.querySelector(".modal-dialog").querySelectorAll(".carousel-item").forEach(function(a){if(!g&&!a.classList.contains("carousel-item-next")&&!a.classList.contains("carousel-item-prev")||g&&!a.classList.contains("active"))a.classList.contains("video-container")?(a.style.top=c+"px",
a.style.height=b-2*c-2*e+"px"):t(a,b,d,c,e)})}function r(){var a=window.innerWidth-0,d=window.innerHeight-0;if(k){var b,c=!1;k.querySelector(".modal-dialog").querySelector(".carousel-item.carousel-item-next")?b=k.querySelector(".modal-dialog").querySelector(".carousel-item.carousel-item-next"):(b=k.querySelector(".modal-dialog").querySelector(".carousel-item.active"),c=!0);b.classList.contains("video-container")?(b.style.top="0px",b.style.height=d-0-20+"px"):t(b,d,a,0,10);clearTimeout(v);v=setTimeout(B,
200,k,a,d,0,10,c)}}var f,h="function"==typeof jQuery;h&&(f=jQuery);var q;h?q=f("html").hasClass("is-builder"):q=document.querySelector("html").classList.contains("is-builder");if(!q){var w=document.createElement("script");w.src="https://www.youtube.com/iframe_api";var x=document.getElementsByTagName("script")[0];x.parentNode.insertBefore(w,x);var n=[];document.querySelectorAll(".carousel-item.video-container > img").forEach(function(a){return a.style.display="none"});window.onYouTubeIframeAPIReady=
function(){var a=a||{};a.YTAPIReady||(a.YTAPIReady=!0,document.dispatchEvent(new CustomEvent("YTAPIReady")));document.querySelectorAll(".video-slide").forEach(function(a,b){var c=document.createElement("div");c.setAttribute("id","mbr-video-"+b);c.setAttribute("data-video-num",b);c.classList.add("mbr-background-video");var e=document.createElement("div");c.classList.add("item-overlay");document.querySelectorAll(".video-container")[b].appendChild(c).appendChild(e);a.setAttribute("data-video-num",b);
-1!==a.getAttribute("data-video-url").indexOf("vimeo.com")?(c={id:a.getAttribute("data-video-url"),width:"100%",height:"100%",loop:!0},c=new Vimeo.Player("mbr-video-"+b,c),c.playVideo=Vimeo.play):(c=YT.Player,e=a.getAttribute("data-video-url"),e="false"===e?!1:(e=/(?:\?v=|\/embed\/|\.be\/)([-a-z0-9_]+)/i.exec(e)||/^([-a-z0-9_]+)$/i.exec(e))?e[1]:!1,c=new c("mbr-video-"+b,{height:"100%",width:"100%",videoId:e,events:{onReady:z},playerVars:{rel:0}}));n.push(c)})}}if(h)f(document).on("add.cards",function(a){var d=
f(a.target);d.is(".mbr-gallery")&&(d.on("click",".mbr-gallery-filter li",function(a){a.preventDefault();var c=f(this).closest("li");c.parent().find("li").removeClass("active");c.addClass("active");a=c.closest("section").find(".mbr-gallery-row");var e=f(this)[0].textContent.trim();d.find(".mbr-gallery-item").each(function(a,b){var d=f(this),h=d.attr("data-tags").split(",").map(function(a){return a.trim()});-1!==f.inArray(e,h)||c.hasClass("mbr-gallery-filter-all")?d.removeClass("mbr-gallery-item__hided"):
(d.addClass("mbr-gallery-item__hided"),d.css("left","300px"))});a.closest(".mbr-gallery-row")[0].dispatchEvent(new CustomEvent("filter"))}),a.target.querySelector(".modal").addEventListener("show.bs.modal",function(a){return a.preventDefault()}))});if(q)f(document).on("changeButtonColor.cards",function(a){var d=f(a.target);if(0<d.find(".mbr-gallery-filter").length&&f(a.target).find(".mbr-gallery-filter").hasClass("gallery-filter-active")){var b=(d.find(".mbr-gallery-filter .mbr-gallery-filter-all").find("a").attr("class")||
"").replace(/(^|\s)active(\s|$)/," ").trim();d.find(".mbr-gallery-filter ul li:not(.mbr-gallery-filter-all) a").attr("class",b)}l(a)});if(h)f(document).on("add.cards changeParameter.cards",function(a){var d=f(a.target),b=[];d.find(".mbr-gallery-item").each(function(a){(f(this).attr("data-tags")||"").trim().split(",").map(function(a){a=a.trim();-1===f.inArray(a,b)&&b.push(a)})});if(0<d.find(".mbr-gallery-filter").length&&f(a.target).find(".mbr-gallery-filter").hasClass("gallery-filter-active")){var c=
"";d.find(".mbr-gallery-filter ul li:not(.mbr-gallery-filter-all)").remove();var e=d.find(".mbr-gallery-filter .mbr-gallery-filter-all").clone();e.find("a").removeClass("active");b.map(function(a){e.find("a").length?e.find("a").text(a):e.text(a);c+="<li>"+e.html()+"</li>"});d.find(".mbr-gallery-filter ul").append(c)}l(a)});if(h)f(document).on("change.cards",function(a){l(a)});if(h)f(document).on("lazyload",function(a){l(a);f(window).scrollEnd(function(){l(a)},250)});document.addEventListener("DOMContentLoaded",
function(a){l(a)});document.querySelectorAll(".mbr-gallery-item").forEach(function(a){return a.addEventListener("click",function(a){return a.stopPropagation()})});var y,v,k,C=function(a){var d=a.querySelector(".mbr-gallery-filter-all"),b=[];if(a)if(a.querySelectorAll(".mbr-gallery-item").forEach(function(a){(a.getAttribute("data-tags")||"").trim().split(",").map(function(a){a=a.trim();-1==b.indexOf(a)&&b.push(a)})}),0<a.querySelectorAll(".mbr-gallery-filter").length&&a.querySelector(".mbr-gallery-filter").classList.contains("gallery-filter-active")){var c=
[];a.querySelectorAll(".mbr-gallery-filter > ul > li").forEach(function(a,b){0!=b&&a.removeChild(a.firstChild)});b.map(function(a){var b=document.createElement("li"),d=document.createElement("a");d.classList.add("btn");d.classList.add("btn-md");d.classList.add("btn-primary-outline");d.classList.add("display-7");d.innerText=a;b.appendChild(d);c.push(b)});var e=a.querySelector(".mbr-gallery-filter > ul");e.appendChild(d);c.forEach(function(a){return e.appendChild(a)});a.querySelectorAll(".mbr-gallery-filter > ul > li").forEach(function(d){d.addEventListener("click",
function(b){b.preventDefault();var c=d.closest("li");c.parentElement.querySelectorAll("li").forEach(function(a){return a.classList.remove("active")});c.classList.add("active");b=c.closest("section").querySelector(".mbr-gallery-row");var e=c.querySelector("a").innerHTML.trim();a.querySelectorAll(".mbr-gallery-item").forEach(function(a){-1!=a.getAttribute("data-tags").split(",").map(function(a){return a.trim()}).indexOf(e)||c.classList.contains("mbr-gallery-filter-all")?a.classList.remove("mbr-gallery-item__hided"):
(a.classList.add("mbr-gallery-item__hided"),a.style.left="300px")});b.closest(".mbr-gallery-row").dispatchEvent(new CustomEvent("filter"))})})}else a.querySelector(".mbr-gallery-item__hided").classList.remove("mbr-gallery-item__hided"),a.querySelector(".mbr-gallery-row").dispatchEvent(new CustomEvent("filter"))},h=document.querySelectorAll(".mbr-gallery");h.length&&h.forEach(function(a){a.querySelector(".mbr-gallery-filter")&&C(a);a.addEventListener("show.bs.modal",function(a){clearTimeout(y);y=setTimeout(function(){var b=
a.relatedTarget.parentElement.getAttribute("data-video-num");(b=a.target.querySelector(".carousel-item").querySelector('.mbr-background-video[data-video-num="'+b+'"]'))&&b.closest(".carousel-item").classList.contains("active")&&(b=n[+b.getAttribute("data-video-num")],b.playVideo?b.playVideo():b.play())},500);k=a.target;r()});a.addEventListener("slide.bs.carousel",function(a){if(a=a.target.querySelector(".carousel-item.active > .mbr-background-video"))a=n[+a.getAttribute("data-video-num")],a.pauseVideo?
a.pauseVideo():a.pause()});a.addEventListener("slid.bs.carousel",function(a){if(a=a.target.querySelector(".carousel-item.active").querySelector(".mbr-background-video"))a=n[+a.getAttribute("data-video-num")],a.playVideo?a.playVideo():a.play()});a.addEventListener("hide.bs.modal",function(a){n.map(function(a){a.pauseVideo?a.pauseVideo():a.pause()});k=null})});window.addEventListener("resize",r);window.addEventListener("load",r)})();
