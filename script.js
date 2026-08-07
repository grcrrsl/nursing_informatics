// --- Tab switching ---
const tabs = document.querySelectorAll(".era-tab");
const panels = document.querySelectorAll(".era-panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const era = tab.dataset.era;

    tabs.forEach((t) =>
      t.setAttribute("aria-selected", t === tab ? "true" : "false"),
    );
    panels.forEach((p) => {
      p.classList.toggle("active", p.dataset.eraPanel === era);
    });
  });
});

// --- Milestone expand/collapse ---
document.querySelectorAll(".milestone").forEach((milestone) => {
  const trigger = milestone.querySelector(".m-trigger");
  trigger.addEventListener("click", () => {
    const isOpen = milestone.getAttribute("data-open") === "true";

    // close siblings within the same timeline for a clean single-open feel
    const timeline = milestone.closest(".timeline");
    timeline.querySelectorAll(".milestone").forEach((m) => {
      if (m !== milestone) {
        m.setAttribute("data-open", "false");
        m.querySelector(".m-trigger").setAttribute("aria-expanded", "false");
      }
    });

    milestone.setAttribute("data-open", String(!isOpen));
    trigger.setAttribute("aria-expanded", String(!isOpen));

    if (!isOpen) {
      setTimeout(() => {
        milestone.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 120);
    }
  });
});
