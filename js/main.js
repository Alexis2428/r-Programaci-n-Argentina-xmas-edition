const $formulario = document.formulario;

const nombre = $formulario.nombre.value;
const ciudad = $formulario.ciudad.value;
const comportamiento = $formulario.comportamiento.value;
const descripcionRegalo = $formulario['descripcion-regalo'].value;

// console.log(ciudad);
// console.log(comportamiento);
// console.log(descripcionRegalo);

function validarNombre (nombre) {
    if (0 === nombre.length) {
        return 'Este campo debe tener al menos 1 caracter';
    }

    if (50 <= nombre.length) {
        return 'Este campo debe tener menos de 50 caracteres';
    }

    return '';
}

function validarCiudad(ciudad) {
    if ('' === ciudad) {
        return 'Debe seleccionar una opción';
    }

    return '';
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (0 === descripcionRegalo.length) {
        return 'Este campo debe tener al menos 1 caracter';
    }

    if (50 <= descripcionRegalo.length) {
        return 'Este campo debe tener menos de 50 caracteres';
    }

    return '';
}
