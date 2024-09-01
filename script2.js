document.querySelectorAll('.heading-button').forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');

    // Hide the default paragraph
    document.getElementById('default-paragraph').style.display = 'none';

    document.querySelectorAll('.box-content').forEach(box => {
      box.classList.remove('active');  // Remove animation class from all boxes
      box.style.display = 'none';
    });

    const targetBox = document.getElementById(targetId);
    targetBox.style.display = 'block';
    setTimeout(() => {
      targetBox.classList.add('active');  // Add animation class to the clicked box
    }, 50);
  });
});
