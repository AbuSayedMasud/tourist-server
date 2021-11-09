import React from 'react';
import './Gallery.css'
import g1 from '../../../images/gallery/img13.jpg'
import g2 from '../../../images/gallery/img14.jpg'
import g3 from '../../../images/gallery/img12.jpg'
import g4 from '../../../images/gallery/img15.jpg'
const Gallery = () => {
    return (
        <div className="my-5">
            <div className="container">
                <div className="row">
                    <div className=" col-md-4 col text-start">

                        <h4 className="gallery-head px-2 text-danger">OUR TOUR GALLERY</h4>
                        <div className="d-none  d-sm-none d-md-block">
                            <h2 className="text-info">BEST TRAVELER'S SHARED PHOTOS</h2>
                            <p className="text-secondary d-md-none d-lg-block">Tour world-famous buildings, monuments and exhibitions, peek inside beautiful homes, or get inspiration for your own space — you'll find plenty to explore in our Gallery.</p>
                        </div>

                    </div>
                    <div className="col-md-4 col-sm-12">
                        <img className="img-thumbnail" src={g1} alt="" />
                    </div>
                    <div className="col-md-4 col-sm-12 col">
                        <img className="img-thumbnail" src={g2} alt="" />
                    </div>
                </div>
                <div className="row g-2 mt-3">
                    <div className="col-md-4 col-sm-12">
                        <img className="img-thumbnail" src={g3} alt="" />
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <img className="img-thumbnail" src={g4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;