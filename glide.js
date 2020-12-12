  var bg = new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    autoplay:2000,
    gap:0,
  })
  bg.on("move",function(){
    //console.log(bg.index + 1)
  })
  bg.mount();
