/* 
MZ Particles
Version: 1.0.4
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-particles
License: MIT License            
*/
var Pe=Object.defineProperty;var J=Object.getOwnPropertySymbols;var _e=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable;var K=(e,t,a)=>t in e?Pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,z=(e,t)=>{for(var a in t||(t={}))_e.call(t,a)&&K(e,a,t[a]);if(J)for(var a of J(t))$e.call(t,a)&&K(e,a,t[a]);return e};var Te=(e,t)=>{for(let a of t){let r=a[1];if(r===void 0)continue;let n=a[0];e.setAttribute(n,r.toString())}},ee=(e,t)=>{for(let a of e){let r=a[1];if(r===void 0)continue;let n=a[0];t[n]=r}},te=e=>{let t=document.createElement("canvas");Te(t,[["id",e.id],["class",e.classes],["style",e.style],["title",e.title],["tabindex",e.tabindex],["role",e.role],["aria-label",e.ariaLabel]]),e.fallback&&(t.textContent=e.fallback);let a=typeof t.getContext=="function"?t.getContext("2d",e.contextAttributes):null;return t.width=e.width,t.height=e.height,{ctx:a,$canvas:t}},D=(e,t)=>{ee([["lineWidth",e.lineWidth],["strokeStyle",e.strokeStyle],["lineCap",e.lineCap],["lineJoin",e.lineJoin],["miterLimit",e.miterLimit],["lineDashOffset",e.lineDashOffset]],t),e.lineDashSegments&&t.setLineDash(e.lineDashSegments)},G=(e,t)=>{e.fillStyle!==void 0&&(t.fillStyle=e.fillStyle),ee([["shadowOffsetX",e.shadowOffsetX],["shadowOffsetY",e.shadowOffsetY],["shadowBlur",e.shadowBlur],["shadowColor",e.shadowColor]],t)},ae=(e,t)=>{let{x1:a,y1:r,x2:n,y2:s}=e;t.save(),t.beginPath(),t.moveTo(a,r),t.lineTo(n,s),e.strokeStyle&&(D(e,t),t.stroke()),t.restore()};var re=(e,t)=>{let{x:a,y:r,w:n,h:s}=e;if(e.clear){t.clearRect(a,r,n,s);return}if(e.radii){t.save(),G(e,t),D(e,t),t.beginPath(),t.roundRect(a,r,n,s,e.radii),e.fillStyle&&t.fill(),e.strokeStyle&&t.stroke(),t.restore();return}t.save(),e.fillStyle&&(G(e,t),t.fillRect(a,r,n,s)),e.strokeStyle&&(D(e,t),t.strokeRect(a,r,n,s)),t.restore()};var ne=(e,t)=>{let{cx:a,cy:r,r:n}=e,s=e.startAngleRad===void 0?0:e.startAngleRad,i=e.endAngleRad===void 0?2*Math.PI:e.endAngleRad;t.save(),t.beginPath(),G(e,t),D(e,t),t.arc(a,r,n,s,i,e.counterclockwise),e.fillStyle&&t.fill(),e.strokeStyle&&(D(e,t),t.stroke()),t.restore()};var Ie=Math.pow,X=(e,t=1/0)=>{if(t===1/0)return e;t<0&&(t=0);let a=Ie(10,t);return Math.round(e*a)/a};var Ee=(e,t,a=1/0)=>{let r=[];for(let n=0;n<e.length;n++)r.push(X(e[n]-t[n],a));return r};var Le=(e,t=1/0)=>{let a=0;for(let r=0;r<e.length;r++)a+=e[r]*e[r];return X(Math.sqrt(a),t)};var se=(e,t,a=1/0)=>{let r=Ee(e,t);return Le(r,a)};var L=(e,t,a=1/0)=>X(Math.random()*(t-e)+e,a),He=(e,t)=>Math.floor(Math.random()*(t-e+1)+e),ie=()=>Math.random()<.5,B=e=>{let t=He(0,e.length-1);return e[t]};var le=()=>{let e=Ne();return ze(e)},Ne=()=>{let e=L(1,360),t=L(0,100),a=L(0,100);return[e,t,a]};var ze=e=>{if(e[0]>360||e[1]>100||e[2]>100)return"#ffffff";if(e[0]<0||e[1]<0||e[2]<0)return"#000000";let t=e[0]/360,a=e[1]/100,r=e[2]/100,n,s,i;if(a===0)n=s=i=r;else{let l=(h,f,d)=>(d<0&&(d+=1),d>1&&(d-=1),d<.16666666666666666?h+(f-h)*6*d:d<.5?f:d<.6666666666666666?h+(f-h)*(.6666666666666666-d)*6:h),c=r<.5?r*(1+a):r+a-r*a,u=2*r-c;n=l(u,c,t+1/3),s=l(u,c,t),i=l(u,c,t-1/3)}let o=l=>{let c=Math.round(l*255).toString(16);return c.length===1?"0"+c:c};return`#${o(n)}${o(s)}${o(i)}`};var oe=e=>{let t=e.duration!==void 0?e.duration:1/0,a,r,n,s,i=!1,o,l=()=>{a=void 0,n=void 0,s=void 0,i=!1,r!==void 0&&window.cancelAnimationFrame(r)},c=()=>{l(),p()},u=()=>{i=!1},h=()=>{i=!0},f=b=>{a===void 0&&(a=b),n=b-a,i&&s!==b&&typeof e.callback=="function"&&e.callback(M()),n<=t?(s=b,r=window.requestAnimationFrame(f)):l()},d=(b,w)=>{c(),typeof e.resizeCallback=="function"&&e.resizeCallback(b,w)},p=()=>{a=void 0,n=void 0,s=void 0,i=!0,e.restartOnResize&&window.ResizeObserver&&o===void 0?(o=new ResizeObserver(d),o.observe(document.body,{box:"border-box"})):r=window.requestAnimationFrame(f)},x=()=>n,C=()=>i,g=()=>a,v=()=>{if(!(t===1/0||n===void 0))return n*100/t},S=()=>o,M=()=>({start:p,stop:l,pause:u,resume:h,restart:c,isAnimating:C,getElapsedTime:x,getStartTime:g,getPercent:v,getResizeObserver:S});return M()};var O=(e,t,a,r)=>`rgba(${e}, ${t}, ${a}, ${r} )`;var De=640,Be=768,Oe=1024;var Ve=()=>{let e=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),t=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0);return[e,t]},ue=(e,t)=>{let r=Ve()[0];return e.smConnectionSize!==void 0&&r<=De?e.smConnectionSize*t:e.mdConnectionSize!==void 0&&r<=Be?e.mdConnectionSize*t:e.lgConnectionSize!==void 0&&r<=Oe?e.lgConnectionSize*t:e.connectionSize*t};var he=(e,t)=>{var l;let{particles:a,ctx:r,connectionRgbColor:n}=t,s=(l=e.$placeholder)==null?void 0:l.getBoundingClientRect(),i=(s==null?void 0:s.width)||0,o=ue(e,i);for(let c=0;c<a.length;c++){let u=a[c];for(let h=0;h<a.length;h++){let f=a[h],d=se(u.center,f.center);if(d<o){let p=o===0?1:1-d/o;ae({x1:u.center[0],y1:u.center[1],x2:f.center[0],y2:f.center[1],strokeStyle:O(n[0],n[1],n[2],p)},r)}}}};var qe=Math.pow,k=(e,t=1/0)=>{if(t===1/0)return e;t<0&&(t=0);let a=qe(10,t);return Math.round(e*a)/a},Fe=(e,t=1/0)=>{let a=e*(Math.PI/180);return k(a,t)};var Y=e=>!isNaN(parseFloat(e))&&isFinite(e),Z=(e,t=1/0)=>{let a=e[0],r=e[1],n=e[2]-r;return a===0&&n===0?1/0:a===0?NaN:k(n/a,t)},ce=(e,t=1/0)=>{let a=e[0],r=e[1],n=e[2],s=e[3];if(a===0){let u=Z([r,n,s],t);return Y(u)?[u]:[]}let i=n-s,o=r*r-4*a*i;if(o<0)return[];if(o===0)return[k(-r/(2*a),t)];let l=2*a,c=Math.sqrt(o);return[k((-r+c)/l,t),k((-r-c)/l,t)]},Ue=(e,t,a,r,n=1/0)=>{let s=Math.pow(1-e,2),i=(1-e)*2*e,o=e*e;return[k(s*t[0]+i*a[0]+o*r[0],n),k(s*t[1]+i*a[1]+o*r[1],n)]},Ge=(e,t,a,r,n,s=1/0)=>{let i=Math.pow(1-e,3),o=Math.pow(1-e,2)*3*e,l=(1-e)*3*e*e,c=e*e*e;return[k(i*t[0]+o*a[0]+l*r[0]+c*n[0],s),k(i*t[1]+o*a[1]+l*r[1]+c*n[1],s)]},Xe=(e,t,a,r=1/0)=>{let n=2*e[0]-4*t[0]+2*a[0],s=-2*e[0]+2*t[0],i=Z([n,s,0],r),o=2*e[1]-4*t[1]+2*a[1],l=-2*e[1]+2*t[1],c=Z([o,l,0],r),u=[];return Y(i)&&u.push(i),Y(c)&&u.push(c),u},je=(e,t,a,r,n=1/0)=>{let s=-3*e[0]+9*t[0]-9*a[0]+3*r[0],i=6*e[0]-12*t[0]+6*a[0],o=-3*e[0]+3*t[0],l=[s,i,o,0],c=-3*e[1]+9*t[1]-9*a[1]+3*r[1],u=6*e[1]-12*t[1]+6*a[1],h=-3*e[1]+3*t[1],f=[c,u,h,0],d=ce(l,n).filter(x=>x>=0&&x<=1),p=ce(f,n).filter(x=>x>=0&&x<=1);return[...d,...p].length===2?[...d,...p]:null},Ye=(e,t,a,r=1/0)=>{let n=Xe(e,t,a),s=1/0,i=1/0,o=-1/0,l=-1/0;for(let c of n){let u=Ue(c,e,t,a),h=u[0],f=u[1];s=Math.min(s,h),o=Math.max(o,h),i=Math.min(i,f),l=Math.max(l,f)}return s=k(Math.min(s,e[0],a[0]),r),o=k(Math.max(o,e[0],a[0]),r),i=k(Math.min(i,e[1],a[1]),r),l=k(Math.max(l,e[1],a[1]),r),{x:s,y:i,w:Math.abs(o-s),h:Math.abs(l-i),x2:o,y2:l}},Ze=(e,t,a,r,n=1/0)=>{let s=je(e,t,a,r)||[],i=1/0,o=1/0,l=-1/0,c=-1/0;for(let u of s){let h=Ge(u,e,t,a,r),f=h[0],d=h[1];i=Math.min(i,f!=null?f:1/0),l=Math.max(l,f!=null?f:-1/0),o=Math.min(o,d!=null?d:1/0),c=Math.max(c,d!=null?d:-1/0)}return i=k(Math.min(i,e[0],r[0]),n),l=k(Math.max(l,e[0],r[0]),n),o=k(Math.min(o,e[1],r[1]),n),c=k(Math.max(c,e[1],r[1]),n),{x:i,y:o,w:Math.abs(l-i),h:Math.abs(c-o),x2:l,y2:c}},me=new RegExp("^[+-]?(?=\\.\\d|\\d)(?:0|[1-9]\\d*)?(?:\\.\\d+)?(?:(?<=\\d)(?:[eE][+-]?\\d+))?"),Qe=e=>{let t={tokens:[],errors:[]};if(!e||e.trim()==="")return t;let a=0,r=0,n=0,s=()=>a>=e.length,i=h=>{t.tokens.push({tokenType:h,line:r,col:n})},o=h=>{t.tokens.push({tokenType:"num",value:h,line:r,col:n})},l=h=>{t.errors.push({line:r,col:n,msg:h})},c=()=>s()?!1:me.test(e.substring(a)),u=()=>{let h=e[a];if(h.charAt(0)===`
`||h.charAt(0)==="\r"){a++,n=0,r++;return}if(/\s/.test(h)||h===","){a++,n++;return}if(c()){let f=e.substring(a).match(me);if(f&&f.length>0){let d=f[0];o(d),a+=d.length,n+=d.length;return}}switch(h){case"M":i("M");break;case"m":i("m");break;case"Z":i("Z");break;case"z":i("z");break;case"L":i("L");break;case"l":i("l");break;case"H":i("H");break;case"h":i("h");break;case"V":i("V");break;case"v":i("v");break;case"C":i("C");break;case"c":i("c");break;case"S":i("S");break;case"s":i("s");break;case"Q":i("Q");break;case"q":i("q");break;case"T":i("T");break;case"t":i("t");break;case"A":i("A");break;case"a":i("a");break;default:{l(`Unexpected character ${h}`);break}}a++,n++};for(;!s();)u();return t},We=e=>{let t={commands:[],errors:e.errors||[]};if(e.errors.length>0||e.tokens.length===0)return t;let{tokens:a,errors:r}=e,n=(u,h)=>{r.push({line:u==null?void 0:u.line,col:u==null?void 0:u.col,msg:h})};if(a[0].tokenType!=="M"&&a[0].tokenType!=="m")return n(a[0],"A path data segment must begin with a 'moveto' command 'M' or 'm'."),t;let s=0,i=()=>s>=a.length,o=u=>{var h,f;if(!u||u.toLowerCase()!=="a")return!0;let d=(((h=a[s+4])==null?void 0:h.value)||"").toString(),p=(((f=a[s+5])==null?void 0:f.value)||"").toString();return(d==="0"||d==="1")&&(p==="0"||p==="1")},l=(u,h,f)=>{var d;let p=a[s].tokenType,x=[];if(u>0)for(let v=1;v<=u;v++){if(!a[s+v]||a[s+v].tokenType!=="num"){n(a[s],`Expected number(s) after command ${p}.`),s+=u;return}x.push(Number(a[s+v].value))}if(!o(p)){n(a[s],"Arc flags must be 0 or 1."),s+=u+1;return}if(!o(p)){n(a[s],"Arc flags must be 0 or 1."),s+=u+1;return}if(t.commands.push({command:a[s].tokenType,params:x}),s+=u+1,u<=0)return;let C=[];for(;((d=a[s])==null?void 0:d.tokenType)==="num";)C.push(a[s]),s++;if(C.length%u!==0){n(C[C.length-1],"Expected a number.");return}let g=f?h.toLowerCase():h.toUpperCase();for(let v=0;v<C.length;v+=u){let S=[];for(let M=0;M<u;M++)S.push(Number(C[v+M].value));t.commands.push({command:g,params:S})}},c=()=>{let u=a[s],h=u.tokenType.toLowerCase()===u.tokenType;switch(u.tokenType){case"M":case"m":case"L":case"l":{l(2,"L",h);break}case"Z":case"z":{l(0,"L",h);break}case"H":case"h":case"V":case"v":{l(1,u.tokenType,h);break}case"C":case"c":{l(6,u.tokenType,h);break}case"S":case"s":case"Q":case"q":{l(4,u.tokenType,h);break}case"T":case"t":{l(2,u.tokenType,h);break}case"A":case"a":{l(7,u.tokenType,h);break}default:{n(a[s],"Wrong path command."),s++;break}}};for(l(2,"L",a[0].tokenType==="m");!i();)c();return t};var Je=e=>{let{commands:t}=e;if(t.length<=0)return e;let a=t[0].params[0],r=t[0].params[1],n=a,s=r;t[0].command="M";for(let i=1;i<t.length;i++){switch(t[i].command){case"m":{t[i].params[0]+=a,t[i].params[1]+=r,n=t[i].params[0],s=t[i].params[1];break}case"Z":case"z":{a=n,r=s;break}case"l":case"t":{let o=t[i].params[0],l=t[i].params[1];t[i].params[0]+=a,t[i].params[1]+=r,a+=o,r+=l;break}case"M":case"L":{a=t[i].params[0],r=t[i].params[1];break}case"h":{let o=t[i].params[0];t[i].params[0]+=a,a+=o;break}case"H":{a=t[i].params[0];break}case"v":{let o=t[i].params[0];t[i].params[0]+=r,r+=o;break}case"V":{r=t[i].params[0];break}case"c":{let o=t[i].params[4],l=t[i].params[5];t[i].params[0]+=a,t[i].params[1]+=r,t[i].params[2]+=a,t[i].params[3]+=r,t[i].params[4]+=a,t[i].params[5]+=r,a+=o,r+=l;break}case"C":{a=t[i].params[4],r=t[i].params[5];break}case"s":case"q":{let o=t[i].params[2],l=t[i].params[3];t[i].params[0]+=a,t[i].params[1]+=r,t[i].params[2]+=a,t[i].params[3]+=r,a+=o,r+=l;break}case"S":case"Q":{a=t[i].params[2],r=t[i].params[3];break}case"a":{let o=t[i].params[5],l=t[i].params[6];t[i].params[5]+=a,t[i].params[6]+=r,a+=o,r+=l;break}case"A":{a=t[i].params[5],r=t[i].params[6];break}}t[i].command=t[i].command.toUpperCase()}return e};var Ke=e=>{let{commands:t}=e;if(t.length<=0)return e;t[0].command="M";for(let a=1;a<t.length;a++)switch(t[a].command){case"H":{let r=t[a-1];if(!r)continue;t[a].command="L",t[a].params[1]=r.params[1];break}case"V":{let r=t[a-1];if(!r)continue;t[a].command="L";let n=t[a].params[0];t[a].params[0]=r.params[0],t[a].params.push(n);break}case"S":{let r=t[a-1];if(!r)continue;t[a].command="C",t[a].params.unshift(r.params[3]),t[a].params.unshift(r.params[2]);break}case"T":{let r=t[a-1];if(!r)continue;t[a].command="Q",t[a].params.unshift(r.params[1]),t[a].params.unshift(r.params[0]);break}}return e};var et=e=>{let t=Qe(e);return We(t)};var _=(e,t)=>{let a=2*Math.PI,r=t>0?1:-1;return(a+r*Math.acos(e/Math.sqrt(e*e+t*t)))%a},j=(e,t,a,r)=>({x:e,y:a,w:Math.abs(r-a),h:Math.abs(t-e),x2:t,y2:r}),tt=(e,t,a,r,n,s,i,o,l)=>{let c,u,h,f;if(a<0&&(a*=-1),r<0&&(r*=-1),a===0||r===0)return c=e<o?e:o,u=e>o?e:o,h=t<l?t:l,f=t>l?t:l,j(c,u,h,f);let d=Math.cos(n)*(e-o)/2+Math.sin(n)*(t-l)/2,p=-Math.sin(n)*(e-o)/2+Math.cos(n)*(t-l)/2,x=a*a*r*r-a*a*p*p-r*r*d*d;x/=a*a*p*p+r*r*d*d;let C=0,g=0;if(x<0){let E=a/r;if(x=p*p+d*d/(E*E),x<0)return c=e<o?e:o,u=e>o?e:o,h=t<l?t:l,f=t>l?t:l,j(c,u,h,f);r=Math.sqrt(x),a=E*r}else{let E=(s==i?-1:1)*Math.sqrt(x);C=E*a*p/r,g=-E*r*d/a}let v=C*Math.cos(n)-g*Math.sin(n)+(e+o)/2,S=C*Math.sin(n)+g*Math.cos(n)+(t+l)/2,M,b,w,A;if(n===0||n===Math.PI)c=v-a,M=_(-a,0),u=v+a,b=_(a,0),h=S-r,w=_(0,-r),f=S+r,A=_(0,r);else if(n===Math.PI/2||n===3*Math.PI/2)c=v-r,M=_(-r,0),u=v+r,b=_(r,0),h=S-a,w=_(0,-a),f=S+a,A=_(0,a);else{M=-Math.atan(r*Math.tan(n)/a),b=Math.PI-Math.atan(r*Math.tan(n)/a),c=v+a*Math.cos(b)*Math.cos(n)-r*Math.sin(M)*Math.sin(n),u=v+a*Math.cos(b)*Math.cos(n)-r*Math.sin(b)*Math.sin(n),c>u&&([c,u]=[u,c],[M,b]=[b,M]);let E=S+a*Math.cos(M)*Math.sin(n)+r*Math.sin(M)*Math.cos(n);M=_(c-v,E-S),E=S+a*Math.cos(b)*Math.sin(n)+r*Math.sin(b)*Math.cos(n),b=_(u-v,E-S),w=Math.atan(r/(Math.tan(n)*a)),A=Math.atan(r/(Math.tan(n)*a))+Math.PI,h=S+a*Math.cos(w)*Math.sin(n)+r*Math.sin(w)*Math.cos(n),f=S+a*Math.cos(A)*Math.sin(n)+r*Math.sin(A)*Math.cos(n),h>f&&([h,f]=[f,h],[w,A]=[A,w]);let U=v+a*Math.cos(w)*Math.cos(n)-r*Math.sin(w)*Math.sin(n);w=_(U-v,h-S),U=v+a*Math.cos(A)*Math.cos(n)-r*Math.sin(A)*Math.sin(n),A=_(U-v,f-S)}let P=_(e-v,t-S),R=_(o-v,l-S);i||([P,R]=[R,P]);let H=!1;return P>R&&([P,R]=[R,P],H=!0),(!H&&(P>M||R<M)||H&&!(P>M||R<M))&&(c=Math.min(e,o)),(!H&&(P>b||R<b)||H&&!(P>b||R<b))&&(u=Math.max(e,o)),(!H&&(P>w||R<w)||H&&!(P>w||R<w))&&(h=Math.min(t,l)),(!H&&(P>A||R<A)||H&&!(P>A||R<A))&&(f=Math.max(t,l)),j(c,u,h,f)},de=(e,t=2)=>{var a,r,n,s;if(!e||e.trim()==="")return null;let i=et(e);if(i.errors.length>0)return null;let o=Je(i);if(!o||o.commands.length<=0)return null;let l=1/0,c=1/0,u=-1/0,h=-1/0,f=Ke(o),d=f.commands[0].params[0],p=f.commands[0].params[1],x=d,C=p;for(let g of f.commands)switch(g.command){case"M":{l=Math.min(l,g.params[0]),c=Math.min(c,g.params[1]),u=Math.max(u,g.params[0]),h=Math.max(h,g.params[1]),x=g.params[0],C=g.params[1];break}case"Z":{d=x,p=C;break}case"L":{l=Math.min(l,g.params[0]),c=Math.min(c,g.params[1]),u=Math.max(u,g.params[0]),h=Math.max(h,g.params[1]),d=g.params[0],p=g.params[1];break}case"C":{let v=[d,p],S=[g.params[0],g.params[1]],M=[g.params[2],g.params[3]],b=[g.params[4],g.params[5]],w=Ze(v,S,M,b);l=Math.min(l,w.x),c=Math.min(c,w.y),u=Math.max(u,w.x2),h=Math.max(h,w.y2),d=g.params[4],p=g.params[5];break}case"Q":{let v=[d,p],S=[g.params[0],g.params[1]],M=[g.params[2],g.params[3]],b=Ye(v,S,M);l=Math.min(l,b.x),c=Math.min(c,b.y),u=Math.max(u,b.x2),h=Math.max(h,b.y2),d=g.params[2],p=g.params[3];break}case"A":{let v=g.params[0],S=g.params[1],M=g.params[2],b=g.params[3],w=g.params[4],A=g.params[5],P=g.params[6],R=tt(d,p,v,S,Fe(M),b===1,w===1,A,P);l=Math.min(l,(a=R==null?void 0:R.x)!=null?a:0),c=Math.min(c,(r=R==null?void 0:R.y)!=null?r:0),u=Math.max(u,(n=R==null?void 0:R.x2)!=null?n:0),h=Math.max(h,(s=R==null?void 0:R.y2)!=null?s:0),d=g.params[5],p=g.params[6];break}}return{x:k(l,t),y:k(c,t),w:k(Math.abs(u-l),t),h:k(Math.abs(h-c),t),x2:k(u,t),y2:k(h,t)}};function q(e){return q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(e)}var at=/^\s+/,rt=/\s+$/;function m(e,t){if(e=e||"",t=t||{},e instanceof m)return e;if(!(this instanceof m))return new m(e,t);var a=nt(e);this._originalInput=e,this._r=a.r,this._g=a.g,this._b=a.b,this._a=a.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||a.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=a.ok}m.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},getLuminance:function(){var t=this.toRgb(),a,r,n,s,i,o;return a=t.r/255,r=t.g/255,n=t.b/255,a<=.03928?s=a/12.92:s=Math.pow((a+.055)/1.055,2.4),r<=.03928?i=r/12.92:i=Math.pow((r+.055)/1.055,2.4),n<=.03928?o=n/12.92:o=Math.pow((n+.055)/1.055,2.4),.2126*s+.7152*i+.0722*o},setAlpha:function(t){return this._a=xe(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=ge(this._r,this._g,this._b);return{h:t.h*360,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=ge(this._r,this._g,this._b),a=Math.round(t.h*360),r=Math.round(t.s*100),n=Math.round(t.v*100);return this._a==1?"hsv("+a+", "+r+"%, "+n+"%)":"hsva("+a+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var t=fe(this._r,this._g,this._b);return{h:t.h*360,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=fe(this._r,this._g,this._b),a=Math.round(t.h*360),r=Math.round(t.s*100),n=Math.round(t.l*100);return this._a==1?"hsl("+a+", "+r+"%, "+n+"%)":"hsla("+a+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(t){return pe(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return ot(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(y(this._r,255)*100)+"%",g:Math.round(y(this._g,255)*100)+"%",b:Math.round(y(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(y(this._r,255)*100)+"%, "+Math.round(y(this._g,255)*100)+"%, "+Math.round(y(this._b,255)*100)+"%)":"rgba("+Math.round(y(this._r,255)*100)+"%, "+Math.round(y(this._g,255)*100)+"%, "+Math.round(y(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:xt[pe(this._r,this._g,this._b,!0)]||!1},toFilter:function(t){var a="#"+ve(this._r,this._g,this._b,this._a),r=a,n=this._gradientType?"GradientType = 1, ":"";if(t){var s=m(t);r="#"+ve(s._r,s._g,s._b,s._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+a+",endColorstr="+r+")"},toString:function(t){var a=!!t;t=t||this._format;var r=!1,n=this._a<1&&this._a>=0,s=!a&&n&&(t==="hex"||t==="hex6"||t==="hex3"||t==="hex4"||t==="hex8"||t==="name");return s?t==="name"&&this._a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},clone:function(){return m(this.toString())},_applyModification:function(t,a){var r=t.apply(null,[this].concat([].slice.call(a)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(mt,arguments)},brighten:function(){return this._applyModification(dt,arguments)},darken:function(){return this._applyModification(ft,arguments)},desaturate:function(){return this._applyModification(ut,arguments)},saturate:function(){return this._applyModification(ht,arguments)},greyscale:function(){return this._applyModification(ct,arguments)},spin:function(){return this._applyModification(gt,arguments)},_applyCombination:function(t,a){return t.apply(null,[this].concat([].slice.call(a)))},analogous:function(){return this._applyCombination(bt,arguments)},complement:function(){return this._applyCombination(pt,arguments)},monochromatic:function(){return this._applyCombination(Mt,arguments)},splitcomplement:function(){return this._applyCombination(vt,arguments)},triad:function(){return this._applyCombination(be,[3])},tetrad:function(){return this._applyCombination(be,[4])}};m.fromRatio=function(e,t){if(q(e)=="object"){var a={};for(var r in e)e.hasOwnProperty(r)&&(r==="a"?a[r]=e[r]:a[r]=V(e[r]));e=a}return m(e,t)};function nt(e){var t={r:0,g:0,b:0},a=1,r=null,n=null,s=null,i=!1,o=!1;return typeof e=="string"&&(e=kt(e)),q(e)=="object"&&(N(e.r)&&N(e.g)&&N(e.b)?(t=st(e.r,e.g,e.b),i=!0,o=String(e.r).substr(-1)==="%"?"prgb":"rgb"):N(e.h)&&N(e.s)&&N(e.v)?(r=V(e.s),n=V(e.v),t=lt(e.h,r,n),i=!0,o="hsv"):N(e.h)&&N(e.s)&&N(e.l)&&(r=V(e.s),s=V(e.l),t=it(e.h,r,s),i=!0,o="hsl"),e.hasOwnProperty("a")&&(a=e.a)),a=xe(a),{ok:i,format:e.format||o,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a}}function st(e,t,a){return{r:y(e,255)*255,g:y(t,255)*255,b:y(a,255)*255}}function fe(e,t,a){e=y(e,255),t=y(t,255),a=y(a,255);var r=Math.max(e,t,a),n=Math.min(e,t,a),s,i,o=(r+n)/2;if(r==n)s=i=0;else{var l=r-n;switch(i=o>.5?l/(2-r-n):l/(r+n),r){case e:s=(t-a)/l+(t<a?6:0);break;case t:s=(a-e)/l+2;break;case a:s=(e-t)/l+4;break}s/=6}return{h:s,s:i,l:o}}function it(e,t,a){var r,n,s;e=y(e,360),t=y(t,100),a=y(a,100);function i(c,u,h){return h<0&&(h+=1),h>1&&(h-=1),h<1/6?c+(u-c)*6*h:h<1/2?u:h<2/3?c+(u-c)*(2/3-h)*6:c}if(t===0)r=n=s=a;else{var o=a<.5?a*(1+t):a+t-a*t,l=2*a-o;r=i(l,o,e+1/3),n=i(l,o,e),s=i(l,o,e-1/3)}return{r:r*255,g:n*255,b:s*255}}function ge(e,t,a){e=y(e,255),t=y(t,255),a=y(a,255);var r=Math.max(e,t,a),n=Math.min(e,t,a),s,i,o=r,l=r-n;if(i=r===0?0:l/r,r==n)s=0;else{switch(r){case e:s=(t-a)/l+(t<a?6:0);break;case t:s=(a-e)/l+2;break;case a:s=(e-t)/l+4;break}s/=6}return{h:s,s:i,v:o}}function lt(e,t,a){e=y(e,360)*6,t=y(t,100),a=y(a,100);var r=Math.floor(e),n=e-r,s=a*(1-t),i=a*(1-n*t),o=a*(1-(1-n)*t),l=r%6,c=[a,i,s,s,o,a][l],u=[o,a,a,i,s,s][l],h=[s,s,o,a,a,i][l];return{r:c*255,g:u*255,b:h*255}}function pe(e,t,a,r){var n=[I(Math.round(e).toString(16)),I(Math.round(t).toString(16)),I(Math.round(a).toString(16))];return r&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function ot(e,t,a,r,n){var s=[I(Math.round(e).toString(16)),I(Math.round(t).toString(16)),I(Math.round(a).toString(16)),I(Se(r))];return n&&s[0].charAt(0)==s[0].charAt(1)&&s[1].charAt(0)==s[1].charAt(1)&&s[2].charAt(0)==s[2].charAt(1)&&s[3].charAt(0)==s[3].charAt(1)?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function ve(e,t,a,r){var n=[I(Se(r)),I(Math.round(e).toString(16)),I(Math.round(t).toString(16)),I(Math.round(a).toString(16))];return n.join("")}m.equals=function(e,t){return!e||!t?!1:m(e).toRgbString()==m(t).toRgbString()};m.random=function(){return m.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function ut(e,t){t=t===0?0:t||10;var a=m(e).toHsl();return a.s-=t/100,a.s=F(a.s),m(a)}function ht(e,t){t=t===0?0:t||10;var a=m(e).toHsl();return a.s+=t/100,a.s=F(a.s),m(a)}function ct(e){return m(e).desaturate(100)}function mt(e,t){t=t===0?0:t||10;var a=m(e).toHsl();return a.l+=t/100,a.l=F(a.l),m(a)}function dt(e,t){t=t===0?0:t||10;var a=m(e).toRgb();return a.r=Math.max(0,Math.min(255,a.r-Math.round(255*-(t/100)))),a.g=Math.max(0,Math.min(255,a.g-Math.round(255*-(t/100)))),a.b=Math.max(0,Math.min(255,a.b-Math.round(255*-(t/100)))),m(a)}function ft(e,t){t=t===0?0:t||10;var a=m(e).toHsl();return a.l-=t/100,a.l=F(a.l),m(a)}function gt(e,t){var a=m(e).toHsl(),r=(a.h+t)%360;return a.h=r<0?360+r:r,m(a)}function pt(e){var t=m(e).toHsl();return t.h=(t.h+180)%360,m(t)}function be(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var a=m(e).toHsl(),r=[m(e)],n=360/t,s=1;s<t;s++)r.push(m({h:(a.h+s*n)%360,s:a.s,l:a.l}));return r}function vt(e){var t=m(e).toHsl(),a=t.h;return[m(e),m({h:(a+72)%360,s:t.s,l:t.l}),m({h:(a+216)%360,s:t.s,l:t.l})]}function bt(e,t,a){t=t||6,a=a||30;var r=m(e).toHsl(),n=360/a,s=[m(e)];for(r.h=(r.h-(n*t>>1)+720)%360;--t;)r.h=(r.h+n)%360,s.push(m(r));return s}function Mt(e,t){t=t||6;for(var a=m(e).toHsv(),r=a.h,n=a.s,s=a.v,i=[],o=1/t;t--;)i.push(m({h:r,s:n,v:s})),s=(s+o)%1;return i}m.mix=function(e,t,a){a=a===0?0:a||50;var r=m(e).toRgb(),n=m(t).toRgb(),s=a/100,i={r:(n.r-r.r)*s+r.r,g:(n.g-r.g)*s+r.g,b:(n.b-r.b)*s+r.b,a:(n.a-r.a)*s+r.a};return m(i)};m.readability=function(e,t){var a=m(e),r=m(t);return(Math.max(a.getLuminance(),r.getLuminance())+.05)/(Math.min(a.getLuminance(),r.getLuminance())+.05)};m.isReadable=function(e,t,a){var r=m.readability(e,t),n,s;switch(s=!1,n=Rt(a),n.level+n.size){case"AAsmall":case"AAAlarge":s=r>=4.5;break;case"AAlarge":s=r>=3;break;case"AAAsmall":s=r>=7;break}return s};m.mostReadable=function(e,t,a){var r=null,n=0,s,i,o,l;a=a||{},i=a.includeFallbackColors,o=a.level,l=a.size;for(var c=0;c<t.length;c++)s=m.readability(e,t[c]),s>n&&(n=s,r=m(t[c]));return m.isReadable(e,r,{level:o,size:l})||!i?r:(a.includeFallbackColors=!1,m.mostReadable(e,["#fff","#000"],a))};var Q=m.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},xt=m.hexNames=St(Q);function St(e){var t={};for(var a in e)e.hasOwnProperty(a)&&(t[e[a]]=a);return t}function xe(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function y(e,t){yt(e)&&(e="100%");var a=wt(e);return e=Math.min(t,Math.max(0,parseFloat(e))),a&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function F(e){return Math.min(1,Math.max(0,e))}function $(e){return parseInt(e,16)}function yt(e){return typeof e=="string"&&e.indexOf(".")!=-1&&parseFloat(e)===1}function wt(e){return typeof e=="string"&&e.indexOf("%")!=-1}function I(e){return e.length==1?"0"+e:""+e}function V(e){return e<=1&&(e=e*100+"%"),e}function Se(e){return Math.round(parseFloat(e)*255).toString(16)}function Me(e){return $(e)/255}var T=function(){var e="[-\\+]?\\d+%?",t="[-\\+]?\\d*\\.\\d+%?",a="(?:"+t+")|(?:"+e+")",r="[\\s|\\(]+("+a+")[,|\\s]+("+a+")[,|\\s]+("+a+")\\s*\\)?",n="[\\s|\\(]+("+a+")[,|\\s]+("+a+")[,|\\s]+("+a+")[,|\\s]+("+a+")\\s*\\)?";return{CSS_UNIT:new RegExp(a),rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+n),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+n),hsv:new RegExp("hsv"+r),hsva:new RegExp("hsva"+n),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function N(e){return!!T.CSS_UNIT.exec(e)}function kt(e){e=e.replace(at,"").replace(rt,"").toLowerCase();var t=!1;if(Q[e])e=Q[e],t=!0;else if(e=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var a;return(a=T.rgb.exec(e))?{r:a[1],g:a[2],b:a[3]}:(a=T.rgba.exec(e))?{r:a[1],g:a[2],b:a[3],a:a[4]}:(a=T.hsl.exec(e))?{h:a[1],s:a[2],l:a[3]}:(a=T.hsla.exec(e))?{h:a[1],s:a[2],l:a[3],a:a[4]}:(a=T.hsv.exec(e))?{h:a[1],s:a[2],v:a[3]}:(a=T.hsva.exec(e))?{h:a[1],s:a[2],v:a[3],a:a[4]}:(a=T.hex8.exec(e))?{r:$(a[1]),g:$(a[2]),b:$(a[3]),a:Me(a[4]),format:t?"name":"hex8"}:(a=T.hex6.exec(e))?{r:$(a[1]),g:$(a[2]),b:$(a[3]),format:t?"name":"hex"}:(a=T.hex4.exec(e))?{r:$(a[1]+""+a[1]),g:$(a[2]+""+a[2]),b:$(a[3]+""+a[3]),a:Me(a[4]+""+a[4]),format:t?"name":"hex8"}:(a=T.hex3.exec(e))?{r:$(a[1]+""+a[1]),g:$(a[2]+""+a[2]),b:$(a[3]+""+a[3]),format:t?"name":"hex"}:!1}function Rt(e){var t,a;return e=e||{level:"AA",size:"small"},t=(e.level||"AA").toUpperCase(),a=(e.size||"small").toLowerCase(),t!=="AA"&&t!=="AAA"&&(t="AA"),a!=="small"&&a!=="large"&&(a="small"),{level:t,size:a}}var ye=(e,t)=>{let{$canvas:a}=t,r=[],n,s,i=e.minSize,o=e.maxSize,l=e.minSpeed,c=e.maxSpeed,u=e.maxScale,h=e.minScale;for(let f=0;f<e.particlesNumber;f++){let d=L(i,o),p=[d,d];if(e.svgPathData&&e.svgPathData.length>0){n=B(e.svgPathData);let v=de(n);v&&(s=[p[0]/v.w,p[1]/v.h])}let x;e.particlesColors&&e.particlesColors.length>0?x=B(e.particlesColors):x=le();let g=m(x).toRgb();r.push({center:[L(0,a.width),L(0,a.height)],speed:[L(l,c),L(l,c)],size:p,color:x,rgbaColor:[g.r,g.g,g.b,g.a],svgPathData:n,svgSize:s,angleRad:0,rotateCounterClockwise:ie(),scale:(h+u)/2,scaleDirection:B([-1,1]),opacity:L(0,1),opacityDirection:B([-1,1])})}return r},we=(e,t,a)=>{let{$canvas:r}=a,n=z({},e),[s,i]=e.center,o=[...e.speed];if((s>r.width||s<0)&&(o[0]=-o[0]),(i>r.height||i<0)&&(o[1]=-o[1]),n.speed=o,n.center=[s+n.speed[0],i+n.speed[1]],t.rotate&&(e.rotateCounterClockwise?n.angleRad+=Math.PI/180:n.angleRad-=Math.PI/180),t.scaleInOut){let l=t.scaleStep,c=t.maxScale,u=t.minScale;n.scaleDirection>0?n.scale+=l:n.scale-=l,n.scale>c&&(n.scale=c,n.scaleDirection=-1),n.scale<u&&(n.scale=u,n.scaleDirection=1)}if(t.fadeInOut){let l=t.opacityStep;n.opacityDirection>0?n.opacity+=l:n.opacity-=l,n.opacity>1&&(n.scale=1,n.opacityDirection=-1),n.opacity<0&&(n.opacity=0,n.opacityDirection=1)}return n},ke=(e,t,a)=>{let{ctx:r}=a;if(!t.svgPathData){r.save();let{size:h}=e,f=h[0];t.scaleInOut&&(f*=e.scale);let d=t.fadeInOut?O(e.rgbaColor[0],e.rgbaColor[1],e.rgbaColor[2],e.opacity):e.color;ne({cx:e.center[0],cy:e.center[1],r:f,fillStyle:d},r),r.restore();return}let[n,s]=e.size,i=new Path2D(e.svgPathData);r.save();let o=n/2,l=s/2,[c,u]=[e.center[0]-o,e.center[1]-l];r.translate(c,u),e.svgSize&&(r.translate(o,l),r.scale(...e.svgSize),r.translate(-o,-l)),t.rotate&&(r.translate(o,l),r.rotate(e.angleRad),r.translate(-o,-l)),t.scaleInOut&&(r.translate(o,l),r.scale(e.scale,e.scale),r.translate(-o,-l)),t.fadeInOut?r.fillStyle=O(e.rgbaColor[0],e.rgbaColor[1],e.rgbaColor[2],e.opacity):r.fillStyle=e.color,r.fill(i),r.restore()};var Re={particlesNumber:40,particlesColors:[],minSpeed:-2,maxSpeed:2,minSize:5,maxSize:10,connected:!0,connectionColor:"rgb(70,126,150)",connectionSize:.09,lgConnectionSize:.15,mdConnectionSize:.2,smConnectionSize:.2,maxScale:2,minScale:.5,scaleStep:.01,opacityStep:.001},Ce=(e,t)=>t?z(z({},e),t):z({},e);var Ae=(e,t)=>{let{$canvas:a,ctx:r}=t,n={x:0,y:0,w:a.width,h:a.height};e.canvasColor?n.fillStyle=e.canvasColor:n.clear=!0,re(n,r),e.connected&&he(e,t);for(let s=0;s<t.particles.length;s++){let i=t.particles[s];ke(i,e,t),t.particles[s]=we(i,e,t)}},W=e=>{let t=Ce(Re,e);if(!t.$placeholder)return;let a=t.$placeholder.getBoundingClientRect(),r={width:a.width,height:a.height},{ctx:n,$canvas:s}=te(r);if(!n)return;t.$placeholder.append(s);let o=m(t.connectionColor).toRgb(),l={connectionRgbColor:[o.r,o.g,o.b,o.a],particles:[],ctx:n,$canvas:s};return l.particles=ye(t,l),oe({callback:()=>{n&&Ae(t,l)},restartOnResize:!0,resizeCallback:()=>{if(!t.$placeholder)return;let u=t.$placeholder.getBoundingClientRect();s.width=u.width,s.height=u.height,Ae(t,l)}}).start(),s};window.particles=W;var ra=W;export{ra as default};
//# sourceMappingURL=mz-particles.esm.js.map
