import React, { useState } from "react";

const PromotionModal = ({ product, promotions, onClose }) => {
  const [newPromo, setNewPromo] = useState({
    percent: "",
    start_date: "",
    end_date: "",
  });

  const handleChange = (e) => {
    setNewPromo({ ...newPromo, [e.target.name]: e.target.value });
  };

  const handleAddPromotion = () => {
    if (!newPromo.percent || !newPromo.start_date || !newPromo.end_date) return;
    // Gửi lên backend tại đây nếu cần
    console.log("Khuyến mãi mới:", newPromo);
    alert("Khuyến mãi đã được thêm (giả lập)!");
    onClose(); // đóng modal sau khi thêm
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-xl p-6 rounded-xl shadow-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-lg font-bold"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Khuyến mãi của: <span className="text-blue-600">{product.name}</span>
        </h2>

        {/* Danh sách khuyến mãi */}
        <table className="w-full text-sm mb-4 border">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-3 border">%</th>
              <th className="py-2 px-3 border">Ngày bắt đầu</th>
              <th className="py-2 px-3 border">Ngày kết thúc</th>
            </tr>
          </thead>
          <tbody>
            {promotions.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center py-3 text-gray-500">
                  Chưa có khuyến mãi nào
                </td>
              </tr>
            ) : (
              promotions.map((promo, index) => (
                <tr key={index} className="text-center border-t">
                  <td className="py-2 px-3">{promo.percent}%</td>
                  <td className="py-2 px-3">{promo.start_date}</td>
                  <td className="py-2 px-3">{promo.end_date}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Thêm khuyến mãi mới */}
        <div className="border-t pt-4">
          <h3 className="font-semibold text-gray-700 mb-2">Thêm khuyến mãi</h3>
          <div className="grid grid-cols-3 gap-3 mb-4">
            <input
              type="number"
              name="percent"
              value={newPromo.percent}
              onChange={handleChange}
              placeholder="% giảm"
              className="border rounded px-2 py-1 text-sm"
            />
            <input
              type="date"
              name="start_date"
              value={newPromo.start_date}
              onChange={handleChange}
              className="border rounded px-2 py-1 text-sm"
            />
            <input
              type="date"
              name="end_date"
              value={newPromo.end_date}
              onChange={handleChange}
              className="border rounded px-2 py-1 text-sm"
            />
          </div>
          <button
            onClick={handleAddPromotion}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
          >
            + Thêm khuyến mãi
          </button>
        </div>
      </div>
    </div>
  );
};

export default PromotionModal;
