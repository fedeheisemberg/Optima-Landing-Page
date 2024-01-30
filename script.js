//document.querySelectorAll('.faq h3').forEach(faqToggle => {
    //faqToggle.addEventListener('click', () => {
      //const faq = faqToggle.nextElementSibling;
      //faq.style.display = faq.style.display === 'block' ? 'none' : 'block';
    //});
  //});

// ... tu código JS existente

document.addEventListener('DOMContentLoaded', (event) => {
    const nav = document.getElementById('nav');
    const abrir = document.getElementById('hamburger');
    const cerrar = document.getElementById('cerrar');
  
    abrir.addEventListener('click', function() {
      nav.classList.add('visible');
      abrir.style.display = 'none'; // Esconde el botón de hamburguesa
      cerrar.style.display = 'block'; // Muestra la X
    });
  
    cerrar.addEventListener('click', function() {
      nav.classList.remove('visible');
      cerrar.style.display = 'none'; // Esconde la X
      abrir.style.display = 'block'; // Muestra el botón de hamburguesa
    });
  });
  // ... tu código JS existente
  document.addEventListener('DOMContentLoaded', () => {
    const faqs = document.querySelectorAll('.faq');
  
    faqs.forEach(faq => {
      const question = faq.querySelector('h3');
      const answer = faq.querySelector('p');
  
      question.addEventListener('click', () => {
        const isExpanded = answer.classList.contains('expanded');
        // Cierra todas las respuestas abiertas
        document.querySelectorAll('.faq p').forEach(p => {
          p.classList.remove('expanded');
        });
  
        // Expande la respuesta actual si no estaba expandida previamente
        if (!isExpanded) {
          answer.classList.add('expanded');
        }
      });
    });
  });