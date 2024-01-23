(()=>{"use strict";var t={rotateX:45,rotateY:35};function n(t){return t*(180/Math.PI)}function e(t){return t*(Math.PI/180)}function r(t,n,e){return{x:Math.sin(t/2)*Math.cos(n/2)*Math.cos(e/2)-Math.cos(t/2)*Math.sin(n/2)*Math.sin(e/2),y:Math.cos(t/2)*Math.sin(n/2)*Math.cos(e/2)+Math.sin(t/2)*Math.cos(n/2)*Math.sin(e/2),z:Math.cos(t/2)*Math.cos(n/2)*Math.sin(e/2)-Math.sin(t/2)*Math.sin(n/2)*Math.cos(e/2),w:Math.cos(t/2)*Math.cos(n/2)*Math.cos(e/2)+Math.sin(t/2)*Math.sin(n/2)*Math.sin(e/2)}}var o=function(t){return t<9},a=function(t){return t%9<3},c=function(t){return(t+1)%3==0},i=function(t){return t%3==0},u=function(t){return t%9>5},s=function(t){return t>17},f=function(t){return(t-1)%3==0},l=function(t){return t>8&&t<18},d=function(t){var n=t%9;return n>=3&&n<=5};function h(t){var e={x:Math.atan2(t[9],t[10]),y:Math.atan2(-t[8],Math.sqrt(Math.pow(t[9],2)+Math.pow(t[10],2))),z:Math.atan2(t[4],t[0])};return{x:n(e.x),y:n(e.y),z:n(e.z)}}function v(t,n){var e=n.x,r=n.y,o=n.z,a=n.w,c=e+e,i=r+r,u=o+o,s=e*c,f=e*i,l=e*u,d=r*i,h=r*u,v=o*u,y=a*c,b=a*i,m=a*u;return t[0]=1-(d+v),t[1]=f+m,t[2]=l-b,t[3]=0,t[4]=f-m,t[5]=1-(s+v),t[6]=h+y,t[7]=0,t[8]=l+b,t[9]=h-y,t[10]=1-(s+d),t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function y(t,n,e){var r=n[0],o=n[1],a=n[2],c=n[3],i=n[4],u=n[5],s=n[6],f=n[7],l=n[8],d=n[9],h=n[10],v=n[11],y=n[12],b=n[13],m=n[14],g=n[15],p=e[0],M=e[1],S=e[2],w=e[3];return t[0]=p*r+M*i+S*l+w*y,t[1]=p*o+M*u+S*d+w*b,t[2]=p*a+M*s+S*h+w*m,t[3]=p*c+M*f+S*v+w*g,p=e[4],M=e[5],S=e[6],w=e[7],t[4]=p*r+M*i+S*l+w*y,t[5]=p*o+M*u+S*d+w*b,t[6]=p*a+M*s+S*h+w*m,t[7]=p*c+M*f+S*v+w*g,p=e[8],M=e[9],S=e[10],w=e[11],t[8]=p*r+M*i+S*l+w*y,t[9]=p*o+M*u+S*d+w*b,t[10]=p*a+M*s+S*h+w*m,t[11]=p*c+M*f+S*v+w*g,p=e[12],M=e[13],S=e[14],w=e[15],t[12]=p*r+M*i+S*l+w*y,t[13]=p*o+M*u+S*d+w*b,t[14]=p*a+M*s+S*h+w*m,t[15]=p*c+M*f+S*v+w*g,t}function b(){return new Array(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)}var m=function(t){return new Float32Array(new DOMMatrixReadOnly(getComputedStyle(t).transform).toFloat32Array())};function g(t,n){return Math.floor(Math.random()*(n-t+1))+t}function p(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}window.solve=function(){var t;t="F' L' U' L U F".split(" "),Et(t)};var M=document.createElement("canvas");M.width=M.height=1;var S=M.getContext("2d",{willReadFrequently:!0}),w=function(t){S.clearRect(0,0,1,1),S.fillStyle="#000",S.fillStyle=t;var n,e=S.fillStyle;if(S.fillStyle="#fff",S.fillStyle=t,e===S.fillStyle)return S.fillRect(0,0,1,1),function(t){if(Array.isArray(t))return p(t)}(n=S.getImageData(0,0,1,1).data)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(n)||function(t,n){if(t){if("string"==typeof t)return p(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?p(t,n):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()},E=Array.from(document.querySelectorAll("dialog")),L=function(t){return E.find((function(n){return n.dataset.id===t}))},k=function(t,n){t.addEventListener("touchstart",A,{passive:!0}),t.addEventListener("mousedown",A,!1),t.addEventListener("touchend",n,{passive:!0}),t.addEventListener("mouseup",n,!1)},A=function(t){return t.stopPropagation(),t.preventDefault(),!1},q=document.querySelector(":root"),x=function(t,n){q.style.setProperty(t,n)},_="colors-settings",I=L("settings"),D=I.querySelector(".close-dialog"),U=I.querySelectorAll(".input-color"),X=I.querySelector(".dialog-settings-btn-save"),Y=I.querySelector(".dialog-settings-btn-reset"),F={},P=function(){L("settings").close()},R=function(){var t={};return U.forEach((function(n){var e=z(n.id);x(e,n.value),t[e]=n.value})),function(t){var n,e;n=_,e=t,localStorage.setItem(n,JSON.stringify(e))}(t),P(),A(event)},z=function(t){return"--".concat(t,"0")},O=function(){return U.forEach((function(t){var n=z(t.id),e=F[n];x(n,e),t.value=e})),A(event)},T=function(t){var n=document.querySelector(".btn_scramble"),e=document.querySelector(".btn_reset");t?(j(n),Z(e)):(j(e),Z(n))},Z=function(t){t.classList.contains("hide")||t.classList.add("hide")},j=function(t){t.classList.contains("hide")&&t.classList.remove("hide")},B=function(){L("settings").showModal()},W=function(t){return tt(),A(t)},C=function(t){return yt(t),A(t)},N=function(t){return bt(t.target.dataset.id),A(t)},G=function(t){return wt(t),A(t)};function H(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var J=[],$=[],K=0,V=!1,Q=!1,tt=function(){ot()||Q||et()},nt=function(){return document.querySelector(".rubiks_cube")},et=function(){document.querySelectorAll(".cube_container").forEach((function(t,n){it(t.dataset.posInit,t),st(0,0,0,t,n)})),K=0,T(!0)},rt=function(t){return J[t].cube},ot=function(){return K<0&&(K=0),0!=K},at=function(){0==(K-=1)&&(V=!1),0==$.length&&0==K&&0==V&&T(function(){for(var t=!0,n=J[0].cube,o=h(m(n)),a=r(e(o.x),e(o.y),e(o.z)),c=v(b(),a),i=0;i<J.length;i++){var u=J[i],s=m(u.cube),f=h(y(b(),s,c));if(0!=Math.round(f.x)||0!=Math.round(f.y)||0!=Math.round(f.z)){t=!1;break}}return t}()),ct()},ct=function(){$.length>0&&!ot()&&!Q&&bt($[0])},it=function(t,n){n.dataset.pos=t,J[t]={cube:n,pos:t}},ut=function(n,e,r){n=Math.abs(n)>90?90*Math.sign(n):n,t.rotateX=n,t.rotateY=e,r.style.transform="rotateX("+n+"deg) rotateY("+e+"deg) translateZ(0)"},st=function(t,n,o,a,c){K+=1;var i,u,s,f,l,d,h,v,y,b,g,p,M,S,w,E,L,k,A,q,x,_,I,D,U,X,Y,F=m(a);i=F,s=(u=r(e(t),e(n),e(o))).x,A=1-((M=(f=u.y)*(v=f+f))+(w=(l=u.z)*(y=l+l))),q=(g=s*v)-(k=(d=u.w)*y),x=(p=s*y)+(L=d*v),_=g+k,I=1-((b=s*(h=s+s))+w),D=(S=f*y)-(E=d*h),U=p-L,X=S+E,Y=1-(b+M),i[0]=A,i[1]=q,i[2]=x,i[3]=0,i[4]=_,i[5]=I,i[6]=D,i[7]=0,i[8]=U,i[9]=X,i[10]=Y,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,lt(a,F)},ft=function(t,n,o,a){(!(arguments.length>4&&void 0!==arguments[4])||arguments[4])&&(K+=1);var c=m(a),i=r(e(t),e(n),e(o)),u=v(b(),i),s=b();return s=y(s,u,c),lt(a,s),s},lt=function(t,n){var e=n[0],r=n[1],o=n[2],a=n[3],c=n[4],i=n[5],u=n[6],s=n[7],f=n[8],l=n[9],d=n[10],h=n[11],v=n[12],y=n[13],b=n[14],m=n[15];t.style.transform="matrix3d(".concat(e,", ").concat(r,", ").concat(o,", ").concat(a,", ").concat(c,", ").concat(i,", ").concat(u,", ").concat(s,", ").concat(f,", ").concat(l,", ").concat(d,", ").concat(h,", ").concat(v,", ").concat(y,", ").concat(b,", ").concat(m,")")},dt=[2,5,8,1,-1,7,0,3,6],ht=[6,3,0,7,-1,1,8,5,2],vt=function(t,n){for(var e=function(t){return 1==t?ht:dt}(n),r=[],o=0;o<t.length;o++)if(4!=o){var a=t[o],c=e[o];r.unshift({index:o,pos:t[c].pos})}for(var i=0,u=r;i<u.length;i++){var s=u[i];a=t[s.index],it(s.pos,a.cube)}},yt=function(){var t=document.querySelector(".rubiks_cube");ut(-35,-45,t)},bt=function(t){if(!Q)if(ot())$.push(t);else{var n=1;if(t.length>0)if("'"===t[1])n=-1;else if("2"===t[1]){var e=$.shift();$.unshift(t[0]),$.unshift(e)}var r=t[0];"X"===r||"Y"===r||"Z"===r?gt(t,n):mt(t,n),$.shift()}},mt=function(t,n){var e=St(t,n),r=e.newPosDico,o=e.signToUpdatePos;vt(r,o),V=!0},gt=function(t,n){Mt(t,n).forEach((function(t){var n=t.newPosDico,e=t.signToUpdatePos;vt(n,e)}))},pt=function(t,n,e,r){var o=[],a=function(t){var n=[];return J.forEach((function(e,r){t(r)&&n.push({pos:r,cube:e.cube})})),n}(t);return a.forEach((function(t){ft(n,e,r,t.cube),o.push(t)})),o},Mt=function(t,n){var e=[];switch(t[0]){case"X":e.push(St("R",n)),e.push(St("M'",-n)),e.push(St("L'",-n));break;case"Y":e.push(St("U",n)),e.push(St("E",n)),e.push(St("D'",-n));break;case"Z":e.push(St("F",n)),e.push(St("S",n)),e.push(St("B'",-n))}return e},St=function(t,n){var e=[];switch(t[0]){case"U":e=pt(o,0,-90*n,0);break;case"D":e=pt(s,0,90*n,0),n*=-1;break;case"F":e=pt(a,0,0,90*n),n*=-1;break;case"B":e=pt(u,0,0,-90*n);break;case"R":e=pt(c,90*n,0,0),n*=-1;break;case"L":e=pt(i,-90*n,0,0);break;case"M":e=pt(f,-90*n,0,0);break;case"E":e=pt(l,0,-90*n,0);break;case"S":e=pt(d,0,0,90*n),n*=-1}return{newPosDico:e,signToUpdatePos:n}},wt=function(){if(!Q){var t=function(t){for(var n=["U","D","L","R","F","B","M","E","S"],e=["","'","2"],r=[],o=0;o<21;o++){var a=n[g(0,n.length-1)],c=e[g(0,e.length-1)];r.push(a+c)}return console.log(r),r}();Et(t)}},Et=function(t){var n,e=function(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(t){if("string"==typeof t)return H(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?H(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,i=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return c=t.done,t},e:function(t){i=!0,a=t},f:function(){try{c||null==e.return||e.return()}finally{if(i)throw a}}}}(t);try{for(e.s();!(n=e.n()).done;){var r=n.value;$.push(r)}}catch(t){e.e(t)}finally{e.f()}ct()},Lt=[];Lt.ArrowUp="UP",Lt.ArrowLeft="LEFT",Lt.ArrowDown="DOWN",Lt.ArrowRight="RIGHT",Lt.r="R",Lt.d="D",Lt.u="U",Lt.l="L",Lt.b="B",Lt.f="F",Lt.R="R",Lt.D="D",Lt.U="U",Lt.L="L",Lt.B="B",Lt.F="F",Lt.m="M",Lt.e="E",Lt.s="S",Lt.M="M",Lt.E="E",Lt.S="S",Lt.x="X",Lt.X="X",Lt.y="Y",Lt.Y="Y",Lt.z="Z",Lt.Z="Z";var kt,At;"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/rubiks_cube/service-worker.js").then((function(t){console.log("SW registered: ",t)})).catch((function(t){console.log("SW registration failed: ",t)}))})),k(D,P),k(Y,O),k(X,R),U.forEach((function(t){var n,e,r=z(t.id),o=(n=r,getComputedStyle(q).getPropertyValue(n));F[r]="#"+((256|(e=w(o))[0]).toString(16).slice(1)+(256|e[1]).toString(16).slice(1)+(256|e[2]).toString(16).slice(1))})),(At=function(t){try{if(!localStorage.getItem(t))return;return JSON.parse(localStorage.getItem(t))}catch(t){console.error("failed to parse localStorage")}}(_))&&U.forEach((function(t){var n=z(t.id);At[n]&&x(n,At[n])})),function(){var n,e,r,o,a,c=document.querySelector(".scene_container"),i=document.querySelector(".rubiks_cube"),u=document.querySelectorAll(".cube_container_position"),s=void 0,f=-1,l=!1,d=[],v=0,y=0,b=[],g=!1;function p(n){if(n.target===c||c.contains(n.target)){if(l=!0,!ot())for(var e=0;e<u.length;e++)if(n.target===rt(e)||u[e].contains(n.target)){s=rt(e),f=s.dataset.pos;break}s&&-1!=f&&ot(),!1,nt().classList.add("drag-cube"),v=t.rotateY,y=-t.rotateX,"touchstart"===n.type?(r=n.touches[0].clientX-v,o=n.touches[0].clientY-y):(r=n.clientX-v,o=n.clientY-y)}}function M(t){g=!1,nt().classList.remove("drag-line"),Q&&(Q=!1),nt().classList.remove("drag-cube"),Q&&(Q=!1),function(){if(a){var t=d.find((function(t){return a==t.axis})).line;b=t.forEach((function(t,n){var e=rt(t),r=h(b[n]);st(r.x,r.y,r.z,e,t)}))}}(),a=void 0,r=n,o=e,b=[],l=!1,s=void 0,f=-1,d=[]}function S(t){if(l){if(t.preventDefault(),"touchmove"===t.type?(n=t.touches[0].clientX-r,e=t.touches[0].clientY-o):(n=t.clientX-r,e=t.clientY-o),v=n,y=e,!g)return void ut(-e,n,i);if(console.log(n,e),a?d.find((function(t){return t.axis==a})).line:(Math.abs(n)>6||Math.abs(e)>6)&&(Math.abs(n)-Math.abs(e)<7?a="Z":Math.abs(n)>Math.abs(e)?a="X":Math.abs(n)<Math.abs(e)&&(a="Y"),a&&(S=d.find((function(t){return a==t.axis})).line,b=S.map((function(t){var n=rt(t);return m(n)})))),!a)return;console.log("AXIS:",a);var c=d.find((function(t){return a==t.axis})).line,u=-e,s=n,f=[0,0,0],h=0;"X"==a?(f[1]=1,h=Math.min(Math.max(-2.2,s),2.2)):"Y"==a?(f[0]=1,h=Math.min(Math.max(-2.2,s),2.2)):"Z"==a&&(f[0]=1,h=Math.min(Math.max(-2.2,u),2.2));for(var p=0;p<c.length;p++){var M=c[p];ft(h*f[0],h*f[1],h*f[2],rt(M),!1)}}var S}c.addEventListener("touchstart",p,{passive:!0}),c.addEventListener("touchend",M,{passive:!0}),c.addEventListener("touchmove",S,{passive:!0}),c.addEventListener("mousedown",p,!1),c.addEventListener("mouseup",M,!1),c.addEventListener("mousemove",S,!1)}(),window.addEventListener("keydown",(function(t){var n=t.key;if(Lt[n])switch(Lt[n]){case"UP":var e=document.querySelector(".rubiks_cube");ft(25,0,0,e);break;case"DOWN":e=document.querySelector(".rubiks_cube"),ft(-25,0,0,e);break;case"RIGHT":e=document.querySelector(".rubiks_cube"),ft(0,25,0,e);break;case"LEFT":e=document.querySelector(".rubiks_cube"),ft(0,-25,0,e);break;default:bt(Lt[n]+(function(t){return t.shiftKey}(t)?"'":""))}})),document.querySelectorAll(".btn_move").forEach((function(t){k(t,N)})),kt=document.querySelector(".btn_scramble"),k(kt,G),function(){var t=document.querySelector(".btn_center");k(t,C)}(),function(){var t=document.querySelector(".btn_reset");k(t,W)}(),function(){var t=document.querySelector(".helper-icon-settings");k(t,B)}(),document.querySelectorAll(".cube_container").forEach((function(t,n){it(t.dataset.posInit,t),st(0,0,0,t,n),t.addEventListener("transitionend",at)})),yt()})();