import React, { useEffect, useState } from 'react';
import Orders from '../Orders/Orders';

const ManageOrder = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://desolate-mountain-62875.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    console.log(orders);
    return (

        <div className="py-5">
            <div className="container">
                <h2>Order Available :{orders.length}</h2>
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
                                orders.map(order => <Orders order={order} key={order._id}></Orders>)
                            }
                        
                    </thead>
                </table>



            </div>

        </div>
    );
};

export default ManageOrder;