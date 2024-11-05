import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <button onClick={props.greetHandler}> Execute Parent Function passed as props</button>
    </div>
  );
}

export default ChildComponent;
