(()=>{"use strict";var t={rotateX:45,rotateY:35};function n(t){return t*(180/Math.PI)}function e(t){return t*(Math.PI/180)}function r(t,n,e){return{x:Math.sin(t/2)*Math.cos(n/2)*Math.cos(e/2)-Math.cos(t/2)*Math.sin(n/2)*Math.sin(e/2),y:Math.cos(t/2)*Math.sin(n/2)*Math.cos(e/2)+Math.sin(t/2)*Math.cos(n/2)*Math.sin(e/2),z:Math.cos(t/2)*Math.cos(n/2)*Math.sin(e/2)-Math.sin(t/2)*Math.sin(n/2)*Math.cos(e/2),w:Math.cos(t/2)*Math.cos(n/2)*Math.cos(e/2)+Math.sin(t/2)*Math.sin(n/2)*Math.sin(e/2)}}var o=function(t){return t<9},a=function(t){return t%9<3},c=function(t){return(t+1)%3==0},i=function(t){return t%3==0},u=function(t){return t%9>5},s=function(t){return t>17},f=function(t){return(t-1)%3==0},l=function(t){return t>8&&t<18},d=function(t){var n=t%9;return n>=3&&n<=5};function h(t){var e={x:Math.atan2(t[9],t[10]),y:Math.atan2(-t[8],Math.sqrt(Math.pow(t[9],2)+Math.pow(t[10],2))),z:Math.atan2(t[4],t[0])};return{x:n(e.x),y:n(e.y),z:n(e.z)}}function v(t,n){var e=n.x,r=n.y,o=n.z,a=n.w,c=e+e,i=r+r,u=o+o,s=e*c,f=e*i,l=e*u,d=r*i,h=r*u,v=o*u,y=a*c,b=a*i,g=a*u;return t[0]=1-(d+v),t[1]=f+g,t[2]=l-b,t[3]=0,t[4]=f-g,t[5]=1-(s+v),t[6]=h+y,t[7]=0,t[8]=l+b,t[9]=h-y,t[10]=1-(s+d),t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function y(t,n,e){var r=n[0],o=n[1],a=n[2],c=n[3],i=n[4],u=n[5],s=n[6],f=n[7],l=n[8],d=n[9],h=n[10],v=n[11],y=n[12],b=n[13],g=n[14],m=n[15],p=e[0],M=e[1],S=e[2],w=e[3];return t[0]=p*r+M*i+S*l+w*y,t[1]=p*o+M*u+S*d+w*b,t[2]=p*a+M*s+S*h+w*g,t[3]=p*c+M*f+S*v+w*m,p=e[4],M=e[5],S=e[6],w=e[7],t[4]=p*r+M*i+S*l+w*y,t[5]=p*o+M*u+S*d+w*b,t[6]=p*a+M*s+S*h+w*g,t[7]=p*c+M*f+S*v+w*m,p=e[8],M=e[9],S=e[10],w=e[11],t[8]=p*r+M*i+S*l+w*y,t[9]=p*o+M*u+S*d+w*b,t[10]=p*a+M*s+S*h+w*g,t[11]=p*c+M*f+S*v+w*m,p=e[12],M=e[13],S=e[14],w=e[15],t[12]=p*r+M*i+S*l+w*y,t[13]=p*o+M*u+S*d+w*b,t[14]=p*a+M*s+S*h+w*g,t[15]=p*c+M*f+S*v+w*m,t}function b(){return new Array(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}var g=function(t){return new Float32Array(new DOMMatrixReadOnly(getComputedStyle(t).transform).toFloat32Array())};function m(t,n){return Math.floor(Math.random()*(n-t+1))+t}function p(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}window.solve=function(){var t;t="F' L' U' L U F".split(" "),Lt(t)};var M=document.createElement("canvas");M.width=M.height=1;var S=M.getContext("2d",{willReadFrequently:!0}),w=function(t){S.clearRect(0,0,1,1),S.fillStyle="#000",S.fillStyle=t;var n,e=S.fillStyle;if(S.fillStyle="#fff",S.fillStyle=t,e===S.fillStyle)return S.fillRect(0,0,1,1),function(t){if(Array.isArray(t))return p(t)}(n=S.getImageData(0,0,1,1).data)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(n)||function(t,n){if(t){if("string"==typeof t)return p(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?p(t,n):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()},E=null,L=Array.from(document.querySelectorAll("dialog")),k=function(t){return L.find((function(n){return n.dataset.id===t}))},A=function(t,n){t.addEventListener("touchstart",q,{passive:!0}),t.addEventListener("mousedown",q,!1),t.addEventListener("touchend",n,{passive:!0}),t.addEventListener("mouseup",n,!1)},q=function(t){return t.stopPropagation(),t.preventDefault(),!1},x=document.querySelector(":root"),_=function(t,n){x.style.setProperty(t,n)},I="colors-settings",D=k("settings"),U=D.querySelector(".close-dialog"),X=D.querySelectorAll(".input-color"),Y=D.querySelector(".dialog-settings-btn-save"),F=D.querySelector(".dialog-settings-btn-reset"),P={},R=function(){E==="settings"&&(k("settings").close(),E=null)},z=function(){var t={};return X.forEach((function(n){var e=O(n.id);_(e,n.value),t[e]=n.value})),function(t){var n,e;n=I,e=t,localStorage.setItem(n,JSON.stringify(e))}(t),R(),q(event)},O=function(t){return"--".concat(t,"0")},T=function(){return X.forEach((function(t){var n=O(t.id),e=P[n];_(n,e),t.value=e})),q(event)},Z=function(t){var n=document.querySelector(".btn_scramble"),e=document.querySelector(".btn_reset");t?(B(n),j(e)):(B(e),j(n))},j=function(t){t.classList.contains("hide")||t.classList.add("hide")},B=function(t){t.classList.contains("hide")&&t.classList.remove("hide")},W=function(){var t;t="settings",E||(k(t).showModal(),E=t)},C=function(t){return nt(),q(t)},N=function(t){return bt(t),q(t)},G=function(t){return gt(t.target.dataset.id),q(t)},H=function(t){return Et(t),q(t)};function J(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var $=[],K=[],V=0,Q=!1,tt=!1,nt=function(){at()||tt||rt()},et=function(){return document.querySelector(".rubiks_cube")},rt=function(){document.querySelectorAll(".cube_container").forEach((function(t,n){ut(t.dataset.posInit,t),ft(0,0,0,t,n)})),V=0,Z(!0)},ot=function(t){return $[t].cube},at=function(){return V<0&&(V=0),0!=V},ct=function(){0==(V-=1)&&(Q=!1),0==K.length&&0==V&&0==Q&&Z(function(){for(var t=!0,n=$[0].cube,o=h(g(n)),a=r(e(o.x),e(o.y),e(o.z)),c=v(b(),a),i=0;i<$.length;i++){var u=$[i],s=g(u.cube),f=h(y(b(),s,c));if(0!=Math.round(f.x)||0!=Math.round(f.y)||0!=Math.round(f.z)){t=!1;break}}return t}()),it()},it=function(){K.length>0&&!at()&&!tt&&gt(K[0])},ut=function(t,n){n.dataset.pos=t,$[t]={cube:n,pos:t}},st=function(n,e,r){n=Math.abs(n)>90?90*Math.sign(n):n,t.rotateX=n,t.rotateY=e,r.style.transform="rotateX("+n+"deg) rotateY("+e+"deg) translateZ(0)"},ft=function(t,n,o,a,c){V+=1;var i,u,s,f,l,d,h,v,y,b,m,p,M,S,w,E,L,k,A,q,x,_,I,D,U,X,Y,F=g(a);i=F,s=(u=r(e(t),e(n),e(o))).x,A=1-((M=(f=u.y)*(v=f+f))+(w=(l=u.z)*(y=l+l))),q=(m=s*v)-(k=(d=u.w)*y),x=(p=s*y)+(L=d*v),_=m+k,I=1-((b=s*(h=s+s))+w),D=(S=f*y)-(E=d*h),U=p-L,X=S+E,Y=1-(b+M),i[0]=A,i[1]=q,i[2]=x,i[3]=0,i[4]=_,i[5]=I,i[6]=D,i[7]=0,i[8]=U,i[9]=X,i[10]=Y,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,dt(a,F)},lt=function(t,n,o,a){(!(arguments.length>4&&void 0!==arguments[4])||arguments[4])&&(V+=1);var c=g(a),i=r(e(t),e(n),e(o)),u=v(b(),i),s=b();return s=y(s,u,c),dt(a,s),s},dt=function(t,n){var e=n[0],r=n[1],o=n[2],a=n[3],c=n[4],i=n[5],u=n[6],s=n[7],f=n[8],l=n[9],d=n[10],h=n[11],v=n[12],y=n[13],b=n[14],g=n[15];t.style.transform="matrix3d(".concat(e,", ").concat(r,", ").concat(o,", ").concat(a,", ").concat(c,", ").concat(i,", ").concat(u,", ").concat(s,", ").concat(f,", ").concat(l,", ").concat(d,", ").concat(h,", ").concat(v,", ").concat(y,", ").concat(b,", ").concat(g,")")},ht=[2,5,8,1,-1,7,0,3,6],vt=[6,3,0,7,-1,1,8,5,2],yt=function(t,n){for(var e=function(t){return 1==t?vt:ht}(n),r=[],o=0;o<t.length;o++)if(4!=o){var a=t[o],c=e[o];r.unshift({index:o,pos:t[c].pos})}for(var i=0,u=r;i<u.length;i++){var s=u[i];a=t[s.index],ut(s.pos,a.cube)}},bt=function(){var t=document.querySelector(".rubiks_cube");st(-35,-45,t)},gt=function(t){if(!tt)if(at())K.push(t);else{var n=1;if(t.length>0)if("'"===t[1])n=-1;else if("2"===t[1]){var e=K.shift();K.unshift(t[0]),K.unshift(e)}var r=t[0];"X"===r||"Y"===r||"Z"===r?pt(t,n):mt(t,n),K.shift()}},mt=function(t,n){var e=wt(t,n),r=e.newPosDico,o=e.signToUpdatePos;yt(r,o),Q=!0},pt=function(t,n){St(t,n).forEach((function(t){var n=t.newPosDico,e=t.signToUpdatePos;yt(n,e)}))},Mt=function(t,n,e,r){var o=[],a=function(t){var n=[];return $.forEach((function(e,r){t(r)&&n.push({pos:r,cube:e.cube})})),n}(t);return a.forEach((function(t){lt(n,e,r,t.cube),o.push(t)})),o},St=function(t,n){var e=[];switch(t[0]){case"X":e.push(wt("R",n)),e.push(wt("M'",-n)),e.push(wt("L'",-n));break;case"Y":e.push(wt("U",n)),e.push(wt("E",n)),e.push(wt("D'",-n));break;case"Z":e.push(wt("F",n)),e.push(wt("S",n)),e.push(wt("B'",-n))}return e},wt=function(t,n){var e=[];switch(t[0]){case"U":e=Mt(o,0,-90*n,0);break;case"D":e=Mt(s,0,90*n,0),n*=-1;break;case"F":e=Mt(a,0,0,90*n),n*=-1;break;case"B":e=Mt(u,0,0,-90*n);break;case"R":e=Mt(c,90*n,0,0),n*=-1;break;case"L":e=Mt(i,-90*n,0,0);break;case"M":e=Mt(f,-90*n,0,0);break;case"E":e=Mt(l,0,-90*n,0);break;case"S":e=Mt(d,0,0,90*n),n*=-1}return{newPosDico:e,signToUpdatePos:n}},Et=function(){if(!tt){var t=function(t){for(var n=["U","D","L","R","F","B","M","E","S"],e=["","'","2"],r=[],o=0;o<21;o++){var a=n[m(0,n.length-1)],c=e[m(0,e.length-1)];r.push(a+c)}return console.log(r),r}();Lt(t)}},Lt=function(t){var n,e=function(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(t){if("string"==typeof t)return J(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?J(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,i=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return c=t.done,t},e:function(t){i=!0,a=t},f:function(){try{c||null==e.return||e.return()}finally{if(i)throw a}}}}(t);try{for(e.s();!(n=e.n()).done;){var r=n.value;K.push(r)}}catch(t){e.e(t)}finally{e.f()}it()},kt=[];kt.ArrowUp="UP",kt.ArrowLeft="LEFT",kt.ArrowDown="DOWN",kt.ArrowRight="RIGHT",kt.r="R",kt.d="D",kt.u="U",kt.l="L",kt.b="B",kt.f="F",kt.R="R",kt.D="D",kt.U="U",kt.L="L",kt.B="B",kt.F="F",kt.m="M",kt.e="E",kt.s="S",kt.M="M",kt.E="E",kt.S="S",kt.x="X",kt.X="X",kt.y="Y",kt.Y="Y",kt.z="Z",kt.Z="Z";var At,qt;"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/rubiks_cube/service-worker.js").then((function(t){console.log("SW registered: ",t)})).catch((function(t){console.log("SW registration failed: ",t)}))})),A(U,R),A(F,T),A(Y,z),X.forEach((function(t){var n,e,r=O(t.id),o=(n=r,getComputedStyle(x).getPropertyValue(n));P[r]="#"+((256|(e=w(o))[0]).toString(16).slice(1)+(256|e[1]).toString(16).slice(1)+(256|e[2]).toString(16).slice(1))})),(qt=function(t){try{if(!localStorage.getItem(t))return;return JSON.parse(localStorage.getItem(t))}catch(t){console.error("failed to parse localStorage")}}(I))&&X.forEach((function(t){var n=O(t.id);qt[n]&&_(n,qt[n])})),function(){var n,e,r,o,a,c=document.querySelector(".scene_container"),i=document.querySelector(".rubiks_cube"),u=document.querySelectorAll(".cube_container_position"),s=void 0,f=-1,l=!1,d=[],v=0,y=0,b=[],m=!1;function p(n){if(n.target===c||c.contains(n.target)){if(l=!0,!at())for(var e=0;e<u.length;e++)if(n.target===ot(e)||u[e].contains(n.target)){s=ot(e),f=s.dataset.pos;break}s&&-1!=f&&at(),!1,et().classList.add("drag-cube"),v=t.rotateY,y=-t.rotateX,"touchstart"===n.type?(r=n.touches[0].clientX-v,o=n.touches[0].clientY-y):(r=n.clientX-v,o=n.clientY-y)}}function M(t){m=!1,et().classList.remove("drag-line"),tt&&(tt=!1),et().classList.remove("drag-cube"),tt&&(tt=!1),function(){if(a){var t=d.find((function(t){return a==t.axis})).line;b=t.forEach((function(t,n){var e=ot(t),r=h(b[n]);ft(r.x,r.y,r.z,e,t)}))}}(),a=void 0,r=n,o=e,b=[],l=!1,s=void 0,f=-1,d=[]}function S(t){if(l){if(t.preventDefault(),"touchmove"===t.type?(n=t.touches[0].clientX-r,e=t.touches[0].clientY-o):(n=t.clientX-r,e=t.clientY-o),v=n,y=e,!m)return void st(-e,n,i);if(console.log(n,e),a?d.find((function(t){return t.axis==a})).line:(Math.abs(n)>6||Math.abs(e)>6)&&(Math.abs(n)-Math.abs(e)<7?a="Z":Math.abs(n)>Math.abs(e)?a="X":Math.abs(n)<Math.abs(e)&&(a="Y"),a&&(S=d.find((function(t){return a==t.axis})).line,b=S.map((function(t){var n=ot(t);return g(n)})))),!a)return;console.log("AXIS:",a);var c=d.find((function(t){return a==t.axis})).line,u=-e,s=n,f=[0,0,0],h=0;"X"==a?(f[1]=1,h=Math.min(Math.max(-2.2,s),2.2)):"Y"==a?(f[0]=1,h=Math.min(Math.max(-2.2,s),2.2)):"Z"==a&&(f[0]=1,h=Math.min(Math.max(-2.2,u),2.2));for(var p=0;p<c.length;p++){var M=c[p];lt(h*f[0],h*f[1],h*f[2],ot(M),!1)}}var S}c.addEventListener("touchstart",p,{passive:!0}),c.addEventListener("touchend",M,{passive:!0}),c.addEventListener("touchmove",S,{passive:!0}),c.addEventListener("mousedown",p,!1),c.addEventListener("mouseup",M,!1),c.addEventListener("mousemove",S,!1)}(),window.addEventListener("keydown",(function(t){var n=t.key;if(kt[n])switch(kt[n]){case"UP":var e=document.querySelector(".rubiks_cube");lt(25,0,0,e);break;case"DOWN":e=document.querySelector(".rubiks_cube"),lt(-25,0,0,e);break;case"RIGHT":e=document.querySelector(".rubiks_cube"),lt(0,25,0,e);break;case"LEFT":e=document.querySelector(".rubiks_cube"),lt(0,-25,0,e);break;default:gt(kt[n]+(function(t){return t.shiftKey}(t)?"'":""))}})),document.querySelectorAll(".btn_move").forEach((function(t){A(t,G)})),At=document.querySelector(".btn_scramble"),A(At,H),function(){var t=document.querySelector(".btn_center");A(t,N)}(),function(){var t=document.querySelector(".btn_reset");A(t,C)}(),function(){var t=document.querySelector(".helper-icon-settings");A(t,W)}(),document.querySelectorAll(".cube_container").forEach((function(t,n){ut(t.dataset.posInit,t),ft(0,0,0,t,n),t.addEventListener("transitionend",ct)})),bt()})();