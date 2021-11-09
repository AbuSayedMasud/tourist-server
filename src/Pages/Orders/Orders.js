import React, { useState } from 'react';

const Orders = ({ order }) => {
    const { _id, email, place, price, date, status } = order;

    // const [control, setControl] = useState(false);
    const [state, setState] = useState("");
    const handleStatus = e => {
        setState(e.target.value);
    }
    console.log(state);
    const handleRemove = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert("deleted successfully")
                    window.location.reload();

                }

            })
        console.log(id);
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
        <tr>
            <th>{email}</th>
            <th>{place}</th>
            <th>{price}</th>
            <th>{date}</th>
            <th>  <button className="btn btn-outline-success" onClick={() => handleUpdate(_id)}>{status}</button></th>
            <th><button onClick={() => handleRemove(_id)} className="btn btn-outline-warning">Remove</button></th>
        </tr>
    );
};

export default Orders;