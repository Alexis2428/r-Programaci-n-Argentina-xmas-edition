function probarValidarEdad() {
    console.assert(
        validarEdad('') === 'El campo edad no puede estar vacio',
        'validarEdad no validó que no se ingresó una edad'
    );
}

probarValidarEdad();
