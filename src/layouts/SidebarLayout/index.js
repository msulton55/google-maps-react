import React from 'react';

const SidebarLayout = (props) => {
  console.log("SidebarLayout render")
  return (
    <div className="col-md-2">
      {props.children.length !== undefined ? props.children.map((jsx, index) => {
        return (
          <div className="row" key={index}>
            <div className="col-md">
              {jsx}
            </div>
          </div>
        )
      }) : props.children}
    </div>
  )
}

export default SidebarLayout;