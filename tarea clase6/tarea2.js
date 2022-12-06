function agregarIntegrante() {
    const $texto = document.createElement('label');
    $texto.textContent = 'Ingrese el salario anual ';
    const $cuadroTexto = document.createElement('input');
    $cuadroTexto.type = 'number';

    const $integrante = document.createElement('div');
    $integrante.className = 'integrante';

    $integrante.appendChild($texto);
    $integrante.appendChild($cuadroTexto);

    document.querySelector('#integrantes').appendChild($integrante);
}

function borrarUltimoIntegrante() {
    const $integrantes = document.querySelectorAll('.integrante');
    if (0 < $integrantes.length) {
        const ultimoIntegrante = $integrantes.length - 1;
        $integrantes[ultimoIntegrante].remove();
    }
}

function borrarIntegrantes() {
    const $integrantes = document.querySelectorAll('.integrante');
    for (let i = $integrantes.length; i > 0; i--) {
        borrarUltimoIntegrante();
    }
}

function obtenerSalarios() {
    const $listaSalarios = document.querySelectorAll('.integrante input');
    const salarios = [];
    for (let i = 0; i < $listaSalarios.length; i++) {
        if ('' !== $listaSalarios[i].value) {
            salarios.push(Number($listaSalarios[i].value));
        }
    }
    return salarios;
}

function obtenerRespuesta(tipo, valor) {
    document.querySelector(`#salario-${tipo}`).innerText = valor;
}

function mostrarBotonCalcular() {
    document.querySelector('#calcular').className = '';
}

function ocultarBotonCalcular() {
    document.querySelector('#calcular').className = 'oculto';
}

function mostrarRespuestas() {
    document.querySelector('#respuestas').className = '';
}

function ocultarRespuestas() {
    document.querySelector('#respuestas').className = 'oculto';
}

function mostrarBotonReiniciar() {
    document.querySelector('#reiniciar').className = '';
}

function ocultarBotonReiniciar() {
    document.querySelector('#reiniciar').className = 'oculto';
}

    
function validarSalario(salario) {
    if ('' === salario) {
        return 'El campo salario no debe estar vacio';
    }

    return '';
}

const $botonAgregar = document.querySelector('#agregar');
$botonAgregar.onclick = function () {
    agregarIntegrante();
    mostrarBotonCalcular();
}

const $botonQuitar = document.querySelector('#quitar');
$botonQuitar.onclick = borrarUltimoIntegrante;

const $botonCalcular = document.querySelector('#calcular');
$botonCalcular.onclick = validarSalarios;

const $botonReiniciar = document.querySelector('#reiniciar');
$botonReiniciar.onclick = function () {
    borrarIntegrantes();
    ocultarBotonCalcular();
    ocultarRespuestas();
    ocultarBotonReiniciar();
}
