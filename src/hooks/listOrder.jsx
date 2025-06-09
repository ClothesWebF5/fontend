// src/hooks/listOrder.js
import { useEffect, useState } from "react";
// import { OrderService } from "../services/order.service";
import { toast } from "react-toastify";
import { getAllOrders } from "../services/admin/order.service";
export const useListOrdersAdmin = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const data = await getAllOrders();
      setOrders(data.result);
    } catch (error) {
      toast.error("Lỗi khi tải đơn hàng.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return {
    orders,
    loading,
    reload: fetchOrders
  };
};
