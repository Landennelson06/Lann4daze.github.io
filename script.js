MicroModal.init();
document.fonts.ready.then(function () {
var title = document.getElementById('Title');
var navbar = document.getElementById('navbar')
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
  .typeString("Anything Besides Web design")
  //.start();
var navbartype = new Typewriter(navbar.children[0], {
  cursor:'_',
  loop:false
})
navbartype
  .typeString('Home‎‎‎‏‏‎')
  .callFunction(function(state) {
    state.elements.cursor.style.display = 'none';
    console.log(state.elements);
    state.elements.container.classList.add('home')
    state.elements.container.innerHTML = "Home"
    navbartype2.start()
  })
  .start();

var navbartype2 = new Typewriter(navbar.children[1], {
  cursor:'_',
  loop:false
})
navbartype2
  //.pauseFor(1000)
  .typeString('Portforlio‏‏‎')
  .callFunction(function(state) {
    state.elements.cursor.style.display = 'none';
    navbartype3.start()
  })
var navbartype3 = new Typewriter(navbar.children[2], {
  cursor:'_',
  loop:false
})
navbartype3
  .typeString('About Me‏‏‎')
  .callFunction(function(state) {state.elements.cursor.style.display = 'none';})
//fontready closing
});
