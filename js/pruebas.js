function probarValidarNombre() {
    console.assert(
        validarNombre('') === 'El campo nombre debe tener al menos 1 caracter',
        'validarNombre no validó que el nombre no sea vacío'
    );

    console.assert(
        validarNombre('1'.repeat(50)) === 'El campo nombre debe tener menos de 50 caracteres',
        'validarNombre no validó que el nombre sea menor a 50 caracteres'
    );

    console.assert(
    );
}

function probarValidarCiudad() {
    console.assert(
        validarCiudad('') === 'El campo ciudad no debe estar vacio', 
        'validarCiudad no validó que no se haya seleccionado una ciudad'
    );

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo('') === 'El campo descripcionRegalo no debe estar vacio',
        'validarDescripcionRegalo no validó que la descripción no este vacio'
    );

    console.assert(
        validarDescripcionRegalo('1'.repeat(100)) === 'El campo descripcionRegalo debe tener menos de 100 caracteres',
        'validarDescripcionRegalo no validó que la descripcion sea menor a 100 caracteres'
    );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
