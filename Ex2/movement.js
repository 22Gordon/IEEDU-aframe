AFRAME.registerComponent('cursor-listener', {
    init: function () {
      var el = this.el;
      el.addEventListener('click', function () {
        // Handle the back button click
        var menu = document.getElementById('menu');
        var museum = document.getElementById('museum');

        if (menu && museum) {
          menu.setAttribute('visible', true);
          museum.setAttribute('visible', false);
        }
      });
    },
  });