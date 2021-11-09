import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const Detail = () => {
    const { id } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/detail/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        console.log(data);
        data.status = "pending";
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.insertedId) {
                    alert('Order Process successfully')

                    reset();
                }
            })
    }
    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="col shadow-lg">
                            <div className="card h-100">
                                <img src={service.img} className="card-img-top image" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-info ">{service.name}</h5>
                                    <p className="card-text text-secondary">{service.description}</p>
                                    <p className="card-text text-primary"><small className="text-success">{service.pakeage} TK</small></p>
                                    <p className="card-text text-primary">Price: <small className="text-warning">{service.price} TK</small></p>



                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">

                        <div className="card">
                            <h2 className="text-info bg-success py-3" >Order</h2>
                            <div className="card-body shadow-lg">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {/* register your input into the hook by invoking the "register" function */}

                                    <div className="mb-3">
                                        <input defaultValue={user.displayName} {...register("name")} className="form-control" required />
                                    </div>
                                    {/* include validation with required or other standard HTML validation rules */}
                                    <div className="mb-3">
                                        <input defaultValue={user.email} {...register("email", { required: true })} className="form-control" />
                                        {errors.email && <span>This field is required</span>}
                                    </div>
                                    <div className="mb-3">
                                        <select {...register("place")} className="form-control">
                                            <option>{service.name}</option>

                                        </select>
                                    </div>

                                    <div className="mb-3">

                                        <select {...register("price")} className="form-control">
                                            <option >{service.price}</option>

                                        </select>
                                    </div>

                                    {/* errors will return when field validation fails  */}

                                    <div className="mb-3">
                                        <input placeholder="Address" defaultValue="" {...register("address")} className="form-control" required />

                                    </div>
                                    <div className="mb-3">
                                        <input type="number" placeholder="Phone number" defaultValue="" {...register("phone")} className="form-control" required />

                                    </div>
                                    <div className="mb-3">
                                        <input type="date" defaultValue="" {...register("date")} className="form-control" required />

                                    </div>
                                    <div className="mb-3 form-floating">
                                        <textarea {...register("textArea")} className="form-control" required />
                                        <label htmlFor="floatingTextarea">Leave Your Comments</label>
                                        {errors.textArea && <span>This field is required</span>}
                                    </div>


                                    <input type="submit" value="Book Now" className="btn btn-warning" />
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
