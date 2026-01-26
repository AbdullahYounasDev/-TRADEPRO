export const handleNavClick = (href: any) => {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    const headerOffset = 80; // if you have fixed header, adjust height
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth", // smooth scroll
    });
  }
};
