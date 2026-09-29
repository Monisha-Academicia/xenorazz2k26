const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.main-nav');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const target=new Date('2026-10-07T09:00:00+05:30').getTime();
const pad=n=>String(n).padStart(2,'0');
function tick(){
  const diff=Math.max(0,target-Date.now());
  const d=Math.floor(diff/86400000);
  const h=Math.floor(diff%86400000/3600000);
  const m=Math.floor(diff%3600000/60000);
  const s=Math.floor(diff%60000/1000);
  document.getElementById('days').textContent=pad(d);
  document.getElementById('hours').textContent=pad(h);
  document.getElementById('minutes').textContent=pad(m);
  document.getElementById('seconds').textContent=pad(s);
  if(diff===0) document.querySelector('.count-label').textContent='XENORAZZ 2K26 IS LIVE';
}
tick();
setInterval(tick,1000);
