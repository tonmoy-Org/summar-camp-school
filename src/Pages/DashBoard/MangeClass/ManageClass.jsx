import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import ClassTable from './ClassTable';

const ManageClass = () => {
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('https://summer-camp-client.vercel.app/addClass');
        return res.json();
    });

    useEffect(() => {
        refetch();
    }, [refetch]);
    //    console.log(classes)
    return (
        <div className="w-80 lg:w-11/12 mx-auto lg:p-3 mt-6 mb-12">
            <div className="bg-base-200 p-3">
                <h1 className="text-xl font-bold">Classes Details</h1>
                <p>Total class: <span className="font-bold">{classes?.length}</span></p>
            </div>
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
                        <tbody className='bg-base-200'>
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
