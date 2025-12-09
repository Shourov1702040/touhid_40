document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  if(btn){
    btn.addEventListener('click', ()=>{
      nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
  }
});
