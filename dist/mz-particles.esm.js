/* 
MZ Particles
Version: 1.0.0
Author: Miriam Zusin     
Contact: miriam.zusin@gmail.com
Documentation: https://github.com/mzusin/mz-particles
License: MIT License            
*/
var Ae=Object.defineProperty;var J=Object.getOwnPropertySymbols;var Pe=Object.prototype.hasOwnProperty,_e=Object.prototype.propertyIsEnumerable;var K=(e,t,a)=>t in e?Ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,D=(e,t)=>{for(var a in t||(t={}))Pe.call(t,a)&&K(e,a,t[a]);if(J)for(var a of J(t))_e.call(t,a)&&K(e,a,t[a]);return e};var ee=e=>!isNaN(parseFloat(e))&&isFinite(e),$e=(e,t)=>{for(let a of t){let r=a[1];if(r===void 0)continue;let n=a[0];e.setAttribute(n,r.toString())}},te=(e,t)=>{for(let a of e){let r=a[1];if(r===void 0)continue;let n=a[0];t[n]=r}},j=(e,t,a)=>{let r=ee(a.width)&&ee(a.height),n=r?a.width:0,s=r?a.height:0;if(!r){let i=!!e.parentNode;i||document.body.append(e);let o=e.getBoundingClientRect();n=o.width,s=o.height,i||e.remove()}let l=t==null?void 0:t.getImageData(0,0,e.width,e.height);e.width=n,e.height=s,t&&l&&t.putImageData(l,0,0)},ae=e=>{let t=document.createElement("canvas");$e(t,[["id",e.id],["class",e.classes],["style",e.style],["title",e.title],["tabindex",e.tabindex],["role",e.role],["aria-label",e.ariaLabel]]),e.fallback&&(t.textContent=e.fallback);let a=typeof t.getContext=="function"?t.getContext("2d"):null;return j(t,a,e),{ctx:a,$canvas:t}},z=(e,t)=>{te([["lineWidth",e.lineWidth],["strokeStyle",e.strokeStyle],["lineCap",e.lineCap],["lineJoin",e.lineJoin],["miterLimit",e.miterLimit],["lineDashOffset",e.lineDashOffset]],t),e.lineDashSegments&&t.setLineDash(e.lineDashSegments)},U=(e,t)=>{e.fillStyle!==void 0&&(t.fillStyle=e.fillStyle),te([["shadowOffsetX",e.shadowOffsetX],["shadowOffsetY",e.shadowOffsetY],["shadowBlur",e.shadowBlur],["shadowColor",e.shadowColor]],t)},re=(e,t)=>{let{x1:a,y1:r,x2:n,y2:s}=e;t.save(),t.beginPath(),t.moveTo(a,r),t.lineTo(n,s),e.strokeStyle&&(z(e,t),t.stroke()),t.restore()};var G=(e,t)=>{let{x:a,y:r,w:n,h:s}=e;if(e.clear){t.clearRect(a,r,n,s);return}if(e.radii){t.save(),U(e,t),z(e,t),t.beginPath(),t.roundRect(a,r,n,s,e.radii),e.fillStyle&&t.fill(),e.strokeStyle&&t.stroke(),t.restore();return}t.save(),e.fillStyle&&(U(e,t),t.fillRect(a,r,n,s)),e.strokeStyle&&(z(e,t),t.strokeRect(a,r,n,s)),t.restore()};var ne=(e,t)=>{let{cx:a,cy:r,r:n}=e,s=e.startAngleRad===void 0?0:e.startAngleRad,l=e.endAngleRad===void 0?2*Math.PI:e.endAngleRad;t.save(),t.beginPath(),U(e,t),z(e,t),t.arc(a,r,n,s,l,e.counterclockwise),e.fillStyle&&t.fill(),e.strokeStyle&&(z(e,t),t.stroke()),t.restore()};var Te=Math.pow,X=(e,t=1/0)=>{if(t===1/0)return e;t<0&&(t=0);let a=Te(10,t);return Math.round(e*a)/a};var Ee=(e,t,a=1/0)=>{let r=[];for(let n=0;n<e.length;n++)r.push(X(e[n]-t[n],a));return r};var Le=(e,t=1/0)=>{let a=0;for(let r=0;r<e.length;r++)a+=e[r]*e[r];return X(Math.sqrt(a),t)};var se=(e,t,a=1/0)=>{let r=Ee(e,t);return Le(r,a)};var H=(e,t,a=1/0)=>X(Math.random()*(t-e)+e,a),He=(e,t)=>Math.floor(Math.random()*(t-e+1)+e),le=()=>Math.random()<.5,B=e=>{let t=He(0,e.length-1);return e[t]};var ie=()=>{let e=Ie();return Ne(e)},Ie=()=>{let e=H(1,360),t=H(0,100),a=H(0,100);return[e,t,a]};var Ne=e=>{if(e[0]>360||e[1]>100||e[2]>100)return"#ffffff";if(e[0]<0||e[1]<0||e[2]<0)return"#000000";let t=e[0]/360,a=e[1]/100,r=e[2]/100,n,s,l;if(a===0)n=s=l=r;else{let o=(u,d,f)=>(f<0&&(f+=1),f>1&&(f-=1),f<.16666666666666666?u+(d-u)*6*f:f<.5?d:f<.6666666666666666?u+(d-u)*(.6666666666666666-f)*6:u),m=r<.5?r*(1+a):r+a-r*a,h=2*r-m;n=o(h,m,t+1/3),s=o(h,m,t),l=o(h,m,t-1/3)}let i=o=>{let m=Math.round(o*255).toString(16);return m.length===1?"0"+m:m};return`#${i(n)}${i(s)}${i(l)}`};var oe=e=>{let t=e.duration!==void 0?e.duration:1/0,a,r,n,s,l=!1,i,o=()=>{a=void 0,n=void 0,s=void 0,l=!1,r!==void 0&&window.cancelAnimationFrame(r)},m=()=>{o(),b()},h=()=>{l=!1},u=()=>{l=!0},d=v=>{a===void 0&&(a=v),n=v-a,l&&s!==v&&typeof e.callback=="function"&&e.callback(M()),n<=t?(s=v,r=window.requestAnimationFrame(d)):o()},f=(v,S)=>{m(),typeof e.resizeCallback=="function"&&e.resizeCallback(v,S)},b=()=>{a=void 0,n=void 0,s=void 0,l=!0,e.restartOnResize&&window.ResizeObserver&&i===void 0?(i=new ResizeObserver(f),i.observe(document.body,{box:"border-box"})):r=window.requestAnimationFrame(d)},R=()=>n,A=()=>l,g=()=>a,p=()=>{if(!(t===1/0||n===void 0))return n*100/t},x=()=>i,M=()=>({start:b,stop:o,pause:h,resume:u,restart:m,isAnimating:A,getElapsedTime:R,getStartTime:g,getPercent:p,getResizeObserver:x});return M()};var ue=(e,t)=>{let{particles:a,ctx:r,connectionRgbColor:n}=t,s=e.maxConnectionSize;for(let l=0;l<a.length;l++){let i=a[l];for(let o=0;o<a.length;o++){let m=a[o],h=se(i.center,m.center);if(h<s){let u=e.maxConnectionSize===0?1:1-h/s;re({x1:i.center[0],y1:i.center[1],x2:m.center[0],y2:m.center[1],strokeStyle:`rgba(${n[0]}, ${n[1]}, ${n[2]}, ${u} )`},r)}}}};var De=Math.pow,w=(e,t=1/0)=>{if(t===1/0)return e;t<0&&(t=0);let a=De(10,t);return Math.round(e*a)/a},ze=(e,t=1/0)=>{let a=e*(Math.PI/180);return w(a,t)};var Z=e=>!isNaN(parseFloat(e))&&isFinite(e),Q=(e,t=1/0)=>{let a=e[0],r=e[1],n=e[2]-r;return a===0&&n===0?1/0:a===0?NaN:w(n/a,t)},he=(e,t=1/0)=>{let a=e[0],r=e[1],n=e[2],s=e[3];if(a===0){let h=Q([r,n,s],t);return Z(h)?[h]:[]}let l=n-s,i=r*r-4*a*l;if(i<0)return[];if(i===0)return[w(-r/(2*a),t)];let o=2*a,m=Math.sqrt(i);return[w((-r+m)/o,t),w((-r-m)/o,t)]},Be=(e,t,a,r,n=1/0)=>{let s=Math.pow(1-e,2),l=(1-e)*2*e,i=e*e;return[w(s*t[0]+l*a[0]+i*r[0],n),w(s*t[1]+l*a[1]+i*r[1],n)]},qe=(e,t,a,r,n,s=1/0)=>{let l=Math.pow(1-e,3),i=Math.pow(1-e,2)*3*e,o=(1-e)*3*e*e,m=e*e*e;return[w(l*t[0]+i*a[0]+o*r[0]+m*n[0],s),w(l*t[1]+i*a[1]+o*r[1]+m*n[1],s)]},Fe=(e,t,a,r=1/0)=>{let n=2*e[0]-4*t[0]+2*a[0],s=-2*e[0]+2*t[0],l=Q([n,s,0],r),i=2*e[1]-4*t[1]+2*a[1],o=-2*e[1]+2*t[1],m=Q([i,o,0],r),h=[];return Z(l)&&h.push(l),Z(m)&&h.push(m),h},Oe=(e,t,a,r,n=1/0)=>{let s=-3*e[0]+9*t[0]-9*a[0]+3*r[0],l=6*e[0]-12*t[0]+6*a[0],i=-3*e[0]+3*t[0],o=[s,l,i,0],m=-3*e[1]+9*t[1]-9*a[1]+3*r[1],h=6*e[1]-12*t[1]+6*a[1],u=-3*e[1]+3*t[1],d=[m,h,u,0],f=he(o,n).filter(R=>R>=0&&R<=1),b=he(d,n).filter(R=>R>=0&&R<=1);return[...f,...b].length===2?[...f,...b]:null},Ve=(e,t,a,r=1/0)=>{let n=Fe(e,t,a),s=1/0,l=1/0,i=-1/0,o=-1/0;for(let m of n){let h=Be(m,e,t,a),u=h[0],d=h[1];s=Math.min(s,u),i=Math.max(i,u),l=Math.min(l,d),o=Math.max(o,d)}return s=w(Math.min(s,e[0],a[0]),r),i=w(Math.max(i,e[0],a[0]),r),l=w(Math.min(l,e[1],a[1]),r),o=w(Math.max(o,e[1],a[1]),r),{x:s,y:l,w:Math.abs(i-s),h:Math.abs(o-l),x2:i,y2:o}},Ue=(e,t,a,r,n=1/0)=>{let s=Oe(e,t,a,r)||[],l=1/0,i=1/0,o=-1/0,m=-1/0;for(let h of s){let u=qe(h,e,t,a,r),d=u[0],f=u[1];l=Math.min(l,d!=null?d:1/0),o=Math.max(o,d!=null?d:-1/0),i=Math.min(i,f!=null?f:1/0),m=Math.max(m,f!=null?f:-1/0)}return l=w(Math.min(l,e[0],r[0]),n),o=w(Math.max(o,e[0],r[0]),n),i=w(Math.min(i,e[1],r[1]),n),m=w(Math.max(m,e[1],r[1]),n),{x:l,y:i,w:Math.abs(o-l),h:Math.abs(m-i),x2:o,y2:m}},me=new RegExp("^[+-]?(?=\\.\\d|\\d)(?:0|[1-9]\\d*)?(?:\\.\\d+)?(?:(?<=\\d)(?:[eE][+-]?\\d+))?"),je=e=>{let t={tokens:[],errors:[]};if(!e||e.trim()==="")return t;let a=0,r=0,n=0,s=()=>a>=e.length,l=u=>{t.tokens.push({tokenType:u,line:r,col:n})},i=u=>{t.tokens.push({tokenType:"num",value:u,line:r,col:n})},o=u=>{t.errors.push({line:r,col:n,msg:u})},m=()=>s()?!1:me.test(e.substring(a)),h=()=>{let u=e[a];if(u.charAt(0)===`
`||u.charAt(0)==="\r"){a++,n=0,r++;return}if(/\s/.test(u)||u===","){a++,n++;return}if(m()){let d=e.substring(a).match(me);if(d&&d.length>0){let f=d[0];i(f),a+=f.length,n+=f.length;return}}switch(u){case"M":l("M");break;case"m":l("m");break;case"Z":l("Z");break;case"z":l("z");break;case"L":l("L");break;case"l":l("l");break;case"H":l("H");break;case"h":l("h");break;case"V":l("V");break;case"v":l("v");break;case"C":l("C");break;case"c":l("c");break;case"S":l("S");break;case"s":l("s");break;case"Q":l("Q");break;case"q":l("q");break;case"T":l("T");break;case"t":l("t");break;case"A":l("A");break;case"a":l("a");break;default:{o(`Unexpected character ${u}`);break}}a++,n++};for(;!s();)h();return t},Ge=e=>{let t={commands:[],errors:e.errors||[]};if(e.errors.length>0||e.tokens.length===0)return t;let{tokens:a,errors:r}=e,n=(h,u)=>{r.push({line:h==null?void 0:h.line,col:h==null?void 0:h.col,msg:u})};if(a[0].tokenType!=="M"&&a[0].tokenType!=="m")return n(a[0],"A path data segment must begin with a 'moveto' command 'M' or 'm'."),t;let s=0,l=()=>s>=a.length,i=h=>{var u,d;if(!h||h.toLowerCase()!=="a")return!0;let f=(((u=a[s+4])==null?void 0:u.value)||"").toString(),b=(((d=a[s+5])==null?void 0:d.value)||"").toString();return(f==="0"||f==="1")&&(b==="0"||b==="1")},o=(h,u,d)=>{var f;let b=a[s].tokenType,R=[];if(h>0)for(let p=1;p<=h;p++){if(!a[s+p]||a[s+p].tokenType!=="num"){n(a[s],`Expected number(s) after command ${b}.`),s+=h;return}R.push(Number(a[s+p].value))}if(!i(b)){n(a[s],"Arc flags must be 0 or 1."),s+=h+1;return}if(!i(b)){n(a[s],"Arc flags must be 0 or 1."),s+=h+1;return}if(t.commands.push({command:a[s].tokenType,params:R}),s+=h+1,h<=0)return;let A=[];for(;((f=a[s])==null?void 0:f.tokenType)==="num";)A.push(a[s]),s++;if(A.length%h!==0){n(A[A.length-1],"Expected a number.");return}let g=d?u.toLowerCase():u.toUpperCase();for(let p=0;p<A.length;p+=h){let x=[];for(let M=0;M<h;M++)x.push(Number(A[p+M].value));t.commands.push({command:g,params:x})}},m=()=>{let h=a[s],u=h.tokenType.toLowerCase()===h.tokenType;switch(h.tokenType){case"M":case"m":case"L":case"l":{o(2,"L",u);break}case"Z":case"z":{o(0,"L",u);break}case"H":case"h":case"V":case"v":{o(1,h.tokenType,u);break}case"C":case"c":{o(6,h.tokenType,u);break}case"S":case"s":case"Q":case"q":{o(4,h.tokenType,u);break}case"T":case"t":{o(2,h.tokenType,u);break}case"A":case"a":{o(7,h.tokenType,u);break}default:{n(a[s],"Wrong path command."),s++;break}}};for(o(2,"L",a[0].tokenType==="m");!l();)m();return t};var Xe=e=>{let{commands:t}=e;if(t.length<=0)return e;let a=t[0].params[0],r=t[0].params[1],n=a,s=r;t[0].command="M";for(let l=1;l<t.length;l++){switch(t[l].command){case"m":{t[l].params[0]+=a,t[l].params[1]+=r,n=t[l].params[0],s=t[l].params[1];break}case"Z":case"z":{a=n,r=s;break}case"l":case"t":{let i=t[l].params[0],o=t[l].params[1];t[l].params[0]+=a,t[l].params[1]+=r,a+=i,r+=o;break}case"M":case"L":{a=t[l].params[0],r=t[l].params[1];break}case"h":{let i=t[l].params[0];t[l].params[0]+=a,a+=i;break}case"H":{a=t[l].params[0];break}case"v":{let i=t[l].params[0];t[l].params[0]+=r,r+=i;break}case"V":{r=t[l].params[0];break}case"c":{let i=t[l].params[4],o=t[l].params[5];t[l].params[0]+=a,t[l].params[1]+=r,t[l].params[2]+=a,t[l].params[3]+=r,t[l].params[4]+=a,t[l].params[5]+=r,a+=i,r+=o;break}case"C":{a=t[l].params[4],r=t[l].params[5];break}case"s":case"q":{let i=t[l].params[2],o=t[l].params[3];t[l].params[0]+=a,t[l].params[1]+=r,t[l].params[2]+=a,t[l].params[3]+=r,a+=i,r+=o;break}case"S":case"Q":{a=t[l].params[2],r=t[l].params[3];break}case"a":{let i=t[l].params[5],o=t[l].params[6];t[l].params[5]+=a,t[l].params[6]+=r,a+=i,r+=o;break}case"A":{a=t[l].params[5],r=t[l].params[6];break}}t[l].command=t[l].command.toUpperCase()}return e};var Ye=e=>{let{commands:t}=e;if(t.length<=0)return e;t[0].command="M";for(let a=1;a<t.length;a++)switch(t[a].command){case"H":{let r=t[a-1];if(!r)continue;t[a].command="L",t[a].params[1]=r.params[1];break}case"V":{let r=t[a-1];if(!r)continue;t[a].command="L";let n=t[a].params[0];t[a].params[0]=r.params[0],t[a].params.push(n);break}case"S":{let r=t[a-1];if(!r)continue;t[a].command="C",t[a].params.unshift(r.params[3]),t[a].params.unshift(r.params[2]);break}case"T":{let r=t[a-1];if(!r)continue;t[a].command="Q",t[a].params.unshift(r.params[1]),t[a].params.unshift(r.params[0]);break}}return e};var Ze=e=>{let t=je(e);return Ge(t)};var _=(e,t)=>{let a=2*Math.PI,r=t>0?1:-1;return(a+r*Math.acos(e/Math.sqrt(e*e+t*t)))%a},Y=(e,t,a,r)=>({x:e,y:a,w:Math.abs(r-a),h:Math.abs(t-e),x2:t,y2:r}),Qe=(e,t,a,r,n,s,l,i,o)=>{let m,h,u,d;if(a<0&&(a*=-1),r<0&&(r*=-1),a===0||r===0)return m=e<i?e:i,h=e>i?e:i,u=t<o?t:o,d=t>o?t:o,Y(m,h,u,d);let f=Math.cos(n)*(e-i)/2+Math.sin(n)*(t-o)/2,b=-Math.sin(n)*(e-i)/2+Math.cos(n)*(t-o)/2,R=a*a*r*r-a*a*b*b-r*r*f*f;R/=a*a*b*b+r*r*f*f;let A=0,g=0;if(R<0){let L=a/r;if(R=b*b+f*f/(L*L),R<0)return m=e<i?e:i,h=e>i?e:i,u=t<o?t:o,d=t>o?t:o,Y(m,h,u,d);r=Math.sqrt(R),a=L*r}else{let L=(s==l?-1:1)*Math.sqrt(R);A=L*a*b/r,g=-L*r*f/a}let p=A*Math.cos(n)-g*Math.sin(n)+(e+i)/2,x=A*Math.sin(n)+g*Math.cos(n)+(t+o)/2,M,v,S,C;if(n===0||n===Math.PI)m=p-a,M=_(-a,0),h=p+a,v=_(a,0),u=x-r,S=_(0,-r),d=x+r,C=_(0,r);else if(n===Math.PI/2||n===3*Math.PI/2)m=p-r,M=_(-r,0),h=p+r,v=_(r,0),u=x-a,S=_(0,-a),d=x+a,C=_(0,a);else{M=-Math.atan(r*Math.tan(n)/a),v=Math.PI-Math.atan(r*Math.tan(n)/a),m=p+a*Math.cos(v)*Math.cos(n)-r*Math.sin(M)*Math.sin(n),h=p+a*Math.cos(v)*Math.cos(n)-r*Math.sin(v)*Math.sin(n),m>h&&([m,h]=[h,m],[M,v]=[v,M]);let L=x+a*Math.cos(M)*Math.sin(n)+r*Math.sin(M)*Math.cos(n);M=_(m-p,L-x),L=x+a*Math.cos(v)*Math.sin(n)+r*Math.sin(v)*Math.cos(n),v=_(h-p,L-x),S=Math.atan(r/(Math.tan(n)*a)),C=Math.atan(r/(Math.tan(n)*a))+Math.PI,u=x+a*Math.cos(S)*Math.sin(n)+r*Math.sin(S)*Math.cos(n),d=x+a*Math.cos(C)*Math.sin(n)+r*Math.sin(C)*Math.cos(n),u>d&&([u,d]=[d,u],[S,C]=[C,S]);let V=p+a*Math.cos(S)*Math.cos(n)-r*Math.sin(S)*Math.sin(n);S=_(V-p,u-x),V=p+a*Math.cos(C)*Math.cos(n)-r*Math.sin(C)*Math.sin(n),C=_(V-p,d-x)}let P=_(e-p,t-x),k=_(i-p,o-x);l||([P,k]=[k,P]);let I=!1;return P>k&&([P,k]=[k,P],I=!0),(!I&&(P>M||k<M)||I&&!(P>M||k<M))&&(m=Math.min(e,i)),(!I&&(P>v||k<v)||I&&!(P>v||k<v))&&(h=Math.max(e,i)),(!I&&(P>S||k<S)||I&&!(P>S||k<S))&&(u=Math.min(t,o)),(!I&&(P>C||k<C)||I&&!(P>C||k<C))&&(d=Math.max(t,o)),Y(m,h,u,d)},ce=(e,t=2)=>{var a,r,n,s;if(!e||e.trim()==="")return null;let l=Ze(e);if(l.errors.length>0)return null;let i=Xe(l);if(!i||i.commands.length<=0)return null;let o=1/0,m=1/0,h=-1/0,u=-1/0,d=Ye(i),f=d.commands[0].params[0],b=d.commands[0].params[1],R=f,A=b;for(let g of d.commands)switch(g.command){case"M":{o=Math.min(o,g.params[0]),m=Math.min(m,g.params[1]),h=Math.max(h,g.params[0]),u=Math.max(u,g.params[1]),R=g.params[0],A=g.params[1];break}case"Z":{f=R,b=A;break}case"L":{o=Math.min(o,g.params[0]),m=Math.min(m,g.params[1]),h=Math.max(h,g.params[0]),u=Math.max(u,g.params[1]),f=g.params[0],b=g.params[1];break}case"C":{let p=[f,b],x=[g.params[0],g.params[1]],M=[g.params[2],g.params[3]],v=[g.params[4],g.params[5]],S=Ue(p,x,M,v);o=Math.min(o,S.x),m=Math.min(m,S.y),h=Math.max(h,S.x2),u=Math.max(u,S.y2),f=g.params[4],b=g.params[5];break}case"Q":{let p=[f,b],x=[g.params[0],g.params[1]],M=[g.params[2],g.params[3]],v=Ve(p,x,M);o=Math.min(o,v.x),m=Math.min(m,v.y),h=Math.max(h,v.x2),u=Math.max(u,v.y2),f=g.params[2],b=g.params[3];break}case"A":{let p=g.params[0],x=g.params[1],M=g.params[2],v=g.params[3],S=g.params[4],C=g.params[5],P=g.params[6],k=Qe(f,b,p,x,ze(M),v===1,S===1,C,P);o=Math.min(o,(a=k==null?void 0:k.x)!=null?a:0),m=Math.min(m,(r=k==null?void 0:k.y)!=null?r:0),h=Math.max(h,(n=k==null?void 0:k.x2)!=null?n:0),u=Math.max(u,(s=k==null?void 0:k.y2)!=null?s:0),f=g.params[5],b=g.params[6];break}}return{x:w(o,t),y:w(m,t),w:w(Math.abs(h-o),t),h:w(Math.abs(u-m),t),x2:w(h,t),y2:w(u,t)}};function F(e){return F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(e)}var We=/^\s+/,Je=/\s+$/;function c(e,t){if(e=e||"",t=t||{},e instanceof c)return e;if(!(this instanceof c))return new c(e,t);var a=Ke(e);this._originalInput=e,this._r=a.r,this._g=a.g,this._b=a.b,this._a=a.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||a.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=a.ok}c.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},getLuminance:function(){var t=this.toRgb(),a,r,n,s,l,i;return a=t.r/255,r=t.g/255,n=t.b/255,a<=.03928?s=a/12.92:s=Math.pow((a+.055)/1.055,2.4),r<=.03928?l=r/12.92:l=Math.pow((r+.055)/1.055,2.4),n<=.03928?i=n/12.92:i=Math.pow((n+.055)/1.055,2.4),.2126*s+.7152*l+.0722*i},setAlpha:function(t){return this._a=Me(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=fe(this._r,this._g,this._b);return{h:t.h*360,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=fe(this._r,this._g,this._b),a=Math.round(t.h*360),r=Math.round(t.s*100),n=Math.round(t.v*100);return this._a==1?"hsv("+a+", "+r+"%, "+n+"%)":"hsva("+a+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var t=de(this._r,this._g,this._b);return{h:t.h*360,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=de(this._r,this._g,this._b),a=Math.round(t.h*360),r=Math.round(t.s*100),n=Math.round(t.l*100);return this._a==1?"hsl("+a+", "+r+"%, "+n+"%)":"hsla("+a+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(t){return ge(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return rt(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(y(this._r,255)*100)+"%",g:Math.round(y(this._g,255)*100)+"%",b:Math.round(y(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(y(this._r,255)*100)+"%, "+Math.round(y(this._g,255)*100)+"%, "+Math.round(y(this._b,255)*100)+"%)":"rgba("+Math.round(y(this._r,255)*100)+"%, "+Math.round(y(this._g,255)*100)+"%, "+Math.round(y(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:gt[ge(this._r,this._g,this._b,!0)]||!1},toFilter:function(t){var a="#"+pe(this._r,this._g,this._b,this._a),r=a,n=this._gradientType?"GradientType = 1, ":"";if(t){var s=c(t);r="#"+pe(s._r,s._g,s._b,s._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+a+",endColorstr="+r+")"},toString:function(t){var a=!!t;t=t||this._format;var r=!1,n=this._a<1&&this._a>=0,s=!a&&n&&(t==="hex"||t==="hex6"||t==="hex3"||t==="hex4"||t==="hex8"||t==="name");return s?t==="name"&&this._a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},clone:function(){return c(this.toString())},_applyModification:function(t,a){var r=t.apply(null,[this].concat([].slice.call(a)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(it,arguments)},brighten:function(){return this._applyModification(ot,arguments)},darken:function(){return this._applyModification(ut,arguments)},desaturate:function(){return this._applyModification(nt,arguments)},saturate:function(){return this._applyModification(st,arguments)},greyscale:function(){return this._applyModification(lt,arguments)},spin:function(){return this._applyModification(ht,arguments)},_applyCombination:function(t,a){return t.apply(null,[this].concat([].slice.call(a)))},analogous:function(){return this._applyCombination(dt,arguments)},complement:function(){return this._applyCombination(mt,arguments)},monochromatic:function(){return this._applyCombination(ft,arguments)},splitcomplement:function(){return this._applyCombination(ct,arguments)},triad:function(){return this._applyCombination(ve,[3])},tetrad:function(){return this._applyCombination(ve,[4])}};c.fromRatio=function(e,t){if(F(e)=="object"){var a={};for(var r in e)e.hasOwnProperty(r)&&(r==="a"?a[r]=e[r]:a[r]=q(e[r]));e=a}return c(e,t)};function Ke(e){var t={r:0,g:0,b:0},a=1,r=null,n=null,s=null,l=!1,i=!1;return typeof e=="string"&&(e=Mt(e)),F(e)=="object"&&(N(e.r)&&N(e.g)&&N(e.b)?(t=et(e.r,e.g,e.b),l=!0,i=String(e.r).substr(-1)==="%"?"prgb":"rgb"):N(e.h)&&N(e.s)&&N(e.v)?(r=q(e.s),n=q(e.v),t=at(e.h,r,n),l=!0,i="hsv"):N(e.h)&&N(e.s)&&N(e.l)&&(r=q(e.s),s=q(e.l),t=tt(e.h,r,s),l=!0,i="hsl"),e.hasOwnProperty("a")&&(a=e.a)),a=Me(a),{ok:l,format:e.format||i,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a}}function et(e,t,a){return{r:y(e,255)*255,g:y(t,255)*255,b:y(a,255)*255}}function de(e,t,a){e=y(e,255),t=y(t,255),a=y(a,255);var r=Math.max(e,t,a),n=Math.min(e,t,a),s,l,i=(r+n)/2;if(r==n)s=l=0;else{var o=r-n;switch(l=i>.5?o/(2-r-n):o/(r+n),r){case e:s=(t-a)/o+(t<a?6:0);break;case t:s=(a-e)/o+2;break;case a:s=(e-t)/o+4;break}s/=6}return{h:s,s:l,l:i}}function tt(e,t,a){var r,n,s;e=y(e,360),t=y(t,100),a=y(a,100);function l(m,h,u){return u<0&&(u+=1),u>1&&(u-=1),u<1/6?m+(h-m)*6*u:u<1/2?h:u<2/3?m+(h-m)*(2/3-u)*6:m}if(t===0)r=n=s=a;else{var i=a<.5?a*(1+t):a+t-a*t,o=2*a-i;r=l(o,i,e+1/3),n=l(o,i,e),s=l(o,i,e-1/3)}return{r:r*255,g:n*255,b:s*255}}function fe(e,t,a){e=y(e,255),t=y(t,255),a=y(a,255);var r=Math.max(e,t,a),n=Math.min(e,t,a),s,l,i=r,o=r-n;if(l=r===0?0:o/r,r==n)s=0;else{switch(r){case e:s=(t-a)/o+(t<a?6:0);break;case t:s=(a-e)/o+2;break;case a:s=(e-t)/o+4;break}s/=6}return{h:s,s:l,v:i}}function at(e,t,a){e=y(e,360)*6,t=y(t,100),a=y(a,100);var r=Math.floor(e),n=e-r,s=a*(1-t),l=a*(1-n*t),i=a*(1-(1-n)*t),o=r%6,m=[a,l,s,s,i,a][o],h=[i,a,a,l,s,s][o],u=[s,s,i,a,a,l][o];return{r:m*255,g:h*255,b:u*255}}function ge(e,t,a,r){var n=[E(Math.round(e).toString(16)),E(Math.round(t).toString(16)),E(Math.round(a).toString(16))];return r&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function rt(e,t,a,r,n){var s=[E(Math.round(e).toString(16)),E(Math.round(t).toString(16)),E(Math.round(a).toString(16)),E(xe(r))];return n&&s[0].charAt(0)==s[0].charAt(1)&&s[1].charAt(0)==s[1].charAt(1)&&s[2].charAt(0)==s[2].charAt(1)&&s[3].charAt(0)==s[3].charAt(1)?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function pe(e,t,a,r){var n=[E(xe(r)),E(Math.round(e).toString(16)),E(Math.round(t).toString(16)),E(Math.round(a).toString(16))];return n.join("")}c.equals=function(e,t){return!e||!t?!1:c(e).toRgbString()==c(t).toRgbString()};c.random=function(){return c.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function nt(e,t){t=t===0?0:t||10;var a=c(e).toHsl();return a.s-=t/100,a.s=O(a.s),c(a)}function st(e,t){t=t===0?0:t||10;var a=c(e).toHsl();return a.s+=t/100,a.s=O(a.s),c(a)}function lt(e){return c(e).desaturate(100)}function it(e,t){t=t===0?0:t||10;var a=c(e).toHsl();return a.l+=t/100,a.l=O(a.l),c(a)}function ot(e,t){t=t===0?0:t||10;var a=c(e).toRgb();return a.r=Math.max(0,Math.min(255,a.r-Math.round(255*-(t/100)))),a.g=Math.max(0,Math.min(255,a.g-Math.round(255*-(t/100)))),a.b=Math.max(0,Math.min(255,a.b-Math.round(255*-(t/100)))),c(a)}function ut(e,t){t=t===0?0:t||10;var a=c(e).toHsl();return a.l-=t/100,a.l=O(a.l),c(a)}function ht(e,t){var a=c(e).toHsl(),r=(a.h+t)%360;return a.h=r<0?360+r:r,c(a)}function mt(e){var t=c(e).toHsl();return t.h=(t.h+180)%360,c(t)}function ve(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var a=c(e).toHsl(),r=[c(e)],n=360/t,s=1;s<t;s++)r.push(c({h:(a.h+s*n)%360,s:a.s,l:a.l}));return r}function ct(e){var t=c(e).toHsl(),a=t.h;return[c(e),c({h:(a+72)%360,s:t.s,l:t.l}),c({h:(a+216)%360,s:t.s,l:t.l})]}function dt(e,t,a){t=t||6,a=a||30;var r=c(e).toHsl(),n=360/a,s=[c(e)];for(r.h=(r.h-(n*t>>1)+720)%360;--t;)r.h=(r.h+n)%360,s.push(c(r));return s}function ft(e,t){t=t||6;for(var a=c(e).toHsv(),r=a.h,n=a.s,s=a.v,l=[],i=1/t;t--;)l.push(c({h:r,s:n,v:s})),s=(s+i)%1;return l}c.mix=function(e,t,a){a=a===0?0:a||50;var r=c(e).toRgb(),n=c(t).toRgb(),s=a/100,l={r:(n.r-r.r)*s+r.r,g:(n.g-r.g)*s+r.g,b:(n.b-r.b)*s+r.b,a:(n.a-r.a)*s+r.a};return c(l)};c.readability=function(e,t){var a=c(e),r=c(t);return(Math.max(a.getLuminance(),r.getLuminance())+.05)/(Math.min(a.getLuminance(),r.getLuminance())+.05)};c.isReadable=function(e,t,a){var r=c.readability(e,t),n,s;switch(s=!1,n=xt(a),n.level+n.size){case"AAsmall":case"AAAlarge":s=r>=4.5;break;case"AAlarge":s=r>=3;break;case"AAAsmall":s=r>=7;break}return s};c.mostReadable=function(e,t,a){var r=null,n=0,s,l,i,o;a=a||{},l=a.includeFallbackColors,i=a.level,o=a.size;for(var m=0;m<t.length;m++)s=c.readability(e,t[m]),s>n&&(n=s,r=c(t[m]));return c.isReadable(e,r,{level:i,size:o})||!l?r:(a.includeFallbackColors=!1,c.mostReadable(e,["#fff","#000"],a))};var W=c.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},gt=c.hexNames=pt(W);function pt(e){var t={};for(var a in e)e.hasOwnProperty(a)&&(t[e[a]]=a);return t}function Me(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function y(e,t){vt(e)&&(e="100%");var a=bt(e);return e=Math.min(t,Math.max(0,parseFloat(e))),a&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function O(e){return Math.min(1,Math.max(0,e))}function $(e){return parseInt(e,16)}function vt(e){return typeof e=="string"&&e.indexOf(".")!=-1&&parseFloat(e)===1}function bt(e){return typeof e=="string"&&e.indexOf("%")!=-1}function E(e){return e.length==1?"0"+e:""+e}function q(e){return e<=1&&(e=e*100+"%"),e}function xe(e){return Math.round(parseFloat(e)*255).toString(16)}function be(e){return $(e)/255}var T=function(){var e="[-\\+]?\\d+%?",t="[-\\+]?\\d*\\.\\d+%?",a="(?:"+t+")|(?:"+e+")",r="[\\s|\\(]+("+a+")[,|\\s]+("+a+")[,|\\s]+("+a+")\\s*\\)?",n="[\\s|\\(]+("+a+")[,|\\s]+("+a+")[,|\\s]+("+a+")[,|\\s]+("+a+")\\s*\\)?";return{CSS_UNIT:new RegExp(a),rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+n),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+n),hsv:new RegExp("hsv"+r),hsva:new RegExp("hsva"+n),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function N(e){return!!T.CSS_UNIT.exec(e)}function Mt(e){e=e.replace(We,"").replace(Je,"").toLowerCase();var t=!1;if(W[e])e=W[e],t=!0;else if(e=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var a;return(a=T.rgb.exec(e))?{r:a[1],g:a[2],b:a[3]}:(a=T.rgba.exec(e))?{r:a[1],g:a[2],b:a[3],a:a[4]}:(a=T.hsl.exec(e))?{h:a[1],s:a[2],l:a[3]}:(a=T.hsla.exec(e))?{h:a[1],s:a[2],l:a[3],a:a[4]}:(a=T.hsv.exec(e))?{h:a[1],s:a[2],v:a[3]}:(a=T.hsva.exec(e))?{h:a[1],s:a[2],v:a[3],a:a[4]}:(a=T.hex8.exec(e))?{r:$(a[1]),g:$(a[2]),b:$(a[3]),a:be(a[4]),format:t?"name":"hex8"}:(a=T.hex6.exec(e))?{r:$(a[1]),g:$(a[2]),b:$(a[3]),format:t?"name":"hex"}:(a=T.hex4.exec(e))?{r:$(a[1]+""+a[1]),g:$(a[2]+""+a[2]),b:$(a[3]+""+a[3]),a:be(a[4]+""+a[4]),format:t?"name":"hex8"}:(a=T.hex3.exec(e))?{r:$(a[1]+""+a[1]),g:$(a[2]+""+a[2]),b:$(a[3]+""+a[3]),format:t?"name":"hex"}:!1}function xt(e){var t,a;return e=e||{level:"AA",size:"small"},t=(e.level||"AA").toUpperCase(),a=(e.size||"small").toLowerCase(),t!=="AA"&&t!=="AAA"&&(t="AA"),a!=="small"&&a!=="large"&&(a="small"),{level:t,size:a}}var ye=(e,t,a)=>{let{ctx:r}=a;if(!t.svgPathData){ne({cx:e.center[0],cy:e.center[1],r:e.size[0],fillStyle:e.color},r);return}let[n,s]=e.size,l=new Path2D(e.svgPathData);r.save();let[i,o]=[e.center[0]-n/2,e.center[1]-s/2];r.translate(i,o),e.svgSize&&(r.translate(n/2,s/2),r.scale(...e.svgSize),r.translate(-n/2,-s/2)),t.rotate&&(r.translate(n/2,s/2),r.rotate(e.angleRad),r.translate(-n/2,-s/2)),t.scaleInOut&&(r.translate(n/2,s/2),r.scale(e.scale,e.scale),r.translate(-n/2,-s/2)),t.fadeInOut?r.fillStyle=`rgba(${e.rgbaColor[0]}, ${e.rgbaColor[1]}, ${e.rgbaColor[2]}, ${e.opacity} )`:r.fillStyle=e.color,r.fill(l),r.restore()},Se=(e,t,a)=>{let{$canvas:r}=a,n=D({},e),[s,l]=e.center,i=[...e.speed];return(s>r.width||s<0)&&(i[0]=-i[0]),(l>r.height||l<0)&&(i[1]=-i[1]),n.speed=i,n.center=[s+n.speed[0],l+n.speed[1]],t.rotate&&(e.rotateCounterClockwise?n.angleRad+=Math.PI/180:n.angleRad-=Math.PI/180),t.scaleInOut&&(n.scaleDirection>0?n.scale+=t.scaleStep:n.scale-=t.scaleStep,n.scale>t.maxScale&&(n.scale=t.maxScale,n.scaleDirection=-1),n.scale<t.minScale&&(n.scale=t.minScale,n.scaleDirection=1)),t.fadeInOut&&(n.opacityDirection>0?n.opacity+=t.opacityStep:n.opacity-=t.opacityStep,n.opacity>1&&(n.scale=1,n.opacityDirection=-1),n.opacity<0&&(n.opacity=0,n.opacityDirection=1)),n},we=(e,t)=>{let{$canvas:a}=t,r=[],n,s;for(let l=0;l<e.particlesNumber;l++){let i=H(e.minSize,e.maxSize),o=[i,i];if(e.svgPathData&&e.svgPathData.length>0){n=B(e.svgPathData);let d=ce(n);d&&(s=[o[0]/d.w,o[1]/d.h])}let m="#000";e.particlesColors&&e.particlesColors.length>0?m=B(e.particlesColors):m=ie();let u=c(m).toRgb();r.push({center:[H(0,a.width),H(0,a.height)],speed:[H(e.minSpeed,e.maxSpeed),H(e.minSpeed,e.maxSpeed)],size:o,color:m,rgbaColor:[u.r,u.g,u.b,u.a],svgPathData:n,svgSize:s,angleRad:0,rotateCounterClockwise:le(),scale:(e.minScale+e.maxScale)/2,scaleDirection:B([-1,1]),opacity:H(0,1),opacityDirection:B([-1,1])})}return r};var ke={canvasWidth:600,canvasHeight:600,particlesNumber:40,particlesColors:[],minSpeed:.5,maxSpeed:2,minSize:5,maxSize:10,connected:!0,maxConnectionSize:150,connectionColor:"rgb(45, 56, 91)",maxScale:2,minScale:.5,scaleStep:.01,opacityStep:.001},Re=(e,t)=>t?D(D({},e),t):D({},e);var yt=(e,t)=>{let{$canvas:a,ctx:r}=t;G({x:0,y:0,w:a.width,h:a.height,clear:!0},r),e.canvasColor&&G({x:0,y:0,w:a.width,h:a.height,fillStyle:e.canvasColor},r),e.connected&&ue(e,t);for(let n=0;n<t.particles.length;n++){let s=t.particles[n];ye(s,e,t),t.particles[n]=Se(s,e,t)}},Ce=e=>{let t=Re(ke,e),a={width:t.canvasWidth,height:t.canvasHeight},{ctx:r,$canvas:n}=ae(a);if(!r)return;let l=c(t.connectionColor).toRgb(),i={connectionRgbColor:[l.r,l.g,l.b,l.a],particles:[],ctx:r,$canvas:n};return i.particles=we(t,i),oe({callback:()=>{r&&yt(t,i)},restartOnResize:!0,resizeCallback:()=>{j(n,r,a)}}).start(),n};window.particles=Ce;
//# sourceMappingURL=mz-particles.esm.js.map
