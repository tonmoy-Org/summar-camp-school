import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import ClassTable from './ClassTable';

const ManageClass = () => {
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('https://summer-camp-school-server-tonmoy-org.vercel.app/addClass');
        return res.json();
    });

    useEffect(() => {
        refetch();
    }, [refetch]);
//    console.log(classes)
    return (
        <div>
            <div>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Class Image</th>
                                <th>Class name</th>
                                <th>Instructor name</th>
                                <th>Instructor email</th>
                                <th>Available seats</th>
                                <th>Price</th>
                                <th className="text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {classes?.map((addClass, index) => (
                                <ClassTable
                                    key={addClass._id}
                                    addClass={addClass}
                                    index={index}
                                    refetch={refetch}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageClass;
