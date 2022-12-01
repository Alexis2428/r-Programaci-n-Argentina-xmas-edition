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

function validarFormulario(event) {
    const $form = document.formulario;

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;

    const errores = {
        nombre: validarNombre(nombre),
        ciudad: validarCiudad(ciudad),
        'descripcion-regalo': validarDescripcionRegalo(descripcionRegalo)
    };

    const esExito = manejarErrores(errores) === 0;

    if (esExito) {
        $form.className = 'oculto';
        document.querySelector('#exito').className = '';

        setTimeout(function(){window.location.href = 'wishlist.html'}, 5000);
    }

    event.preventDefault();
}

function manejarErrores(errores) {
    const $listaErrores = document.querySelectorAll('#errores li');
    let cantidadErrores = 0;
    
    Object.keys(errores).forEach(function(llave){
        const error = errores[llave];

        if (error) {
            cantidadErrores++;
            if (!comprobarExisteError(error, $listaErrores)) {

                $form[llave].className = 'error';
                crearError(error);

            }
        } else {
            $form[llave].className = '';
        }
    });

    borrarErroresCorregidos(errores, $listaErrores);

    return cantidadErrores;
}

function crearError(error) {
    const $errores = document.querySelector('#errores');

    const $error = document.createElement('li');
    $error.innerText = error;
    $errores.appendChild($error);
}

function borrarErroresCorregidos(errores, $listaErrores) {
    const valorErrores = Object.values(errores);

    for (let i=0; i < $listaErrores.length; i++) {
        let existeEnErrores = false;

        for (let j=0; j < valorErrores.length; j++) {
            if ($listaErrores[i].innerText === valorErrores[j]) {
                existeEnErrores = true;
                break;
            }
        }

        if (!existeEnErrores) {
            $listaErrores[i].remove();
        }
    }
}

function comprobarExisteError(error, errores) {
    for (let i=0; i < errores.length; i++) {
        if (error === errores[i].innerText) {
            return true;
        }
    }
    return false;
}

const $form = document.formulario;
$form.onsubmit = validarFormulario;
