 //animation bg image on cover section
      let cover = document.getElementById('cover');
      //foto berupa array
      let foto = [
        1,2,3
        ]
        let n = 1;
      let x = setInterval(()=>{
        cover.setAttribute('style', `background: url("assets/${foto[n]}.jpg") no-repeat center center;`)
        n++;
        if(n==foto.length){
          n = 0;
        }
      }, 5000);
      
      
  //gallery
  let galeri = document.getElementsByClassName('g-foto');
  let preview = document.getElementsByClassName('g-foto-pre');
  preview = preview[0];
  console.log(preview)
  preview.setAttribute('style', `background: url(${galeri[0].src}) no-repeat; background-size: cover; background-position: center center;`)
  
  
  let jumlahFoto = document.getElementsByClassName('g-count')[0];
  
  jumlahFoto.textContent = "foto ke-1 dari " + galeri.length + " foto";
  let fCount = 0;
  for(let fC = 0; fC < galeri.length; ++fC)
  {
    galeri[fC].setAttribute('draggable','false');
    galeri[fC].addEventListener("click",
    (e)=>{
      fCount = fC;
      //preview.src = galeri[fCount].src;
      preview.style.background = "transparent";
      let tempo = document.createElement('img');
      tempo.setAttribute('class','g-foto-in');
      tempo.src = galeri[fCount].src;
      tempo.alt = "Foto-mempelai";
      preview.appendChild(tempo)
      tempo.classList.add('g-swipe');
      
      
      for(let ft of galeri){
        ft.classList.remove('g-foto-active');
      }
      galeri[fCount].classList.add('g-foto-active');
      jumlahFoto.textContent = "foto ke-" + (fCount+1) + " dari " + galeri.length + " foto";
    })
  }
  /*
  setInterval(function() {
    preview.src = galeri[fCount].src;
    fCount++;
    if(fCount >= galeri.length){
      fCount = 0;
    }
  }, 5000);
  */
  let k_maps = [-6.920654,109.537815];
  let link_maps = 'http://maps.google.com/?q=';

  var map = L.map('m-peta', {
    dragging : false,
    tap : false,
  }).setView(k_maps, 18);
  
  let googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
  googleStreets.addTo(map)
 /* L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);*/
  var marker = L.marker([-6.920654,109.537815]).addTo(map);
  marker.bindPopup("<p style='font-size: 10px; width: 120px;'><b>Lokasi Acara</b><br>Dusun II Butak, Desa Pecangakan, RT 01/ RW 02, Kec. Comal, Kab. Pemalang</p>");
  
  let btn_maps = document.getElementById('m-btn');
  btn_maps.addEventListener('click',(e)=>{
    window.open(link_maps + k_maps.toString());
  });
  
  let countdown = document.getElementById('m-countdown')
  
  let to_date = new Date("May 3 2023 20:00:00").getTime();
  function nowday(){
    let dt = new Date().getTime();
    return dt;
  }
   
  console.log(to_date);
  console.log(nowday());
  
  function count(){
    let calc = to_date - nowday();
    console.log(calc);
    let day = calc / (1000*60*60*24);
    let jam = calc / (1000*60*60);
    let menit = calc % (1000*60*60);
    menit = menit / (1000*60);
    
    if(day >= 1){
      countdown.textContent = Math.floor(day) + " days left";
    }
    else if(day < 1 && jam >= 0){
      countdown.textContent = Math.floor(jam) + " hours " + Math.floor(menit) + " minutes left";
    }
    else {
      console.log(calc)
    }
    return calc;
  }
  count();
  
  
  let cD = setInterval(()=>{
    let cek = count();
    if(cek <= 0 ){
      console.log('clear')
      clearInterval(cD);
    }
  }, 1000);