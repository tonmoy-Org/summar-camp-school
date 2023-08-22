import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import RecentPayment from "../RecentPayment/RecentPayment";


const AdminHome = () => {
    const { user } = useAuth();
    const { data: stats = [] } = useQuery(['stats'], async () => {
        const res = await fetch('https://summer-camp-client.vercel.app/admin-status'); // Replace with the correct URL for fetching user data
        return res.json();
    });
    console.log(stats)
    return (
        <div className="mb-16">
            <h2 className="text-xl mb-8 pt-8 w-10/12 mx-auto">Hi, Welcome back <span className="font-semibold">{user?.displayName}</span></h2>
            <div className='grid lg:grid-cols-3 text-center w-10/12 mx-auto gap-5'>
                <div className="card w-80 shadow-xl bg-[#626dd4b5]">
                    <div className="card-body">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div className="stat-title">Approved Classes</div>
                        <div className="stat-value">{stats?.classes}</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>
                </div>
                <div className="card w-80 bg-[#626dd4b5] shadow-xl">
                    <div className="card-body">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                        </div>
                        <div className="stat-title">New Users</div>
                        <div className="stat-value">{stats?.users}</div>
                    </div>
                </div>
                <div className="card w-80 bg-[#626dd4b5] shadow-xl">
                    <div className="card-body">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div className="stat-title">Revenue</div>
                        <div className="stat-value">$ {stats?.revenue}</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                </div>
            </div>
            <div className="w-10/12 mx-auto mt-16">
                <h1 className="text-xl">Recent History</h1>
                <div>
                    <RecentPayment></RecentPayment>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;