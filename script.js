const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.navbar nav');
menuToggle?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.navbar nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const target=new Date('2026-10-07T09:00:00+05:30').getTime();
function tick(){
  const diff=Math.max(0,target-Date.now());
  const d=Math.floor(diff/86400000),h=Math.floor(diff%86400000/3600000),m=Math.floor(diff%3600000/60000),s=Math.floor(diff%60000/1000);
  document.getElementById('days').textContent=String(d).padStart(2,'0');
  document.getElementById('hours').textContent=String(h).padStart(2,'0');
  document.getElementById('minutes').textContent=String(m).padStart(2,'0');
  document.getElementById('seconds').textContent=String(s).padStart(2,'0');
  if(diff<=0) document.querySelector('.countdown-wrap>p').textContent='XENORAZZ 2K26 IS LIVE!';
}
tick();setInterval(tick,1000);
