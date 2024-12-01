
fetch('/data/villa.json')
.then(response => response.json())
.then(data => {
  document.querySelector('.text5').innerText = data.properties[0].name;
  document.querySelector('.text4').innerText = data.properties[0].address;
  document.querySelector('.text2').innerText = data.properties[0].price;
  document.querySelector('.text3').innerText = data.properties[0].rooms;
  document.querySelector('.text8').innerText = data.properties[1].rooms;
  document.querySelector('.text9').innerText = data.properties[1].price;
  document.querySelector('.text7').innerText = data.properties[1].address;
  document.querySelector('.text6').innerText = data.properties[1].name;
  document.querySelector('.text10').innerText = data.properties[1].rooms;
  document.querySelector('.text12').innerText = data.properties[2].price;
  document.querySelector('.text13').innerText = data.properties[2].address;
  document.querySelector('.text11').innerText = data.properties[2].price;
  document.querySelector('.text14').innerText = data.properties[2].rooms;
  document.querySelector('.text15').innerText = data.footer.subscribe;
  document.querySelector('.text16').innerText = data.footer.followUs;
  document.querySelector('.text19').innerText = data.footer.contactUs;
  document.querySelector('.text20').innerText = data.footer.ourAddress;
  document.querySelector('.text21').innerText = data.footer.phone;
  document.querySelector('.text22').innerText = data.footer.phone;
  document.querySelector('.sector-gurugram').innerHTML = data.footer.location;
  document.querySelector('.copyright').innerText = data.footer.copyright;

  document.querySelector('.empty-bed').src = data.images.emptyBed;
  document.querySelector('.bathtub').src = data.images.bathtub;
  document.querySelector('.layers').src = data.images.layers;
  document.querySelector('.place-marker').src = data.images.placeMarker;
  document.querySelector('.img').src = data.images.emptyBed1;
  document.querySelector('.bathtub-2').src = data.images.bathtub;
  document.querySelector('.layers-2').src = data.images.layers;
  document.querySelector('.place-marker-2').src = data.images.placeMarker;
  document.querySelector('.empty-bed-2').src = data.images.emptyBed2;
  document.querySelector('.bathtub-3').src = data.images.bathtub;
  document.querySelector('.layers-3').src = data.images.layers;
  document.querySelector('.place-marker-3').src = data.images.placeMarker;
  document.querySelector('.j').src = data.images.logo;
  document.querySelector('.facebook').src = data.images.facebook;
  document.querySelector('.twitter').src = data.images.twitter;
  document.querySelector('.instagram').src = data.images.instagram;
  document.querySelector('.linked-in').src = data.images.linkedIn;
  document.querySelector('.bgimage').src = data.images.bgImage;
});