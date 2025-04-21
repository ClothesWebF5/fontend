import React, { useState } from "react";
import {
  Pencil,
  Trash2,
  PercentCircle,
} from "lucide-react";
import PromotionModal from "./dd.jsx";

const AdminProductTable = ({ products, onEdit, onDelete }) => {
  const [selectedPromotions, setSelectedPromotions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewPromotions = (product) => {
    setSelectedProduct(product);
    setSelectedPromotions(product.promotions || []);
    setShowModal(true);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg overflow-x-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Danh sách sản phẩm</h2>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-sm">
            <th className="px-4 py-2 text-left">Ảnh</th>
            <th className="px-4 py-2 text-left">Tên</th>
            <th className="px-4 py-2 text-left">Danh mục</th>
            <th className="px-4 py-2">Giá</th>
            <th className="px-4 py-2">Khuyến mãi</th>
            <th className="px-4 py-2">Tồn kho</th>
            <th className="px-4 py-2">Đã bán</th>
            <th className="px-4 py-2">Trạng thái</th>
            <th className="px-4 py-2 text-center">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => {
            const finalPrice = p.discount
              ? p.price - (p.price * p.discount) / 100
              : p.price;

            return (
              <tr
                key={p.product_id}
                className="border-b last:border-none hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-14 h-14 object-cover rounded-md"
                  />
                </td>
                <td className="px-4 py-3 font-medium text-gray-800">{p.name}</td>
                <td className="px-4 py-3">{p.category}</td>
                <td className="px-4 py-3 text-center text-gray-800">${finalPrice.toFixed(2)}</td>
                <td className="px-4 py-3 text-center">
                  <button
                    onClick={() => handleViewPromotions(p)}
                    className="text-blue-500 hover:underline text-sm"
                  >
                    Xem khuyến mãi
                  </button>
                </td>
                <td className="px-4 py-3 text-center">{p.stock}</td>
                <td className="px-4 py-3 text-center">{p.sold_count}</td>
                <td className="px-4 py-3 text-center">
                  {p.deleted ? (
                    <span className="text-red-500">Ẩn</span>
                  ) : (
                    <span className="text-green-600">Hiện</span>
                  )}
                </td>
                <td className="px-4 py-3 text-center space-x-2">
                  <button
                    onClick={() => onEdit(p.product_id)}
                    className="p-1.5 bg-blue-500 text-white rounded-full hover:bg-blue-600"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    onClick={() => onDelete(p.product_id)}
                    className="p-1.5 bg-red-500 text-white rounded-full hover:bg-red-600"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Modal hiển thị khuyến mãi */}
      {showModal && (
        <PromotionModal
          product={selectedProduct}
          promotions={selectedPromotions}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default AdminProductTable;
