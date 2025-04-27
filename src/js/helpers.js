//Допоміжні функції

function removeFocusFromElements() {
  const interactiveElements = document.querySelectorAll('a, button');
  interactiveElements.forEach(interactiveElement => interactiveElement.blur());
}

export function removeFocus() {
  const interactiveElements = document.querySelectorAll('a, button');
  interactiveElements.forEach(interactiveElement =>
    interactiveElement.addEventListener('click', removeFocusFromElements)
  );
}

function smoothScroll(ev) {
  ev.preventDefault();
  const target = document.querySelector(ev.currentTarget.getAttribute('href'));
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }

  ev.currentTarget.blur();
}

export function scrollToView() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', smoothScroll);
  });
}
