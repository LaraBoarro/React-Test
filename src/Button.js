import React from 'react'

const Button = () => {

    const pessoa = {
        nome: 'Lara',
        idade: 22,
        cargo: 'Web Designer',
        trabalha: true,
    };

    return (
        <section>
            <h3>Nome: {pessoa.nome} </h3>
            <h4>Idade: {pessoa.idade} </h4>
        </section>
    );
}

export default Button
