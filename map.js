function iniciarMap() {
  // localizacion del lugar 
   const coord1 = { lat: -12.0245448, lng:-76.9154139 };
   const coord2 = {lat:-12.0434223 ,lng: -76.9712564};
   const coord3 = {lat:-11.935759 ,lng: -76.697137};
  // centra el mapa en la coordenada indicada
  const map = new google.maps.Map(document.getElementById("map"),
    {
      zoom: 10,
      center: coord1,
    }
  );
  //marcador, posicion de cada coordenada
  const marker1 = new google.maps.Marker({
    position: coord1,
    map: map,
  });
  const marker2 = new google.maps.Marker({
    position: coord2,
    map: map,
  });  
  const marker3 = new google.maps.Marker({
    position: coord3,
    map: map,
  });
}