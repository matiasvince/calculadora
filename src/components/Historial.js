import React from 'react';

const Historial = (props) => {

    return (
        <div style={{maxHeight: 300}} class="overflow-auto">
            <ul class="list-group list-group-flush">
                {props.historial.map((item, index) => {
                    return <Item item={item} index={index} />
                })}
            </ul>
        </div>
    );
}

const Item = (props) => {
    return (
        <li class="list-group-item">
            {props.item}
        </li>
    );
}

export default Historial;