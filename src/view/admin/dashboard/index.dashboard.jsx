import {
    CreditCard,
    DollarSign,
    Package,
    TrendingUp,
    Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
    Area,
    AreaChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import { useTheme } from "../../../hooks/use-theme";
import {
    thongkeCustomers,
    thongkeOrder,
    thongkeProduct,
    thongkeRecent,
    thongkeTopOrder,
    thongkeTotalMonth,
} from "../../../services/admin/dashboard.jsx";

const DashboardPage = () => {
    const { theme } = useTheme();
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalOrders, setTotalOrders] = useState(0);
    const [totalCustomers, setTotalCustomers] = useState(0);
    const [thongkeRecentSales, setThongkeRecentSales] = useState([]);
    const [thongkeTopOrder1, setThongkeTopOrder1] = useState([]);
    const [overviewData, setOverviewData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const res = await thongkeTotalMonth();
            const data = res.data;

            const fullYear = Array.from({ length: 12 }, (_, i) => {
                const month = i + 1;
                const found = data.find((item) => item.month === month);
                return {
                    month,
                    total: found ? found.total_month : 0,
                };
            });

            setOverviewData(fullYear);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const tinhTotalProducts = async () => {
            const res = await thongkeProduct();
            setTotalProducts(res.data);
        };
        tinhTotalProducts();
    }, []);

    useEffect(() => {
        const tinhTotalOrder = async () => {
            const res = await thongkeOrder();
            setTotalOrders(res.data);
        };
        tinhTotalOrder();
    }, []);

    useEffect(() => {
        const tinhTotalCustomers = async () => {
            const res = await thongkeCustomers();
            setTotalCustomers(res.data);
        };
        tinhTotalCustomers();
    }, []);

    useEffect(() => {
        const tinhRecentSales = async () => {
            const res = await thongkeRecent();
            setThongkeRecentSales(res.data);
        };
        tinhRecentSales();
    }, []);

    useEffect(() => {
        const fetchTopOrder = async () => {
            const res = await thongkeTopOrder();
            setThongkeTopOrder1(res.data);
        };
        fetchTopOrder();
    }, []);

    return (
        <>
            {
                overviewData.length > 0 &&
                thongkeTopOrder1.length > 0 &&
                thongkeRecentSales.length > 0 && (
                    <div className="flex flex-col gap-y-4">
                        <h1 className="title">Dashboard</h1>

                        {/* Tổng quan */}
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {/* Total Products */}
                            <div className="card">
                                <div className="card-header">
                                    <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 dark:bg-blue-600/20 dark:text-blue-600">
                                        <Package size={26} />
                                    </div>
                                    <p className="card-title">Total Products</p>
                                </div>
                                <div className="card-body bg-slate-100 dark:bg-slate-950">
                                    <p className="text-3xl font-bold text-slate-900 dark:text-slate-50">
                                        {totalProducts}
                                    </p>
                                    <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                                        <TrendingUp size={18} />
                                        25%
                                    </span>
                                </div>
                            </div>

                            {/* Total Orders */}
                            <div className="card">
                                <div className="card-header">
                                    <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 dark:bg-blue-600/20 dark:text-blue-600">
                                        <DollarSign size={26} />
                                    </div>
                                    <p className="card-title">Total Paid Orders</p>
                                </div>
                                <div className="card-body bg-slate-100 dark:bg-slate-950">
                                    <p className="text-3xl font-bold text-slate-900 dark:text-slate-50">
                                        {totalOrders}
                                    </p>
                                    <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                                        <TrendingUp size={18} />
                                        12%
                                    </span>
                                </div>
                            </div>

                            {/* Total Customers */}
                            <div className="card">
                                <div className="card-header">
                                    <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 dark:bg-blue-600/20 dark:text-blue-600">
                                        <Users size={26} />
                                    </div>
                                    <p className="card-title">Total Customers</p>
                                </div>
                                <div className="card-body bg-slate-100 dark:bg-slate-950">
                                    <p className="text-3xl font-bold text-slate-900 dark:text-slate-50">
                                        {totalCustomers}
                                    </p>
                                    <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                                        <TrendingUp size={18} />
                                        15%
                                    </span>
                                </div>
                            </div>

                            {/* Sales (Hardcoded) */}
                            <div className="card">
                                <div className="card-header">
                                    <div className="rounded-lg bg-blue-500/20 p-2 text-blue-500 dark:bg-blue-600/20 dark:text-blue-600">
                                        <CreditCard size={26} />
                                    </div>
                                    <p className="card-title">Sales</p>
                                </div>
                                <div className="card-body bg-slate-100 dark:bg-slate-950">
                                    <p className="text-3xl font-bold text-slate-900 dark:text-slate-50">
                                        10
                                    </p>
                                    <span className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-2 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                                        <TrendingUp size={18} />
                                        19%
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Chart & Recent Buyers */}
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
                            <div className="card col-span-1 md:col-span-2 lg:col-span-4">
                                <div className="card-header">
                                    <p className="card-title">Overview</p>
                                </div>
                                <div className="card-body p-0">
                                    <ResponsiveContainer width="100%" minWidth={500} height={300}>
                                        <AreaChart data={overviewData}>
                                            <defs>
                                                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                                                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
                                                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                                                </linearGradient>
                                            </defs>
                                            <Tooltip
                                                cursor={false}
                                                formatter={(value) => `${value.toLocaleString()}₫`}
                                                labelFormatter={(label) => `Tháng ${label}`}
                                            />
                                            <XAxis
                                                dataKey="month"
                                                interval={0}
                                                stroke={theme === "light" ? "#475569" : "#94a3b8"}
                                                tickMargin={6}
                                            />
                                            <YAxis
                                                stroke={theme === "light" ? "#475569" : "#94a3b8"}
                                                tickFormatter={(value) => `${value}₫`}
                                                tickMargin={6}
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="total"
                                                stroke="#2563eb"
                                                fillOpacity={1}
                                                fill="url(#colorTotal)"
                                            />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            {/* Recent Buyers */}
                            <div className="card col-span-1 md:col-span-2 lg:col-span-3">
                                <div className="card-header">
                                    <p className="card-title">Recent Buyers</p>
                                </div>
                                <div className="card-body h-[300px] overflow-auto p-0">
                                    {thongkeRecentSales.map((sale, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between gap-x-4 py-2 pr-2"
                                        >
                                            <div className="flex items-center gap-x-4">
                                                <img
                                                    src={sale.src}
                                                    alt={sale.name}
                                                    className="size-10 rounded-full object-cover"
                                                />
                                                <div className="flex flex-col gap-y-1">
                                                    <p className="font-medium text-slate-900 dark:text-slate-50">
                                                        {sale.name}
                                                    </p>
                                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                                        {sale.email}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="font-medium text-slate-900 dark:text-slate-50">
                                                {sale.totalPrice.toLocaleString()}₫
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Top Products */}
                        <div className="card">
                            <div className="card-header">
                                <p className="card-title">Top Products</p>
                            </div>
                            <div className="card-body p-0">
                                <div className="relative h-[500px] w-full overflow-auto">
                                    <table className="table">
                                        <thead className="table-header">
                                            <tr className="table-row">
                                                <th className="table-head">STT</th>
                                                <th className="table-head">Image</th>
                                                <th className="table-head">Name</th>
                                                <th className="table-head">Price</th>
                                                <th className="table-head">Quantity Sold</th>
                                            </tr>
                                        </thead>
                                        <tbody className="table-body">
                                            {thongkeTopOrder1.map((item, index) => (
                                                <tr key={index} className="table-row">
                                                    <td className="table-cell">{index + 1}</td>
                                                    <td className="table-cell">
                                                        <img
                                                            src={item.src}
                                                            alt={item.name}
                                                            className="h-10 w-10 rounded-full object-cover"
                                                        />
                                                    </td>
                                                    <td className="table-cell">{item.name}</td>
                                                    <td className="table-cell">{item.price.toLocaleString()}₫</td>
                                                    <td className="table-cell">{item.totalQuantity}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                )
            }
        </>
    );
};

export default DashboardPage;
