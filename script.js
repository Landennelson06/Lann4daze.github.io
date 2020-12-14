MicroModal.init();
function link(id){
  document.getElementById(id).scrollIntoView(true);
}
const pageAccessedByReload = (
  (window.performance.navigation && window.performance.navigation.type === 1) ||
    window.performance
      .getEntriesByType('navigation')
      .map((nav) => nav.type)
      .includes('reload')
);
document.fonts.ready.then(function () {
var title = document.getElementById('Title');
var navbar = document.getElementById('navbar');
var footer = document.getElementById("foot")
var typewriter = new Typewriter(title, {
  cursor: "_",
  loop:true,
});
typewriter
  .typeString('Frontend')
  .pauseFor(1000)
  .deleteChars(8)
  .typeString('Backend')
  .pauseFor(1000)
  .deleteChars(7)
  //.typeString("Anything But Web Design")
  //.start();
var navbartype = new Typewriter(navbar.children[1], {
  cursor:'_',
  loop:false,
  delay:50,
  cursorClassName:'cur',
});
var navbartype2 = new Typewriter(navbar.children[2], {
  cursor:'_',
  loop:false,
  delay:50,
  cursorClassName:'cur',
});
var navbartype3 = new Typewriter(navbar.children[3], {
  cursor:'_',
  loop:false,
  delay:50,
  cursorClassName:'cur',
});
navbar.children[3].style.display = 'none';
//document.getElementsByClassName('cur')[0].style.display = 'none';
var navbartype4 = new Typewriter(navbar.children[4],{
  cursor:'_',
  loop:false,
  delay:50,
  cursorClassName:'cur',
});
if(pageAccessedByReload){
navbar.children[1].innerHTML = 'Home'
navbar.children[2].innerHTML = 'Works'
navbar.children[4].innerHTML = 'About Me'
};
document.getElementsByClassName('cur')[0].style.display = 'none';
document.getElementsByClassName('cur')[1].style.display = 'none';
document.getElementsByClassName('cur')[2].style.display = 'none';
document.getElementsByClassName('cur')[3].style.display = 'none';
//fontready closing
if(!pageAccessedByReload){
  var footertype = new Typewriter(footer, {
    cursor:'_',
    loop:false,
  });
  document.getElementsByClassName('cur')[0].style.display = '';
  navbartype
    .callFunction(function(state){state.elements.cursor.style.display = 'inline';})
    .typeString('Home‎‎‎‏‏‎')
    .callFunction(function(state) {state.elements.cursor.style.display = 'none';navbartype2.start()})
    .start();
    navbartype2
      //.pauseFor(1000)
      .callFunction(function(state){state.elements.cursor.style.display = 'inline';})
      .typeString('Works')
      .callFunction(function(state) {state.elements.cursor.style.display = 'none';navbartype4.start()});
    navbartype3
      .callFunction(function(state){state.elements.cursor.style.display = 'inline';})
      .typeString('Portforlio‏‏‎')
      .callFunction(function(state) {state.elements.cursor.style.display = 'none'; navbartype4.start()});
    navbartype4
      .callFunction(function(state){state.elements.cursor.style.display = 'inline';})
      .typeString('About Me‏‏‎')
      .callFunction(function(state) {state.elements.cursor.style.display = 'none'; footertype.start();});
    footertype
      .typeString('Created with <3 By Lann4daze. <a style="cursor:pointer;" data-micromodal-trigger="modal-1"><strong>Credits</strong></a>')
      .callFunction(function(state){state.elements.cursor.style.display = 'none';})
}
});
