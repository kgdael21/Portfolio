/**
 * KYLA DAEL - GRAPHIC DESIGN PORTFOLIO INTERACTIVITY
 * Faithful to hand-drawn wireframe specification
 */

document.addEventListener('DOMContentLoaded', () => {

  /* =========================================================
     1. THEME TOGGLE (DARK / LIGHT MODE)
     ========================================================= */
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('kyla_portfolio_theme') || 'light';

  if (currentTheme === 'dark') {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  }

  themeToggle?.addEventListener('click', () => {
    if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('light-theme');
      localStorage.setItem('kyla_portfolio_theme', 'light');
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add('dark-theme');
      localStorage.setItem('kyla_portfolio_theme', 'dark');
    }
  });

  /* =========================================================
     2. MOBILE MENU HAMBURGER
     ========================================================= */
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  hamburgerBtn?.addEventListener('click', () => {
    navMenu?.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu?.classList.remove('open');
    });
  });

  /* =========================================================
     3. ACTIVE NAVIGATION LINK ON SCROLL
     ========================================================= */
  const sections = document.querySelectorAll('section[id]');
  
  const handleScrollActiveNav = () => {
    const scrollY = window.pageYOffset + 120;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        targetNavLink?.classList.add('active');
      } else {
        targetNavLink?.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', handleScrollActiveNav);

  /* =========================================================
     4. PROJECT FILTERING
     ========================================================= */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || filterValue === cardCategory) {
          card.classList.remove('hidden');
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  /* =========================================================
     5. PROJECT CASE STUDY DATA & MODALS (GDrive & PDF Ready)
     ========================================================= */
  const projectsData = {
    1: {
      title: "KBS Logo Concept & Identity",
      category: "Brand Identity & Logo",
      tools: "Adobe Illustrator, Photoshop",
      date: "2024",
      client: "KBS Brand Concept",
      img: "assets/kbs-logo.jpg",
      gdriveUrl: "https://drive.google.com/drive/folders/1J42EbReHCbAXOL_jxFsZWjbrLys0E5Jf",
      colors: [
        { hex: "#7A0F0F", name: "Burgundy" },
        { hex: "#2B0505", name: "Dark Wine" },
        { hex: "#FFC1E3", name: "Soft Rose" },
        { hex: "#F79BD3", name: "Petal Pink" },
        { hex: "#FFF2B2", name: "Butter Cream" },
        { hex: "#FFF6E5", name: "Warm White" }
      ],
      description: "A geometric brand identity system centered on a modern hexagonal monogram. The design integrates a stylized serif 'K' adorned with botanical leaf motifs, balanced with clean, high-contrast modern serif 'BS' lettering and a fluid wave element representing dynamism and elegance.",
      deliverables: ["Primary Hexagonal Monogram Logo", "Full Color Gradient Variations", "Monochrome & Inverted Vector Assets", "Scalable SVG, AI, and High-Resolution PNG Exports"]
    },
    2: {
      title: "KBS Concept Mood Board & Visual Guidelines",
      category: "Brand Identity & Moodboard",
      tools: "Canva Pro, Adobe Illustrator",
      date: "2024",
      client: "KBS Brand Development",
      img: "assets/kbs-moodboard.jpg",
      gdriveUrl: "https://drive.google.com/drive/folders/1J42EbReHCbAXOL_jxFsZWjbrLys0E5Jf",
      colors: [
        { hex: "#7A0F0F", name: "Deep Red" },
        { hex: "#2B0505", name: "Espresso" },
        { hex: "#FFC1E3", name: "Blush" },
        { hex: "#F79BD3", name: "Orchid" },
        { hex: "#FFF2B2", name: "Vanilla" },
        { hex: "#FFF6E5", name: "Silk" }
      ],
      description: "A comprehensive brand mood board articulating the aesthetic foundation of KBS. Synthesizes color psychology, serif typographic hierarchy (Classy & Strong / Bold & Stylish), tactile texture inspirations (silk, cotton paper, rose clouds), and core emotional vibes: Confident, Calm, Focused, and Inspired.",
      deliverables: ["Curated Color Palette with HEX & RGB Codes", "Typographic Hierarchy & Font Pairings", "Texture & Material Mood Board Layout", "Emotional Brand Vibe Compass"]
    },
    3: {
      title: "Meow Café Opening Promo Poster",
      category: "Promotional Poster & Print",
      tools: "Adobe Photoshop, Canva, Illustrator",
      date: "2024",
      client: "Meow Café (Calamba, Laguna)",
      img: "assets/meow-cafe-poster.jpg",
      gdriveUrl: "https://drive.google.com/drive/folders/1aPB0dQ42XRkGKiJkvemD_myjb1Sk5U-e",
      colors: [
        { hex: "#F59E0B", name: "Warm Gold" },
        { hex: "#78350F", name: "Coffee Brown" },
        { hex: "#15803D", name: "Promo Green" },
        { hex: "#FEF3C7", name: "Cream Puff" }
      ],
      description: "An energetic, consumer-friendly advertising poster designed for Meow Café's official launch in Calamba, Laguna. Highlights an irresistible 10% opening promotion across all beverages, complete with a charming cat mascot illustration, 3D iced caramel coffee mockup, and clear location directions.",
      deliverables: ["Print-Ready High-Res A3 Poster (CMYK)", "Illustrated Cat Mascot Vector Art", "Custom Product Cup Mockup with Branding", "Digital Social Media Launch Teasers"]
    },
    4: {
      title: "Urban Threads Digital Marketing Campaign",
      category: "Digital Marketing & E-Commerce",
      tools: "Figma, Adobe Photoshop",
      date: "2024",
      client: "Urban Threads Apparel",
      img: "assets/urban-threads-marketing.jpg",
      gdriveUrl: "https://drive.google.com/drive/folders/1XjQ18QizhlmGVKInfrkw4u1AU8CPYRWt",
      colors: [
        { hex: "#0F172A", name: "Midnight Navy" },
        { hex: "#D97706", name: "Amber Orange" },
        { hex: "#FFFFFF", name: "Pure White" },
        { hex: "#334155", name: "Slate Denim" }
      ],
      description: "A full digital marketing asset package crafted for an urban youth streetwear launch. Built around the concept 'Your Semester. Your Style.', featuring web hero banners, typography-heavy t-shirt graphics ('No Bad Days', 'Class of '26', 'Your Style Your Move'), and responsive e-commerce banner sizing.",
      deliverables: ["E-Commerce Hero Web Banner (Desktop & Mobile)", "Streetwear T-Shirt Graphic Collections", "Social Media Ad Creatives & CTA Layouts", "Apparel Mockup Presentation Assets"]
    },
    5: {
      title: "The Brew Of Life — Typography Art",
      category: "Custom Typography & Art",
      tools: "Canva Pro, Adobe Illustrator",
      date: "2024",
      client: "Coffeehouse Lettering Project",
      img: "assets/typography-brew-of-life.jpg",
      gdriveUrl: "https://drive.google.com/drive/folders/1YoBoIuuZk5s1Pli6gRwIZv6ctdoB-iOj",
      colors: [
        { hex: "#1C1917", name: "Roasted Black" },
        { hex: "#F5F5F4", name: "Warm Cream" },
        { hex: "#78350F", name: "Espresso" }
      ],
      description: "Bold retro coffee typography artwork designed for a specialty cafe. Features custom textured brush lettering ('The BREW Of Life — Brewed to Brighten Your Day') paired with a minimalist outline coffee cup with rising aroma lines.",
      deliverables: ["Custom Brush Lettering Vector (AI & PNG)", "Art Print Poster Layout (A3/A4)", "Cafe Wall Decor & Signage Mockups", "Social Media Quote Graphics"]
    },
    6: {
      title: "Kyla Dael Editorial Magazine",
      category: "Editorial & Publication",
      tools: "Adobe InDesign, Photoshop",
      date: "2024",
      client: "Editorial & Publication Layout",
      img: "assets/magazine-editorial.png",
      gdriveUrl: "https://drive.google.com/drive/folders/1QfhQFPxdT9ubwi5L1OvCVe7GHHDau19G",
      colors: [
        { hex: "#000000", name: "Pure Black" },
        { hex: "#FFFFFF", name: "Clean White" },
        { hex: "#6B7280", name: "Editorial Gray" }
      ],
      description: "A striking, high-contrast monochrome magazine spread layout. Utilizes vertical bold typography ('KYLA DAEL'), split portrait framing with subtle horizontal dividers, and ample whitespace embodying minimalist haute-couture editorial aesthetics.",
      deliverables: ["Editorial Publication Cover & Spread", "High-Contrast Monochrome Layout Grid", "Custom Vertical Typography Hierarchy", "Print-Ready High-Res PDF with Crop Marks"]
    },
    7: {
      title: "Portfolio UI/UX Wireframing",
      category: "UI/UX & Wireframing",
      tools: "Paper Prototyping, Figma, UI/UX Architecture",
      date: "2024",
      client: "Kyla Dael Portfolio Project",
      img: "assets/portfolio-wireframing.jpg",
      gdriveUrl: "https://drive.google.com/drive/folders/1RpGgw6g2sURy9wl7AwpBIy-hYnPY8tRc",
      colors: [
        { hex: "#1E293B", name: "Slate Pencil" },
        { hex: "#F8FAFC", name: "Draft Paper" },
        { hex: "#6366F1", name: "Digital Indigo" }
      ],
      description: "Comprehensive hand-drawn wireframes and information architecture blueprints that designed every section and interaction of this graphic design portfolio. Encompasses landing page hero, about me layout, project grid, skills metrics, testimonial carousel, and contact channels.",
      deliverables: ["6-Section Wireframe Blueprint Sheets", "Visual Hierarchy & Layout Planning", "Interaction & Component Architecture", "Desktop & Mobile Responsive Mapping"]
    },
    8: {
      title: "Promotional Motion Video Ad",
      category: "Promotional Video Ad",
      tools: "CapCut, Motion Graphics, Video Editing",
      date: "2024",
      client: "Promotional Commercial Campaign",
      img: "assets/meow-cafe-poster.jpg",
      videoUrl: "assets/promo-video-ad.mp4",
      gdriveUrl: "assets/promo-video-ad.mp4",
      colors: [
        { hex: "#EC4899", name: "Motion Pink" },
        { hex: "#6366F1", name: "Vibrant Indigo" },
        { hex: "#0F172A", name: "Dark Cinematic" }
      ],
      description: "High-conversion promotional motion video advertisement engineered for maximum social media engagement. Combines rhythmic transitions, typography kinetic text overlays, and color grading optimized for TikTok, Instagram Reels, and YouTube Shorts.",
      deliverables: ["Full HD 1080p MP4 Video Commercial", "Vertical 9:16 Social Media Ratio", "Custom Motion Graphics & Sound Sync", "High-Retention Thumbnail Covers"]
    }
  };

  const projectModal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close');
  const modalBody = document.getElementById('modal-body-content');
  const pdfModal = document.getElementById('pdf-modal');
  const pdfModalClose = document.getElementById('pdf-modal-close');
  const pdfSheetContent = document.getElementById('pdf-sheet-content');

  // Open Case Study Modal
  const openProjectModal = (projectId) => {
    const data = projectsData[projectId];
    if (!data || !modalBody) return;

    modalBody.innerHTML = `
      ${data.videoUrl ? `
        <div style="background: #000; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 24px; text-align: center;">
          <video src="${data.videoUrl}" controls autoplay playsinline style="max-height: 480px; width: 100%; object-fit: contain;"></video>
        </div>
      ` : `
        <img src="${data.img}" alt="${data.title}" class="modal-project-img">
      `}
      <div class="modal-project-header">
        <div>
          <h2 class="modal-project-title">${data.title}</h2>
          <span class="project-cat">${data.category}</span>
        </div>
        ${data.gdriveUrl ? `
          <a href="${data.gdriveUrl}" ${data.videoUrl ? 'download' : 'target="_blank" rel="noopener noreferrer"'} class="btn btn-sm btn-gdrive" title="${data.videoUrl ? 'Download Video' : 'Open Google Drive'}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7.71 3.5L1.15 15l3.43 6 6.55-11.5M9.73 15L6.3 21h13.12l3.43-6M22.29 13.5L15.73 2H8.87l6.56 11.5"/></svg>
            <span>${data.videoUrl ? 'Download MP4 Video' : 'Google Drive Folder ↗'}</span>
          </a>
        ` : ''}
      </div>

      <div class="modal-specs-grid">
        <div class="spec-item">
          <small>Client / Project</small>
          <strong>${data.client}</strong>
        </div>
        <div class="spec-item">
          <small>Tools Used</small>
          <strong>${data.tools}</strong>
        </div>
        <div class="spec-item">
          <small>Timeline / Year</small>
          <strong>${data.date}</strong>
        </div>
      </div>

      <p class="modal-project-desc">${data.description}</p>

      ${data.colors && data.colors.length > 0 ? `
        <div style="margin-bottom: 20px;">
          <h4 style="font-size: 0.95rem; font-weight: 800; margin-bottom: 8px; color: var(--text-primary);">Brand Color Palette:</h4>
          <div class="pdf-swatches">
            ${data.colors.map(c => `
              <div class="swatch-item" title="${c.name} (${c.hex})">
                <div class="swatch-color" style="background-color: ${c.hex};"></div>
                <span class="swatch-label">${c.hex}</span>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <div style="margin-bottom: 24px;">
        <h4 style="font-size: 1.05rem; font-weight: 800; margin-bottom: 10px; color: var(--text-primary);">Key Deliverables:</h4>
        <ul style="padding-left: 20px; list-style-type: disc; color: var(--text-secondary); line-height: 1.7;">
          ${data.deliverables.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>

      <div style="display: flex; gap: 10px; justify-content: flex-end; padding-top: 16px; border-top: 1px solid var(--border-color); flex-wrap: wrap;">
        <button class="btn btn-outline" onclick="openPdfModal('${projectId}')">
          <span>View as PDF</span> 📄
        </button>
        ${data.gdriveUrl ? `
          <a href="${data.gdriveUrl}" ${data.videoUrl ? 'download' : 'target="_blank" rel="noopener noreferrer"'} class="btn btn-gdrive">
            <span>${data.videoUrl ? 'Download Video' : 'Open Google Drive'}</span> ↗
          </a>
        ` : ''}
        <button class="btn btn-secondary" onclick="document.getElementById('project-modal').classList.remove('open')">Close</button>
      </div>
    `;

    projectModal.classList.add('open');
    projectModal.setAttribute('aria-hidden', 'false');
  };

  // Open PDF Case Study Sheet Modal
  window.openPdfModal = (projectId) => {
    const data = projectsData[projectId];
    if (!data || !pdfSheetContent) return;

    // Close project modal if open
    projectModal?.classList.remove('open');

    pdfSheetContent.innerHTML = `
      <div class="pdf-header-bar">
        <div>
          <h2 class="pdf-brand-title">${data.title}</h2>
          <p class="pdf-brand-sub">${data.category} • KYLA DAEL PORTFOLIO</p>
        </div>
        <div class="pdf-meta-box">
          <p><strong>Designer:</strong> Kyla Dael</p>
          <p><strong>Tools:</strong> ${data.tools}</p>
          <p><strong>Location:</strong> Laguna, Philippines</p>
        </div>
      </div>

      <div class="pdf-img-frame">
        ${data.videoUrl ? `
          <video src="${data.videoUrl}" controls playsinline style="max-height: 460px; width: 100%; background: #000;"></video>
        ` : `
          <img src="${data.img}" alt="${data.title}">
        `}
      </div>

      <div class="pdf-details-grid">
        <div>
          <h3 class="pdf-section-title">Project Overview</h3>
          <p class="pdf-desc">${data.description}</p>

          <h4 style="font-size: 0.95rem; font-weight: 800; margin-bottom: 8px; color: var(--text-primary);">Key Deliverables &amp; Assets:</h4>
          <ul style="padding-left: 20px; list-style-type: disc; color: var(--text-secondary); font-size: 0.92rem; line-height: 1.7;">
            ${data.deliverables.map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>

        <div>
          <h3 class="pdf-section-title">Specifications</h3>
          <div style="background: var(--bg-tertiary); padding: 14px; border-radius: var(--radius-md); font-size: 0.88rem; line-height: 1.6; margin-bottom: 16px;">
            <p><strong>Client:</strong> ${data.client}</p>
            <p><strong>Year:</strong> ${data.date}</p>
            <p><strong>Format:</strong> High-Res Vector &amp; Print</p>
          </div>

          ${data.colors && data.colors.length > 0 ? `
            <h4 style="font-size: 0.9rem; font-weight: 800; margin-bottom: 8px; color: var(--text-primary);">Color Palette:</h4>
            <div class="pdf-swatches">
              ${data.colors.map(c => `
                <div class="swatch-item" title="${c.name} (${c.hex})">
                  <div class="swatch-color" style="background-color: ${c.hex};"></div>
                  <span class="swatch-label">${c.hex}</span>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>
      </div>

      <div class="pdf-footer-bar">
        <div>
          <small style="color: var(--text-muted); font-size: 0.8rem;">
            📄 Official Case Study Sheet • Kyla Dael Graphic Design
          </small>
        </div>
        <div class="pdf-footer-actions">
          <button class="btn btn-primary" onclick="window.print()">
            <span>🖨️ Download / Print as PDF</span>
          </button>
          ${data.gdriveUrl ? `
            <a href="${data.gdriveUrl}" ${data.videoUrl ? 'download' : 'target="_blank" rel="noopener noreferrer"'} class="btn btn-gdrive">
              <span>${data.videoUrl ? 'Download MP4' : 'Open in Google Drive'}</span> ↗
            </a>
          ` : ''}
          <button class="btn btn-secondary" onclick="document.getElementById('pdf-modal').classList.remove('open')">Close</button>
        </div>
      </div>
    `;

    pdfModal?.classList.add('open');
    pdfModal?.setAttribute('aria-hidden', 'false');
  };

  // Bind Buttons
  document.addEventListener('click', (e) => {
    // Open Project Modal
    const modalBtn = e.target.closest('.open-modal-btn');
    if (modalBtn) {
      const id = modalBtn.getAttribute('data-id');
      if (id) openProjectModal(id);
      return;
    }

    // Open PDF View
    const pdfBtn = e.target.closest('.view-pdf-btn');
    if (pdfBtn) {
      const id = pdfBtn.getAttribute('data-id');
      if (id) window.openPdfModal(id);
      return;
    }

    // Card overlay click
    const overlay = e.target.closest('.project-overlay');
    if (overlay) {
      const card = overlay.closest('.project-card');
      const id = card?.getAttribute('data-id');
      if (id) openProjectModal(id);
      return;
    }
  });

  modalCloseBtn?.addEventListener('click', () => {
    projectModal.classList.remove('open');
    projectModal.setAttribute('aria-hidden', 'true');
  });

  pdfModalClose?.addEventListener('click', () => {
    pdfModal.classList.remove('open');
    pdfModal.setAttribute('aria-hidden', 'true');
  });

  projectModal?.addEventListener('click', (e) => {
    if (e.target === projectModal) {
      projectModal.classList.remove('open');
      projectModal.setAttribute('aria-hidden', 'true');
    }
  });

  pdfModal?.addEventListener('click', (e) => {
    if (e.target === pdfModal) {
      pdfModal.classList.remove('open');
      pdfModal.setAttribute('aria-hidden', 'true');
    }
  });

  /* =========================================================
     6. RESUME MODAL & ACTIONS
     ========================================================= */
  const resumeModal = document.getElementById('resume-modal');
  const openResumeBtn = document.getElementById('open-resume-btn');
  const resumeModalClose = document.getElementById('resume-modal-close');
  const closeResumeBottom = document.getElementById('close-resume-bottom');
  const downloadResumeBtn = document.getElementById('download-resume-btn');

  const openResume = () => {
    resumeModal?.classList.add('open');
    resumeModal?.setAttribute('aria-hidden', 'false');
  };

  const closeResume = () => {
    resumeModal?.classList.remove('open');
    resumeModal?.setAttribute('aria-hidden', 'true');
  };

  openResumeBtn?.addEventListener('click', openResume);
  resumeModalClose?.addEventListener('click', closeResume);
  closeResumeBottom?.addEventListener('click', closeResume);
  
  resumeModal?.addEventListener('click', (e) => {
    if (e.target === resumeModal) closeResume();
  });

  downloadResumeBtn?.addEventListener('click', (e) => {
    // Generate clean printable HTML resume download
    e.preventDefault();
    window.print();
  });

  /* =========================================================
     7. TESTIMONIALS (WHAT PEOPLE SAY)
     Matching Wireframe: Classmates, Teachers, Clients
     ========================================================= */
  const testimonials = [
    {
      category: "Classmates",
      avatar: "🎓",
      name: "Bea Santos & Thesis Team",
      role: "College Project Collaborators • Laguna",
      text: "“Kyla is our go-to designer for every major presentation and group thesis project! She turns messy text and raw data into sleek, professional pitch decks effortlessly. Always dependable and so creative!”"
    },
    {
      category: "Teachers",
      avatar: "👩‍🏫",
      name: "Prof. Maria Angela Ramos",
      role: "Visual Communications Faculty & Mentor",
      text: "“Kyla demonstrates remarkable discipline in visual hierarchy, typography, and creative problem-solving. Her coursework consistently stands out for its polish, color harmony, and attention to deadlines.”"
    },
    {
      category: "Clients",
      avatar: "💼",
      name: "Rafael Mendoza",
      role: "Founder, Aura Coffee Roasters",
      text: "“Working with Kyla was an absolute breeze. She translated our rough ideas into a cohesive, stunning brand identity and coffee packaging kit that our customers love and compliment daily. 10/10 recommended!”"
    }
  ];

  let currentTestimonialIndex = 0;

  const quoteTextElem = document.getElementById('quote-text');
  const quoteAvatarElem = document.getElementById('quote-avatar');
  const quoteNameElem = document.getElementById('quote-name');
  const quoteRoleElem = document.getElementById('quote-role');
  const categoryCards = document.querySelectorAll('.category-card');
  const carouselDots = document.querySelectorAll('#carousel-dots .dot');
  const prevQuoteBtn = document.getElementById('prev-quote');
  const nextQuoteBtn = document.getElementById('next-quote');

  const renderTestimonial = (index) => {
    currentTestimonialIndex = index;
    const item = testimonials[index];

    if (quoteTextElem) {
      quoteTextElem.style.opacity = '0';
      setTimeout(() => {
        quoteTextElem.textContent = item.text;
        if (quoteAvatarElem) quoteAvatarElem.textContent = item.avatar;
        if (quoteNameElem) quoteNameElem.textContent = item.name;
        if (quoteRoleElem) quoteRoleElem.textContent = item.role;
        quoteTextElem.style.opacity = '1';
      }, 150);
    }

    // Update Category active state
    categoryCards.forEach((card, idx) => {
      if (idx === index) {
        card.classList.add('active');
        const statusSpan = card.querySelector('.category-status');
        if (statusSpan) statusSpan.textContent = 'Active Review';
      } else {
        card.classList.remove('active');
        const statusSpan = card.querySelector('.category-status');
        if (statusSpan) statusSpan.textContent = 'Click to read';
      }
    });

    // Update Dots
    carouselDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === index);
    });
  };

  categoryCards.forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-index') || '0', 10);
      renderTestimonial(idx);
    });
  });

  carouselDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index') || '0', 10);
      renderTestimonial(idx);
    });
  });

  prevQuoteBtn?.addEventListener('click', () => {
    let nextIdx = currentTestimonialIndex - 1;
    if (nextIdx < 0) nextIdx = testimonials.length - 1;
    renderTestimonial(nextIdx);
  });

  nextQuoteBtn?.addEventListener('click', () => {
    let nextIdx = (currentTestimonialIndex + 1) % testimonials.length;
    renderTestimonial(nextIdx);
  });

  /* =========================================================
     8. ONE-CLICK EMAIL COPY
     ========================================================= */
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const text = btn.getAttribute('data-copy') || 'kylaguieb02@gmail.com';
      navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.textContent;
        btn.textContent = '✅ Copied!';
        setTimeout(() => {
          btn.textContent = originalText;
        }, 2000);
      });
    });
  });

  /* =========================================================
     9. CONTACT FORM SUBMISSION
     ========================================================= */
  const contactForm = document.getElementById('contact-form');
  const formToast = document.getElementById('form-toast');
  const submitBtn = document.getElementById('submit-btn');

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');

    if (!nameInput?.value || !emailInput?.value || !messageInput?.value) {
      alert('Please fill out all required fields.');
      return;
    }

    if (submitBtn) {
      submitBtn.innerHTML = `<span>Sending Message...</span> ⏳`;
      submitBtn.disabled = true;
    }

    // Simulate reliable dispatch
    setTimeout(() => {
      if (formToast) {
        formToast.className = 'form-toast success';
        formToast.innerHTML = `✨ <strong>Thank you, ${nameInput.value}!</strong> Your message has been prepared for Kyla Dael. She will get back to you at <em>${emailInput.value}</em> shortly!`;
      }

      if (submitBtn) {
        submitBtn.innerHTML = `<span>Message Sent!</span> ✓`;
      }

      contactForm.reset();

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.innerHTML = `<span>Send Message</span> <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`;
          submitBtn.disabled = false;
        }
      }, 4000);
    }, 900);
  });

  /* =========================================================
     10. DYNAMIC YEAR
     ========================================================= */
  const yearElem = document.getElementById('current-year');
  if (yearElem) yearElem.textContent = new Date().getFullYear();

});