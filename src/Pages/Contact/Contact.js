import React from 'react';

// contact form here
const Contact = () => {
    return (
        <div className="py-5">
            <div className="container">
                <div className="row row-cols-md-2 row-cols-lg-4 row-cols-2">
                    <div className="col">
                        <div class="mb-3">

                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="First Name" />
                        </div>
                    </div>
                    <div className="col">
                        <div class="mb-3">

                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="col">
                        <div class="mb-3">

                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
                        </div>
                    </div>
                    <div className="col ">
                        <div class="mb-3">

                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Contact Number" />
                        </div>
                    </div>
                </div>
                <div class="mb-3">

                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder=" Add your comment" rows="3"></textarea>
                </div>
                <div>
                    <button className="btn btn-outline-warning" >Submit</button>
                </div>

            </div>
        </div>
    );
};

export default Contact;