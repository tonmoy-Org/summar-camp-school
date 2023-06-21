import { FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const UserTable = ({ user, index, refetch }) => {
    const { name, email, role} = user;

    const handleMakeAdmin = (user) => {
        console.log(user);
        fetch(`https://summer-camp-client-tonmoy-org.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is Admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };

    const handleMakeInstructor = (user) => {
        console.log(user);
        fetch(`https://summer-camp-client-tonmoy-org.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is Instructor now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>
                {role === 'admin' ? 'Admin' : (
                    <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-ghost btn-xs"
                    >
                        <FaUserShield />
                    </button>
                )}
            </td>
            <td>
                {role === 'instructor' ? 'Instructor': (
                    <button
                        onClick={() => handleMakeInstructor(user)}
                        className="btn btn-ghost btn-xs"
                    >
                        <FaUserShield />
                    </button>
                )}
            </td>
        </tr>
    );
};

export default UserTable;
