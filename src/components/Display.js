import React from 'react';

const Display = (props) => {
    return (
        <>
            <div class="container">
                <form class="row">
                    <input class="col form-control-lg" type="text" value={props.result} />
                </form>
            </div>
        </>
    );
}

export default Display;