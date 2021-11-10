import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://desolate-mountain-62875.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-service py-5">
            <h2>please Add a Services</h2>
            <div className="row ">
                <div className="col">
                    <div className="card shadow-lg text-start w-50 m-auto">

                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <input className="form-control" {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                                </div>
                                <div className="mb-3">
                                    <input className="form-control"{...register("img")} placeholder="image" />
                                </div>

                                <div className="mb-3">
                                    <textarea className="form-control" {...register("description")} placeholder="description" />
                                </div>
                                <div className="mb-3">
                                    <input className="form-control"  {...register("price")} placeholder="price" />
                                </div>
                                <div className="mb-3">
                                    <input className="form-control" {...register("pakeage", { required: true, maxLength: 20 })} placeholder="Package" />
                                </div>

                                <input type="submit" className="btn btn-outline-warning" value="Add Service" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default AddService;