function calcularSemestre() {
    var creditosCursados = parseFloat(document.getElementById('creditosCursados').value);
    var creditosTotales = parseFloat(document.getElementById('creditosTotales').value);

    if (isNaN(creditosCursados) || isNaN(creditosTotales) || creditosCursados < 0 || creditosTotales <= 0) {
      alert("Por favor, ingrese valores válidos para los créditos.");
      return;
    }

    var porcentajeCompletado = (creditosCursados / creditosTotales) * 100;

    if (porcentajeCompletado >= 90) {
      mostrarResultado("¡Felicidades! Has completado más del 90% de tu programa. Estás en el último semestre.");
    } else {
      var semestre = Math.ceil(porcentajeCompletado / 15);
      mostrarResultado("Estás actualmente en el semestre " + semestre);
    }
  }

  function mostrarResultado(mensaje) {
    document.getElementById('resultado').innerHTML = "<p>" + mensaje + "</p>";
  }
