const projectPages = {
  "project-coopers-hawk-restaurant": {
    title: "Cooper's Hawk Restaurant",
    category: "Hospitality Flooring Installation",
    image: "assets/img/project-coopers.jpg",
    details: ["Restaurant and hospitality environment", "Commercial carpet and resilient flooring", "High-traffic dining and service areas"],
    summary: "A hospitality flooring project completed for a high-traffic restaurant environment, with installation work focused on durability, clean transitions, and a finish that supports the atmosphere of the space.",
    scope: ["Commercial flooring installation for dining and restaurant areas", "Coordination with active construction schedules", "Detail-focused finish work for guest-facing spaces"]
  },
  "duke-hospital-sheet-vinyl-installation": {
    title: "Duke Hospital - Sheet Vinyl Installation",
    category: "Healthcare Flooring Installation",
    image: "assets/img/project-duke.jpg",
    details: ["Healthcare facility", "Sheet vinyl installation", "Cleanable, durable flooring system"],
    summary: "A healthcare flooring project focused on sheet vinyl installation for long-term performance, cleanability, and dependable use in demanding medical environments.",
    scope: ["Sheet vinyl installation", "Healthcare-oriented finish requirements", "Clean, precise installation across clinical spaces"]
  },
  "project-eli-lilly-rtp-campus-multi-surface-flooring-installation": {
    title: "Eli Lilly - RTP Campus - Multi-Surface Flooring Installation",
    category: "Corporate and Laboratory Flooring",
    image: "assets/img/project-eli.jpg",
    details: ["Corporate and technical campus", "Multi-surface flooring installation", "Administrative and technical spaces"],
    summary: "A multi-surface flooring project for corporate and technical areas, requiring careful coordination, precision, and installation quality across different flooring systems.",
    scope: ["Multi-surface flooring installation", "Commercial coordination with project teams", "Durable finishes for corporate and technical environments"]
  },
  "project-the-oaks-at-whitaker-glen-rubber-flooring-installation": {
    title: "The Oaks at Whitaker Glen - Rubber Flooring Installation",
    category: "Rubber Flooring Installation",
    image: "assets/img/project-oaks.jpg",
    details: ["Rubber flooring system", "High-use interior spaces", "Durable commercial finish"],
    summary: "A rubber flooring installation project built around durability, comfort, and long-term performance in a high-use environment.",
    scope: ["Rubber flooring installation", "Surface preparation and finish detailing", "Durable performance-focused flooring system"]
  },
  "project-granados-law-group-pllc-vinyl-plank-installation": {
    title: "Granados Law Group, PLLC - Vinyl Plank Installation",
    category: "Vinyl Plank Installation",
    image: "assets/img/project-granados.jpg",
    details: ["Professional office environment", "Vinyl plank installation", "Clean, modern commercial finish"],
    summary: "A vinyl plank installation project for a professional office setting, delivering a clean and durable finish suited for daily business use.",
    scope: ["Vinyl plank installation", "Commercial office flooring preparation", "Precise transitions and finish details"]
  },
  "project-commercial-office-2840-plaza-building": {
    title: "Commercial Office - 2840 Plaza Building",
    category: "Commercial Office Flooring",
    image: "assets/img/project-office.jpg",
    details: ["Commercial office building", "Flooring installation", "Schedule-sensitive commercial work"],
    summary: "A commercial office flooring project built around reliable execution, clean installation, and finish quality for a professional workspace.",
    scope: ["Commercial office flooring installation", "Installation coordination for occupied-style office environments", "Durable finishes and clean transitions"]
  },
  "project-raleigh-durham-international-airport-rdu-terminal-2-carpet-replacement": {
    title: "Raleigh-Durham International Airport (RDU)",
    category: "Airport Carpet Replacement",
    image: "assets/img/project-rdu.jpg",
    details: ["Public facility", "Terminal 2 carpet replacement", "High-traffic airport environment"],
    summary: "A public facility flooring project for Raleigh-Durham International Airport, requiring coordination, dependable installation, and materials suited for heavy foot traffic.",
    scope: ["Carpet replacement in high-traffic public areas", "Project coordination in a transportation environment", "Clean finish execution under demanding conditions"]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector("[data-project-page]");
  if (!page) return;

  const key = page.dataset.projectPage;
  const project = projectPages[key];
  if (!project) return;

  document.title = `${project.title} | Giant Flooring LLC`;
  document.querySelectorAll("[data-project-title]").forEach((el) => { el.textContent = project.title; });
  document.querySelectorAll("[data-project-category]").forEach((el) => { el.textContent = project.category; });

  const specialProjects = {
    "duke-hospital-sheet-vinyl-installation": {
      sectionClass: "duke-project-section",
      titleClass: "granados-project-title duke-project-title",
      titleHtml: "Duke Hospital – Sheet Vinyl Installation",
      locationHtml: "Durham, North Carolina",
      locationItems: ["Approximate; Area: ± 350 sq.ft.", "Duration:1 day", "Area: Children’s Care Unit – One room"],
      scopeItems: ["Removal of existing adhesive and surface residues.", "Subfloor preparation to achieve a smooth, level surface.", "Installation of Forbo sheet vinyl (glue-down) in a flat lay configuration.", "Hot welding of seams for a hygienic and watertight finish.", "Final clean and inspection to ensure a precise and professional result."],
      resultItems: ["Completed a fast, clean, and durable sheet vinyl installation in one day.", "Delivered a seamless, hygienic surface ideal for healthcare environments."],
      before: "projects/Duke/antes.png",
      after: "projects/Duke/despues.jpeg",
      compareClass: "commercial-office-before-after-stage",
      carouselId: "dukeGalleryCarousel",
      slides: [["projects/Duke/image1-1-400x284.jpeg", "projects/Duke/image2-1-400x284.jpeg", "projects/Duke/image4-1-400x284.jpeg", "projects/Duke/despues.jpeg"]]
    },
    "project-eli-lilly-rtp-campus-multi-surface-flooring-installation": {
      sectionClass: "eli-lilly-project-section",
      titleClass: "granados-project-title eli-lilly-project-title",
      titleHtml: "Eli Lilly – RTP Campus – Multi-Surface Flooring Installation",
      locationHtml: "Research Triangle Park<br>(RTP), Durham, North<br>Carolina",
      locationItems: ["Approximate; Area: Over 15,000 sq.ft. (carpet tile, sheet vinyl, and rubber flooring)", "Duration: 25–30 days", "Area: First Floor – Offices, Corridors, Lab Support Areas, and Stairwells"],
      scopeItems: ["Subfloor preparation across more than 15,000 sq.ft. of workspace.", "Installation of carpet tile throughout offices, hallways, and open areas.", "Repairs and installation of Forbo sheet vinyl flooring with flash cove detailing in laboratory and utility rooms.", "Installation of Nora rubber flooring on stairs, steps, and landings, ensuring safety and slip resistance.", "Installation of straight base and cove base throughout all completed spaces", "Transitions between all flooring materials for a consistent and clean finish", "Precision cutting, alignment, and hot welding to meet Eli Lilly’s performance and quality standards.", "Final cleaning and detailed turnover of all areas ready for immediate use."],
      resultItems: ["Completed a complex, multi-surface flooring installation covering over 15,000 sq.ft. within approximately 30 days", "Delivered a clean, durable, and professional result — combining carpet tile, sheet vinyl, and rubber flooring systems for high-performance corporate and laboratory environments."],
      before: "projects/Lilly/ANTES-2.png",
      after: "projects/Lilly/despues.jpeg",
      compareClass: "commercial-office-before-after-stage",
      carouselId: "eliLillyGalleryCarousel",
      slides: [["projects/Lilly/image1-3-400x284.jpeg", "projects/Lilly/image2-3-400x284.jpeg", "projects/Lilly/image3-3-400x284.jpeg", "projects/Lilly/image4-3-400x284.jpeg"], ["projects/Lilly/image5-2-400x284.jpeg", "projects/Lilly/image7-3-400x284.jpeg", "projects/Lilly/image8-3-400x284.jpeg", "projects/Lilly/image9-2-400x284.jpeg"], ["projects/Lilly/ANTES-2.png", "projects/Lilly/despues.jpeg", "projects/Lilly/image1-3-400x284.jpeg", "projects/Lilly/image2-3-400x284.jpeg"]]
    },
    "project-coopers-hawk-restaurant": {
      sectionClass: "coopers-project-section",
      titleClass: "granados-project-title coopers-project-title",
      titleHtml: "Cooper’s Hawk Restaurant",
      locationHtml: "Greensboro, North Carolina",
      locationItems: ["Approximate; Area: ± 3,500 sq.ft. of carpet tile, 450 sq.ft. of sheet vinyl (electrical room)", "Duration: 2 day"],
      scopeItems: ["Surface preparation and cleanup prior to installation.", "Installation of approximately 3,500 sq.ft. of carpet tile throughout dining and hallway areas.", "Installation of 450 sq.ft. of sheet vinyl flooring in the walkable area of the electrical room.", "Installation of Millwork (rubber) base in multiple carpeted and ceramic tile sections.", "Final inspection and cleanup ensuring a clean, professional finish"],
      resultItems: ["Completed a precise and efficient two-day installation combining carpet tile and sheet vinyl finishes.", "Delivered smooth transitions, clean lines, and durable results aligned with restaurant standards"],
      before: "projects/coopers/antes.jpeg",
      after: "projects/coopers/despues.jpeg",
      compareClass: "commercial-office-before-after-stage",
      carouselId: "coopersGalleryCarousel",
      slides: [["projects/coopers/image1-2-400x284.jpeg", "projects/coopers/image4-2-400x284.jpeg", "projects/coopers/image6-1-400x284.jpeg", "projects/coopers/image8-1-400x284.jpeg"], ["projects/coopers/image9-1-400x284.jpeg", "projects/coopers/image11-1-400x284.jpeg", "projects/coopers/image12-1-400x284.jpeg", "projects/coopers/despues.jpeg"]]
    },
    "project-the-oaks-at-whitaker-glen-rubber-flooring-installation": {
      sectionClass: "oaks-before-after-section",
      titleClass: "oaks-project-title",
      titleHtml: "<span>The Oaks at Whitaker Glen – Rubber Flooring</span><br><span>Installation</span>",
      locationHtml: "Raleigh, North Carolina",
      locationItems: ["Approximate; Area: ± 1,600 sq.ft", "Duration: 2 days", "Area: Fitness Room"],
      scopeItems: ["Demolition of existing LVT flooring.", "Glue removal using a scarifier and hand scrapers.", "Removal of a previous patch layer that contained adhesive residue from an earlier preparation.", "Application of a complete skim coat across the entire area for leveling and consistency.", "Sanding of the skim coat to eliminate imperfections and ensure a smooth finish.", "Rubber flooring installation with precise seams and clean alignment.", "Final cleaning and delivery of the completed space."],
      resultItems: ["Completed a durable and precise rubber flooring installation in the fitness room within two days.", "Transformed a previously uneven, adhesive-coated surface into a clean, level, and functional area for daily activity."],
      before: "projects/ANTES.png",
      after: "projects/despues.jpeg",
      carouselId: "oaksGalleryCarousel",
      slides: [["projects/ANTES-1-400x284.png", "projects/despues.jpeg", "projects/image1-5-400x284.jpeg", "projects/image2-4-400x284.jpeg"], ["projects/image3-4-400x284.jpeg", "projects/image4-4-400x284.jpeg", "projects/image6-3-400x284.jpeg", "projects/image7-4-400x284.jpeg"], ["projects/image8-4-400x284.jpeg", "projects/image9-3-400x284.jpeg", "projects/image10-2-400x284.jpeg", "projects/image11-2-400x284.jpeg"], ["projects/image12-2-400x284.jpeg", "projects/image13-400x284.jpeg", "projects/ANTES.png", "projects/despues.jpeg"]]
    },
    "project-granados-law-group-pllc-vinyl-plank-installation": {
      sectionClass: "granados-project-section",
      titleClass: "granados-project-title",
      titleHtml: "Granados Law Group, PLLC – Vinyl Plank Installation",
      locationHtml: "Raleigh, North Carolina",
      locationItems: ["Approximate; Area: ± 2,500 sq.ft.", "Duration: 3 days", "Area: Office suite"],
      scopeItems: ["Demolition and removal of existing carpet and cove base.", "Glue removal using scarifier and manual scraping tools.", "Subfloor preparation in selected areas using patch compound.", "Installation of 2,500 sq.ft. of vinyl plank flooring using adhesive (as required by client specifications).", "Installation of new cove base throughout all finished areas.", "Final inspection, cleaning, and delivery of the completed workspace."],
      resultItems: ["Delivered a clean, durable, and modern vinyl plank installation within three days.", "Achieved a smooth, professional finish aligned with client requirements for commercial office environments."],
      before: "projects/granados/antes.jpeg",
      after: "projects/granados/despues.jpeg",
      compareClass: "granados-before-after-stage",
      carouselId: "granadosGalleryCarousel",
      slides: [["projects/granados/image1-6-400x284.jpeg", "projects/granados/image2-5-400x284.jpeg", "projects/granados/image4-5-400x284.jpeg", "projects/granados/image6-4-400x284.jpeg"], ["projects/granados/antes.jpeg", "projects/granados/despues.jpeg", "projects/granados/image1-6-400x284.jpeg", "projects/granados/image2-5-400x284.jpeg"]],
      video: "projects/granados/VIDEO.mp4"
    },
    "project-commercial-office-2840-plaza-building": {
      sectionClass: "commercial-office-project-section",
      titleClass: "granados-project-title",
      titleHtml: "Commercial Office – 2840 Plaza Building",
      locationHtml: "2840 Plaza Building,<br>Raleigh, North Carolina<br>27612",
      locationItems: ["Approximate; Area: ± 1,100 sq.ft. of vinyl plank, ± 1,500 sq.ft. of carpet", "Duration: 2 days", "Area: Office suite – hallway, break room, and main workspace"],
      scopeItems: ["Installation of broadloom carpet throughout the office area.", "Installation of vinyl plank flooring in the hallway and break room areas.", "Installation of cove base around perimeter walls for a clean, finished transition.", "Surface preparation, alignment, and detailed trimming to achieve a professional appearance.", "Final cleaning and inspection ensuring a ready-to-use workspace."],
      resultItems: ["Completed a clean, precise two-day installation combining carpet and vinyl plank flooring.", "Delivered a professional finish enhancing both comfort and durability in a high-traffic office environment."],
      before: "projects/commercial office/antes.jpeg",
      after: "projects/commercial office/despues.jpeg",
      compareClass: "commercial-office-before-after-stage",
      carouselId: "commercialOfficeGalleryCarousel",
      slides: [["projects/commercial office/image1-8-400x284.jpeg", "projects/commercial office/image2-6-400x284.jpeg", "projects/commercial office/image3-6-323x284.jpeg", "projects/commercial office/image4-6-400x284.jpeg"], ["projects/commercial office/image5-6-400x284.jpeg", "projects/commercial office/image6-5-400x284.jpeg", "projects/commercial office/image7-5-400x284.jpeg", "projects/commercial office/image8-5-400x284.jpeg"], ["projects/commercial office/image9-4-400x284.jpeg", "projects/commercial office/image10-3-400x284.jpeg", "projects/commercial office/image11-3-400x284.jpeg", "projects/commercial office/despues.jpeg"]]
    },
    "project-raleigh-durham-international-airport-rdu-terminal-2-carpet-replacement": {
      sectionClass: "rdu-project-section",
      titleClass: "granados-project-title",
      titleHtml: "Raleigh–Durham International Airport (RDU) – Terminal 2 Carpet Replacement",
      locationHtml: "Terminal 2 – Raleigh–<br>Durham International<br>Airport (RDU), North<br>Carolina",
      locationItems: ["Approximate; Area: Over 90,000 sq.ft. of carpet", "Duration: 45 days (night shift work)", "Area: Main waiting areas, concourses, and aircraft boarding bridges"],
      scopeItems: ["Demolition and removal of existing carpet across waiting areas and concourses.", "Glue removal using a buffer machine equipped with abrasive pads to clean and smooth the surface.", "Minor surface preparation and patch repairs to level and ensure a proper bond.", "Installation of new commercial carpet throughout Terminal 2 public and seating areas.", "Replacement of carpet flooring on passenger boarding bridges, ensuring safety and design continuity.", "Precision layout, trimming, and pattern alignment for a seamless finish.", "Final cleaning and turnover, performed during night shifts to avoid interference with daytime airport operations."],
      resultItems: ["Completed a large-scale carpet replacement covering over 90,000 sq.ft. in Terminal 2 at RDU Airport.", "The project was completed in approximately 45 nights, delivering a clean, precise, and durable installation while maintaining airport safety and uninterrupted daytime operation."],
      before: "projects/raleigh/antes.jpeg",
      after: "projects/raleigh/despues.jpeg",
      compareClass: "commercial-office-before-after-stage",
      tableClass: "rdu-table",
      carouselId: "rduGalleryCarousel",
      slides: [["projects/raleigh/image1-9-400x284.jpeg", "projects/raleigh/image2-7-400x284.jpeg", "projects/raleigh/image3-7-400x284.jpeg", "projects/raleigh/image4-7-400x284.jpeg"], ["projects/raleigh/5image-edit-400x284.png", "projects/raleigh/6image-edit-400x284.png", "projects/raleigh/image7-6-400x284.jpeg", "projects/raleigh/9image-edit-400x284.png"], ["projects/raleigh/image10-4-400x284.jpeg", "projects/raleigh/image12-3-400x284.jpeg", "projects/raleigh/image13-2-400x284.jpeg", "projects/raleigh/despues.jpeg"]]
    }
  };

  const special = specialProjects[key];
  if (special) {
    page.innerHTML = renderSpecialProject(special);
    initBeforeAfter(page);
    return;
  }

  page.innerHTML = `
    <section class="project-detail-section"><div class="container"><div class="row g-5 align-items-center"><div class="col-lg-6"><img class="project-detail-image" src="${project.image}" alt="${project.title}"></div><div class="col-lg-6"><p class="eyebrow">${project.category}</p><h2 class="project-detail-title">${project.title}</h2><p class="project-detail-summary">${project.summary}</p><div class="project-info-card"><h3>Project Details</h3><ul>${project.details.map((item) => `<li>${item}</li>`).join("")}</ul></div></div></div></div></section>
    <section class="project-scope-section"><div class="container"><div class="project-scope-card"><h2>Scope of Work</h2><div class="row g-4">${project.scope.map((item) => `<div class="col-md-4"><div class="scope-item">${item}</div></div>`).join("")}</div></div></div></section>`;
});

function renderSpecialProject(project) {
  const tableClass = project.tableClass ? ` ${project.tableClass}` : "";
  const compareClass = project.compareClass ? ` ${project.compareClass}` : "";
  const video = project.video ? `<div class="granados-video-wrap"><video controls preload="metadata" src="${project.video}"></video></div>` : "";
  return `
    <section class="${project.sectionClass}">
      <div class="container">
        <h1 class="${project.titleClass}">${project.titleHtml}</h1>
        <div class="oaks-table granados-table${tableClass}"><div class="oaks-col oaks-location"><h2>Location</h2><p class="oaks-city">${project.locationHtml}</p><ul>${project.locationItems.map((item) => `<li><strong>${item}</strong></li>`).join("")}</ul></div><div class="oaks-col"><h2>Scope of Work</h2><ul>${project.scopeItems.map((item) => `<li>${item}</li>`).join("")}</ul></div><div class="oaks-col"><h2>Result</h2><ul>${project.resultItems.map((item) => `<li>${item}</li>`).join("")}</ul></div></div>
        <div class="before-after-wrap granados-before-after" data-before-after><div class="before-after-stage${compareClass}" style="--split: 50%;"><img class="before-after-img before-after-after" src="${project.after}" alt="After"><div class="before-after-before"><img class="before-after-img" src="${project.before}" alt="Before"></div><div class="before-after-divider"><span><i class="bi bi-arrows"></i></span></div><input class="before-after-range" type="range" min="0" max="100" value="50"></div></div>
        <div id="${project.carouselId}" class="carousel slide oaks-gallery-carousel granados-gallery-carousel" data-bs-ride="carousel" data-bs-interval="4500"><div class="carousel-inner">${project.slides.map((slide, index) => `<div class="carousel-item${index === 0 ? " active" : ""}"><div class="oaks-gallery-grid granados-gallery-grid">${slide.map((src) => `<img src="${src}" alt="">`).join("")}</div></div>`).join("")}</div><button class="carousel-control-prev" type="button" data-bs-target="#${project.carouselId}" data-bs-slide="prev"><span class="carousel-control-prev-icon"></span></button><button class="carousel-control-next" type="button" data-bs-target="#${project.carouselId}" data-bs-slide="next"><span class="carousel-control-next-icon"></span></button><div class="carousel-indicators">${project.slides.map((_, index) => `<button type="button" data-bs-target="#${project.carouselId}" data-bs-slide-to="${index}"${index === 0 ? ' class="active"' : ""}></button>`).join("")}</div></div>
        ${video}
      </div>
    </section>`;
}
function initBeforeAfter(root = document) {
  root.querySelectorAll("[data-before-after]").forEach((comparison) => {
    const stage = comparison.querySelector(".before-after-stage");
    const range = comparison.querySelector(".before-after-range");
    if (!stage || !range) return;

    const update = () => {
      stage.style.setProperty("--split", `${range.value}%`);
    };

    range.addEventListener("input", update);
    update();
  });
}



















