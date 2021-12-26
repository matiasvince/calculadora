import React from 'react';

const Botones = (props) => {
    return (
        <>
            <div class="container">
                <div class="row">
                    <button class="col btn btn-danger m-2 fs-4 shadow" onClick={props.borrar}>C</button>
                    <button class="col btn btn-light m-2 fs-4 shadow" onClick={props.click}>(</button>
                    <button class="col btn btn-light m-2 fs-4 shadow" onClick={props.click}>)</button>
                    <button class="col btn btn-light m-2 fs-4 shadow" onClick={props.click}>+</button>
                </div>

                <div class="row">
                    <button class="col btn btn-dark m-2 fs-4 shadow" onClick={props.click}>7</button>
                    <button class="col btn btn-dark m-2 fs-4 shadow" onClick={props.click}>8</button>
                    <button class="col btn btn-dark m-2 fs-4 shadow" onClick={props.click}>9</button>
                    <button class="col btn btn-light m-2 fs-4 shadow" onClick={props.click}>-</button>
                </div>

                <div class="row">
                    <button class="col btn btn-dark m-2 fs-4 shadow" onClick={props.click}>4</button>
                    <button class="col btn btn-dark m-2 fs-4 shadow" onClick={props.click}>5</button>
                    <button class="col btn btn-dark m-2 fs-4 shadow" onClick={props.click}>6</button>
                    <button class="col btn btn-light m-2 fs-4 shadow" onClick={props.click}>*</button>
                </div>

                <div class="row">
                    <button class="col btn btn-dark m-2 fs-4 shadow" onClick={props.click}>1</button>
                    <button class="col btn btn-dark m-2 fs-4 shadow" onClick={props.click}>2</button>
                    <button class="col btn btn-dark m-2 fs-4 shadow" onClick={props.click}>3</button>
                    <button class="col btn btn-light m-2 fs-4 shadow" onClick={props.click}>/</button>
                </div>

                <div class="row">
                    <button class="col btn btn-dark m-2 fs-4 shadow" onClick={props.click}>0</button>
                    {/* <button class="col btn btn-secondary m-2 fs-4 shadow" onClick={props.click}>,</button> */}
                    <button class="col btn btn-warning m-2 fs-4 shadow" onClick={props.resolver}>=</button>
                </div>

            </div>
        </>
    );
}

export default Botones;