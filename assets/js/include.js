(function () {
  async function include(el) {
    const src = el.getAttribute("data-include");
    if (!src) return;
    try {
      const res = await fetch(src);
      if (!res.ok) throw new Error("Failed to fetch " + src);
      el.innerHTML = await res.text();
    } catch (e) {
      el.innerHTML = "<!-- include failed: " + (e.message || e) + " -->";
    }
  }
  async function run() {
    const nodes = Array.from(document.querySelectorAll("[data-include]"));
    await Promise.all(nodes.map(include));
    document.dispatchEvent(new Event("includes:loaded"));
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();