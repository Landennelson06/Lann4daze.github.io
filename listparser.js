const { el, mount, list } = redom;
var i = 0;
var data;
  var filerequest = 'Portforlio.json'
  var request = new XMLHttpRequest();
  request.open('GET',filerequest);
  request.responseType = 'json';
  request.send();
  request.onload = function(){
    data = request.response;
    load()
  }
  function load() {
    const Portforlio = data;
    console.log(JSON.stringify(Portforlio));
  while (i < Portforlio.sites.length){
  const link = Portforlio.sites[i].link;
  const iframe_element = el('div.container',el('iframe',{src: link}))
  const title = el("p")
  title.innerHTML = Portforlio.sites[i].title;
  const desc = el('div')
  desc.innerHTML = Portforlio.sites[i].description
  const el1 = el('a',[el('div.elem',iframe_element,[title,desc])]);
  el1
    .onclick = function(){togglemodal('preview',link)}
  mount(document.getElementById('list-list'), el1);
  i++;
}};
function filter(e) {
  //document.getElementById('list-list').innerHTML = '';
  const Portforlio = data;
  //console.log(JSON.stringify(Portforlio));
while (i < Portforlio.sites.length){
const link = Portforlio.sites[i].link;
const iframe_element = el('div.container',el('iframe',{src: link}))
const title = el("p")
title.innerHTML = Portforlio.sites[i].title;
const desc = el('div')
desc.innerHTML = Portforlio.sites[i].description
const el1 = el('a',[el('div.elem',iframe_element,[title,desc])]);
el1
  .onclick = function(){togglemodal('preview',link)}
mount(document.getElementById('list-list'), el1);
i++;
}}
