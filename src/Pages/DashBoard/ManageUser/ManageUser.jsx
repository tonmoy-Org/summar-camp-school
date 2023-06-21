import UserTable from "./UserTable";
import { useQuery } from "@tanstack/react-query";

const ManageUser = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users'); // Replace with the correct URL for fetching user data
        return res.json();
    });

    
    return (
        <div>
            <div>User: {users?.length}</div>
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
                        <tbody>
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
