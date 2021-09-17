import React from "react";
import { Link } from "react-router-dom";

import CardStyles from './Card.module.css';

const Card = props => {
    return (
        <div className="card" style={{position: 'relative'}}>
            <h5 className="card-header">{props.header}</h5>
            <div className="card-body">
                <h5 className="card-title">{props.cardTitle}</h5>
                <p className="card-text">{props.children}</p>
                <div className={`btn-group ${CardStyles['btn-position']}`}>
                    <button className={`btn btn-danger ${CardStyles['btn-space']}`}>{props.buttonText}</button>
                    <Link to={props.to} className={`btn btn-primary`}>{props.buttonText}</Link>
                </div>
            </div>
        </div>
    )
}

export default Card;