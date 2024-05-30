document.addEventListener('DOMContentLoaded', function () {
  const dropdowns = document.querySelectorAll('.dropdown');
  const footer = document.querySelector('footer');

  dropdowns.forEach(dropdown => {
    const textBox = dropdown.querySelector('.textBox');
    textBox.addEventListener('click', function (event) {
      event.stopPropagation(); // Prevent the click event from bubbling up
      closeOtherDropdowns(dropdown);
      dropdown.classList.toggle('active');
      adjustFooterPosition(); // Adjust footer position when dropdown is opened
    });
  });

  // Close the dropdown if the user clicks outside of it
  window.addEventListener('click', function () {
    dropdowns.forEach(dropdown => {
      dropdown.classList.remove('active');
      adjustFooterPosition(); // Adjust footer position when dropdown is closed
    });
  });

  function closeOtherDropdowns(openedDropdown) {
    dropdowns.forEach(dropdown => {
      if (dropdown !== openedDropdown) {
        dropdown.classList.remove('active');
      }
    });
  }

  function adjustFooterPosition() {
    let dropdownHeight = 0;
    const activeDropdown = document.querySelector('.dropdown.active');
    if (activeDropdown) {
      dropdownHeight = activeDropdown.querySelector('.options').offsetHeight;
    }
    footer.style.marginTop = dropdownHeight + 'px';
  }
});
