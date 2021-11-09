import React from 'react';
import notFound from '../../images/romson-preechawit-Vy2cHqm0mCs-unsplash.jpg'
const NotFound = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className=" col not-image">
                    <img src={notFound} alt="" />
                </div>

            </div>
        </div>
    );
};

export default NotFound;