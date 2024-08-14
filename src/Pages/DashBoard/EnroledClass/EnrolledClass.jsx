import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

import EnrolledTable from "./EnrolledTable";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";

const EnrolledClass = () => {
    const { user } = useContext(AuthContext);
    const [sortField, setSortField] = useState("date");
    const [sortOrder, setSortOrder] = useState("asc");

    const { data: enrolledClass = [] } = useQuery({
        queryKey: ['enrolledClass'],
        queryFn: async () => {
            const res = await fetch(`/enrolledClass/sort?email=${user?.email}&sortField=${sortField}&sortOrder=${sortOrder}`);
            return res.json();
        }
    });

    const handleSortChange = (event) => {
        const value = event.target.value;
        const [field, order] = value.split("-");
        setSortOrder(order);
        setSortField(field);
    };

    return (
        <div className="w-10/12 mx-auto lg:h-full">
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
            <div className="overflow-x-auto w-80">
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
