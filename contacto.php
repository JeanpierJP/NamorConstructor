<?php
$contact_success = false;
$contact_errors = [];
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['contact_form'])) {
  $nombre = trim($_POST['nombre'] ?? '');
  $email = trim($_POST['email'] ?? '');
  $telefono = trim($_POST['telefono'] ?? '');
  $empresa = trim($_POST['empresa'] ?? '');
  $tipo = trim($_POST['tipo'] ?? '');
  $mensaje = trim($_POST['mensaje'] ?? '');
  if ($nombre === '') $contact_errors[] = 'Name is required';
  if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) $contact_errors[] = 'Invalid email';
  if ($telefono === '') $contact_errors[] = 'Phone is required';
  if ($mensaje === '') $contact_errors[] = 'Enter a message';
  if (!$contact_errors) {
    $contact_success = true;
  }
}
include __DIR__ . '/header.php';
?>

<section class="contact-hero">
  <div class="services-hero-content">
    <h1 data-i18n="contact.title">Contact</h1>
    <p data-i18n="contact.subtitle">Tell us about your project and we'll reply shortly</p>
  </div>
</section>

<section>
  <div class="container">
    <div class="content" style="display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:start;">
      <div class="form-card">
        <h3 data-i18n="contact.form.title">Write to Us</h3>
        <?php if ($contact_success): ?>
          <div class="alert alert-success" data-i18n="contact.form.success">Your message was sent. Our team will contact you soon.</div>
        <?php elseif ($contact_errors): ?>
          <div class="alert alert-error"><?php echo implode(' · ', array_map('htmlspecialchars', $contact_errors)); ?></div>
        <?php endif; ?>
        <form method="post" action="/contacto.php">
          <input type="hidden" name="contact_form" value="1">
          <div class="form-row">
            <div class="form-group">
              <label for="nombre" data-i18n="contact.form.name">Name</label>
              <input type="text" id="nombre" name="nombre" required>
            </div>
            <div class="form-group">
              <label for="email" data-i18n="contact.form.email">Email</label>
              <input type="email" id="email" name="email" required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="telefono" data-i18n="contact.form.phone">Phone</label>
              <input type="tel" id="telefono" name="telefono" required>
            </div>
            <div class="form-group">
              <label for="empresa" data-i18n="contact.form.company">Company</label>
              <input type="text" id="empresa" name="empresa" placeholder="Optional" data-i18n-placeholder="contact.form.companyOptional">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="tipo" data-i18n="contact.form.projectType">Project Type</label>
              <select id="tipo" name="tipo">
                <option value="" data-i18n="contact.form.optionSelect">Select an option</option>
                <option data-i18n="contact.form.optionResidential">Residential</option>
                <option data-i18n="contact.form.optionCommercial">Commercial</option>
                <option data-i18n="contact.form.optionIndustrial">Industrial</option>
              </select>
            </div>
            <div class="form-group">
              <label for="mensaje" data-i18n="contact.form.message">Message</label>
              <textarea id="mensaje" name="mensaje" required placeholder="Tell us more" data-i18n-placeholder="contact.form.messagePlaceholder"></textarea>
            </div>
          </div>
          <button type="submit" class="btn btn-primary" style="width:100%;" data-i18n="contact.form.submit">Send</button>
        </form>
      </div>
      <div class="form-card">
        <h3 data-i18n="contact.location.title">Location</h3>
        <p data-i18n="contact.location.desc">We serve projects in multiple areas. Schedule a virtual or in-person meeting.</p>
        <div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:10px;">
          <iframe title="Map" src="https://www.google.com/maps?q=Sterling,+VA&output=embed" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"></iframe>
        </div>
      </div>
    </div>
  </div>
</section>

<?php include __DIR__ . '/footer.php'; ?>
