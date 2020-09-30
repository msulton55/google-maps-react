import React from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {

  console.log("Button render")
  return (
    <div className="list-group">
      {props.lists.map((list, index) => {
          if (list === "Main map")
            return (
              <Link to="/" key="index">
                <a className="list-group-item list-group-item-action" onClick={props.option}>
                  {list}
                </a>
              </Link>
            )
          else 
            return (
              <Link to="/how-to-play" key={index}>
                <a className="list-group-item list-group-item-action" key={index} onClick={props.option}>
                  {list}
                </a>
              </Link>
            )
        })}
    </div>
  )
}

export default Button;