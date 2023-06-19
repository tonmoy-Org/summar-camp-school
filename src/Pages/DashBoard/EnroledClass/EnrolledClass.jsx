import { useQuery } from "@tanstack/react-query";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import SectionTitle from "../../../component/SectionTitle";
import EnrolledTable from "./EnrolledTable";

const EnrolledClass = () => {
    const { user } = useContext(AuthContext);
    const [sortField, setSortField] = useState("date");
    const [sortOrder, setSortOrder] = useState("asc");
    const { data: enrolledClass = [], refetch } = useQuery(
        ["enrolledClass", sortField, sortOrder],
        async () => {
            const res = await fetch(
                `https://summer-camp-school-server-tonmoy-org.vercel.app/enrolledClass/sort?email=${user?.email}&sortField=${sortField}&sortOrder=${sortOrder}`
            );
            return res.json();
        }
    );

    useEffect(() => {
        // Refetch the data when the sorting parameters change
        refetch();
    }, [sortField, sortOrder]);

    const handleSortChange = (event) => {
        const value = event.target.value;
        const [field, order] = value.split("-");
        setSortOrder(order);
        setSortField(field);
    };

    return (
        <div className="w-9/12 mx-auto lg:h-full">
            <SectionTitle subHeading="Enrolled Class" heading="My Enrolled Class" />
            <div className="mb-4 my-10">
                <label className="mr-2 text-xl font-medium">Sort By:</label>
                <select
                    className="px-5 py-1 border rounded"
                    value={`${sortField}-${sortOrder}`}
                    onChange={handleSortChange}
                >
                    <option className=" font-semibold" value="date-asc">
                        Date Ascending
                    </option>
                    <option className=" font-semibold" value="date-desc">
                        Date Descending
                    </option>
                </select>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>TransactionId</th>
                            <th>Date</th>
                            <th>Quantity</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {enrolledClass.map((enrolledItem, index) => (
                            <EnrolledTable
                                key={enrolledItem._id}
                                enrolledItem={enrolledItem}
                                index={index}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EnrolledClass;
