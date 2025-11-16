<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>CleanNova Home Services | Limpiezas a fondo en provincia de Barcelona</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Limpiezas a fondo profesionales en toda la provincia de Barcelona. Servicios desde 120 € por vivienda. Pide tu presupuesto sin compromiso." />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />

  <style>
    :root {
      --primary: #1f6feb;
      --primary-dark: #174fb0;
      --accent: #22c55e;
      --bg: #f5f7fb;
      --text: #0f172a;
      --muted: #6b7280;
      --card-bg: #ffffff;
      --radius-lg: 18px;
      --shadow-soft: 0 14px 30px rgba(15, 23, 42, 0.12);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: "Poppins", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    img {
      max-width: 100%;
      display: block;
    }

    /* Layout general */

    .container {
      max-width: 1120px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    header {
      position: sticky;
      top: 0;
      z-index: 50;
      background: rgba(245, 247, 251, 0.96);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid rgba(148, 163, 184, 0.3);
    }

    .nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 72px;
      gap: 1rem;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .logo-icon {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      background: radial-gradient(circle at 20% 20%, #ffffff 0, #dbeafe 40%, #1f6feb 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 10px 22px rgba(37, 99, 235, 0.4);
      position: relative;
      overflow: hidden;
    }

    .logo-icon span {
      font-size: 1.1rem;
      font-weight: 700;
      color: #0f172a;
      position: relative;
      z-index: 1;
    }

    .logo-text {
      display: flex;
      flex-direction: column;
      line-height: 1.1;
    }

    .logo-main {
      font-weight: 700;
      font-size: 1rem;
      letter-spacing: 0.04em;
    }

    .logo-sub {
      font-size: 0.75rem;
      color: var(--muted);
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }

    .nav-links {
      display: flex;
      gap: 1.4rem;
      font-size: 0.9rem;
    }

    .nav-links a {
      color: var(--muted);
      font-weight: 500;
    }

    .nav-links a:hover {
      color: var(--primary);
    }

    .nav-cta {
      display: flex;
      gap: 0.75rem;
    }

    .btn {
      border-radius: 999px;
      padding: 0.55rem 1.2rem;
      font-size: 0.9rem;
      font-weight: 600;
      border: none;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
      transition: transform 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;
      white-space: nowrap;
    }

    .btn-primary {
      background: linear-gradient(135deg, var(--primary), var(--accent));
      color: #ffffff;
      box-shadow: 0 10px 24px rgba(37, 99, 235, 0.45);
    }

    .btn-primary:hover {
      transform: translateY(-1px);
      box-shadow: 0 14px 30px rgba(37, 99, 235, 0.6);
    }

    .btn-outline {
      border: 1px solid rgba(148, 163, 184, 0.9);
      background: transparent;
      color: var(--text);
    }

    .btn-outline:hover {
      background: #ffffff;
      box-shadow: 0 10px 20px rgba(15, 23, 42, 0.08);
    }

    .btn-ghost {
      border-radius: 999px;
      padding: 0.45rem 1rem;
      border: 1px dashed rgba(148, 163, 184, 0.9);
      background: rgba(255, 255, 255, 0.8);
      font-size: 0.85rem;
      color: var(--muted);
    }

    .btn-ghost:hover {
      background: #ffffff;
    }

    .btn-full {
      width: 100%;
      justify-content: center;
    }

    /* HERO */

    .hero {
      padding: 3.5rem 0 3rem;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
      gap: 2.5rem;
      align-items: center;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.25rem 0.8rem;
      border-radius: 999px;
      background: rgba(34, 197, 94, 0.08);
      border: 1px solid rgba(34, 197, 94, 0.4);
      color: #166534;
      font-size: 0.8rem;
      margin-bottom: 0.7rem;
    }

    .hero h1 {
      font-size: 2.4rem;
      line-height: 1.2;
      margin-bottom: 0.7rem;
    }

    .hero h1 span {
      color: var(--primary);
    }

    .hero-text {
      font-size: 0.98rem;
      color: var(--muted);
      margin-bottom: 1.2rem;
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
      margin-bottom: 1rem;
    }

    .hero-meta {
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
      font-size: 0.85rem;
      color: var(--muted);
    }

    .hero-meta strong {
      color: var(--text);
    }

    .hero-card {
      background: radial-gradient(circle at top left, #eff6ff 0, #e0f2fe 40%, #e5e7eb 100%);
      border-radius: 26px;
      padding: 1.5rem;
      box-shadow: var(--shadow-soft);
    }

    .hero-card h2 {
      font-size: 1.2rem;
      margin-bottom: 0.4rem;
    }

    .hero-card-text {
      font-size: 0.9rem;
      color: #334155;
      margin-bottom: 0.6rem;
    }

    .hero-list {
      list-style: none;
      font-size: 0.88rem;
      color: #334155;
      margin-bottom: 1rem;
    }

    .hero-list li {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 0.35rem;
    }

    .hero-list li::before {
      content: "•";
      color: var(--primary);
      margin-top: 0.1rem;
    }

    .hero-price {
      display: flex;
      flex-direction: column;
      gap: 0.1rem;
    }

    .hero-price-main {
      font-size: 1.3rem;
      font-weight: 700;
    }

    .hero-price-note {
      font-size: 0.8rem;
      color: #475569;
    }

    /* Secciones genéricas */

    section {
      padding: 3rem 0;
    }

    .section-alt {
      background: #e5ebf7;
    }

    .section-header {
      max-width: 640px;
      margin: 0 auto 2rem;
      text-align: center;
    }

    .section-header h2 {
      font-size: 1.7rem;
      margin-bottom: 0.4rem;
    }

    .section-header p {
      font-size: 0.95rem;
      color: var(--muted);
    }

    /* Grid utils */

    .grid-3 {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1.5rem;
    }

    .grid-2 {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.5rem;
    }

    /* Cards */

    .card {
      background: var(--card-bg);
      border-radius: var(--radius-lg);
      padding: 1.2rem 1.3rem;
      box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
      font-size: 0.9rem;
      color: var(--muted);
    }

    .card h3 {
      font-size: 1rem;
      margin-bottom: 0.4rem;
      color: var(--text);
    }

    /* Pricing */

    .pricing {
      max-width: 960px;
    }

    .pricing-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
      gap: 1.8rem;
    }

    .pricing-text {
      font-size: 0.92rem;
      color: var(--muted);
    }

    .pricing-text h3 {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      color: var(--text);
    }

    .pricing-text ul {
      list-style: disc;
      margin-left: 1.2rem;
      margin-bottom: 0.7rem;
    }

    .pricing-card {
      background: #0f172a;
      color: #e5e7eb;
      border-radius: 22px;
      padding: 1.5rem 1.6rem;
      box-shadow: var(--shadow-soft);
    }

    .chip {
      display: inline-flex;
      padding: 0.2rem 0.6rem;
      border-radius: 999px;
      border: 1px solid rgba(148, 163, 184, 0.7);
      font-size: 0.75rem;
      margin-bottom: 0.6rem;
    }

    .pricing-main {
      font-size: 1.8rem;
      font-weight: 700;
      margin-bottom: 0.15rem;
    }

    .pricing-sub {
      font-size: 0.9rem;
      color: #9ca3af;
      margin-bottom: 0.8rem;
    }

    .pricing-list {
      list-style: none;
      font-size: 0.85rem;
      margin-bottom: 1rem;
    }

    .pricing-list li {
      display: flex;
      gap: 0.45rem;
      margin-bottom: 0.35rem;
    }

    .pricing-list li::before {
      content: "✔";
      font-size: 0.8rem;
      color: #22c55e;
      margin-top: 0.05rem;
    }

    /* Zonas */

    .zones-list {
      list-style: none;
      font-size: 0.9rem;
      color: var(--muted);
    }

    .zones-list li {
      margin-bottom: 0.25rem;
    }

    .zones-note {
      font-size: 0.86rem;
      color: var(--muted);
      margin-top: 1.2rem;
      text-align: center;
    }

    /* Contacto */

    .contact-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
      gap: 1.8rem;
      align-items: flex-start;
    }

    .contact-box {
      background: var(--card-bg);
      border-radius: var(--radius-lg);
      padding: 1.1rem 1.2rem;
      box-shadow: 0 10px 20px rgba(15, 23, 42, 0.04);
      font-size: 0.9rem;
      color: var(--muted);
    }

    .contact-box p + p {
      margin-top: 0.35rem;
    }

    .contact-box a {
      color: var(--primary-dark);
      font-weight: 600;
    }

    .contact-form {
      background: var(--card-bg);
      border-radius: var(--radius-lg);
      padding: 1.2rem 1.3rem;
      box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
    }

    .form-row {
      display: flex;
      gap: 0.9rem;
    }

    .form-group {
      flex: 1;
      margin-bottom: 0.8rem;
    }

    label {
      display: block;
      font-size: 0.8rem;
      font-weight: 500;
      margin-bottom: 0.2rem;
    }

    input,
    textarea {
      width: 100%;
      border-radius: 10px;
      border: 1px solid #d1d5db;
      padding: 0.45rem 0.55rem;
      font-family: inherit;
      font-size: 0.88rem;
      outline: none;
      background: #f9fafb;
      transition: border 0.12s ease, box-shadow 0.12s ease, background 0.12s ease;
    }

    input:focus,
    textarea:focus {
      border-color: var(--primary);
      box-shadow: 0 0 0 1px rgba(37, 99, 235, 0.2);
      background: #ffffff;
    }

    textarea {
      min-height: 120px;
      resize: vertical;
    }

    .form-note {
      font-size: 0.75rem;
      color: var(--muted);
      margin-top: 0.5rem;
    }

    /* Footer */

    .footer {
      padding: 1.6rem 0;
      border-top: 1px solid rgba(148, 163, 184, 0.35);
      background: #eef2ff;
      font-size: 0.8rem;
      color: var(--muted);
      margin-top: 1.5rem;
    }

    .footer-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.7rem;
    }

    /* Responsive */

    @media (max-width: 900px) {
      .hero-grid,
      .pricing-grid,
      .grid-3,
      .grid-2,
      .contact-grid {
        grid-template-columns: minmax(0, 1fr);
      }
    }

    @media (max-width: 720px) {
      header {
        position: static;
      }

      .nav {
        flex-wrap: wrap;
        justify-content: center;
        padding: 0.4rem 0.5rem;
      }

      .nav-links {
        display: none; /* Menú simplificado en móvil */
      }

      .hero {
        padding-top: 2.3rem;
      }

      .hero h1 {
        font-size: 2rem;
      }

      .form-row {
        flex-direction: column;
      }

      .footer-inner {
        flex-direction: column;
        text-align: center;
      }
    }
  </style>
</head>
<body>
  <header>
    <div class="container nav">
      <a href="#inicio" class="logo">
        <div class="logo-icon">
          <span>CN</span>
        </div>
        <div class="logo-text">
          <span class="logo-main">CleanNova</span>
          <span class="logo-sub">Home Services</span>
        </div>
      </a>

      <nav class="nav-links">
        <a href="#servicios">Servicios</a>
        <a href="#tarifas">Tarifas</a>
        <a href="#zonas">Zonas</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <div class="nav-cta">
        <a class="btn btn-outline" href="tel:+34601536313">Llamar</a>
        <a class="btn btn-primary" href="#contacto">Pedir presupuesto</a>
      </div>
    </div>
  </header>

  <main id="inicio">
    <!-- HERO -->
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <div class="hero-badge">
            Limpiezas a fondo en toda la provincia de Barcelona
          </div>
          <h1>Limpieza a fondo para que <span>tu casa vuelva a brillar</span></h1>
          <p class="hero-text">
            En <strong>CleanNova Home Services</strong> estamos especializados en
            <strong>limpiezas a fondo completas</strong>: antes o después de mudanzas,
            fin de obra, cambio de inquilino o cuando tu vivienda necesita una
            puesta a punto total. Trabajamos en toda la <strong>provincia de Barcelona</strong>.
          </p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#contacto">Quiero un presupuesto</a>
            <a class="btn btn-ghost" href="https://wa.me/34601536313" target="_blank" rel="noopener">
              Escríbeme por WhatsApp
            </a>
          </div>
          <div class="hero-meta">
            <span>Precio mínimo orientativo: <strong>120 € por limpieza</strong></span>
            <span>Personal profesional y de confianza</span>
          </div>
        </div>

        <aside class="hero-card">
          <h2>Ejemplo de limpieza a fondo</h2>
          <p class="hero-card-text">
            Piso de 70–90 m² en provincia de Barcelona:
          </p>
          <ul class="hero-list">
            <li>Cocina completa (muebles por fuera y encimera, horno y nevera exterior).</li>
            <li>Baños en profundidad (azulejos, mampara, sanitarios).</li>
            <li>Habitaciones y salón (polvo, suelos, zócalos, cristales accesibles).</li>
          </ul>
          <div class="hero-price">
            <span class="hero-price-main">Desde 120 €</span>
            <span class="hero-price-note">Precio orientativo, según estado y metros.</span>
          </div>
        </aside>
      </div>
    </section>

    <!-- SERVICIOS -->
    <section id="servicios">
      <div class="container">
        <div class="section-header">
          <h2>Servicios de limpiezas a fondo</h2>
          <p>
            Nos centramos exclusivamente en <strong>limpiezas a fondo</strong> para ofrecer
            un servicio detallado, serio y profesional. Estas son las situaciones
            más habituales en las que trabajamos:
          </p>
        </div>

        <div class="grid-3">
          <article class="card">
            <h3>Limpieza a fondo de vivienda habitual</h3>
            <p>
              Ideal cuando hace tiempo que no se hace una limpieza profunda:
              grasa incrustada en cocina, baños con cal, polvo acumulado y
              cristales con marcas. Dejamos la vivienda lista para volver a empezar.
            </p>
          </article>

          <article class="card">
            <h3>Fin de obra o reforma</h3>
            <p>
              Eliminamos restos de obra, polvo de yeso, marcas en suelos y cristales,
              para que puedas entrar a vivir o enseñar el piso en perfectas condiciones.
            </p>
          </article>

          <article class="card">
            <h3>Cambio de inquilino / venta</h3>
            <p>
              Limpieza completa antes de entregar o recibir piso: interior de
              armarios, repaso de paredes lavables, enchufes, interruptores y
              zonas olvidadas que mejoran la imagen de la vivienda.
            </p>
          </article>

          <article class="card">
            <h3>Segundas residencias</h3>
            <p>
              Casas de vacaciones o fin de semana que necesitan un repaso general
              antes de la temporada, especialmente en zonas de costa o montaña.
            </p>
          </article>

          <article class="card">
            <h3>Limpieza después de fiestas o eventos</h3>
            <p>
              Recogida, retirada de residuos y limpieza a fondo de salones,
              terrazas y zonas comunes después de reuniones familiares o eventos.
            </p>
          </article>

          <article class="card">
            <h3>Servicios extra</h3>
            <p>
              Cristales, interiores de armarios, hornos, neveras, persianas accesibles
              y otros detalles que podemos incluir en tu presupuesto según tus prioridades.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- TARIFAS -->
    <section id="tarifas" class="section-alt">
      <div class="container pricing">
        <div class="section-header">
          <h2>Tarifas orientativas</h2>
          <p>
            Cada vivienda es distinta. Estos precios son una referencia para la
            <strong>provincia de Barcelona</strong>. Siempre te enviaremos un
            presupuesto personalizado antes de confirmar el servicio.
          </p>
        </div>

        <div class="pricing-grid">
          <div class="pricing-text">
            <h3>¿De qué depende el precio?</h3>
            <ul>
              <li>Metros cuadrados y número de estancias.</li>
              <li>Estado general de la vivienda (tiempo sin limpiar, obra reciente, etc.).</li>
              <li>Servicios extra: cristales, interiores, electrodomésticos, persianas.</li>
              <li>Ubicación dentro de la provincia de Barcelona.</li>
            </ul>
            <p>
              Cuéntanos cómo es tu piso o casa y qué necesitas que limpiemos. Con eso
              podremos darte un precio cerrado antes de ir.
            </p>
          </div>

          <aside class="pricing-card">
            <div class="chip">Referencia de precios</div>
            <div class="pricing-main">Desde 120 €</div>
            <div class="pricing-sub">Limpieza a fondo completa de vivienda</div>
            <ul class="pricing-list">
              <li>Materiales y productos de limpieza incluidos.</li>
              <li>Equipo profesional con experiencia.</li>
              <li>Seguro de responsabilidad civil (si corresponde).</li>
              <li>Sin permanencias: servicio por trabajo realizado.</li>
            </ul>
            <a class="btn btn-primary btn-full" href="#contacto">Quiero mi presupuesto</a>
          </aside>
        </div>
      </div>
    </section>

    <!-- ZONAS -->
    <section id="zonas">
      <div class="container">
        <div class="section-header">
          <h2>Zonas de trabajo</h2>
          <p>
            Realizamos limpiezas a fondo en toda la <strong>provincia de Barcelona</strong>.
            Estas son algunas de las zonas donde trabajamos con más frecuencia:
          </p>
        </div>

        <div class="grid-2">
          <div class="card">
            <h3>Área metropolitana de Barcelona</h3>
            <ul class="zones-list">
              <li>Barcelona ciudad (todos los distritos).</li>
              <li>L’Hospitalet de Llobregat, Badalona, Santa Coloma.</li>
              <li>Cornellà, Esplugues, Sant Just, Sant Joan Despí.</li>
            </ul>
          </div>
          <div class="card">
            <h3>Resto de provincia</h3>
            <ul class="zones-list">
              <li>Vallès Occidental y Vallès Oriental.</li>
              <li>Maresme, Garraf, Baix Llobregat, Alt Penedès.</li>
              <li>Vilafranca del Penedès y pueblos cercanos.</li>
            </ul>
          </div>
        </div>

        <p class="zones-note">
          Si tu vivienda está en la provincia de Barcelona pero no aparece en la lista,
          escríbenos igualmente y miramos si podemos llegar.
        </p>
      </div>
    </section>

    <!-- CONTACTO -->
    <section id="contacto" class="section-alt">
      <div class="container contact-grid">
        <div>
          <div class="section-header">
            <h2>Contacto y presupuestos</h2>
            <p>
              Cuéntanos qué tipo de limpieza a fondo necesitas y en qué municipio
              de la provincia de Barcelona estás. Te responderemos lo antes posible.
            </p>
          </div>

          <div class="contact-box">
            <p><strong>Teléfono / WhatsApp:</strong> <a href="tel:+34601536313">601 53 63 13</a></p>
            <p><strong>Email:</strong> <a href="mailto:cleannovahomeservices@gmail.com">cleannovahomeservices@gmail.com</a></p>
            <p><strong>Horario orientativo:</strong> Lunes a viernes de 9:00 a 19:00</p>
          </div>
          <p class="form-note">
            Al enviar el formulario se abrirá tu aplicación de correo para finalizar el envío.
          </p>
        </div>

        <form class="contact-form" onsubmit="enviarFormulario(event)">
          <div class="form-row">
            <div class="form-group">
              <label for="nombre">Nombre</label>
              <input id="nombre" type="text" required placeholder="Tu nombre" />
            </div>
            <div class="form-group">
              <label for="localidad">Localidad</label>
              <input id="localidad" type="text" required placeholder="Ej. Badalona, Vilafranca..." />
            </div>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="email" required placeholder="tucorreo@example.com" />
          </div>
          <div class="form-group">
            <label for="mensaje">Qué necesitas limpiar</label>
            <textarea id="mensaje" required placeholder="M² aproximados, número de habitaciones, si es fin de obra, cambio de inquilino, etc."></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-full">Enviar solicitud</button>
        </form>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container footer-inner">
      <span>© <span id="year"></span> CleanNova Home Services.</span>
      <span>Provincia de Barcelona · Limpiezas a fondo</span>
    </div>
  </footer>

  <script>
    document.getElementById("year").textContent = new Date().getFullYear();

    // Hace el formulario "funcional" usando mailto (GitHub Pages no permite backend)
    function enviarFormulario(event) {
      event.preventDefault();
      const nombre = document.getElementById("nombre").value;
      const localidad = document.getElementById("localidad").value;
      const email = document.getElementById("email").value;
      const mensaje = document.getElementById("mensaje").value;

      const asunto = "Solicitud de presupuesto - CleanNova";
      const cuerpo =
        "Nombre: " + nombre + "\\n" +
        "Localidad: " + localidad + "\\n" +
        "Email: " + email + "\\n\\n" +
        "Qué necesita limpiar:\\n" + mensaje;

      const mailtoLink =
        "mailto:cleannovahomeservices@gmail.com" +
        "?subject=" + encodeURIComponent(asunto) +
        "&body=" + encodeURIComponent(cuerpo);

      window.location.href = mailtoLink;
    }
  </script>
</body>
</html>
