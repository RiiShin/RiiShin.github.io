// Same-page section links should close the mobile menu before the browser scrolls.
document.addEventListener("click", (event) => {
  const link = event.target.closest("a.nav-link");
  if (!link) return;

  const destination = new URL(link.href);
  if (destination.origin !== window.location.origin || destination.pathname !== window.location.pathname || !destination.hash) return;

  const toggle = document.querySelector(".navbar-toggler-main");
  if (toggle?.getAttribute("aria-expanded") === "true") toggle.click();
});
