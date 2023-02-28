/**
 * File name: app.js
 * Student name: Minh Tri Le
 * Student ID: 301323963
 * Date: Feb 9, 2023
 */

(function() {
  function start() {
    console.log('App Started...');
  }

  let deleteButton = document.querySelectorAll('.btn-danger');
  for (button of deleteButton) {
    button.addEventListener('click', (event) => {
      if (!confirm('Are you sure?')) {
        event.preventDefault();
        window.location.assign('/business-contacts');
      }
    });
  }
  window.addEventListener('load', start);
})();
