(function(){var r=document.documentElement,b=document.getElementById('theme');
try{var t=localStorage.getItem('theme');if(t)r.setAttribute('data-theme',t)}catch(e){}
var cv=document.getElementById('rain');
if(cv&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
var g2=cv.getContext('2d'),RW,RH,FS=18,cols=[],word='KUMUSHBIBI',lastT=0,dpr=Math.min(window.devicePixelRatio||1,2);
var rsize=function(){RW=innerWidth;RH=innerHeight;cv.width=RW*dpr;cv.height=RH*dpr;g2.setTransform(dpr,0,0,dpr,0,0);cols=[];for(var i=0;i<Math.ceil(RW/FS);i++){cols.push({y:-Math.random()*40,r:-999,i:0,s:.3+Math.random()*.5,b:i%3===0})}};
rsize();addEventListener('resize',rsize);
var rdraw=function(t){requestAnimationFrame(rdraw);if(t-lastT<50)return;lastT=t;
var cs=getComputedStyle(r),cg=cs.getPropertyValue('--g').trim(),cb=cs.getPropertyValue('--b').trim();
g2.globalCompositeOperation='destination-out';g2.fillStyle='rgba(0,0,0,.09)';g2.fillRect(0,0,RW,RH);
g2.globalCompositeOperation='source-over';g2.font='500 '+FS+'px "JetBrains Mono",monospace';
for(var k=0;k<cols.length;k++){var c=cols[k];c.y+=c.s;var row=Math.floor(c.y);
if(row!==c.r){c.r=row;if(row>=0){g2.fillStyle=c.b?cb:cg;g2.fillText(word.charAt(c.i),k*FS,row*FS);c.i=(c.i+1)%word.length}}
if(c.y*FS>RH+FS*4&&Math.random()>.97){c.y=-Math.random()*30;c.i=0}}};
requestAnimationFrame(rdraw);}
var fx=document.querySelector('.fx');
if(fx&&matchMedia('(hover:hover)').matches&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
var tx=innerWidth/2,ty=innerHeight/3,cx=tx,cy=ty,run=false;
var loop=function(){cx+=(tx-cx)*.14;cy+=(ty-cy)*.14;fx.style.setProperty('--mx',cx+'px');fx.style.setProperty('--my',cy+'px');if(Math.abs(tx-cx)>.3||Math.abs(ty-cy)>.3){requestAnimationFrame(loop)}else{run=false}};
addEventListener('pointermove',function(e){tx=e.clientX;ty=e.clientY;fx.classList.add('on');if(!run){run=true;requestAnimationFrame(loop)}});
document.addEventListener('mouseleave',function(){fx.classList.remove('on')});
}
b.addEventListener('click',function(){var d=r.getAttribute('data-theme')?r.getAttribute('data-theme')==='dark':matchMedia('(prefers-color-scheme:dark)').matches;var n=d?'light':'dark';r.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}});})();
