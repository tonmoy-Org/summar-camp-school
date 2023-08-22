import UserTable from "./UserTable";
import { useQuery } from "@tanstack/react-query";

const ManageUser = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users'); // Replace with the correct URL for fetching user data
        return res.json();
    });

    
    return (
        <div className="w-80 lg:w-10/12 mx-auto lg:p-3 mt-6 mb-12">
            <div className="bg-base-200 p-3">
                <h1 className="text-xl font-bold">User Details</h1>
                <p>Total user: <span className="font-bold">{users?.length}</span></p>
            </div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Make Instructor</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-base-200">
                            {users?.map((user, index) =>
                                <UserTable
                                    key={user._id}
                                    index={index}
                                    user={user}
                                    refetch={refetch}
                                ></UserTable>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUser;
