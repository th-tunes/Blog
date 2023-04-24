let btnDrawer = document.getElementById("btn-drawer");
let drawer = document.getElementById("items");

btnDrawer.addEventListener('click', () => {
  if (drawer.style.right === '0px') {
    drawer.style.right = '-200px';

  } else {
    drawer.style.right = '0px';
  }
});

