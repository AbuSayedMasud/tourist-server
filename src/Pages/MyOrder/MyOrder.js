import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth();
    const email = user.email;
    console.log(email);
    const [order, setOrder] = useState([]);
    const [state, setState] = useState("");

    useEffect(() => {
        const uri = `https://desolate-mountain-62875.herokuapp.com/orders/${email}`;
        console.log(uri);
        fetch(uri)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    console.log(order);
    const handleRemove = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    window.location.reload();

                }

            })

        console.log(id);
    }
    const handleStatus = e => {
        setState(e.target.value);
    }
    const handleUpdate = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ state }),

        })
        window.location.reload();

        console.log(id);
    }
    return (
        <div className="py-5">
            <div className="container">
                <h2>Order Available :{order.length}</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Email</th>
                            <th scope="col">Destination</th>
                            <th scope="col">Cost</th>
                            <th scope="col">Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Handle</th>

                        </tr>
                        {
                            order.map(order =>
                                <tr key={order._id}>
                                    <th>{order.email}</th>
                                    <th>{order.place}</th>
                                    <th>{order.price}</th>
                                    <th>{order.date}</th>
                                    <th><th>  <button className="btn btn-outline-success" onClick={() => handleUpdate(order._id)}>{order.status}</button></th></th>
                                    <th><button onClick={() => handleRemove(order._id)} className="btn btn-outline-warning">Remove</button></th>
                                </tr>

                            )
                        }

                    </thead>
                </table>

            </div>

        </div>
    );
};

export default MyOrder;