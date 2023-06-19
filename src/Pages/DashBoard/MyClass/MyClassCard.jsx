

const MyClassCard = ({ myClass }) => {
    const { className, enrolled, image, instructorName, status, feedback } = myClass;
    console.log(feedback)
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={image}/></figure>
                <div className="card-body">
                    <h2 className="card-title">{className}</h2>
                    <p>Instructor: {instructorName}</p>
                    <p>Enrolled: {enrolled}</p>
                    <p>Status: {status}</p>
                    <p>{ status === 'deny' ? <>Feedback: {feedback}</> : <></> }</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-sm btn-neutral">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyClassCard;