function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var o,i,r,a,u,f,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function E(e){return l=e,u=setTimeout(S,t),c?b(e):a}function O(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=r}function S(){var e=v();if(O(e))return T(e);u=setTimeout(S,function(e){var n=t-(e-f);return s?m(n,r-(e-l)):n}(e))}function T(e){return u=void 0,g&&o?b(e):(o=i=void 0,a)}function h(){var e=v(),n=O(e);if(o=arguments,i=this,f=e,n){if(void 0===u)return E(f);if(s)return u=setTimeout(S,t),b(f)}return void 0===u&&(u=setTimeout(S,t)),a}return t=y(t)||0,p(n)&&(c=!!n.leading,r=(s="maxWait"in n)?d(y(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),h.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=i=u=void 0},h.flush=function(){return void 0===u?a:T(v())},h}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:o,maxWait:t,trailing:i})};const b={form:document.querySelector(".feedback-form")};b.form.addEventListener("input",e(t)((function(e){e.target;const t=E.value,n=O.value;localStorage.setItem("STORAGE_KEY",JSON.stringify({emailValue:t,messageValue:n}))}),500)),b.form.addEventListener("submit",(function(e){e.preventDefault(),0!==E.value.length&&0!==O.value.length&&(console.log(JSON.parse(localStorage.getItem("STORAGE_KEY"))),localStorage.removeItem("STORAGE_KEY"),e.currentTarget.reset())}));const E=b.form.email,O=b.form.message;!function(){const e=localStorage.getItem("STORAGE_KEY");if(e){const t=JSON.parse(e);E.value=t.emailValue,O.value=t.messageValue}}();
//# sourceMappingURL=03-feedback.b01b09b7.js.map
