import React from 'react';

const SidebarLayout = (props) => {
  return (
    <div className="col-md-2">
      {props.children}
    </div>
  )
}

export default SidebarLayout;