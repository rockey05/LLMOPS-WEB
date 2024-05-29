document.querySelectorAll('.accordion input').forEach((input) => {
  input.addEventListener('change', function () {
    document.querySelectorAll('.accordion input').forEach((otherInput) => {
      if (otherInput !== input) {
        otherInput.checked = false;
      }
    });
  });
});
