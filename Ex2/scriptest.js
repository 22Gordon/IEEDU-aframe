var avatar = document.getElementById('avatar');
var camera = avatar.querySelector('a-camera');
var speed = 0.05; // Adjust the speed as needed

document.addEventListener('keydown', function (event) {
  var position = avatar.getAttribute('position');

  switch (event.key) {
    case 'w':
      position.z -= speed;
      break;
    case 's':
      position.z += speed;
      break;
    case 'a':
      position.x -= speed;
      break;
    case 'd':
      position.x += speed;
      break;
  }

  avatar.setAttribute('position', position.x + ' ' + position.y + ' ' + position.z);
});
