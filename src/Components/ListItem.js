import React from 'react'

const ListItem = ({text, value}) => {
        // console.log(props.name);

  return (
    <div>
      <div className="Raw">
        <h3>{text}</h3>
        <h4>{value}</h4>
        
      </div>
    </div>
  );
}

export default ListItem
