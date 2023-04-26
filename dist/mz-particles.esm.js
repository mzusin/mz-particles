/* 
MZ Particles
Version: 1.0.4
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-particles
License: MIT License            
*/
var Qe=Object.defineProperty;var se=Object.getOwnPropertySymbols;var Je=Object.prototype.hasOwnProperty,Ke=Object.prototype.propertyIsEnumerable;var le=(e,t,r)=>t in e?Qe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,z=(e,t)=>{for(var r in t||(t={}))Je.call(t,r)&&le(e,r,t[r]);if(se)for(var r of se(t))Ke.call(t,r)&&le(e,r,t[r]);return e};var et=(e,t)=>{for(let r of t){let a=r[1];if(a===void 0)continue;let n=r[0];e.setAttribute(n,a.toString())}},oe=(e,t)=>{for(let r of e){let a=r[1];if(a===void 0)continue;let n=r[0];t[n]=a}},ue=e=>{let t=document.createElement("canvas");et(t,[["id",e.id],["class",e.classes],["style",e.style],["title",e.title],["tabindex",e.tabindex],["role",e.role],["aria-label",e.ariaLabel]]),e.fallback&&(t.textContent=e.fallback);let r=typeof t.getContext=="function"?t.getContext("2d",e.contextAttributes):null;return t.width=e.width,t.height=e.height,{ctx:r,$canvas:t}},D=(e,t)=>{oe([["lineWidth",e.lineWidth],["strokeStyle",e.strokeStyle],["lineCap",e.lineCap],["lineJoin",e.lineJoin],["miterLimit",e.miterLimit],["lineDashOffset",e.lineDashOffset]],t),e.lineDashSegments&&t.setLineDash(e.lineDashSegments)},W=(e,t)=>{e.fillStyle!==void 0&&(t.fillStyle=e.fillStyle),oe([["shadowOffsetX",e.shadowOffsetX],["shadowOffsetY",e.shadowOffsetY],["shadowBlur",e.shadowBlur],["shadowColor",e.shadowColor]],t)},he=(e,t)=>{let{x1:r,y1:a,x2:n,y2:i}=e;t.save(),t.beginPath(),t.moveTo(r,a),t.lineTo(n,i),e.strokeStyle&&(D(e,t),t.stroke()),t.restore()};var ce=(e,t)=>{let{x:r,y:a,w:n,h:i}=e;if(e.clear){t.clearRect(r,a,n,i);return}if(e.radii){t.save(),W(e,t),D(e,t),t.beginPath(),t.roundRect(r,a,n,i,e.radii),e.fillStyle&&t.fill(),e.strokeStyle&&t.stroke(),t.restore();return}t.save(),e.fillStyle&&(W(e,t),t.fillRect(r,a,n,i)),e.strokeStyle&&(D(e,t),t.strokeRect(r,a,n,i)),t.restore()};var me=(e,t)=>{let{cx:r,cy:a,r:n}=e,i=e.startAngleRad===void 0?0:e.startAngleRad,s=e.endAngleRad===void 0?2*Math.PI:e.endAngleRad;t.save(),t.beginPath(),W(e,t),D(e,t),t.arc(r,a,n,i,s,e.counterclockwise),e.fillStyle&&t.fill(),e.strokeStyle&&(D(e,t),t.stroke()),t.restore()};var tt=Math.pow,Q=(e,t=1/0)=>{if(t===1/0)return e;t<0&&(t=0);let r=tt(10,t);return Math.round(e*r)/r};var rt=(e,t,r=1/0)=>{let a=[];for(let n=0;n<e.length;n++)a.push(Q(e[n]-t[n],r));return a};var at=(e,t=1/0)=>{let r=0;for(let a=0;a<e.length;a++)r+=e[a]*e[a];return Q(Math.sqrt(r),t)};var fe=(e,t,r=1/0)=>{let a=rt(e,t);return at(a,r)};var N=(e,t,r=1/0)=>Q(Math.random()*(t-e)+e,r),nt=(e,t)=>Math.floor(Math.random()*(t-e+1)+e),de=()=>Math.random()<.5,B=e=>{let t=nt(0,e.length-1);return e[t]};var pe=()=>{let e=it();return st(e)},it=()=>{let e=N(1,360),t=N(0,100),r=N(0,100);return[e,t,r]};var st=e=>{if(e[0]>360||e[1]>100||e[2]>100)return"#ffffff";if(e[0]<0||e[1]<0||e[2]<0)return"#000000";let t=e[0]/360,r=e[1]/100,a=e[2]/100,n,i,s;if(r===0)n=i=s=a;else{let l=(u,d,f)=>(f<0&&(f+=1),f>1&&(f-=1),f<.16666666666666666?u+(d-u)*6*f:f<.5?d:f<.6666666666666666?u+(d-u)*(.6666666666666666-f)*6:u),c=a<.5?a*(1+r):a+r-a*r,h=2*a-c;n=l(h,c,t+1/3),i=l(h,c,t),s=l(h,c,t-1/3)}let o=l=>{let c=Math.round(l*255).toString(16);return c.length===1?"0"+c:c};return`#${o(n)}${o(i)}${o(s)}`};var ge=e=>{let t=e.duration!==void 0?e.duration:1/0,r,a,n,i,s=!1,o,l=()=>{r=void 0,n=void 0,i=void 0,s=!1,a!==void 0&&window.cancelAnimationFrame(a)},c=()=>{l(),b()},h=()=>{s=!1},u=()=>{s=!0},d=M=>{r===void 0&&(r=M),n=M-r,s&&i!==M&&typeof e.callback=="function"&&e.callback(x()),n<=t?(i=M,a=window.requestAnimationFrame(d)):l()},f=(M,g)=>{c(),typeof e.resizeCallback=="function"&&e.resizeCallback(M,g)},b=()=>{r=void 0,n=void 0,i=void 0,s=!0,e.restartOnResize&&window.ResizeObserver&&o===void 0?(o=new ResizeObserver(f),o.observe(document.body,{box:"border-box"})):a=window.requestAnimationFrame(d)},S=()=>n,A=()=>s,p=()=>r,v=()=>{if(!(t===1/0||n===void 0))return n*100/t},y=()=>o,x=()=>({start:b,stop:l,pause:h,resume:u,restart:c,isAnimating:A,getElapsedTime:S,getStartTime:p,getPercent:v,getResizeObserver:y});return x()};var j=(e,t,r,a)=>`rgba(${e}, ${t}, ${r}, ${a} )`;var ve=640,be=768,Me=1024;var xe=()=>{let e=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),t=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0);return[e,t]},Se=(e,t)=>{let a=xe()[0];return e.smConnectionSize!==void 0&&a<=ve?e.smConnectionSize*t:e.mdConnectionSize!==void 0&&a<=be?e.mdConnectionSize*t:e.lgConnectionSize!==void 0&&a<=Me?e.lgConnectionSize*t:e.connectionSize*t},J=e=>{let r=xe()[0];return e.smParticlesNumber!==void 0&&r<=ve?e.smParticlesNumber:e.mdParticlesNumber!==void 0&&r<=be?e.mdParticlesNumber:e.lgParticlesNumber!==void 0&&r<=Me?e.lgParticlesNumber:e.particlesNumber};var ye=(e,t)=>{var l;let{particles:r,ctx:a,connectionRgbColor:n}=t,i=(l=e.$placeholder)==null?void 0:l.getBoundingClientRect(),s=(i==null?void 0:i.width)||0,o=Se(e,s);for(let c=0;c<r.length;c++){let h=r[c];for(let u=0;u<r.length;u++){let d=r[u],f=fe(h.center,d.center);if(f<o){let b=o===0?1:1-f/o;he({x1:h.center[0],y1:h.center[1],x2:d.center[0],y2:d.center[1],strokeStyle:j(n[0],n[1],n[2],b)},a)}}}};var lt=Math.pow,C=(e,t=1/0)=>{if(t===1/0)return e;t<0&&(t=0);let r=lt(10,t);return Math.round(e*r)/r},ot=(e,t=1/0)=>{let r=e*(Math.PI/180);return C(r,t)};var ee=e=>!isNaN(parseFloat(e))&&isFinite(e),te=(e,t=1/0)=>{let r=e[0],a=e[1],n=e[2]-a;return r===0&&n===0?1/0:r===0?NaN:C(n/r,t)},we=(e,t=1/0)=>{let r=e[0],a=e[1],n=e[2],i=e[3];if(r===0){let h=te([a,n,i],t);return ee(h)?[h]:[]}let s=n-i,o=a*a-4*r*s;if(o<0)return[];if(o===0)return[C(-a/(2*r),t)];let l=2*r,c=Math.sqrt(o);return[C((-a+c)/l,t),C((-a-c)/l,t)]},ut=(e,t,r,a,n=1/0)=>{let i=Math.pow(1-e,2),s=(1-e)*2*e,o=e*e;return[C(i*t[0]+s*r[0]+o*a[0],n),C(i*t[1]+s*r[1]+o*a[1],n)]},ht=(e,t,r,a,n,i=1/0)=>{let s=Math.pow(1-e,3),o=Math.pow(1-e,2)*3*e,l=(1-e)*3*e*e,c=e*e*e;return[C(s*t[0]+o*r[0]+l*a[0]+c*n[0],i),C(s*t[1]+o*r[1]+l*a[1]+c*n[1],i)]},ct=(e,t,r,a=1/0)=>{let n=2*e[0]-4*t[0]+2*r[0],i=-2*e[0]+2*t[0],s=te([n,i,0],a),o=2*e[1]-4*t[1]+2*r[1],l=-2*e[1]+2*t[1],c=te([o,l,0],a),h=[];return ee(s)&&h.push(s),ee(c)&&h.push(c),h},mt=(e,t,r,a,n=1/0)=>{let i=-3*e[0]+9*t[0]-9*r[0]+3*a[0],s=6*e[0]-12*t[0]+6*r[0],o=-3*e[0]+3*t[0],l=[i,s,o,0],c=-3*e[1]+9*t[1]-9*r[1]+3*a[1],h=6*e[1]-12*t[1]+6*r[1],u=-3*e[1]+3*t[1],d=[c,h,u,0],f=we(l,n).filter(S=>S>=0&&S<=1),b=we(d,n).filter(S=>S>=0&&S<=1);return[...f,...b].length===2?[...f,...b]:null},ft=(e,t,r,a=1/0)=>{let n=ct(e,t,r),i=1/0,s=1/0,o=-1/0,l=-1/0;for(let c of n){let h=ut(c,e,t,r),u=h[0],d=h[1];i=Math.min(i,u),o=Math.max(o,u),s=Math.min(s,d),l=Math.max(l,d)}return i=C(Math.min(i,e[0],r[0]),a),o=C(Math.max(o,e[0],r[0]),a),s=C(Math.min(s,e[1],r[1]),a),l=C(Math.max(l,e[1],r[1]),a),{x:i,y:s,w:Math.abs(o-i),h:Math.abs(l-s),x2:o,y2:l}},dt=(e,t,r,a,n=1/0)=>{let i=mt(e,t,r,a)||[],s=1/0,o=1/0,l=-1/0,c=-1/0;for(let h of i){let u=ht(h,e,t,r,a),d=u[0],f=u[1];s=Math.min(s,d!=null?d:1/0),l=Math.max(l,d!=null?d:-1/0),o=Math.min(o,f!=null?f:1/0),c=Math.max(c,f!=null?f:-1/0)}return s=C(Math.min(s,e[0],a[0]),n),l=C(Math.max(l,e[0],a[0]),n),o=C(Math.min(o,e[1],a[1]),n),c=C(Math.max(c,e[1],a[1]),n),{x:s,y:o,w:Math.abs(l-s),h:Math.abs(c-o),x2:l,y2:c}},ke=new RegExp("^[+-]?(?=\\.\\d|\\d)(?:0|[1-9]\\d*)?(?:\\.\\d+)?(?:(?<=\\d)(?:[eE][+-]?\\d+))?"),pt=e=>{let t={tokens:[],errors:[]};if(!e||e.trim()==="")return t;let r=0,a=0,n=0,i=()=>r>=e.length,s=u=>{t.tokens.push({tokenType:u,line:a,col:n})},o=u=>{t.tokens.push({tokenType:"num",value:u,line:a,col:n})},l=u=>{t.errors.push({line:a,col:n,msg:u})},c=()=>i()?!1:ke.test(e.substring(r)),h=()=>{let u=e[r];if(u.charAt(0)===`
`||u.charAt(0)==="\r"){r++,n=0,a++;return}if(/\s/.test(u)||u===","){r++,n++;return}if(c()){let d=e.substring(r).match(ke);if(d&&d.length>0){let f=d[0];o(f),r+=f.length,n+=f.length;return}}switch(u){case"M":s("M");break;case"m":s("m");break;case"Z":s("Z");break;case"z":s("z");break;case"L":s("L");break;case"l":s("l");break;case"H":s("H");break;case"h":s("h");break;case"V":s("V");break;case"v":s("v");break;case"C":s("C");break;case"c":s("c");break;case"S":s("S");break;case"s":s("s");break;case"Q":s("Q");break;case"q":s("q");break;case"T":s("T");break;case"t":s("t");break;case"A":s("A");break;case"a":s("a");break;default:{l(`Unexpected character ${u}`);break}}r++,n++};for(;!i();)h();return t},gt=e=>{let t={commands:[],errors:e.errors||[]};if(e.errors.length>0||e.tokens.length===0)return t;let{tokens:r,errors:a}=e,n=(h,u)=>{a.push({line:h==null?void 0:h.line,col:h==null?void 0:h.col,msg:u})};if(r[0].tokenType!=="M"&&r[0].tokenType!=="m")return n(r[0],"A path data segment must begin with a 'moveto' command 'M' or 'm'."),t;let i=0,s=()=>i>=r.length,o=h=>{var u,d;if(!h||h.toLowerCase()!=="a")return!0;let f=(((u=r[i+4])==null?void 0:u.value)||"").toString(),b=(((d=r[i+5])==null?void 0:d.value)||"").toString();return(f==="0"||f==="1")&&(b==="0"||b==="1")},l=(h,u,d)=>{var f;let b=r[i].tokenType,S=[];if(h>0)for(let v=1;v<=h;v++){if(!r[i+v]||r[i+v].tokenType!=="num"){n(r[i],`Expected number(s) after command ${b}.`),i+=h;return}S.push(Number(r[i+v].value))}if(!o(b)){n(r[i],"Arc flags must be 0 or 1."),i+=h+1;return}if(!o(b)){n(r[i],"Arc flags must be 0 or 1."),i+=h+1;return}if(t.commands.push({command:r[i].tokenType,params:S}),i+=h+1,h<=0)return;let A=[];for(;((f=r[i])==null?void 0:f.tokenType)==="num";)A.push(r[i]),i++;if(A.length%h!==0){n(A[A.length-1],"Expected a number.");return}let p=d?u.toLowerCase():u.toUpperCase();for(let v=0;v<A.length;v+=h){let y=[];for(let x=0;x<h;x++)y.push(Number(A[v+x].value));t.commands.push({command:p,params:y})}},c=()=>{let h=r[i],u=h.tokenType.toLowerCase()===h.tokenType;switch(h.tokenType){case"M":case"m":case"L":case"l":{l(2,"L",u);break}case"Z":case"z":{l(0,"L",u);break}case"H":case"h":case"V":case"v":{l(1,h.tokenType,u);break}case"C":case"c":{l(6,h.tokenType,u);break}case"S":case"s":case"Q":case"q":{l(4,h.tokenType,u);break}case"T":case"t":{l(2,h.tokenType,u);break}case"A":case"a":{l(7,h.tokenType,u);break}default:{n(r[i],"Wrong path command."),i++;break}}};for(l(2,"L",r[0].tokenType==="m");!s();)c();return t};var vt=e=>{let{commands:t}=e;if(t.length<=0)return e;let r=t[0].params[0],a=t[0].params[1],n=r,i=a;t[0].command="M";for(let s=1;s<t.length;s++){switch(t[s].command){case"m":{t[s].params[0]+=r,t[s].params[1]+=a,n=t[s].params[0],i=t[s].params[1];break}case"Z":case"z":{r=n,a=i;break}case"l":case"t":{let o=t[s].params[0],l=t[s].params[1];t[s].params[0]+=r,t[s].params[1]+=a,r+=o,a+=l;break}case"M":case"L":{r=t[s].params[0],a=t[s].params[1];break}case"h":{let o=t[s].params[0];t[s].params[0]+=r,r+=o;break}case"H":{r=t[s].params[0];break}case"v":{let o=t[s].params[0];t[s].params[0]+=a,a+=o;break}case"V":{a=t[s].params[0];break}case"c":{let o=t[s].params[4],l=t[s].params[5];t[s].params[0]+=r,t[s].params[1]+=a,t[s].params[2]+=r,t[s].params[3]+=a,t[s].params[4]+=r,t[s].params[5]+=a,r+=o,a+=l;break}case"C":{r=t[s].params[4],a=t[s].params[5];break}case"s":case"q":{let o=t[s].params[2],l=t[s].params[3];t[s].params[0]+=r,t[s].params[1]+=a,t[s].params[2]+=r,t[s].params[3]+=a,r+=o,a+=l;break}case"S":case"Q":{r=t[s].params[2],a=t[s].params[3];break}case"a":{let o=t[s].params[5],l=t[s].params[6];t[s].params[5]+=r,t[s].params[6]+=a,r+=o,a+=l;break}case"A":{r=t[s].params[5],a=t[s].params[6];break}}t[s].command=t[s].command.toUpperCase()}return e};var bt=e=>{let{commands:t}=e;if(t.length<=0)return e;t[0].command="M";for(let r=1;r<t.length;r++)switch(t[r].command){case"H":{let a=t[r-1];if(!a)continue;t[r].command="L",t[r].params[1]=a.params[1];break}case"V":{let a=t[r-1];if(!a)continue;t[r].command="L";let n=t[r].params[0];t[r].params[0]=a.params[0],t[r].params.push(n);break}case"S":{let a=t[r-1];if(!a)continue;t[r].command="C",t[r].params.unshift(a.params[3]),t[r].params.unshift(a.params[2]);break}case"T":{let a=t[r-1];if(!a)continue;t[r].command="Q",t[r].params.unshift(a.params[1]),t[r].params.unshift(a.params[0]);break}}return e};var Mt=e=>{let t=pt(e);return gt(t)};var T=(e,t)=>{let r=2*Math.PI,a=t>0?1:-1;return(r+a*Math.acos(e/Math.sqrt(e*e+t*t)))%r},K=(e,t,r,a)=>({x:e,y:r,w:Math.abs(a-r),h:Math.abs(t-e),x2:t,y2:a}),xt=(e,t,r,a,n,i,s,o,l)=>{let c,h,u,d;if(r<0&&(r*=-1),a<0&&(a*=-1),r===0||a===0)return c=e<o?e:o,h=e>o?e:o,u=t<l?t:l,d=t>l?t:l,K(c,h,u,d);let f=Math.cos(n)*(e-o)/2+Math.sin(n)*(t-l)/2,b=-Math.sin(n)*(e-o)/2+Math.cos(n)*(t-l)/2,S=r*r*a*a-r*r*b*b-a*a*f*f;S/=r*r*b*b+a*a*f*f;let A=0,p=0;if(S<0){let E=r/a;if(S=b*b+f*f/(E*E),S<0)return c=e<o?e:o,h=e>o?e:o,u=t<l?t:l,d=t>l?t:l,K(c,h,u,d);a=Math.sqrt(S),r=E*a}else{let E=(i==s?-1:1)*Math.sqrt(S);A=E*r*b/a,p=-E*a*f/r}let v=A*Math.cos(n)-p*Math.sin(n)+(e+o)/2,y=A*Math.sin(n)+p*Math.cos(n)+(t+l)/2,x,M,g,w;if(n===0||n===Math.PI)c=v-r,x=T(-r,0),h=v+r,M=T(r,0),u=y-a,g=T(0,-a),d=y+a,w=T(0,a);else if(n===Math.PI/2||n===3*Math.PI/2)c=v-a,x=T(-a,0),h=v+a,M=T(a,0),u=y-r,g=T(0,-r),d=y+r,w=T(0,r);else{x=-Math.atan(a*Math.tan(n)/r),M=Math.PI-Math.atan(a*Math.tan(n)/r),c=v+r*Math.cos(M)*Math.cos(n)-a*Math.sin(x)*Math.sin(n),h=v+r*Math.cos(M)*Math.cos(n)-a*Math.sin(M)*Math.sin(n),c>h&&([c,h]=[h,c],[x,M]=[M,x]);let E=y+r*Math.cos(x)*Math.sin(n)+a*Math.sin(x)*Math.cos(n);x=T(c-v,E-y),E=y+r*Math.cos(M)*Math.sin(n)+a*Math.sin(M)*Math.cos(n),M=T(h-v,E-y),g=Math.atan(a/(Math.tan(n)*r)),w=Math.atan(a/(Math.tan(n)*r))+Math.PI,u=y+r*Math.cos(g)*Math.sin(n)+a*Math.sin(g)*Math.cos(n),d=y+r*Math.cos(w)*Math.sin(n)+a*Math.sin(w)*Math.cos(n),u>d&&([u,d]=[d,u],[g,w]=[w,g]);let Z=v+r*Math.cos(g)*Math.cos(n)-a*Math.sin(g)*Math.sin(n);g=T(Z-v,u-y),Z=v+r*Math.cos(w)*Math.cos(n)-a*Math.sin(w)*Math.sin(n),w=T(Z-v,d-y)}let P=T(e-v,t-y),k=T(o-v,l-y);s||([P,k]=[k,P]);let L=!1;return P>k&&([P,k]=[k,P],L=!0),(!L&&(P>x||k<x)||L&&!(P>x||k<x))&&(c=Math.min(e,o)),(!L&&(P>M||k<M)||L&&!(P>M||k<M))&&(h=Math.max(e,o)),(!L&&(P>g||k<g)||L&&!(P>g||k<g))&&(u=Math.min(t,l)),(!L&&(P>w||k<w)||L&&!(P>w||k<w))&&(d=Math.max(t,l)),K(c,h,u,d)},Re=(e,t=2)=>{var r,a,n,i;if(!e||e.trim()==="")return null;let s=Mt(e);if(s.errors.length>0)return null;let o=vt(s);if(!o||o.commands.length<=0)return null;let l=1/0,c=1/0,h=-1/0,u=-1/0,d=bt(o),f=d.commands[0].params[0],b=d.commands[0].params[1],S=f,A=b;for(let p of d.commands)switch(p.command){case"M":{l=Math.min(l,p.params[0]),c=Math.min(c,p.params[1]),h=Math.max(h,p.params[0]),u=Math.max(u,p.params[1]),S=p.params[0],A=p.params[1];break}case"Z":{f=S,b=A;break}case"L":{l=Math.min(l,p.params[0]),c=Math.min(c,p.params[1]),h=Math.max(h,p.params[0]),u=Math.max(u,p.params[1]),f=p.params[0],b=p.params[1];break}case"C":{let v=[f,b],y=[p.params[0],p.params[1]],x=[p.params[2],p.params[3]],M=[p.params[4],p.params[5]],g=dt(v,y,x,M);l=Math.min(l,g.x),c=Math.min(c,g.y),h=Math.max(h,g.x2),u=Math.max(u,g.y2),f=p.params[4],b=p.params[5];break}case"Q":{let v=[f,b],y=[p.params[0],p.params[1]],x=[p.params[2],p.params[3]],M=ft(v,y,x);l=Math.min(l,M.x),c=Math.min(c,M.y),h=Math.max(h,M.x2),u=Math.max(u,M.y2),f=p.params[2],b=p.params[3];break}case"A":{let v=p.params[0],y=p.params[1],x=p.params[2],M=p.params[3],g=p.params[4],w=p.params[5],P=p.params[6],k=xt(f,b,v,y,ot(x),M===1,g===1,w,P);l=Math.min(l,(r=k==null?void 0:k.x)!=null?r:0),c=Math.min(c,(a=k==null?void 0:k.y)!=null?a:0),h=Math.max(h,(n=k==null?void 0:k.x2)!=null?n:0),u=Math.max(u,(i=k==null?void 0:k.y2)!=null?i:0),f=p.params[5],b=p.params[6];break}}return{x:C(l,t),y:C(c,t),w:C(Math.abs(h-l),t),h:C(Math.abs(u-c),t),x2:C(h,t),y2:C(u,t)}};function U(e){return U=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},U(e)}var St=/^\s+/,yt=/\s+$/;function m(e,t){if(e=e||"",t=t||{},e instanceof m)return e;if(!(this instanceof m))return new m(e,t);var r=wt(e);this._originalInput=e,this._r=r.r,this._g=r.g,this._b=r.b,this._a=r.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||r.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=r.ok}m.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},getLuminance:function(){var t=this.toRgb(),r,a,n,i,s,o;return r=t.r/255,a=t.g/255,n=t.b/255,r<=.03928?i=r/12.92:i=Math.pow((r+.055)/1.055,2.4),a<=.03928?s=a/12.92:s=Math.pow((a+.055)/1.055,2.4),n<=.03928?o=n/12.92:o=Math.pow((n+.055)/1.055,2.4),.2126*i+.7152*s+.0722*o},setAlpha:function(t){return this._a=Ie(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=Pe(this._r,this._g,this._b);return{h:t.h*360,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=Pe(this._r,this._g,this._b),r=Math.round(t.h*360),a=Math.round(t.s*100),n=Math.round(t.v*100);return this._a==1?"hsv("+r+", "+a+"%, "+n+"%)":"hsva("+r+", "+a+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var t=Ce(this._r,this._g,this._b);return{h:t.h*360,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=Ce(this._r,this._g,this._b),r=Math.round(t.h*360),a=Math.round(t.s*100),n=Math.round(t.l*100);return this._a==1?"hsl("+r+", "+a+"%, "+n+"%)":"hsla("+r+", "+a+"%, "+n+"%, "+this._roundA+")"},toHex:function(t){return Ae(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return Pt(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(R(this._r,255)*100)+"%",g:Math.round(R(this._g,255)*100)+"%",b:Math.round(R(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(R(this._r,255)*100)+"%, "+Math.round(R(this._g,255)*100)+"%, "+Math.round(R(this._b,255)*100)+"%)":"rgba("+Math.round(R(this._r,255)*100)+"%, "+Math.round(R(this._g,255)*100)+"%, "+Math.round(R(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:Dt[Ae(this._r,this._g,this._b,!0)]||!1},toFilter:function(t){var r="#"+Te(this._r,this._g,this._b,this._a),a=r,n=this._gradientType?"GradientType = 1, ":"";if(t){var i=m(t);a="#"+Te(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+r+",endColorstr="+a+")"},toString:function(t){var r=!!t;t=t||this._format;var a=!1,n=this._a<1&&this._a>=0,i=!r&&n&&(t==="hex"||t==="hex6"||t==="hex3"||t==="hex4"||t==="hex8"||t==="name");return i?t==="name"&&this._a===0?this.toName():this.toRgbString():(t==="rgb"&&(a=this.toRgbString()),t==="prgb"&&(a=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(a=this.toHexString()),t==="hex3"&&(a=this.toHexString(!0)),t==="hex4"&&(a=this.toHex8String(!0)),t==="hex8"&&(a=this.toHex8String()),t==="name"&&(a=this.toName()),t==="hsl"&&(a=this.toHslString()),t==="hsv"&&(a=this.toHsvString()),a||this.toHexString())},clone:function(){return m(this.toString())},_applyModification:function(t,r){var a=t.apply(null,[this].concat([].slice.call(r)));return this._r=a._r,this._g=a._g,this._b=a._b,this.setAlpha(a._a),this},lighten:function(){return this._applyModification($t,arguments)},brighten:function(){return this._applyModification(It,arguments)},darken:function(){return this._applyModification(Et,arguments)},desaturate:function(){return this._applyModification(At,arguments)},saturate:function(){return this._applyModification(Tt,arguments)},greyscale:function(){return this._applyModification(_t,arguments)},spin:function(){return this._applyModification(Nt,arguments)},_applyCombination:function(t,r){return t.apply(null,[this].concat([].slice.call(r)))},analogous:function(){return this._applyCombination(zt,arguments)},complement:function(){return this._applyCombination(Lt,arguments)},monochromatic:function(){return this._applyCombination(Ot,arguments)},splitcomplement:function(){return this._applyCombination(Ht,arguments)},triad:function(){return this._applyCombination(_e,[3])},tetrad:function(){return this._applyCombination(_e,[4])}};m.fromRatio=function(e,t){if(U(e)=="object"){var r={};for(var a in e)e.hasOwnProperty(a)&&(a==="a"?r[a]=e[a]:r[a]=V(e[a]));e=r}return m(e,t)};function wt(e){var t={r:0,g:0,b:0},r=1,a=null,n=null,i=null,s=!1,o=!1;return typeof e=="string"&&(e=Ft(e)),U(e)=="object"&&(H(e.r)&&H(e.g)&&H(e.b)?(t=kt(e.r,e.g,e.b),s=!0,o=String(e.r).substr(-1)==="%"?"prgb":"rgb"):H(e.h)&&H(e.s)&&H(e.v)?(a=V(e.s),n=V(e.v),t=Ct(e.h,a,n),s=!0,o="hsv"):H(e.h)&&H(e.s)&&H(e.l)&&(a=V(e.s),i=V(e.l),t=Rt(e.h,a,i),s=!0,o="hsl"),e.hasOwnProperty("a")&&(r=e.a)),r=Ie(r),{ok:s,format:e.format||o,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:r}}function kt(e,t,r){return{r:R(e,255)*255,g:R(t,255)*255,b:R(r,255)*255}}function Ce(e,t,r){e=R(e,255),t=R(t,255),r=R(r,255);var a=Math.max(e,t,r),n=Math.min(e,t,r),i,s,o=(a+n)/2;if(a==n)i=s=0;else{var l=a-n;switch(s=o>.5?l/(2-a-n):l/(a+n),a){case e:i=(t-r)/l+(t<r?6:0);break;case t:i=(r-e)/l+2;break;case r:i=(e-t)/l+4;break}i/=6}return{h:i,s,l:o}}function Rt(e,t,r){var a,n,i;e=R(e,360),t=R(t,100),r=R(r,100);function s(c,h,u){return u<0&&(u+=1),u>1&&(u-=1),u<1/6?c+(h-c)*6*u:u<1/2?h:u<2/3?c+(h-c)*(2/3-u)*6:c}if(t===0)a=n=i=r;else{var o=r<.5?r*(1+t):r+t-r*t,l=2*r-o;a=s(l,o,e+1/3),n=s(l,o,e),i=s(l,o,e-1/3)}return{r:a*255,g:n*255,b:i*255}}function Pe(e,t,r){e=R(e,255),t=R(t,255),r=R(r,255);var a=Math.max(e,t,r),n=Math.min(e,t,r),i,s,o=a,l=a-n;if(s=a===0?0:l/a,a==n)i=0;else{switch(a){case e:i=(t-r)/l+(t<r?6:0);break;case t:i=(r-e)/l+2;break;case r:i=(e-t)/l+4;break}i/=6}return{h:i,s,v:o}}function Ct(e,t,r){e=R(e,360)*6,t=R(t,100),r=R(r,100);var a=Math.floor(e),n=e-a,i=r*(1-t),s=r*(1-n*t),o=r*(1-(1-n)*t),l=a%6,c=[r,s,i,i,o,r][l],h=[o,r,r,s,i,i][l],u=[i,i,o,r,r,s][l];return{r:c*255,g:h*255,b:u*255}}function Ae(e,t,r,a){var n=[I(Math.round(e).toString(16)),I(Math.round(t).toString(16)),I(Math.round(r).toString(16))];return a&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function Pt(e,t,r,a,n){var i=[I(Math.round(e).toString(16)),I(Math.round(t).toString(16)),I(Math.round(r).toString(16)),I(Ee(a))];return n&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}function Te(e,t,r,a){var n=[I(Ee(a)),I(Math.round(e).toString(16)),I(Math.round(t).toString(16)),I(Math.round(r).toString(16))];return n.join("")}m.equals=function(e,t){return!e||!t?!1:m(e).toRgbString()==m(t).toRgbString()};m.random=function(){return m.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function At(e,t){t=t===0?0:t||10;var r=m(e).toHsl();return r.s-=t/100,r.s=G(r.s),m(r)}function Tt(e,t){t=t===0?0:t||10;var r=m(e).toHsl();return r.s+=t/100,r.s=G(r.s),m(r)}function _t(e){return m(e).desaturate(100)}function $t(e,t){t=t===0?0:t||10;var r=m(e).toHsl();return r.l+=t/100,r.l=G(r.l),m(r)}function It(e,t){t=t===0?0:t||10;var r=m(e).toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(255*-(t/100)))),r.g=Math.max(0,Math.min(255,r.g-Math.round(255*-(t/100)))),r.b=Math.max(0,Math.min(255,r.b-Math.round(255*-(t/100)))),m(r)}function Et(e,t){t=t===0?0:t||10;var r=m(e).toHsl();return r.l-=t/100,r.l=G(r.l),m(r)}function Nt(e,t){var r=m(e).toHsl(),a=(r.h+t)%360;return r.h=a<0?360+a:a,m(r)}function Lt(e){var t=m(e).toHsl();return t.h=(t.h+180)%360,m(t)}function _e(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var r=m(e).toHsl(),a=[m(e)],n=360/t,i=1;i<t;i++)a.push(m({h:(r.h+i*n)%360,s:r.s,l:r.l}));return a}function Ht(e){var t=m(e).toHsl(),r=t.h;return[m(e),m({h:(r+72)%360,s:t.s,l:t.l}),m({h:(r+216)%360,s:t.s,l:t.l})]}function zt(e,t,r){t=t||6,r=r||30;var a=m(e).toHsl(),n=360/r,i=[m(e)];for(a.h=(a.h-(n*t>>1)+720)%360;--t;)a.h=(a.h+n)%360,i.push(m(a));return i}function Ot(e,t){t=t||6;for(var r=m(e).toHsv(),a=r.h,n=r.s,i=r.v,s=[],o=1/t;t--;)s.push(m({h:a,s:n,v:i})),i=(i+o)%1;return s}m.mix=function(e,t,r){r=r===0?0:r||50;var a=m(e).toRgb(),n=m(t).toRgb(),i=r/100,s={r:(n.r-a.r)*i+a.r,g:(n.g-a.g)*i+a.g,b:(n.b-a.b)*i+a.b,a:(n.a-a.a)*i+a.a};return m(s)};m.readability=function(e,t){var r=m(e),a=m(t);return(Math.max(r.getLuminance(),a.getLuminance())+.05)/(Math.min(r.getLuminance(),a.getLuminance())+.05)};m.isReadable=function(e,t,r){var a=m.readability(e,t),n,i;switch(i=!1,n=qt(r),n.level+n.size){case"AAsmall":case"AAAlarge":i=a>=4.5;break;case"AAlarge":i=a>=3;break;case"AAAsmall":i=a>=7;break}return i};m.mostReadable=function(e,t,r){var a=null,n=0,i,s,o,l;r=r||{},s=r.includeFallbackColors,o=r.level,l=r.size;for(var c=0;c<t.length;c++)i=m.readability(e,t[c]),i>n&&(n=i,a=m(t[c]));return m.isReadable(e,a,{level:o,size:l})||!s?a:(r.includeFallbackColors=!1,m.mostReadable(e,["#fff","#000"],r))};var re=m.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Dt=m.hexNames=Bt(re);function Bt(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[e[r]]=r);return t}function Ie(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function R(e,t){jt(e)&&(e="100%");var r=Vt(e);return e=Math.min(t,Math.max(0,parseFloat(e))),r&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function G(e){return Math.min(1,Math.max(0,e))}function _(e){return parseInt(e,16)}function jt(e){return typeof e=="string"&&e.indexOf(".")!=-1&&parseFloat(e)===1}function Vt(e){return typeof e=="string"&&e.indexOf("%")!=-1}function I(e){return e.length==1?"0"+e:""+e}function V(e){return e<=1&&(e=e*100+"%"),e}function Ee(e){return Math.round(parseFloat(e)*255).toString(16)}function $e(e){return _(e)/255}var $=function(){var e="[-\\+]?\\d+%?",t="[-\\+]?\\d*\\.\\d+%?",r="(?:"+t+")|(?:"+e+")",a="[\\s|\\(]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")\\s*\\)?",n="[\\s|\\(]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")\\s*\\)?";return{CSS_UNIT:new RegExp(r),rgb:new RegExp("rgb"+a),rgba:new RegExp("rgba"+n),hsl:new RegExp("hsl"+a),hsla:new RegExp("hsla"+n),hsv:new RegExp("hsv"+a),hsva:new RegExp("hsva"+n),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function H(e){return!!$.CSS_UNIT.exec(e)}function Ft(e){e=e.replace(St,"").replace(yt,"").toLowerCase();var t=!1;if(re[e])e=re[e],t=!0;else if(e=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var r;return(r=$.rgb.exec(e))?{r:r[1],g:r[2],b:r[3]}:(r=$.rgba.exec(e))?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=$.hsl.exec(e))?{h:r[1],s:r[2],l:r[3]}:(r=$.hsla.exec(e))?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=$.hsv.exec(e))?{h:r[1],s:r[2],v:r[3]}:(r=$.hsva.exec(e))?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=$.hex8.exec(e))?{r:_(r[1]),g:_(r[2]),b:_(r[3]),a:$e(r[4]),format:t?"name":"hex8"}:(r=$.hex6.exec(e))?{r:_(r[1]),g:_(r[2]),b:_(r[3]),format:t?"name":"hex"}:(r=$.hex4.exec(e))?{r:_(r[1]+""+r[1]),g:_(r[2]+""+r[2]),b:_(r[3]+""+r[3]),a:$e(r[4]+""+r[4]),format:t?"name":"hex8"}:(r=$.hex3.exec(e))?{r:_(r[1]+""+r[1]),g:_(r[2]+""+r[2]),b:_(r[3]+""+r[3]),format:t?"name":"hex"}:!1}function qt(e){var t,r;return e=e||{level:"AA",size:"small"},t=(e.level||"AA").toUpperCase(),r=(e.size||"small").toLowerCase(),t!=="AA"&&t!=="AAA"&&(t="AA"),r!=="small"&&r!=="large"&&(r="small"),{level:t,size:r}}var ae=(e,t)=>{let{$canvas:r}=t,a=[],n,i,s=e.minSize,o=e.maxSize,l=e.minSpeed,c=e.maxSpeed,h=e.maxScale,u=e.minScale;for(let d=0;d<t.vpParticlesNumber;d++){let f=N(s,o),b=[f,f];if(e.svgPathData&&e.svgPathData.length>0){n=B(e.svgPathData);let v=Re(n);v&&(i=[b[0]/v.w,b[1]/v.h])}let S;e.particlesColors&&e.particlesColors.length>0?S=B(e.particlesColors):S=pe();let p=m(S).toRgb();a.push({center:[N(0,r.width),N(0,r.height)],speed:[N(l,c),N(l,c)],size:b,color:S,rgbaColor:[p.r,p.g,p.b,p.a],svgPathData:n,svgSize:i,angleRad:0,rotateCounterClockwise:de(),scale:(u+h)/2,scaleDirection:B([-1,1]),opacity:N(0,1),opacityDirection:B([-1,1])})}return a},Ne=(e,t,r)=>{let{$canvas:a}=r,n=z({},e),[i,s]=e.center,o=[...e.speed];if((i>a.width||i<0)&&(o[0]=-o[0]),(s>a.height||s<0)&&(o[1]=-o[1]),n.speed=o,n.center=[i+n.speed[0],s+n.speed[1]],t.rotate&&(e.rotateCounterClockwise?n.angleRad+=Math.PI/180:n.angleRad-=Math.PI/180),t.scaleInOut){let l=t.scaleStep,c=t.maxScale,h=t.minScale;n.scaleDirection>0?n.scale+=l:n.scale-=l,n.scale>c&&(n.scale=c,n.scaleDirection=-1),n.scale<h&&(n.scale=h,n.scaleDirection=1)}if(t.fadeInOut){let l=t.opacityStep;n.opacityDirection>0?n.opacity+=l:n.opacity-=l,n.opacity>1&&(n.scale=1,n.opacityDirection=-1),n.opacity<0&&(n.opacity=0,n.opacityDirection=1)}return n},Le=(e,t,r)=>{let{ctx:a}=r;if(!t.svgPathData){a.save();let{size:u}=e,d=u[0];t.scaleInOut&&(d*=e.scale);let f=t.fadeInOut?j(e.rgbaColor[0],e.rgbaColor[1],e.rgbaColor[2],e.opacity):e.color;me({cx:e.center[0],cy:e.center[1],r:d,fillStyle:f},a),a.restore();return}let[n,i]=e.size,s=new Path2D(e.svgPathData);a.save();let o=n/2,l=i/2,[c,h]=[e.center[0]-o,e.center[1]-l];a.translate(c,h),e.svgSize&&(a.translate(o,l),a.scale(...e.svgSize),a.translate(-o,-l)),t.rotate&&(a.translate(o,l),a.rotate(e.angleRad),a.translate(-o,-l)),t.scaleInOut&&(a.translate(o,l),a.scale(e.scale,e.scale),a.translate(-o,-l)),t.fadeInOut?a.fillStyle=j(e.rgbaColor[0],e.rgbaColor[1],e.rgbaColor[2],e.opacity):a.fillStyle=e.color,a.fill(s),a.restore()};var He={particlesNumber:70,lgParticlesNumber:60,mdParticlesNumber:50,smParticlesNumber:30,resizeDebounceTime:1e3,particlesColors:[],minSpeed:-2,maxSpeed:2,minSize:5,maxSize:10,connected:!0,connectionColor:"rgb(70,126,150)",connectionSize:.09,lgConnectionSize:.15,mdConnectionSize:.2,smConnectionSize:.2,maxScale:2,minScale:.5,scaleStep:.01,opacityStep:.001},ze=(e,t)=>t?z(z({},e),t):z({},e);function Ut(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var F=Ut;var Gt=typeof global=="object"&&global&&global.Object===Object&&global,Oe=Gt;var Xt=typeof self=="object"&&self&&self.Object===Object&&self,Yt=Oe||Xt||Function("return this")(),X=Yt;var Zt=function(){return X.Date.now()},Y=Zt;var Wt=/\s/;function Qt(e){for(var t=e.length;t--&&Wt.test(e.charAt(t)););return t}var De=Qt;var Jt=/^\s+/;function Kt(e){return e&&e.slice(0,De(e)+1).replace(Jt,"")}var Be=Kt;var er=X.Symbol,O=er;var je=Object.prototype,tr=je.hasOwnProperty,rr=je.toString,q=O?O.toStringTag:void 0;function ar(e){var t=tr.call(e,q),r=e[q];try{e[q]=void 0;var a=!0}catch(i){}var n=rr.call(e);return a&&(t?e[q]=r:delete e[q]),n}var Ve=ar;var nr=Object.prototype,ir=nr.toString;function sr(e){return ir.call(e)}var Fe=sr;var lr="[object Null]",or="[object Undefined]",qe=O?O.toStringTag:void 0;function ur(e){return e==null?e===void 0?or:lr:qe&&qe in Object(e)?Ve(e):Fe(e)}var Ue=ur;function hr(e){return e!=null&&typeof e=="object"}var Ge=hr;var cr="[object Symbol]";function mr(e){return typeof e=="symbol"||Ge(e)&&Ue(e)==cr}var Xe=mr;var Ye=0/0,fr=/^[-+]0x[0-9a-f]+$/i,dr=/^0b[01]+$/i,pr=/^0o[0-7]+$/i,gr=parseInt;function vr(e){if(typeof e=="number")return e;if(Xe(e))return Ye;if(F(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=F(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Be(e);var r=dr.test(e);return r||pr.test(e)?gr(e.slice(2),r?2:8):fr.test(e)?Ye:+e}var ne=vr;var br="Expected a function",Mr=Math.max,xr=Math.min;function Sr(e,t,r){var a,n,i,s,o,l,c=0,h=!1,u=!1,d=!0;if(typeof e!="function")throw new TypeError(br);t=ne(t)||0,F(r)&&(h=!!r.leading,u="maxWait"in r,i=u?Mr(ne(r.maxWait)||0,t):i,d="trailing"in r?!!r.trailing:d);function f(g){var w=a,P=n;return a=n=void 0,c=g,s=e.apply(P,w),s}function b(g){return c=g,o=setTimeout(p,t),h?f(g):s}function S(g){var w=g-l,P=g-c,k=t-w;return u?xr(k,i-P):k}function A(g){var w=g-l,P=g-c;return l===void 0||w>=t||w<0||u&&P>=i}function p(){var g=Y();if(A(g))return v(g);o=setTimeout(p,S(g))}function v(g){return o=void 0,d&&a?f(g):(a=n=void 0,s)}function y(){o!==void 0&&clearTimeout(o),c=0,a=l=n=o=void 0}function x(){return o===void 0?s:v(Y())}function M(){var g=Y(),w=A(g);if(a=arguments,n=this,l=g,w){if(o===void 0)return b(l);if(u)return clearTimeout(o),o=setTimeout(p,t),f(l)}return o===void 0&&(o=setTimeout(p,t)),s}return M.cancel=y,M.flush=x,M}var Ze=Sr;var We=(e,t)=>{let{$canvas:r,ctx:a}=t,n={x:0,y:0,w:r.width,h:r.height};e.canvasColor?n.fillStyle=e.canvasColor:n.clear=!0,ce(n,a),e.connected&&ye(e,t);for(let i=0;i<t.particles.length;i++){let s=t.particles[i];Le(s,e,t),t.particles[i]=Ne(s,e,t)}},ie=e=>{let t=ze(He,e);if(!t.$placeholder)return;let r=t.$placeholder.getBoundingClientRect(),a={width:r.width,height:r.height},{ctx:n,$canvas:i}=ue(a);if(!n)return;t.$placeholder.append(i);let o=m(t.connectionColor).toRgb(),l={connectionRgbColor:[o.r,o.g,o.b,o.a],particles:[],ctx:n,$canvas:i,vpParticlesNumber:J(t)};l.particles=ae(t,l);let c=Ze(()=>{let u=J(t);l.vpParticlesNumber!==u&&(l.vpParticlesNumber=u,l.particles=ae(t,l))},t.resizeDebounceTime);return ge({callback:()=>{n&&We(t,l)},restartOnResize:!0,resizeCallback:()=>{if(!t.$placeholder)return;let u=t.$placeholder.getBoundingClientRect();i.width=u.width,i.height=u.height,We(t,l),c()}}).start(),i};window.particles=ie;var $a=ie;export{$a as default};
//# sourceMappingURL=mz-particles.esm.js.map
