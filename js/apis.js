var mapa; // Mapa que vamos a modificar

/* Crear la variable posicionCentral con las coordenadas donde se va a centrar el mapa */

//Plano general alrededor de mi casa
var posicionCentral = {
  lat: -34.615707,
  lng: -58.417107
};

// Inicializa el mapa con un valor de zoom y una locación en el medio
function inicializarMapa() {
  /* Modificá la variable mapa con el constructor Map().
    Tendrás que asignarle un valor de zoom y
    un centro igual a la variable posicionCentral. */
  //mapa = new google.maps.Map(document.getElementById("map"));

  mapa = new google.maps.Map(document.getElementById('map'), {
    center: { lat: posicionCentral.lat, lng: posicionCentral.lng },
    zoom: 15
  });

  geocodificadorModulo.inicializar();
  marcadorModulo.inicializar();
  direccionesModulo.inicializar();
  lugaresModulo.inicializar();
  streetViewModulo.inicializar();
}
