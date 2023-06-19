

const EnrolledTable = ({ enrolledItem ,index}) => {
    const { itemName, date, price, status, transactionId, quantity } = enrolledItem;
    return (
        <tr className="bg-base-200">
            <th>{index + 1}</th>
            <td>{itemName }</td>
            <td>${price}</td>
            <td>{transactionId}</td>
            <td>{date}</td>
            <td>{quantity}</td>
            <td>{status}</td>
        </tr>
    );
};

export default EnrolledTable;