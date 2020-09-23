import React from 'react';

const MainLayout = (props) => {
  const scopeStyle = {
    height: "100vh",
    position: "unset"
  }

  return (
    <div className="col-md-10" style={scopeStyle}>
      {props.children}
    </div>
  )
}

export default MainLayout;