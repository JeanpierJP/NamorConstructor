$(function () {
  var $header = $(".site-header");
  $(window).on("scroll", function () {
    var scrolled = $(this).scrollTop() > 10;
    $header.toggleClass("scrolled", scrolled);
    // WhatsApp Widget
    var $waMessage = $("#wa-message");
    var $waClose = $("#wa-close");

    // Show message after 3 seconds
    setTimeout(function () {
      $waMessage.fadeIn();
    }, 3000);

    $waClose.on("click", function () {
      $waMessage.fadeOut();
    });
  });

  // Menu toggle — open
  $("#menu-toggle").on("click", function () {
    var isOpen = $(".nav-links").hasClass("open");
    if (isOpen) {
      $(".nav-links").removeClass("open");
      $("body").css("overflow", "");
    } else {
      $(".nav-links").addClass("open");
      $("body").css("overflow", "hidden");
    }
  });

  // Menu close — X button inside nav panel
  $("#menu-close").on("click", function () {
    $(".nav-links").removeClass("open");
    $("body").css("overflow", "");
  });

  // Close when clicking a nav link
  $(".nav-links a").on("click", function () {
    $(".nav-links").removeClass("open");
    $("body").css("overflow", "");
  });

  // Close when clicking outside the menu panel
  $(document).on("click", function (e) {
    if (
      $(".nav-links").hasClass("open") &&
      !$(e.target).closest(".nav-links").length &&
      !$(e.target).closest("#menu-toggle").length
    ) {
      $(".nav-links").removeClass("open");
      $("body").css("overflow", "");
    }
  });

  var path = window.location.pathname || "/";
  $(".nav-links a").each(function () {
    var href = this.getAttribute("href");
    if (href === path) {
      $(this).addClass("active").attr("aria-current", "page");
    }
  });

  // Hero Slider
  var $slides = $(".slide");
  var $dots = $(".dot");
  var totalSlides = $slides.length;
  var currentSlide = 0;
  var slideInterval;

  function showSlide(index) {
    if (index >= totalSlides) index = 0;
    if (index < 0) index = totalSlides - 1;

    $slides.removeClass("active").eq(index).addClass("active");
    $dots.removeClass("active").eq(index).addClass("active");
    currentSlide = index;
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function startSlider() {
    slideInterval = setInterval(nextSlide, 2000);
  }

  function stopSlider() {
    clearInterval(slideInterval);
  }

  $(".slider-next").on("click", function () {
    stopSlider();
    nextSlide();
    startSlider();
  });

  $(".slider-prev").on("click", function () {
    stopSlider();
    prevSlide();
    startSlider();
  });

  $(".dot").on("click", function () {
    stopSlider();
    var index = $(this).data("slide");
    showSlide(index);
    startSlider();
  });

  // FAQ Accordion - Encapsulated Logic
  (function () {
    var faqQuestions = document.querySelectorAll(
      ".faq-construccion .faq-question",
    );

    if (faqQuestions.length > 0) {
      faqQuestions.forEach(function (question) {
        question.addEventListener("click", function () {
          var isOpen = this.getAttribute("aria-expanded") === "true";
          var currentAnswer = this.nextElementSibling;

          // Close all other items
          faqQuestions.forEach(function (otherQuestion) {
            if (otherQuestion !== question) {
              otherQuestion.setAttribute("aria-expanded", "false");
              otherQuestion.nextElementSibling.style.maxHeight = "0";
            }
          });

          // Toggle current item
          if (!isOpen) {
            this.setAttribute("aria-expanded", "true");
            currentAnswer.style.maxHeight = currentAnswer.scrollHeight + "px";
          } else {
            this.setAttribute("aria-expanded", "false");
            currentAnswer.style.maxHeight = "0";
          }
        });
      });
    }
  })();

  // Start slider if elements exist
  if ($slides.length > 0) {
    startSlider();
  }

  /* ============================
     i18n – Internationalization
     Default: English (en)
     Toggle: Spanish (es)
     ============================ */

  function getLang() {
    var urlLang = new URLSearchParams(window.location.search).get("lang");
    var stored = localStorage.getItem("lang");
    return urlLang || stored || "en";
  }

  function setLang(lang) {
    localStorage.setItem("lang", lang);
    applyLang(lang);
  }

  function applyLang(lang) {
    document.documentElement.setAttribute("lang", lang);
    var $toggle = $("#lang-toggle");
    if ($toggle.length) {
      // When current language is EN, show Spanish flag (to switch to Spanish)
      // When current language is ES, show US flag (to switch to English)
      var nextFlag =
        lang === "en"
          ? "https://flagcdn.com/w40/es.png"
          : "https://flagcdn.com/w40/us.png";
      var nextAlt = lang === "en" ? "Cambiar a Español" : "Switch to English";
      $toggle.find("img").attr("src", nextFlag).attr("alt", nextAlt);
    }

    var map = {
      en: {
        /* — Navigation — */
        "/index.php": "Home",
        "/servicios.php": "Services",
        "/nosotros.php": "About",
        "/contacto.php": "Contact",
        "link.home": "Home",
        "link.services": "Services",
        "link.about": "About",
        "link.contact": "Contact",

        /* — Header — */
        "header.topbar.quote": "Fast Free Estimates",
        "header.topbar.email": "contacto@constructormaster.com",

        /* — Home: Hero — */
        "home.hero.title": "We build trust, we deliver quality",
        "home.hero.subtitle":
          "Residential, commercial and industrial projects focused on safety, compliance and professionalism.",
        "home.hero.ctaQuote": "Request your quote",
        "home.hero.ctaServices": "View services",

        /* — Home: Intro — */
        "home.intro.title": "GENERAL CONTRACTOR SERVICES",
        "home.intro.subtitle":
          "Licensed & Insured | Serving Maryland & Washington DC",
        "home.intro.p1":
          "Namor Construction LLC, We specialize in residential and commercial construction and general home remodeling, offering superior workmanship with transparent pricing and reliable timelines.",
        "home.intro.p2":
          "All projects managed by us are equipped with the <strong>best tools in the industry</strong> to achieve your expectations, with <strong>100% satisfaction guaranteed</strong>.",

        /* — Home: Service Cards — */
        "home.services.title": "Main Services",
        "home.services.subtitle":
          "Integrated solutions for your construction project",
        "home.cards.gc.title": "Residential and Commercial Plumbing",
        "home.cards.gc.desc":
          "Plumbing services for residential and commercial properties, including installations, repairs, and system upgrades.",
        "home.cards.hi.title": "Exterior and Interior Painting",
        "home.cards.hi.desc":
          " Professional interior and exterior painting with durable finishes that refresh and protect your property.",
        "home.cards.kr.title": "Kitchen Construction and Remodeling",
        "home.cards.kr.desc":
          "Cabinetry, countertops and layouts optimized for function and style.",
        "home.cards.br.title": "Bathroom Construction and Renovation",
        "home.cards.br.desc":
          "Modern showers, vanities and finishes with professional installations.",
        "home.cards.fb.title": "Finishing Basement",
        "home.cards.fb.desc":
          "Turn basements into livable spaces: family rooms, offices and more.",
        "home.cards.rf.title": "Drywall Installation",
        "home.cards.rf.desc":
          "Drywall installation and finishing for walls and ceilings with clean lines and ready-to-paint surfaces.",
        "home.cards.viewDetails": "View details",
        "home.services.all": "See all our services",

        /* — Home: Trust Section — */
        "home.trust.title": "Why Homeowners Choose Us",
        "home.trust.li1": "Licensed & Insured",
        "home.trust.li2": "Transparent Pricing",
        "home.trust.li3": "On-Time Delivery",
        "home.trust.li4": "Quality Craftsmanship",
        "home.trust.li5": "Local Experience in MD & DC",

        /* — Home: Request Form — */
        "home.form.title": "Request a Free Estimate",
        "home.form.subtitle":
          "Tell us about your project and we'll get back to you promptly.",
        "home.form.success":
          "Thanks, we have received your request. We will contact you soon.",
        "home.form.name": "Full Name",
        "home.form.email": "Email",
        "home.form.phone": "Phone Number",
        "home.form.projectType": "Project Type",
        "home.form.optionSelect": "Select an option",
        "home.form.optionNew": "New Construction",
        "home.form.optionRemodel": "Remodeling",
        "home.form.optionImprovement": "Residential Improvement",
        "home.form.optionOther": "Other",
        "home.form.message": "Brief Project Description",
        "home.form.placeholder": "Tell us about your project",
        "home.form.submit": "Submit",

        /* — Home: Why Choose — */
        "home.why.title": "Why Choose namor consstruction LLC",
        "home.why.quality.title": "Quality",
        "home.why.quality.desc":
          "Certified materials and controlled processes at every stage.",
        "home.why.safety.title": "Safety",
        "home.why.safety.desc":
          "Protocols and proper equipment to protect everyone.",
        "home.why.compliance.title": "On-Time Delivery",
        "home.why.compliance.desc":
          "Planning and delivery within agreed timelines.",
        "home.why.professional.title": "Professionalism",
        "home.why.professional.desc": "Expert team and clear communication.",

        /* — Home: FAQ — */
        "home.faq.title": "Frequently Asked Questions",
        "home.faq.q1.title": "What types of projects do you handle?",
        "home.faq.q1.answer":
          "We develop residential, commercial and industrial projects, including general contracting, remodeling, home improvements, structural work, finishes, maintenance and full project management.",
        "home.faq.q2.title": "Do you include planning and quality control?",
        "home.faq.q2.answer":
          "Yes. All our projects are executed with technical planning, quality control and on-site supervision.",
        "home.faq.q3.title":
          "Can you manage the entire project from design to completion?",
        "home.faq.q3.answer":
          "Yes. We offer full project management including planning, coordination and technical supervision through final delivery.",
        "home.faq.q4.title": "Do you work under current building codes?",
        "home.faq.q4.answer":
          "All projects are carried out in compliance with current technical regulations under specialized supervision.",
        "home.faq.q5.title":
          "Do you provide preventive and corrective maintenance?",
        "home.faq.q5.answer":
          "Yes. We design preventive and corrective maintenance plans to ensure operational continuity.",
        "home.faq.q6.title": "How do I request a quote?",
        "home.faq.q6.answer":
          'Through the "Request a quote" button, we evaluate the scope and send you a detailed proposal.',

        /* — Services Page — */
        "services.title": "Construction Services",
        "services.subtitle":
          "Coverage for residential, commercial and industrial projects",
        "services.main.title": "Main Services",
        "services.items.gc.title": "Residential and Commercial Plumbing",
        "services.items.gc.desc":
          "Plumbing services for residential and commercial properties, including installations, repairs, and system upgrades.",
        "services.items.hi.title": "Exterior and Interior Painting",
        "services.items.hi.desc":
          " Professional interior and exterior painting with durable finishes that refresh and protect your property.",
        "services.items.kr.title": "Kitchen Construction and Remodeling",
        "services.items.kr.desc":
          "Full kitchen renovations with new layouts, cabinets and surfaces for daily use.",
        "services.items.br.title": "Bathroom Construction and Renovation",
        "services.items.br.desc":
          "Updated bathrooms with modern fixtures, tile and waterproof installations done right.",
        "services.items.fb.title": "Finishing Basement",
        "services.items.fb.desc":
          "Turn unfinished basements into comfortable living areas, home offices or family rooms.",
        "services.items.rf.title": "Drywall Installation",
        "services.items.rf.desc":
          "Drywall installation and finishing for walls and ceilings with clean lines and ready-to-paint surfaces.",
        "services.items.sd.title": "Siding",
        "services.items.sd.desc":
          "New siding installation and replacement to improve curb appeal and weather protection.",
        "services.items.rw.title": "Installation and Replacement of New Windows",
        "services.items.rw.desc":
          "Energy\u2011efficient replacement windows that improve comfort, security and monthly bills.",
        "services.items.dk.title": "Deck Building",
        "services.items.dk.desc":
          "Custom decks and outdoor spaces built for family time, grilling and entertaining.",
        "services.items.fl.title": "Flooring",
        "services.items.fl.desc":
          "Professional installation of hardwood, vinyl and tile floors for high\u2011traffic areas.",
        "services.items.gc2.title": "Gutter Cleaning",
        "services.items.gc2.desc":
          "Seasonal gutter cleaning and minor repairs to keep water away from your home.",
        "services.items.ad.title": "Additions",
        "services.items.ad.desc":
          "Room additions and extra living space designed to blend with your existing home.",
        "services.items.pk.title": "General Contractor",
        "services.items.pk.desc":
          "Licensed & insured management of residential construction and remodeling projects in MD & DC.",
        "services.items.more.title": "And More\u2026",
        "services.items.more.desc":
          "Additional construction and remodeling services tailored to your specific project needs.",
        "services.items.cta": "Request a quote",

        /* — About Page — */
        "about.title": "Who We Are",
        "about.subtitle":
          "New company with clear vision and focus on excellence",
        "about.cards.mission.title": "Mission",
        "about.cards.mission.desc":
          "Develop construction projects that fulfill their purpose, optimizing resources and ensuring quality, safety and compliance.",
        "about.cards.vision.title": "Vision",
        "about.cards.vision.desc":
          "Be a benchmark in construction and general services, recognized for reliability and professionalism in every project.",
        "about.cards.experience.title": "Our Experience",
        "about.cards.experience.desc":
          "Team with background in different construction disciplines. Experience across projects of diverse complexity.",
        "about.values.title": "Values",
        "about.values.quality.title": "Quality",
        "about.values.quality.desc":
          "Standardized processes, proper materials and continuous control.",
        "about.values.responsibility.title": "Responsibility",
        "about.values.responsibility.desc":
          "Commitment to scope, budget and timing.",
        "about.values.safety.title": "Safety",
        "about.values.safety.desc":
          "Safe practices and protection of people and equipment.",
        "about.values.punctuality.title": "Punctuality",
        "about.values.punctuality.desc":
          "Schedule management and milestone delivery.",
        "about.values.commitment.title": "Commitment",
        "about.values.commitment.desc":
          "Focus on client objectives and clear communication.",

        /* — Contact Page — */
        "contact.title": "Contact",
        "contact.subtitle":
          "Tell us about your project and we'll reply shortly",
        "contact.form.title": "Write to Us",
        "contact.form.success":
          "Your message was sent. Our team will contact you soon.",
        "contact.form.name": "Name",
        "contact.form.email": "Email",
        "contact.form.phone": "Phone",
        "contact.form.company": "Company",
        "contact.form.companyOptional": "Optional",
        "contact.form.projectType": "Project Type",
        "contact.form.optionSelect": "Select an option",
        "contact.form.optionResidential": "Residential",
        "contact.form.optionCommercial": "Commercial",
        "contact.form.optionIndustrial": "Industrial",
        "contact.form.message": "Message",
        "contact.form.messagePlaceholder": "Tell us more",
        "contact.form.submit": "Send",
        "contact.location.title": "Location",
        "contact.location.desc":
          "We serve projects in multiple areas. Schedule a virtual or in-person meeting.",

        /* — Footer — */
        "footer.benefits.staff":
          "Pre-screened, insured, professionally trained staff",
        "footer.benefits.quality":
          "Exceptional quality and consistency guaranteed",
        "footer.benefits.prices": "Accessible, competitive pricing",
        "footer.brand.desc":
          "Construction and general services focused on quality, safety and compliance.",
        "footer.links.title": "Links",
        "footer.contact.title": "Contact Us",
        "footer.contact.address": "Sterling, VA",
        "footer.contact.write": "Write to us",
        "footer.contact.hours": "Mon–Fri: 9:00 AM – 6:00 PM",
        "footer.copyright": "© {year} namor consstruction LLC. All rights reserved.",

        /* — WhatsApp — */
        "whatsapp.cta": "Let's talk about your project 👋",
      },

      es: {
        /* — Navegación — */
        "/index.php": "Inicio",
        "/servicios.php": "Servicios",
        "/nosotros.php": "Nosotros",
        "/contacto.php": "Contacto",
        "link.home": "Inicio",
        "link.services": "Servicios",
        "link.about": "Nosotros",
        "link.contact": "Contacto",

        /* — Encabezado — */
        "header.topbar.quote": "Cotización rápida gratuita",
        "header.topbar.email": "contacto@constructormaster.com",

        /* — Inicio: Hero — */
        "home.hero.title": "Construimos confianza, entregamos calidad",
        "home.hero.subtitle":
          "Proyectos residenciales, comerciales e industriales con enfoque en seguridad, cumplimiento y profesionalismo.",
        "home.hero.ctaQuote": "Solicita tu cotización",
        "home.hero.ctaServices": "Ver servicios",

        /* — Inicio: Introducción — */
        "home.intro.title": "SERVICIOS DE CONTRATISTA GENERAL",
        "home.intro.subtitle":
          "Con licencia y asegurado | Servicio en Maryland y Washington DC",
        "home.intro.p1":
          "Namor Construcción LLC, Nos especializamos en la construcción residencial y comercial y remodelación de viviendas en general, ofreciendo mano de obra superior con precios transparentes y plazos confiables.",
        "home.intro.p2":
          "Todos los proyectos gestionados por nosotros están equipados con las <strong>mejores herramientas del sector</strong> para lograr lo que esperas, la <strong>satisfacción del 100% está garantizada</strong>.",

        /* — Inicio: Tarjetas de Servicios — */
        "home.services.title": "Servicios principales",
        "home.services.subtitle":
          "Soluciones integrales para tu proyecto de construcción",
        "home.cards.gc.title": "Plomería Residencial y Comercial",
        "home.cards.gc.desc":
          "Servicios de plomeria residencial y comercial, incluyendo instalaciones, reparaciones y mejoras del sistema.",
        "home.cards.hi.title": "Pintura Exterior e interior",
        "home.cards.hi.desc":
          "Pintura interior y exterior profesional con acabados duraderos que renuevan y protegen tu propiedad.",
        "home.cards.kr.title": "Construcción y Remodelación de Cocinas",
        "home.cards.kr.desc":
          "Gabinetes, encimeras y distribuciones optimizadas para funcionalidad y estilo.",
        "home.cards.br.title": "Construcción y Remodelación de baños",
        "home.cards.br.desc":
          "Duchas modernas, tocadores y acabados con instalaciones profesionales.",
        "home.cards.fb.title": "Terminación de Sótanos",
        "home.cards.fb.desc":
          "Convierte sótanos en espacios habitables: salas familiares, oficinas y más.",
        "home.cards.rf.title": "Instalacion de Drywall",
        "home.cards.rf.desc":
          "Instalacion y acabado de drywall para muros y techos, con lineas limpias y superficies listas para pintar.",
        "home.cards.viewDetails": "Ver detalles",
        "home.services.all": "Conoce todos nuestros servicios",

        /* — Inicio: Sección de Confianza — */
        "home.trust.title": "Por qué los propietarios nos eligen",
        "home.trust.li1": "Con licencia y asegurado",
        "home.trust.li2": "Precios transparentes",
        "home.trust.li3": "Entrega a tiempo",
        "home.trust.li4": "Mano de obra de calidad",
        "home.trust.li5": "Experiencia local en MD y DC",

        /* — Inicio: Formulario — */
        "home.form.title": "Solicita un presupuesto gratuito",
        "home.form.subtitle":
          "Cuéntanos sobre tu proyecto y te responderemos a la brevedad.",
        "home.form.success":
          "Gracias, hemos recibido tu solicitud. Te contactaremos pronto.",
        "home.form.name": "Nombre completo",
        "home.form.email": "Correo electrónico",
        "home.form.phone": "Número de teléfono",
        "home.form.projectType": "Tipo de proyecto",
        "home.form.optionSelect": "Selecciona una opción",
        "home.form.optionNew": "Construcción nueva",
        "home.form.optionRemodel": "Remodelación",
        "home.form.optionImprovement": "Mejora residencial",
        "home.form.optionOther": "Otro",
        "home.form.message": "Descripción breve del proyecto",
        "home.form.placeholder": "Cuéntanos sobre tu proyecto",
        "home.form.submit": "Enviar",

        /* — Inicio: Por qué elegirnos — */
        "home.why.title": "Por qué elegir namor consstruction LLC",
        "home.why.quality.title": "Calidad",
        "home.why.quality.desc":
          "Materiales certificados y procesos controlados en cada etapa.",
        "home.why.safety.title": "Seguridad",
        "home.why.safety.desc":
          "Protocolos y equipos adecuados para proteger a todos.",
        "home.why.compliance.title": "Cumplimiento",
        "home.why.compliance.desc":
          "Planificación y entrega en los plazos acordados.",
        "home.why.professional.title": "Profesionalismo",
        "home.why.professional.desc":
          "Equipo experto y comunicación transparente.",

        /* — Inicio: Preguntas Frecuentes — */
        "home.faq.title": "Preguntas Frecuentes",
        "home.faq.q1.title": "¿Qué tipo de proyectos ejecutan?",
        "home.faq.q1.answer":
          "Desarrollamos proyectos residenciales, comerciales e industriales, abarcando contratación general, remodelaciones, mejoras del hogar, obras estructurales, acabados, mantenimiento y gestión integral de proyectos.",
        "home.faq.q2.title":
          "¿Incluyen planificación y control de calidad en las obras?",
        "home.faq.q2.answer":
          "Sí. Todos nuestros proyectos se ejecutan bajo planificación técnica, control de calidad y supervisión en obra.",
        "home.faq.q3.title":
          "¿Pueden encargarse del proyecto completo desde el diseño hasta la ejecución?",
        "home.faq.q3.answer":
          "Sí. Ofrecemos gestión integral incluyendo planificación, coordinación y supervisión técnica hasta la entrega final.",
        "home.faq.q4.title": "¿Trabajan bajo normativa vigente?",
        "home.faq.q4.answer":
          "Todas las obras se desarrollan conforme a normativa técnica vigente con supervisión especializada.",
        "home.faq.q5.title": "¿Realizan mantenimiento preventivo y correctivo?",
        "home.faq.q5.answer":
          "Sí. Diseñamos planes de mantenimiento preventivo y correctivo para garantizar continuidad operativa.",
        "home.faq.q6.title": "¿Cómo se solicita una cotización?",
        "home.faq.q6.answer":
          'A través del botón "Solicitar cotización" evaluamos el alcance y enviamos una propuesta detallada.',

        /* — Página de Servicios — */
        "services.title": "Servicios de Construcción",
        "services.subtitle":
          "Cobertura para proyectos residenciales, comerciales e industriales",
        "services.main.title": "Servicios Principales",
        "services.items.gc.title": "Plomería Residencial y Comercial",
        "services.items.gc.desc":
          "Servicios de plomeria residencial y comercial, incluyendo instalaciones, reparaciones y mejoras del sistema.",
        "services.items.hi.title": "Pintura Exterior e interior",
        "services.items.hi.desc":
          "Pintura interior y exterior profesional con acabados duraderos que renuevan y protegen tu propiedad.",
        "services.items.kr.title": "Construcción y Remodelación de Cocinas",
        "services.items.kr.desc":
          "Renovaciones completas de cocina con nuevas distribuciones, gabinetes y superficies para el uso diario.",
        "services.items.br.title": "Construcción y Remodelación de baños",
        "services.items.br.desc":
          "Baños renovados con accesorios modernos, azulejos e instalaciones impermeables hechas correctamente.",
        "services.items.fb.title": "Terminación de Sótanos",
        "services.items.fb.desc":
          "Convierte sótanos sin terminar en áreas habitables cómodas, oficinas en casa o salas familiares.",
        "services.items.rf.title": "Instalacion de Drywall",
        "services.items.rf.desc":
          "Instalacion y acabado de drywall para muros y techos, con lineas limpias y superficies listas para pintar.",
        "services.items.sd.title": "Revestimiento Exterior",
        "services.items.sd.desc":
          "Instalación y reemplazo de revestimiento para mejorar la apariencia y la protección climática.",
        "services.items.rw.title": "Instalación y Remplazo de Ventanas Nuevas",
        "services.items.rw.desc":
          "Ventanas de reemplazo de alta eficiencia energética que mejoran la comodidad, seguridad y costos mensuales.",
        "services.items.dk.title": "Construcción de Terrazas",
        "services.items.dk.desc":
          "Terrazas personalizadas y espacios exteriores para tiempo en familia, parrilladas y entretenimiento.",
        "services.items.fl.title": "Pisos",
        "services.items.fl.desc":
          "Instalación profesional de pisos de madera, vinilo y cerámica para áreas de alto tráfico.",
        "services.items.gc2.title": "Limpieza de Canaletas",
        "services.items.gc2.desc":
          "Limpieza estacional de canaletas y reparaciones menores para mantener el agua lejos de tu hogar.",
        "services.items.ad.title": "Ampliaciones",
        "services.items.ad.desc":
          "Ampliaciones de habitaciones y espacio adicional diseñado para integrarse con tu hogar existente.",
        "services.items.pk.title": "Contratista General",
        "services.items.pk.desc":
          "Gestión de proyectos de construcción y remodelación residencial con licencia y seguro en MD y DC.",
        "services.items.more.title": "Y más\u2026",
        "services.items.more.desc":
          "Servicios adicionales de construcción y remodelación adaptados a las necesidades específicas de tu proyecto.",
        "services.items.cta": "Solicitar cotización",

        /* — Página Nosotros — */
        "about.title": "Quiénes Somos",
        "about.subtitle":
          "Empresa nueva con visión clara y enfoque en la excelencia",
        "about.cards.mission.title": "Misión",
        "about.cards.mission.desc":
          "Desarrollar proyectos de construcción que cumplan su propósito, optimizando recursos y garantizando calidad, seguridad y cumplimiento.",
        "about.cards.vision.title": "Visión",
        "about.cards.vision.desc":
          "Ser un referente en construcción y servicios generales, reconocidos por la confiabilidad y el profesionalismo en cada obra.",
        "about.cards.experience.title": "Nuestra Experiencia",
        "about.cards.experience.desc":
          "Equipo con trayectoria en diferentes disciplinas de la construcción. Experiencia acumulada en proyectos de diversa complejidad.",
        "about.values.title": "Valores",
        "about.values.quality.title": "Calidad",
        "about.values.quality.desc":
          "Procesos estandarizados, materiales adecuados y control permanente.",
        "about.values.responsibility.title": "Responsabilidad",
        "about.values.responsibility.desc":
          "Compromiso con el alcance, el presupuesto y los tiempos.",
        "about.values.safety.title": "Seguridad",
        "about.values.safety.desc":
          "Prácticas seguras y protección de personas y equipos.",
        "about.values.punctuality.title": "Puntualidad",
        "about.values.punctuality.desc":
          "Gestión de cronograma y cumplimiento de hitos.",
        "about.values.commitment.title": "Compromiso",
        "about.values.commitment.desc":
          "Enfoque en objetivos del cliente y comunicación clara.",

        /* — Página de Contacto — */
        "contact.title": "Contacto",
        "contact.subtitle":
          "Cuéntanos sobre tu proyecto y te responderemos a la brevedad",
        "contact.form.title": "Escríbenos",
        "contact.form.success":
          "Tu mensaje fue enviado. Nuestro equipo te contactará pronto.",
        "contact.form.name": "Nombre",
        "contact.form.email": "Correo electrónico",
        "contact.form.phone": "Teléfono",
        "contact.form.company": "Empresa",
        "contact.form.companyOptional": "Opcional",
        "contact.form.projectType": "Tipo de proyecto",
        "contact.form.optionSelect": "Selecciona una opción",
        "contact.form.optionResidential": "Residencial",
        "contact.form.optionCommercial": "Comercial",
        "contact.form.optionIndustrial": "Industrial",
        "contact.form.message": "Mensaje",
        "contact.form.messagePlaceholder": "Cuéntanos más",
        "contact.form.submit": "Enviar",
        "contact.location.title": "Ubicación",
        "contact.location.desc":
          "Atendemos proyectos en múltiples zonas. Agenda una reunión virtual o presencial.",

        /* — Pie de Página — */
        "footer.benefits.staff": "Personal capacitado y asegurado",
        "footer.benefits.quality": "Garantía y calidad consistente",
        "footer.benefits.prices": "Precios accesibles y competitivos",
        "footer.brand.desc":
          "Construcción y servicios generales con enfoque en calidad, seguridad y cumplimiento.",
        "footer.links.title": "Enlaces",
        "footer.contact.title": "Contáctanos",
        "footer.contact.address": "Sterling, VA",
        "footer.contact.write": "Escríbenos",
        "footer.contact.hours": "Lun–Vie: 9:00 AM – 6:00 PM",
        "footer.copyright":
          "© {year} namor consstruction LLC. Todos los derechos reservados.",

        /* — WhatsApp — */
        "whatsapp.cta": "Hablemos sobre tu proyecto 👋",
      },
    };

    // Translate nav links by href
    $(".nav-links a").each(function () {
      var href = this.getAttribute("href");
      if (map[lang][href]) {
        $(this).text(map[lang][href]);
      }
    });

    // Translate elements with data-i18n
    var year = new Date().getFullYear();
    $("[data-i18n]").each(function () {
      var key = this.getAttribute("data-i18n");
      if (key && map[lang][key] !== undefined) {
        var val = map[lang][key];
        if (key === "footer.copyright") {
          val = String(val).replace("{year}", year);
        }
        $(this).html(val);
      }
    });

    // Translate placeholders
    $("[data-i18n-placeholder]").each(function () {
      var key = this.getAttribute("data-i18n-placeholder");
      if (key && map[lang][key] !== undefined) {
        $(this).attr("placeholder", map[lang][key]);
      }
    });
  }

  applyLang(getLang());

  $(document).on("click", "#lang-toggle", function () {
    var current = getLang();
    var next = current === "en" ? "es" : "en";
    setLang(next);
  });

  $('a[href^="#"]').on("click", function (e) {
    var target = $(this.getAttribute("href"));
    if (target.length) {
      e.preventDefault();
      var offset =
        ($(".site-header").outerHeight() || 0) +
        ($(".site-topbar").outerHeight() || 0);
      $("html, body").animate({ scrollTop: target.offset().top - offset }, 500);
    }
  });
});


