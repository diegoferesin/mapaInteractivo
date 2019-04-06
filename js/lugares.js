lugaresModulo = (function() {
  var servicioLugares; // Servicio para obtener lugares cercanos e información de lugares(como fotos, puntuación del lugar,etc).

  // Completa las direcciones ingresadas por el usuario a y establece los límites
  // con un círculo cuyo radio es de 20000 metros.
  function autocompletar() {
    /* Completar la función autocompletar(): autocompleta los 4 campos de texto de la
        página (las direcciones ingresables por el usuario).
        Para esto creá un círculo con radio de 20000 metros y usalo para fijar
        los límites de la búsqueda de dirección. El círculo no se debe ver en el mapa. */

    //obtener las coordenadas del mapa actual
    var coordenadasAutocompletar = mapa.getCenter();

    //evento autocompletar
    eventoAutocompletarDireccion = new google.maps.places.Autocomplete(
      document.getElementById('direccion'),
      { types: ['geocode'] }
    );

    eventoAutocompletarDesde = new google.maps.places.Autocomplete(
      document.getElementById('desde'),
      { types: ['geocode'] }
    );

    eventoAutocompletarHasta = new google.maps.places.Autocomplete(
      document.getElementById('hasta'),
      { types: ['geocode'] }
    );

    eventoAutocompletarAgregar = new google.maps.places.Autocomplete(
      document.getElementById('agregar'),
      { types: ['geocode'] }
    );

    //restriccion circulo de 20000 metros
    var circulo = new google.maps.Circle({
      center: coordenadasAutocompletar,
      radius: 20000
    });

    eventoAutocompletarDireccion.setBounds(circulo.getBounds());
    eventoAutocompletarDesde.setBounds(circulo.getBounds());
    eventoAutocompletarHasta.setBounds(circulo.getBounds());
    eventoAutocompletarAgregar.setBounds(circulo.getBounds());
  }

  // Inicializo la variable servicioLugares y llamo a la función autocompletar
  function inicializar() {
    debugger;
    servicioLugares = new google.maps.places.PlacesService(mapa);
    debugger;
    autocompletar();
  }

  // Busca lugares con el tipo especificado en el campo de TipoDeLugar

  function buscarCerca(posicion) {
    /* Completar la función buscarCerca  que realice la búsqueda de los lugares
    del tipo (tipodeLugar) y con el radio indicados en el HTML cerca del lugar
    pasado como parámetro y llame a la función marcarLugares. */

    //obtener datos del DOM
    var tipoLugarSeleccionado = document.getElementById('tipoDeLugar').value;
    var radioSeleccionado = parseInt(
      document.getElementById('radioS').textContent
    );

    //obtener las coordenadas del mapa actual
    var coordenadasBusqueda = mapa.getCenter();

    //Buscar lugares
    var solicitudBusqueda = {
      location: coordenadasBusqueda,
      radius: radioSeleccionado,
      types: [tipoLugarSeleccionado]
    };

    var servicioBuscar = new google.maps.places.PlacesService(mapa);
    servicioBuscar.nearbySearch(solicitudBusqueda, function(
      resultados,
      status
    ) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        marcadorModulo.marcarLugares(resultados, 'OK');
      }
    });
  }

  return {
    inicializar,
    buscarCerca
  };
})();
