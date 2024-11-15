import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const AdminPage = () => {
    return (
        <div className="admin-page">
            <Sidebar />
            <section>
                <Outlet />
            </section>
        </div>
    );
};

export default AdminPage;
