$(document).on('click', handler);
function handler() {
  test();
}
function test() {
  console.log('clicked');
  Promise.reject('test');
}
