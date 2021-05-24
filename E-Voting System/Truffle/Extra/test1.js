import React from 'react';
export default ()=>{
    return(
        <div>
            <input type='number' onChange={this.handleValue} />
            <button onClick={this.handleSet}>Set</button>
          <br />
        </div>
    );
}