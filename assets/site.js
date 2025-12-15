(function(){
  // Mobile menu
  const btn = document.getElementById('hamburger');
  const panel = document.getElementById('mobilepanel');
  if(btn && panel){
    btn.addEventListener('click', ()=>{
      const open = panel.getAttribute('data-open') === '1';
      panel.style.display = open ? 'none' : 'block';
      panel.setAttribute('data-open', open ? '0' : '1');
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
    });
  }

  // Year
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  // Reveal on scroll
  const revealEls = Array.from(document.querySelectorAll('.reveal'));
  if(revealEls.length){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, {threshold: 0.12});
    revealEls.forEach(el=> io.observe(el));
  }

  // Simple lightbox for gallery (if present)
  const gallery = document.querySelector('.gallery-grid');
  if(gallery){
    const lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.innerHTML = '<button class="lightbox-close" aria-label="Cerrar">×</button><img alt="Imagen ampliada"><p></p>';
    document.body.appendChild(lb);
    const imgEl = lb.querySelector('img');
    const pEl = lb.querySelector('p');
    const close = ()=> lb.classList.remove('open');
    lb.querySelector('.lightbox-close').addEventListener('click', close);
    lb.addEventListener('click', (e)=>{ if(e.target===lb) close(); });
    document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') close(); });

    gallery.addEventListener('click', (e)=>{
      const card = e.target.closest('.gallery-card');
      if(!card) return;
      const img = card.querySelector('img');
      if(!img) return;
      imgEl.src = img.src;
      imgEl.alt = img.alt || 'Imagen';
      pEl.textContent = card.querySelector('p')?.textContent || '';
      lb.classList.add('open');
    });
  }


  // Reviews (if present)
  const REVIEWS_API_URL = "https://lab-reviews.3asuar.easypanel.host/reviews.php";
  const defaultReviews = [
    { nombre: "Laura", zona: "Barcelona", texto: "Hicimos una limpieza a fondo después de una reforma y quedó todo impecable. Muy puntuales y cuidadosos con los detalles.", rating: "5" },
    { nombre: "Jordi", zona: "Badalona", texto: "La casa queda como nueva. Trato muy profesional. Repetiré seguro.", rating: "5" },
    { nombre: "María", zona: "L'Hospitalet", texto: "Necesitábamos dejar el piso perfecto para nuevos inquilinos. Resultado excelente.", rating: "5" }
  ];
  let remoteReviews = [];

  function renderReviews(){
    const container = document.getElementById('reviews-list');
    if(!container) return;
    container.innerHTML = '';
    const all = [...defaultReviews, ...remoteReviews];
    all.forEach(r=>{
      const card = document.createElement('article');
      card.className = 'card tile';
      const h = document.createElement('h3');
      h.textContent = r.nombre + (r.zona ? (", " + r.zona) : "");
      const p = document.createElement('p');
      p.textContent = "“" + r.texto + "”";
      const s = document.createElement('div');
      s.className = 'stars';
      const n = Math.max(1, Math.min(5, parseInt(r.rating || "5", 10)));
      s.textContent = "★".repeat(n);
      card.appendChild(h); card.appendChild(p); card.appendChild(s);

      if(r.imagen){
        const img = document.createElement('img');
        img.src = r.imagen;
        img.alt = "Foto de la limpieza enviada por un cliente";
        img.style.marginTop = ".8rem";
        img.style.borderRadius = "16px";
        img.style.maxHeight = "220px";
        img.style.width = "100%";
        img.style.objectFit = "cover";
        card.appendChild(img);
      }
      container.appendChild(card);
    });
  }

  function loadReviews(){
    const container = document.getElementById('reviews-list');
    if(!container) return;
    fetch(REVIEWS_API_URL).then(r=>r.json()).then(data=>{
      remoteReviews = Array.isArray(data) ? data : [];
      renderReviews();
    }).catch(()=>{
      remoteReviews = [];
      renderReviews();
    });
  }

  const reviewForm = document.getElementById('review-form');
  if(reviewForm){
    reviewForm.addEventListener('submit', function(e){
      e.preventDefault();
      const nombre = (document.getElementById('review-nombre')?.value || '').trim() || 'Cliente';
      const zona = (document.getElementById('review-zona')?.value || '').trim();
      const rating = document.getElementById('review-rating')?.value || '5';
      const texto = (document.getElementById('review-texto')?.value || '').trim();
      const imagenInput = document.getElementById('review-imagen');
      if(!texto){ alert('Por favor, escribe un breve comentario sobre tu experiencia.'); return; }

      function sendReview(imagenDataUrl){
        const payload = { nombre, zona, rating, texto, imagen: imagenDataUrl || "" };
        fetch(REVIEWS_API_URL, {
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body: JSON.stringify(payload)
        }).then(r=>r.json()).then(()=>{
          ['review-nombre','review-zona','review-texto'].forEach(id=>{ const el=document.getElementById(id); if(el) el.value=''; });
          const rr = document.getElementById('review-rating'); if(rr) rr.value='5';
          if(imagenInput) imagenInput.value = '';
          loadReviews();
        }).catch(()=> alert('Ha habido un problema al guardar tu reseña. Por favor, inténtalo de nuevo.'));
      }

      if(imagenInput && imagenInput.files && imagenInput.files[0]){
        const reader = new FileReader();
        reader.onload = (ev)=> sendReview(ev.target.result);
        reader.readAsDataURL(imagenInput.files[0]);
      } else {
        sendReview("");
      }
    });
  }

  loadReviews();

  // Chatbot (same behavior as tu web actual)
  (function () {
    const WEBHOOK_URL = "https://n8n-n8n.3asuar.easypanel.host/webhook/e816ccb2-9ecf-4fbc-a83f-a516b7436ff8/chat";
    let sessionId = localStorage.getItem("cleannovaChatSessionId");
    if (!sessionId) {
      sessionId = "web_" + Date.now() + "_" + Math.random().toString(16).slice(2);
      localStorage.setItem("cleannovaChatSessionId", sessionId);
    }

    const chatToggle = document.getElementById("chat-toggle");
    const chatWindow = document.getElementById("chat-window");
    const chatClose = document.getElementById("chat-close");
    const chatForm = document.getElementById("chat-form");
    const chatInput = document.getElementById("chat-input");
    const chatMessages = document.getElementById("chat-messages");

    function appendMessage(sender, text) {
      if (!text || !chatMessages) return;
      const div = document.createElement("div");
      div.className = "chat-message " + (sender === "bot" ? "bot" : "user");
      div.textContent = text;
      chatMessages.appendChild(div);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    if (chatToggle && chatWindow) {
      chatToggle.addEventListener("click", function () {
        chatWindow.classList.add("is-open");
        chatToggle.style.display = "none";
      });
    }

    if (chatClose && chatWindow && chatToggle) {
      chatClose.addEventListener("click", function () {
        chatWindow.classList.remove("is-open");
        chatToggle.style.display = "inline-flex";
      });
    }

    if (chatForm && chatInput) {
      chatForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const text = chatInput.value.trim();
        if (!text) return;

        appendMessage("user", text);
        chatInput.value = "";

        fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionId: sessionId,
            chatInput: text,
            action: "sendMessage"
          })
        })
        .then(async function (response) {
          let data;
          try {
            data = await response.json();
          } catch (e) {
            const txt = await response.text();
            appendMessage("bot", txt || "He recibido tu mensaje. Te responderemos en breve.");
            return;
          }
          const reply = data.text || data.output || data.reply || data.message || JSON.stringify(data);
          appendMessage("bot", reply);
        })
        .catch(function () {
          appendMessage("bot", "Ha ocurrido un error al enviar tu mensaje. Inténtalo de nuevo más tarde.");
        });
      });
    }
  })();
})();