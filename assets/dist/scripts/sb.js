$(function(e){document.querySelector("body");const t=e(".hamburger"),a=e(".navigation"),n=e(".navigation__menu"),i="is-active";moment().format();let r;e.fn.serializeObject=function(){var t={},a=this.serializeArray();return e.each(a,function(){t[this.name]?(t[this.name].push||(t[this.name]=[t[this.name]]),t[this.name].push(this.value||"")):t[this.name]=this.value||""}),t},t.on("click",function(){const t=e(this);"true"===t.toggleClass(i).attr("aria-expanded")?t.attr("aria-expanded",!1):t.attr("aria-expanded",!0),a.toggleClass(i),"true"===n.attr("aria-hidden")?n.attr("aria-hidden",!1):n.attr("aria-hidden",!0)}),window.addEventListener("resize",function(){clearTimeout(r),r=setTimeout(function(){},5)}),window.addEventListener("keyup",function(e){27===e.keyCode&&$nav.hasClass(i)&&t.click()}),window.addEventListener("orientationchange",function(){}),e("#search-field").ghostHunter({onKeyUp:!0,results:"#results",includebodysearch:!0,displaySearchInfo:!1,result_template:"<a id='gh-{{ref}}' class='gh-search-item' href='{{link}}'><p>{{title}}</p></a>"})});
//# sourceMappingURL=sb.js.map