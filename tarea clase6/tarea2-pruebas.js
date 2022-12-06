function probarValidarSalario() {
    console.assert(
        validarSalario('') === 'El campo salario no debe estar vacio',
        'validarSalario no validó que no se ingresó ningun salario'
    );
}

probarValidarSalario();
