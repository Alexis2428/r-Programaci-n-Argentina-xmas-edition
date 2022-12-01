function validarNombre (nombre) {
    if (0 === nombre.length) {
        return 'El campo nombre debe tener al menos 1 caracter';
    }

    if (50 <= nombre.length) {
        return 'El campo nombre debe tener menos de 50 caracteres';
    }

    if (!/^[a-z]+$/i.test(nombre)) {
        return 'El campo nombre solo acepta letras';
    }

    return '';
}

function validarCiudad(ciudad) {
    if ('' === ciudad) {
        return 'El campo ciudad no debe estar vacio';
    }

    return '';
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (0 === descripcionRegalo.length) {
        return 'El campo descripcionRegalo no debe estar vacio';
    }

    if (100 <= descripcionRegalo.length) {
        return 'El campo descripcionRegalo debe tener menos de 100 caracteres';
    }

    if (!/^[A-z0-9]+$/.test(descripcionRegalo)) {
        return 'El campo descripcionRegalo solo acepta letras y números';
    }

    return '';
}

const $form = document.formulario;
$form.onsubmit = validarFormulario;
