(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e){e.exports={backgroundType:"plain",plainBackgroundMode:"daylight",devIntro:"Hi,I'm Coder Dave",devDesc:"Frontend Dev | ReactJs| Html5 | Css3 | Nodejs | Bootstrap 4 | Php",gradientColors:"#EE7752, #E73C7E, #23A6D5, #23D5AB",linkIntro:"Press Links Below",backgroundImageUrl:"http://hdwpro.com/wp-content/uploads/2017/03/Art-Background-Image.png",icons:[{image:"fas fa-code",url:"https://sourceonemusic.netlify.com/"},{image:"fas fa-code",url:"https://reactsasscitytours.netlify.com/"},{image:"fas fa-code",url:"https://organicsmoothie.netlify.com/"},{image:"fas fa-code",url:"https://codeguydave.github.io/fast_words/"},{image:"fas fa-code",url:"https://mixu.netlify.com/"},{image:"fab fa-behance",url:"https://www.behance.net/gallery/79688069/Social-Media-Brand"},{image:"fa-github",url:"https://github.com/codeguydave"}]}},10:function(e,a,n){e.exports=n(18)},16:function(e,a,n){},17:function(e,a,n){},18:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),r=n(3),c=n.n(r),i=(n(16),n(4)),d=n(5),s=n(8),l=n(6),u=n(9),g=n(7),h=n.n(g),p=(n(17),n(1)),k=function(e){function a(e){var n;return Object(i.a)(this,a),(n=Object(s.a)(this,Object(l.a)(a).call(this,e))).componentWillMount=function(){if(n.checkIfPlainTypeEnabled())return!0;n.checkIfGradientTypeEnabled()?n.setState({appClass:"gradient",bgStyle:n.prepareGradientStyleSheets()}):n.checkIfImageTypeEnabled()&&n.setState({appClass:"full-bg-image",bgStyle:n.prepareBackgroundImageStyle()})},n.checkIfNightModeEnabled=function(){return"plain"===n.state.backgroundType&&"nightlight"===n.state.appClass},n.checkIfDayModeEnabled=function(){return"plain"===n.state.backgroundType&&"daylight"===n.state.appClass},n.checkIfGradientTypeEnabled=function(){return"gradient"===n.state.backgroundType},n.checkIfPlainTypeEnabled=function(){return"plain"===n.state.backgroundType},n.checkIfImageTypeEnabled=function(){return"image"===n.state.backgroundType},n.prepareGradientStyleSheets=function(){return p.gradientColors?{background:"linear-gradient(-45deg, "+p.gradientColors+")",backgroundSize:"400% 400%"}:{background:"linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB)",backgroundSize:"400% 400%"}},n.prepareBackgroundImageStyle=function(){return p.backgroundImageUrl?{background:'url("'+p.backgroundImageUrl+'") no-repeat center center fixed',backgroundSize:"cover"}:{background:'url("/images/sample-background.jpg") no-repeat center center fixed',backgroundSize:"cover"}},n.getDefaultModeBasedOnBackgroundType=function(){return n.checkIfNightModeEnabled()?n.state.lightBackgroundModes[0]:n.checkIfDayModeEnabled()?n.state.darkBackgroundModes[0]:void 0},n.changeThemeMode=function(e){n.checkIfNightModeEnabled()?n.setState({appClass:"daylight",backgroundIndex:0,backgroundMode:n.state.darkBackgroundModes[0]}):n.checkIfDayModeEnabled()&&n.setState({appClass:"nightlight",backgroundIndex:0,backgroundMode:n.state.lightBackgroundModes[0]})},n.changeBackgroundBasedonMode=function(){n.checkIfNightModeEnabled()&&n.state.backgroundIndex<n.state.lightBackgroundModes.length-1?n.setState({backgroundIndex:n.state.backgroundIndex+1,backgroundMode:n.state.lightBackgroundModes[n.state.backgroundIndex+1]}):n.checkIfDayModeEnabled()&&n.state.backgroundIndex<n.state.darkBackgroundModes.length-1?n.setState({backgroundIndex:n.state.backgroundIndex+1,backgroundMode:n.state.darkBackgroundModes[n.state.backgroundIndex+1]}):n.setState({backgroundIndex:0,backgroundMode:n.getDefaultModeBasedOnBackgroundType()})},n.state={darkBackgroundModes:["day","terminal","torquoise","alizarin","amythyst","carrot","peterriver"],lightBackgroundModes:["night","lightred","lightpurple","lightgreen","lightblue","lightyellow"],backgroundType:p.backgroundType||"plain",appClass:p.plainBackgroundMode||"daylight",devIntro:p.devIntro||"Lorem Ipsum",devDesc:p.devDesc||"Aute veniam ut deserunt cillum irure pariatur Lorem dolore anim nostrud quis veniam elit culpa.",backgroundMode:"default",backgroundIndex:0,bgStyle:{},icons:p.icons||[]},n}return Object(u.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.state,a=e.appClass,n=e.bgStyle,t=e.backgroundMode,r=e.devIntro,c=e.devDesc,i=e.icons;return o.a.createElement("div",{className:a,style:n},o.a.createElement("div",{className:"change-mode",onClick:this.changeThemeMode}),o.a.createElement("div",{className:t,onClick:this.changeBackgroundBasedonMode},o.a.createElement("main",{className:"App-main"},o.a.createElement("h1",{className:"intro"},r),o.a.createElement("div",{className:"tagline"},o.a.createElement(h.a,null,c),o.a.createElement("h1",{className:"tagline link-below"},"Press Links Below..."),o.a.createElement("div",{className:"spinner"},o.a.createElement("i",{class:"fas fa-arrow-down fa-pulse"}))),o.a.createElement("div",{className:"icons-social"},i.map(function(e){return o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"".concat(e.url)},o.a.createElement("i",{className:"fab ".concat(e.image)}))})))))}}]),a}(t.Component),f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(k,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/codeguydave.github.io/simplevcard",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("/codeguydave.github.io/simplevcard","/service-worker.js");f?(function(e,a){fetch(e).then(function(n){var t=n.headers.get("content-type");404===n.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):b(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):b(a,e)})}}()}},[[10,1,2]]]);
//# sourceMappingURL=main.964004f9.chunk.js.map