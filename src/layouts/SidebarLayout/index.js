import React from 'react';

const SidebarLayout = (props) => {
  console.log("SidebarLayout render")
  return (
    <div className="col-md-2">
      {props.children}
    </div>
  )
}

export default SidebarLayout;