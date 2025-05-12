import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import CategoryRow from "../../../helpers/categoryRow";
import { ListCategory as ListCategories } from "../../../hooks/listCategory";
import CreateCategory from "./create.category"; // import thêm

function ListCategory() {
    const { categories, reload }= ListCategories();
    const [isModalOpen, setIsModalOpen] = useState(false); // Thêm state modal

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <ToastContainer position="top-center" autoClose={5000} pauseOnHover={false} />
            <div className="p-6 bg-white rounded shadow mx-auto border">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Danh mục sản phẩm</h2>
                    <button
                        onClick={handleOpenModal}
                        className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-all duration-200"
                    >
                        Thêm danh mục
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-t border-gray-200">
                        <thead className="bg-gray-100 text-sm">
                            <tr>
                                <th className="px-4 py-2 font-medium">Tên danh mục</th>
                                <th className="px-4 py-2 font-medium text-center">Trạng thái</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            {categories.map((category) => (
                                <CategoryRow
                                    key={category.id}
                                    category={category}
                                    categoryId={category.id}
                                    reload={reload}
                                    parentCategoryName={category.name}
                                />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal thêm danh mục cha */}
            {isModalOpen && (
                <CreateCategory
                    categoryId={0} // null để hiểu là thêm danh mục cha
                    reload={reload}
                    onClose={handleCloseModal}
                    parentCategoryName="(Gốc)"
                />
            )}
        </>
    );
}

export default ListCategory;
