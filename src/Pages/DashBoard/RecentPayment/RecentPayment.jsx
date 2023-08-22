import useEnrolledClass from "../../../hooks/useEnrolledClass";
import RecentPaymentTable from "./RecentPaymentTable";

const RecentPayment = () => {
    const [enrolledClass] = useEnrolledClass();
    return (
        <div>
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
                        <RecentPaymentTable
                            key={enrolledItem._id}
                            enrolledItem={enrolledItem}
                            index={index}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RecentPayment;