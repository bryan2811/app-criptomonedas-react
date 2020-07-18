import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    display: block;
    margin-top: 2rem;
`;

const Select = styled.select`
    -webkit-appearance: none;
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: 1rem;
    border-radius: 10px;
    border: none;
`;

const useCriptomoneda = (label, stateInicial, opciones) => {

    // State de nuestro custom hook
    const [state, actualizarState] = useState(stateInicial);

    const SelectCripto = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select 
                onChange={ e => actualizarState(e.target.value) } 
                value={state}
            >
                <option value="MXN">-- Seleccione --</option>
                {opciones.map(opcion => (
                    <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                ))}
            </Select>
        </Fragment>
    );

    // Retornar state, interfaz y función que modifica el state
    return [state, SelectCripto, actualizarState];
}

export default useCriptomoneda;