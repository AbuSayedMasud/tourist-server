import React from 'react';
import './Post.css'
import p1 from '../../../images/Post/img17.jpg'
import p2 from '../../../images/Post/img18.jpg'
import p3 from '../../../images/Post/img19.jpg'
const Post = () => {
    return (
        <div className="post-area py-5">
            <div className="container">
                <div>
                    <h2 className="gallery-head px-2 text-danger text-start">Our Recent Post </h2>
                    <div class="row row-cols-1 row-cols-md-3 g-4 pt-4">
                        <div class="col">
                            <div class="card h-100 shadow-lg">
                                <img src={p1} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-start text-success">Life is a beautiful journey not a destination</h5>
                                    <p class="card-text text-start text-secondary">Life is a beautiful journey, not a destination enjoy the ride that must be traveled. and find joy every moment, trip, and mile. it is not a race or competition with anyone because it is just like a train or bus and its stations</p>
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <p className="post-text "><a className="text-secondary" href="_blank ">Travele Team</a></p>
                                        </div>
                                        <div className="col-sm-4">
                                            <p className="post-text text-secondary"><a className="text-secondary" href="_blank ">Aug 17,2021</a></p>
                                        </div>
                                        <div className="col-sm-4">
                                            <p className="post-text text-secondary"><a className="text-secondary" href="_blank ">No Comments</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 shadow-lg">
                                <img src={p2} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-start text-success">Take only memories, leave only footprints</h5>
                                    <p class="card-text text-secondary text-start">People have suggested it came from Robert Baden-Powell (founder of the Scout movement), John Muir (found of the Sierra Club) and Chief Seattle (a Native American who reportedly made a speech that included, “Take only memories, leave nothing but footprints” in the mid-1850s), among others.</p>
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <p className="post-text "><a className="text-secondary" href="_blank ">Travele Team</a></p>
                                        </div>
                                        <div className="col-sm-4">
                                            <p className="post-text text-secondary"><a className="text-secondary" href="_blank ">Sep 17,2021</a></p>
                                        </div>
                                        <div className="col-sm-4">
                                            <p className="post-text text-secondary"><a className="text-secondary" href="_blank ">No Comments</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 shadow-lg">
                                <img src={p3} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-start text-success">Journeys are best measured in new friends</h5>
                                    <p class="card-text text-start text-secondary">One of my favorite parts of traveling is the uncertainty of what I could encounter, but the most exciting part for me is the thrill of the unknown as to all the interesting people I will meet along the way. We can predict to a certain degree what we are going to see, but not the unpredictable nature of whom we will meet a long the way. Some of these characters </p>
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <p className="post-text "><a className="text-secondary" href="_blank ">Travele team</a></p>

                                        </div>
                                        <div className="col-sm-4">
                                            <p className="post-text text-secondary"><a className="text-secondary" href="_blank ">Oct 2,2021</a></p>
                                        </div>
                                        <div className="col-sm-4">
                                            <p className="post-text text-secondary"><a className="text-secondary" href="_blank ">No Comments</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;