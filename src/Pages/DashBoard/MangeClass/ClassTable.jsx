import { useState } from "react";
import Swal from 'sweetalert2'


const ClassTable = ({ addClass, index, refetch }) => {
    const { image, name, email, instructorName, seats, price, } = addClass;
    const [status, setUpdateStatus] = useState(addClass.status);
    const [isApproved, setIsApproved] = useState(false);
    const [isDenied, setIsDenied] = useState(false);

    const handleApproved = id => {
        fetch(`http://localhost:5000/addClass/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // Update the status
                    refetch();
                    setIsDenied(true);
                    setUpdateStatus('approved');
                    if (status === 'pending') {
                        fetch('http://localhost:5000/class', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(addClass)
                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data);
                                refetch();

                            })
                    }
                    else{
                        alert('Hello')
                    }

                }
            });
    };

    const handleDeny = id => {
        fetch(`http://localhost:5000/addClass/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'deny' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // Update the status
                    refetch();
                    setUpdateStatus('deny');
                    setIsApproved(true);
                }
            });
    };
    const handleFeedback = async (id) => {
        const { value: text } = await Swal.fire({
            input: 'textarea',
            inputLabel: 'Message',
            inputPlaceholder: 'Type your message here...',
            inputAttributes: {
                'aria-label': 'Type your message here'
            },
            showCancelButton: true
        })

        if (text) {
            Swal.fire(text)
        }
        console.log(text)
        const feedback = {
            feedback: text,
        }
        fetch(`http://localhost:5000/addClass/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(feedback)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // Update the status
                    refetch();

                }
            });

    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={image} />
                        </div>
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{instructorName}</td>
            <td>{email}</td>
            <td>{seats}</td>
            <td>{price}</td>
            <th className="lg:flex items-center justify-center">
                {status === 'approved' ? <span className="text-green-600 mx-3"> approved</span>
                    : <><button disabled={isApproved} onClick={() => handleApproved(addClass._id)} className="btn btn-ghost btn-xs">pending</button></>}

                {status === 'deny' ? <span className="text-green-600 mx-3"> Deny</span>
                    : <><button disabled={isDenied || status === 'approved' } onClick={() => handleDeny(addClass._id)} className="btn btn-ghost btn-xs">deny</button></>}

                <><button onClick={() => handleFeedback(addClass._id)} className="btn btn-ghost btn-xs">feedback</button></>
            </th>

        </tr>
    );
};

export default ClassTable;