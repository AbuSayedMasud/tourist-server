import React from 'react';

import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id,name, price, img, pakeage } = service;
    return (
        <div className="service">
            <div className="col shadow-lg ">
                <div className="card h-100">
                    <img src={img} className="card-img-top image" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title text-info ">{name}</h5>
                        <p className="card-text text-primary"><small className="text-success">{pakeage} TK</small></p>
                        <p className="card-text text-primary">Price: <small className="text-warning">{price} TK</small></p>
                        
                        <Link to={`/detail/${_id}`}><button className="btn btn-outline-warning text-secondary">Description</button></Link>
                       
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;