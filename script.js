 // Criar botão de voltar ao topo
 const botaoTopo = document.getElementById('voltarTopo');

 // Mostrar ou ocultar o botão ao rolar
 window.addEventListener('scroll', () => {
   botaoTopo.style.display = window.scrollY > 300 ? 'block' : 'none';
 });

 // Voltar suavemente ao topo
 botaoTopo.addEventListener('click', () => {
   window.scrollTo({ top: 0, behavior: 'smooth' });
 });