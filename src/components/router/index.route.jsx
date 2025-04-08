import Layout from "../layout/admin/index.layout";
import DashboardPage from "../../view/admin/dashboard/index.dashboard"
import Home from "../../view/client/home/index.home.jsx";
import Login from "../../view/client/user/login.jsx";
import Register from "../../view/client/user/register.jsx";
import Error from "../../components/error/index.error.jsx"
import Infor from "../../view/client/user/infor.jsx";
import Auth from "../auth/index.auth.jsx";
import AdminRoute from "../auth/admin.auth.jsx";
import ListRole from "../../view/admin/role/index.role.jsx";
import Permission from "../../view/admin/role/permission.role.jsx";
export const router = [
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        index: true,
        element: <Home />
    },
    {
        element: <Auth />,
        children: [
            {
                path: "user/infor",
                element: <Infor />
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminRoute />, 
        children: [
            {
                element: <Layout />,
                children: [
                    {
                        path: "dashboard",
                        element: <DashboardPage />,
                    },
                    {
                        path: "analytics",
                        element: <h1 className="title">Analytics</h1>,
                    },
                    {
                        path: "reports",
                        element: <h1 className="title">Reports</h1>,
                    },
                    {
                        path: "customers",
                        element: <h1 className="title">Customers</h1>,
                    },
                    {
                        path: "new-customer",
                        element: <h1 className="title">New Customer</h1>,
                    },
                    {
                        path: "verified-customers",
                        element: <h1 className="title">Verified Customers</h1>,
                    },
                    {
                        path: "products",
                        element: <h1 className="title">Products</h1>,
                    },
                    {
                        path: "new-product",
                        element: <h1 className="title">New Product</h1>,
                    },
                    {
                        path: "inventory",
                        element: <h1 className="title">Inventory</h1>,
                    },
                    {
                        path: "roles",
                        element: <ListRole />
                    },
                    {
                        path: "permissions",
                        element: <Permission />
                    },
                    {
                        path: "settings",
                        element: <h1 className="title">Settings</h1>,
                    },
                ],
            },
        ],
    },
    {
        path: "*",
        element: <Error />
    }
];
export default router;