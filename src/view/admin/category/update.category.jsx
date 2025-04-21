import { useEffect, useState } from "react";
import { Pencil } from "lucide-react";
import { toast } from "react-toastify";
import { getCategoryById, updateCategory } from "../../../services/admin/category.service";
import { notification } from "../../../helpers/toast";

function UpdateCategory({ categoryId, reload }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [categoryName, setCategoryName] = useState("");

    useEffect(() => {
        if (isModalOpen) {
            const fetchCategory = async () => {
                try {
                    const res = await getCategoryById(categoryId);
                    if (res.status === 200 && res.data.result) {
                        setCategoryName(res.data.result.name);
                    }
                } catch (error) {
                    notification(toast, "Không thể lấy thông tin danh mục", "error");
                }
            };
            fetchCategory();
        }
    }, [isModalOpen, categoryId]);

    const handleUpdate = async () => {
        if (categoryName.trim() === "") {
            notification(toast, "Tên danh mục không được để trống");
            return;
        }

        try {
            const res = await updateCategory(categoryId, { name: categoryName });
            if (res.status === 200) {
                notification(toast, "Cập nhật danh mục thành công", "success");
                setIsModalOpen(false);
                reload();
            }
        } catch (err) {
            notification(toast, "Lỗi khi cập nhật danh mục", "error");
        }
    };

    return (
        <>
            <button
                className="flex items-center gap-1 hover:underline"
                onClick={() => setIsModalOpen(true)}
            >
                <Pencil size={14} /> Sửa
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4">
                        <h3 className="text-xl font-semibold text-teal-600 mb-4 text-center">
                            Cập nhật danh mục
                        </h3>
                        <input
                            type="text"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
                            placeholder="Tên danh mục"
                        />
                        <div className="mt-6 flex justify-between gap-4">
                            <button
                                onClick={handleUpdate}
                                className="w-full bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition"
                            >
                                Cập nhật
                            </button>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                            >
                                Huỷ
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default UpdateCategory;
