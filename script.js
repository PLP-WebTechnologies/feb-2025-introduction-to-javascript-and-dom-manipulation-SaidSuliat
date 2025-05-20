// Change text content dynamically
document.getElementById('changeTextBtn').addEventListener('click', () => {
  const heading = document.getElementById('main-heading');
  heading.textContent = 'You changed the heading!';
  heading.style.color = 'blue'; // Modify CSS via JavaScript
  heading.style.fontSize = '2.5rem';
});

// Add or remove an element dynamically
document.getElementById('toggleBoxBtn').addEventListener('click', () => {
  const container = document.getElementById('boxContainer');
  const existingBox = container.querySelector('.box');

  if (existingBox) {
    container.removeChild(existingBox);
  } else {
    const box = document.createElement('div');
    box.className = 'box';
    container.appendChild(box);
  }
});
