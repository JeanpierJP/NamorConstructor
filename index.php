<?php
$lead_success = false;
$lead_errors = [];
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['lead_form'])) {
  $nombre = trim($_POST['nombre'] ?? '');
  $email = trim($_POST['email'] ?? '');
  $telefono = trim($_POST['telefono'] ?? '');
  $tipo = trim($_POST['tipo'] ?? '');
  $mensaje = trim($_POST['mensaje'] ?? '');
  if ($nombre === '') $lead_errors[] = 'Name is required';
  if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) $lead_errors[] = 'Invalid email';
  if ($telefono === '') $lead_errors[] = 'Phone is required';
  if ($tipo === '') $lead_errors[] = 'Select a project type';
  if ($mensaje === '') $lead_errors[] = 'Enter a message';
  if (!$lead_errors) {
    $lead_success = true;
  }
}
include __DIR__ . '/header.php';
?>

<section class="hero-slider" id="hero-slider">
  <div class="slider-wrapper">
    <div class="slide active" style="background-image: linear-gradient(rgba(26,75,124,0.3), rgba(26,75,124,0.3)), url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1470&auto=format&fit=crop');"></div>
    <div class="slide" style="background-image: linear-gradient(rgba(26,75,124,0.3), rgba(26,75,124,0.3)), url('/img/slider1.jpg');"></div>
    <div class="slide" style="background-image: linear-gradient(rgba(26,75,124,0.3), rgba(26,75,124,0.3)), url('/img/slider2.jpg');"></div>
  </div>

  <div class="container content-overlay">
    <div class="hero-content">
      <h1 data-i18n="home.hero.title">We build trust, we deliver quality</h1>
      <p data-i18n="home.hero.subtitle">Residential, commercial and industrial projects focused on safety, compliance and professionalism.</p>
      <div class="actions">
        <a href="/contacto.php" class="btn btn-primary" data-i18n="home.hero.ctaQuote">Request your quote</a>
        <a href="/servicios.php" class="btn btn-outline" data-i18n="home.hero.ctaServices">View services</a>
      </div>
    </div>
  </div>

  <button class="slider-prev" aria-label="Previous slide"><i class="fa-solid fa-chevron-left"></i></button>
  <button class="slider-next" aria-label="Next slide"><i class="fa-solid fa-chevron-right"></i></button>

  <div class="slider-dots">
    <span class="dot active" data-slide="0"></span>
    <span class="dot" data-slide="1"></span>
    <span class="dot" data-slide="2"></span>
  </div>
</section>

<section>
  <div class="container">
    <div class="form-card" style="max-width: 900px; margin: 0 auto;">
      <h2 class="section-title" style="margin-bottom: 8px;" data-i18n="home.intro.title">GENERAL CONTRACTOR SERVICES</h2>
      <p class="section-subtitle" style="margin-bottom: 18px;" data-i18n="home.intro.subtitle">Licensed &amp; Insured | Serving Maryland &amp; Washington DC</p>
      <p style="margin-bottom: 10px;" data-i18n="home.intro.p1">
        namor consstruction LLC is a licensed and insured General Contractor providing professional construction and remodeling services across Maryland and
        Washington DC.
      </p>
      <p style="margin-bottom: 10px;" data-i18n="home.intro.p2">
        We specialize in residential construction, home remodeling, and improvement projects, delivering superior craftsmanship with transparent pricing
        and dependable timelines.
      </p>
    </div>
  </div>
</section>

<section>
  <div class="container">
    <h2 class="section-title" data-i18n="home.services.title">Main Services</h2>
    <p class="section-subtitle" data-i18n="home.services.subtitle">Integrated solutions for your construction project</p>
    <div class="cards">
      <div class="card">
        <img class="card-img" src="/img/servicios/Residential and Commercial Plumbing.jpg" alt="Residential and Commercial Plumbing">
        <h4 data-i18n="home.cards.gc.title">Residential and Commercial Plumbing</h4>
        <p data-i18n="home.cards.gc.desc">Licensed &amp; insured general contracting for residential projects in MD &amp; DC.</p>
        <a href="/servicios.php" class="btn btn-outline" data-i18n="home.cards.viewDetails">View details</a>
      </div>
      <div class="card">
        <img class="card-img" src="/img/servicios/Exterior and Interior Painting.jpg" alt="Exterior and Interior Painting">
        <h4 data-i18n="home.cards.hi.title">Exterior and Interior Painting</h4>
        <p data-i18n="home.cards.hi.desc">Upgrades and improvements for kitchens, bathrooms, interiors and exteriors.</p>
        <a href="/servicios.php" class="btn btn-outline" data-i18n="home.cards.viewDetails">View details</a>
      </div>
      <div class="card">
        <img class="card-img" src="/img/servicios/Kitchen Remodeling.jpg" alt="Kitchen Remodeling">
        <h4 data-i18n="home.cards.kr.title">Kitchen Remodeling</h4>
        <p data-i18n="home.cards.kr.desc">Cabinetry, countertops and layouts optimized for function and style.</p>
        <a href="/servicios.php" class="btn btn-outline" data-i18n="home.cards.viewDetails">View details</a>
      </div>
      <div class="card">
        <img class="card-img" src="/img/servicios/Bathroom Remodeling.jpg" alt="Bathroom Remodeling">
        <h4 data-i18n="home.cards.br.title">Bathroom Remodeling</h4>
        <p data-i18n="home.cards.br.desc">Modern showers, vanities and finishes with professional installations.</p>
        <a href="/servicios.php" class="btn btn-outline" data-i18n="home.cards.viewDetails">View details</a>
      </div>
      <div class="card">
        <img class="card-img" src="/img/servicios/Finishing Basement.jpg" alt="Finishing Basement">
        <h4 data-i18n="home.cards.fb.title">Finishing Basement</h4>
        <p data-i18n="home.cards.fb.desc">Turn basements into livable spaces: family rooms, offices and more.</p>
        <a href="/servicios.php" class="btn btn-outline" data-i18n="home.cards.viewDetails">View details</a>
      </div>
      <div class="card">
        <img class="card-img" src="/img/servicios/Drywall Installation.jpg" alt="Drywall Installation">
        <h4 data-i18n="home.cards.rf.title">Drywall Installation</h4>
        <p data-i18n="home.cards.rf.desc">Professional drywall installation and finishing for residential and commercial projects.</p>
        <a href="/servicios.php" class="btn btn-outline" data-i18n="home.cards.viewDetails">View details</a>
      </div>
    </div>
    <div style="text-align: center; margin-top: 40px;">
      <a href="/servicios.php" class="btn btn-primary" data-i18n="home.services.all"><i class="fa-solid fa-list-check" style="margin-right: 8px;"></i>See all our services</a>
    </div>
  </div>
</section>

<section class="trust">
  <div class="container trust-content">
    <div style="text-align: left;">
      <h2 class="section-title" style="text-align: left;" data-i18n="home.trust.title">Why Homeowners Choose Us</h2>
      <ul>
        <li data-i18n="home.trust.li1">Licensed &amp; Insured</li>
        <li data-i18n="home.trust.li2">Transparent Pricing</li>
        <li data-i18n="home.trust.li3">On-Time Delivery</li>
        <li data-i18n="home.trust.li4">Quality Craftsmanship</li>
        <li data-i18n="home.trust.li5">Local Experience in MD &amp; DC</li>
      </ul>
    </div>
    <div class="trust-img">
      <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&q=80&auto=format&fit=crop" alt="Trust" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
    </div>
  </div>
</section>

<section>
  <div class="container">
    <div class="form-card" id="form-landing">
      <h3 data-i18n="home.form.title">Request a Free Estimate</h3>
      <p class="section-subtitle" style="margin-bottom: 24px;" data-i18n="home.form.subtitle">Tell us about your project and we'll get back to you promptly.</p>
      <?php if ($lead_success): ?>
        <div class="alert alert-success" data-i18n="home.form.success">Thanks, we have received your request. We will contact you soon.</div>
      <?php elseif ($lead_errors): ?>
        <div class="alert alert-error"><?php echo implode(' Â· ', array_map('htmlspecialchars', $lead_errors)); ?></div>
      <?php endif; ?>
      <form method="post" action="/index.php">
        <input type="hidden" name="lead_form" value="1">
        <div class="form-row">
          <div class="form-group">
            <label for="nombre" data-i18n="home.form.name">Full Name</label>
            <input type="text" id="nombre" name="nombre" required>
          </div>
          <div class="form-group">
            <label for="email" data-i18n="home.form.email">Email</label>
            <input type="email" id="email" name="email" required>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="telefono" data-i18n="home.form.phone">Phone Number</label>
            <input type="tel" id="telefono" name="telefono" required>
          </div>
          <div class="form-group">
            <label for="tipo" data-i18n="home.form.projectType">Project Type</label>
            <select id="tipo" name="tipo" required>
              <option value="" data-i18n="home.form.optionSelect">Select an option</option>
              <option data-i18n="home.form.optionNew">New Construction</option>
              <option data-i18n="home.form.optionRemodel">Remodeling</option>
              <option data-i18n="home.form.optionImprovement">Residential Improvement</option>
              <option data-i18n="home.form.optionOther">Other</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label for="mensaje" data-i18n="home.form.message">Brief Project Description</label>
          <textarea id="mensaje" name="mensaje" placeholder="Tell us about your project" data-i18n-placeholder="home.form.placeholder" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%;" data-i18n="home.form.submit">Submit</button>
      </form>
    </div>
  </div>
</section>

<section class="why-section">
  <div class="container">
    <h2 class="section-title" data-i18n="home.why.title">Why Choose namor consstruction LLC</h2>
    <div class="why-grid">
      <div class="why-item">
        <div class="why-icon"><i class="fa-solid fa-award"></i></div>
        <h4 data-i18n="home.why.quality.title">Quality</h4>
        <p data-i18n="home.why.quality.desc">Certified materials and controlled processes at every stage.</p>
      </div>
      <div class="why-item">
        <div class="why-icon"><i class="fa-solid fa-shield-halved"></i></div>
        <h4 data-i18n="home.why.safety.title">Safety</h4>
        <p data-i18n="home.why.safety.desc">Protocols and proper equipment to protect everyone.</p>
      </div>
      <div class="why-item">
        <div class="why-icon"><i class="fa-solid fa-calendar-check"></i></div>
        <h4 data-i18n="home.why.compliance.title">On-Time Delivery</h4>
        <p data-i18n="home.why.compliance.desc">Planning and delivery within agreed timelines.</p>
      </div>
      <div class="why-item">
        <div class="why-icon"><i class="fa-solid fa-user-tie"></i></div>
        <h4 data-i18n="home.why.professional.title">Professionalism</h4>
        <p data-i18n="home.why.professional.desc">Expert team and clear communication.</p>
      </div>
    </div>
  </div>
</section>

<section class="faq-construccion">
  <div class="container">
    <h2 class="section-title" data-i18n="home.faq.title">Frequently Asked Questions</h2>
    <div class="faq-accordion">

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          <span class="faq-title" data-i18n="home.faq.q1.title">What types of projects do you handle?</span>
          <span class="faq-icon"><i class="fa-solid fa-plus"></i></span>
        </button>
        <div class="faq-answer">
          <div class="faq-content">
            <p data-i18n="home.faq.q1.answer">We develop residential, commercial and industrial projects, including general contracting, remodeling, home improvements, structural work, finishes, maintenance and full project management.</p>
          </div>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          <span class="faq-title" data-i18n="home.faq.q2.title">Do you include planning and quality control?</span>
          <span class="faq-icon"><i class="fa-solid fa-plus"></i></span>
        </button>
        <div class="faq-answer">
          <div class="faq-content">
            <p data-i18n="home.faq.q2.answer">Yes. All our projects are executed with technical planning, quality control and on-site supervision.</p>
          </div>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          <span class="faq-title" data-i18n="home.faq.q3.title">Can you manage the entire project from design to completion?</span>
          <span class="faq-icon"><i class="fa-solid fa-plus"></i></span>
        </button>
        <div class="faq-answer">
          <div class="faq-content">
            <p data-i18n="home.faq.q3.answer">Yes. We offer full project management including planning, coordination and technical supervision through final delivery.</p>
          </div>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          <span class="faq-title" data-i18n="home.faq.q4.title">Do you work under current building codes?</span>
          <span class="faq-icon"><i class="fa-solid fa-plus"></i></span>
        </button>
        <div class="faq-answer">
          <div class="faq-content">
            <p data-i18n="home.faq.q4.answer">All projects are carried out in compliance with current technical regulations under specialized supervision.</p>
          </div>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          <span class="faq-title" data-i18n="home.faq.q5.title">Do you provide preventive and corrective maintenance?</span>
          <span class="faq-icon"><i class="fa-solid fa-plus"></i></span>
        </button>
        <div class="faq-answer">
          <div class="faq-content">
            <p data-i18n="home.faq.q5.answer">Yes. We design preventive and corrective maintenance plans to ensure operational continuity.</p>
          </div>
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question" aria-expanded="false">
          <span class="faq-title" data-i18n="home.faq.q6.title">How do I request a quote?</span>
          <span class="faq-icon"><i class="fa-solid fa-plus"></i></span>
        </button>
        <div class="faq-answer">
          <div class="faq-content">
            <p data-i18n="home.faq.q6.answer">Through the "Request a quote" button, we evaluate the scope and send you a detailed proposal.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<?php include __DIR__ . '/footer.php'; ?>
