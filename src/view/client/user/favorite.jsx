import { Trash2, ShoppingCart } from 'lucide-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite, setFavorite } from '../../../components/action/index.action';
import { checkFavoriteExist, getFavorite, updateFavorite } from '../../../services/Client/user.service';
import { addCart } from '../../../components/action/index.action';
import { toast } from "react-toastify";
import { notification } from "../../../helpers/toast";
import { addToFavorite } from '../../../services/Client/user.service';


function Favorite() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.favorite);
  
    // GIỮ NGUYÊN LOGIC CŨ
    useEffect(() => {
        const loadFavorites = async () => {
            const local = JSON.parse(localStorage.getItem("favorite"));
            if (local) {
                try {
                    dispatch(setFavorite(local));
                } catch (e) {
                    console.error("Lỗi parse localStorage:", e);
                }
            } else {
                try {
                    const check = checkFavoriteExist();
                    console.log(check.data);
                    if (check.data) {
                        const res = await getFavorite();
                        dispatch(setFavorite(res.data));
                        localStorage.setItem("favorite", JSON.stringify(res.data));
                    }
                    
                } catch (err) {
                    console.error("Lỗi lấy danh sách yêu thích từ server:", err);
                }
            }
        };

        if (localStorage.getItem("accessToken")) {
            const res = checkFavoriteExist();
            if (res.data) {
                const res1 = getFavorite();
                dispatch(setFavorite(res1.data));
                localStorage.setItem("favorite", JSON.stringify(res.data));
            }
            else{
                addToFavorite(products);
                localStorage.setItem("favorite", JSON.stringify(res.data));
            }
        }else{
            const local = JSON.parse(localStorage.getItem("favorite")) || [];
            dispatch(setFavorite(local));
        }

        loadFavorites();
    }, [dispatch, products]);

    useEffect(() => {
        localStorage.setItem("favorite", JSON.stringify(products));
    }, [products]);

    const handleDelete = async (id, colorId, sizeId) => {
        const newList = products.filter(
            p => !(p.id === id && p.color.id === colorId && p.size.id === sizeId)
        );

        dispatch(removeFavorite({ id, color: { id: colorId }, size: { id: sizeId } }));

        try {
            await updateFavorite(newList);
        } catch (error) {
            console.error("Lỗi cập nhật danh sách yêu thích:", error);
        }
    };

    const handleAddToCart = async (product) => {
        console.log("Thêm vào giỏ hàng:", product);
        const cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            percent: product.percent,
            image: {
                id: product.image.id,
                src: product.image.src,
            },
            color: {
                id: product.color.id,
                name: product.color.name,
                hex: product.color.hex
            },
            size: {
                id: product.size.id,
                name: product.size.name
            },
            stock: product.stock,
            quantity: 1
        };
        dispatch(addCart(cartItem));
        console.log("oke");
        notification(toast, "Thêm sản phẩm vào giỏ hàng thành công thành công", "success");
    }

    // ĐÃ LOẠI BỎ PHẦN CHÈN LINK BOOTSTRAP TẠI ĐÂY VÌ DÙNG TAILWIND

    return (
        <div className="w-full px-4">
            <div className="bg-white shadow-xl rounded-xl border-none overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gradient-to-r from-[#6f42c1] to-[#e91e63] text-white">
                                <th className="text-center py-4 px-2 font-bold uppercase text-sm">STT</th>
                                <th className="text-center py-4 px-2 font-bold uppercase text-sm">HÌNH ẢNH</th>
                                <th className="text-center py-4 px-2 font-bold uppercase text-sm">TÊN SẢN PHẨM</th>
                                <th className="text-center py-4 px-2 font-bold uppercase text-sm">SIZE</th>
                                <th className="text-center py-4 px-2 font-bold uppercase text-sm">MÀU SẮC</th>
                                <th className="text-center py-4 px-2 font-bold uppercase text-sm">GIÁ</th>
                                <th className="text-center py-4 px-2 font-bold uppercase text-sm">THAO TÁC</th>
                            </tr>
                        </thead>
                        <tbody className="bg-[#fdf2f8]">
                            {products.length === 0 ? (
                                <tr>
                                    <td colSpan="7" className="text-center py-20 text-gray-500 text-lg">
                                        Không có sản phẩm yêu thích nào.
                                    </td>
                                </tr>
                            ) : (
                                products.map((product, index) => (
                                    <tr
                                        key={`${product.id}-${product.color.id}-${product.size.id}`}
                                        className="border-b border-[#fce7f3] hover:bg-pink-50 transition-colors"
                                    >
                                        <td className="text-center py-5 px-2 align-middle font-semibold text-gray-700">
                                            {index + 1}
                                        </td>
                                        <td className="text-center py-5 px-2 align-middle">
                                            <img
                                                src={product.image?.src}
                                                alt={product.name}
                                                className="rounded-lg shadow-sm w-16 h-16 object-cover mx-auto"
                                            />
                                        </td>
                                        <td className="text-center py-5 px-2 align-middle font-semibold text-gray-800">
                                            {product.name}
                                        </td>
                                        <td className="text-center py-5 px-2 align-middle">
                                            <span className="inline-block rounded-full px-4 py-1 bg-gray-200 text-[#6f42c1] text-sm font-medium">
                                                {product.size?.name}
                                            </span>
                                        </td>
                                        <td className="text-center py-5 px-2 align-middle">
                                            <div className="flex items-center justify-center gap-2">
                                                <div
                                                    className="rounded-full w-5 h-5 border border-gray-300"
                                                    style={{ backgroundColor: product.color?.code }}
                                                ></div>
                                                <span className="font-medium text-gray-700">{product.color?.name}</span>
                                            </div>
                                        </td>
                                        <td className="text-center py-5 px-2 align-middle text-red-600 font-bold text-lg">
                                            {product.price} ₫
                                        </td>
                                        <td className="text-center py-5 px-2 align-middle">
                                            <div className="flex items-center justify-center gap-3">
                                                <button
                                                    onClick={() => handleAddToCart(product)}
                                                    className="w-10 h-10 rounded-full border border-green-500 text-green-500 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all shadow-sm"
                                                    title="Thêm vào giỏ hàng"
                                                >
                                                    <ShoppingCart size={18} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(product.id, product.color.id, product.size.id)}
                                                    className="w-10 h-10 rounded-full border border-red-500 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all shadow-sm"
                                                    title="Xóa khỏi danh sách yêu thích"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Favorite;