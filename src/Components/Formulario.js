import React from 'react';
import styled from '@emotion/styled';

import useMoneda from '../Hooks/useMoneda';
import useCriptomoneda from '../Hooks/useCriptomoneda';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66A2FE;
    color: #FFF;
    border: none;
    width: 100%;
    border-radius: 10px;
    transition: background-color .3s ease;

    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }
`;

const Formulario = () => {

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'ARS', nombre: 'Peso Argentino' },
        { codigo: 'COP', nombre: 'Peso Colombiano' }
        
    ];

    // Utilizar useMoneda
    const [ moneda, SelectMonedas, actualizarState ] = useMoneda('Elige tu Moneda', '', MONEDAS);

    // Utilizar useCriptomoneda
    const [criptomoneda, SelectCripto] = useCriptomoneda('Elige tu Criptomoneda', '');

    return ( 
        <form>
            <SelectMonedas />

            <SelectCripto />
            <Boton type="submit" value="Calcular" />
        </form>
     );
}
 
export default Formulario;