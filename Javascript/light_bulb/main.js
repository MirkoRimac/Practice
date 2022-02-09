function light(value) {
  let pic;
  if (value == 0) {
    pic = 'bulb-off.jpg';
  } else {
    pic = 'bulb-on.jpg';
  }
  document.getElementById('bulb').src = pic;
}
