function borrarIntegrantesAnteriores() {
    const $integrantes = document.querySelectorAll('.integrante');
    for (let i = 0; i < $integrantes.length; i++) {
        $integrantes[i].remove();
    }
}

function crearIntegrantes() {
    const cantidadIntegrantes = Number(document.querySelector('#cantidad-integrantes').value);

    if (0 < cantidadIntegrantes) {
        mostrarBotonCalcular();
    }

    for (let i = 0; i < cantidadIntegrantes; i++) {
        crearIntegrante(i);
    };
}

function crearIntegrante(indice) {
    const $integrante = document.createElement('div');
    $integrante.className = 'integrante';

    const $texto = document.createElement('label');
    $texto.innerText = `Ingrese la edad del integrante ${indice + 1}`;
    const $cuadroTexto = document.createElement('input');
    $cuadroTexto.type = 'number';

    $integrante.appendChild($texto);
    $integrante.appendChild($cuadroTexto);

    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($integrante);
}

function obtenerEdades() {
    const listaEdades = document.querySelectorAll('.integrante input');
    const edades = [];
    for (let i = 0; i < listaEdades.length; i++) {
        if ('' !== listaEdades[i].value) {
            edades.push(Number(listaEdades[i].value));
        }
    }
    return edades;
}

function obtenerRespuesta(tipo, valor) {
    document.querySelector(`#${tipo}-edad`).textContent = valor;
}

function mostrarBotonCalcular() {
    document.querySelector('#calcular').className = '';
}

function ocultarBotonCalcular() {
    document.querySelector('#calcular').className = 'oculto';
}

function mostrarBotonReiniciar() {
    document.querySelector('#reiniciar').className = '';
}

function ocultarBotonReiniciar() {
    document.querySelector('#reiniciar').className = 'oculto';
}

function mostrarRespuestas() {
    document.querySelector('#respuestas').className = '';
}

function ocultarRespuestas() {
    document.querySelector('#respuestas').className = 'oculto';
}

function validarEdades(edades) {
function validarEdad(edad) {
    if ('' === edad) {
        return 'El campo edad no puede estar vacio';
    }

    return '';
}


const $botonContinuar = document.querySelector('#continuar');
$botonContinuar.onclick = function (event) {
    event.preventDefault();

        borrarIntegrantesAnteriores();
        crearIntegrantes(Number($cantidadIntegrantes.value));
}

const $botonCalcular = document.querySelector('#calcular');
$botonCalcular.onclick = function (event) {
    event.preventDefault();

    const $listaEdades = document.querySelectorAll('.integrante input');
    const sonValidas = validarEdades($listaEdades);

    if (sonValidas) {
        const edades = obtenerEdades($listaEdades);

        obtenerRespuesta('mayor', obtenerNumeroMayor(edades));
        obtenerRespuesta('menor', obtenerNumeroMenor(edades));
        obtenerRespuesta('promedio', obtenerPromedio(edades).toFixed(1));
        mostrarRespuestas();
        mostrarBotonReiniciar();
    }
}

const $botonReiniciar = document.querySelector('#reiniciar');
$botonReiniciar.onclick = function () {
    borrarIntegrantesAnteriores();
    ocultarRespuestas();
    ocultarBotonCalcular();
    ocultarBotonReiniciar();
}
