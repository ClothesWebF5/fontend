import React, { useEffect, useState } from "react";
import AdminProductTable from "./card.product";
import mockProducts from "../../../constants/index";

const AdminProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Gọi API ở đây nếu có
    setProducts(mockProducts);
  }, []);

  const handleEdit = (id) => {
    alert("Edit sản phẩm: " + id);
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
      setProducts(products.filter((p) => p.product_id !== id));
    }
  };

  const handleAddDiscount = (id) => {
    alert("Thêm mã giảm giá cho sản phẩm: " + id);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Quản lý sản phẩm</h1>
      <AdminProductTable
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAddDiscount={handleAddDiscount}
      />
    </div>
  );
};

export default AdminProductPage;
