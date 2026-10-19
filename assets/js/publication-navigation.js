// Same-page section links should close the mobile menu before the browser scrolls.
document.addEventListener("click", (event) => {
  const link = event.target.closest("a.nav-link");
  if (!link) return;

  const destination = new URL(link.href);
  if (destination.origin !== window.location.origin || destination.pathname !== window.location.pathname || !destination.hash) return;

  const toggle = document.querySelector(".navbar-toggler-main");
  if (toggle?.getAttribute("aria-expanded") === "true") toggle.click();
});

// On the homepage, highlight the section currently visible below the fixed navigation.
const sectionLinks = [...document.querySelectorAll("#navbarNav a.nav-link")]
  .map((link) => {
    const destination = new URL(link.href);
    if (destination.pathname !== window.location.pathname || !destination.hash) return null;
    const section = document.getElementById(destination.hash.slice(1));
    return section ? { link, section } : null;
  })
  .filter(Boolean);

if (document.querySelector(".home-section") && sectionLinks.length) {
  const aboutLink = document.querySelector("#navbarNav a.nav-link");
  const links = [aboutLink, ...sectionLinks.map(({ link }) => link)];
  links.forEach((link) => link.querySelector(".sr-only")?.remove());

  const updateActiveSection = () => {
    const threshold = document.getElementById("navbar").offsetHeight + 40;
    let activeLink = aboutLink;
    for (const { link, section } of sectionLinks) {
      if (section.getBoundingClientRect().top <= threshold) activeLink = link;
    }
    // Short final sections cannot always reach the top of the viewport.
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
      const requestedSection = sectionLinks.find(({ link, section }) => {
        const top = section.getBoundingClientRect().top;
        return link.hash === window.location.hash && top >= 0 && top < window.innerHeight;
      });
      activeLink = requestedSection?.link || sectionLinks[sectionLinks.length - 1].link;
    }
    for (const link of links) {
      const active = link === activeLink;
      link.closest(".nav-item").classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    }
  };

  let updatePending = false;
  window.addEventListener(
    "scroll",
    () => {
      if (updatePending) return;
      updatePending = true;
      requestAnimationFrame(() => {
        updateActiveSection();
        updatePending = false;
      });
    },
    { passive: true }
  );
  window.addEventListener("hashchange", updateActiveSection);
  window.addEventListener("load", updateActiveSection);
  updateActiveSection();
}
