(function(t){"use strict";const d="serverlogos",n="container-1-ERn5",o="serverlogos-logo";var s=function(){const e=document.createElement("style");e.textContent="@import url('https://kckarnige.is-a.dev/custom-server-logos/base.css');",e.setAttribute("id",d),document.head.append(e),document.getElementsByClassName(n)[0].setAttribute("id",o),t.log("[CSL] Injected CSS!")},a=function(){var e=document.getElementById(d);e.parentNode.removeChild(e)},l=function(){document.getElementsByClassName(n)[0].hasAttribute("data-guild-id")||(document.getElementsByClassName(n)[0].setAttribute("data-guild-id",window.location.pathname.split("/")[2]),t.log("[CSL] Injected attribute!"),clearInterval())};setInterval(l,100);var i={onLoad(){s()},onUnload(){a(),document.getElementById(o).removeAttribute("data-guild-id"),document.getElementById(o).removeAttribute("id"),t.log("[CSL] Successfully disabled!")}};return i})(cumcord.utils.logger);
