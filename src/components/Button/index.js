import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

const Button = (props) => {
  return (
    <div className="list-group">
      <a className="list-group-item list-group-item-action">
        {props.children}
      </a>
    </div>
  )
}

export default Button;