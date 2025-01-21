class GentooService {
  constructor() {}

  async loadScript() {
    var w=window;if(w.GentooIO)return w.console.error("GentooIO script included twice.");var ge=function(){ge.c(arguments)};ge.q=[];ge.c=function(a){ge.q.push(a)};w.GentooIO=ge;function l(){if(w.GentooIOInitialized)return;w.GentooIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://d3qrvyizob9ouf.cloudfront.net/floating-button-sdk.js";var x=document.getElementsByTagName("script")[0];x.parentNode&&x.parentNode.insertBefore(s,x)}document.readyState==="complete"?l():(w.addEventListener("DOMContentLoaded",l),w.addEventListener("load",l));
  }

  boot(params) {
    if (typeof window === undefined) return;
    window.GentooIO("boot", params);
  }

  init() {
    if (typeof window === undefined) return;
    window.GentooIO("init", {});
  }

  setPageList(params) {
    if (typeof window === undefined) return;
    window.GentooIO("setPageList", params);
  }

  unmount() {
    if (typeof window === undefined) return;
    window.GentooIO("unmount", {});
  }
}

export default new GentooService();
