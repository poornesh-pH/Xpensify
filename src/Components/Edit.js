import React from 'react';

function Edit(props){
  console.log(props,"edit component")
  return(
    <div>
    <p>Edit page {props.match.params.id}</p>
    </div>
  )
}

export default Edit