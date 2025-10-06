(function(){
  function setActiveNav() {
    const path = (location.pathname.split("/").pop() || "").toLowerCase();
    const links = document.querySelectorAll(".navbar .navbar-link");
    links.forEach(a => {
      const href = (a.getAttribute("href") || "").split("/").pop().toLowerCase();
      if (href === path) a.classList.add("active");
      else a.classList.remove("active");
    });
  }
  function initSidebarToggle() {
    // nút “Show Contacts”
    const btn = document.querySelector("[data-sidebar-btn]") || document.querySelector(".info_more-btn");
    // container sidebar
    const sidebar = document.querySelector("[data-sidebar]");
    if (!btn || !sidebar) return;

    btn.addEventListener("click", () => {
      // CSS trông chờ .sidebar.active
      sidebar.classList.toggle("active");
    });
  }
  function initTestimonialsModal() {
    const container = document.querySelector("[data-modal-container]");
    const overlay = document.querySelector("[data-overlay]");
    const closeBtn = document.querySelector("[data-modal-close-btn]");
    if (!container || !overlay || !closeBtn) return;
    const items = document.querySelectorAll("[data-testimonials-item]");
    const modalImg = container.querySelector("[data-modal-img]");
    const modalTitle = container.querySelector("[data-modal-title]");
    const modalText = container.querySelector("[data-modal-text]");
    const toggle = () => container.classList.toggle("active");
    items.forEach(it => {
      it.addEventListener("click", () => {
        const avatar = it.querySelector("[data-testimonials-avatar]");
        const title = it.querySelector("[data-testimonials-title]");
        const text = it.querySelector("[data-testimonials-text]");
        if (avatar && modalImg){ modalImg.src = avatar.src; modalImg.alt = avatar.alt || ""; }
        if (title && modalTitle){ modalTitle.textContent = title.textContent; }
        if (text && modalText){ modalText.innerHTML = text.innerHTML; }
        toggle();
      });
    });
    overlay.addEventListener("click", toggle);
    closeBtn.addEventListener("click", toggle);
  }
  function initPortfolioFilter() {
    const buttons = document.querySelectorAll("[data-filter-btn]");
    const items = document.querySelectorAll("[data-filter-item]");
    const select = document.querySelector("[data-select]");
    const selectList = document.querySelector(".select-list");
    const selectValue = document.querySelector("[data-select-value]");
    function applyFilter(label) {
      const category = (label || "All").toLowerCase();
      items.forEach(it => {
        const c = (it.getAttribute("data-category") || "").toLowerCase();
        const show = category === "all" || c === category;
        it.style.display = show ? "" : "none";
      });
    }
    if (buttons.length) {
      buttons.forEach(btn => {
        btn.addEventListener("click", () => {
          buttons.forEach(b => b.classList.remove("active"));
          btn.classList.add("active");
          applyFilter(btn.textContent.trim());
        });
      });
      // show all by default
      applyFilter("All");
    }
    if (select && selectList && selectValue) {
      select.addEventListener("click", () => select.classList.toggle("open"));
      selectList.querySelectorAll("button").forEach(opt => {
        opt.addEventListener("click", () => {
          selectValue.textContent = opt.textContent.trim();
          select.classList.remove("open");
          applyFilter(opt.textContent.trim());
        });
      });
    }
  }
  function initForm() {
    const form = document.querySelector("[data-form]");
    if (!form) return;
    const inputs = form.querySelectorAll("[data-form-input]");
    const btn = form.querySelector("[data-form-btn]");
    function check() {
      const ok = form.checkValidity() && Array.from(inputs).every(i => i.value.trim());
      if (btn) btn.disabled = !ok;
    }
    inputs.forEach(i => i.addEventListener("input", check));
    check();
  }
  function boot() {
    setActiveNav();
    initSidebarToggle();
    initTestimonialsModal();
    initPortfolioFilter();
    initForm();
  }
  document.addEventListener("includes:loaded", boot);
  if (document.readyState === "complete") boot();
  else window.addEventListener("load", boot);
})();