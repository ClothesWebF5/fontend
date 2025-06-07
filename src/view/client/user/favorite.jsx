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
  
    // Đọc từ localStorage hoặc fetch từ server khi component mount
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
                    else {
                        const res1 = addToFavorite();
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
    }, [dispatch]);

    // Luôn đồng bộ localStorage mỗi khi store.favorite thay đổi
    useEffect(() => {
        localStorage.setItem("favorite", JSON.stringify(products));
    }, [products]);

    const handleDelete = async (id, colorId, sizeId) => {
        const newList = products.filter(
            p => !(p.id === id && p.color.id === colorId && p.size.id === sizeId)
        );

        // Cập nhật Redux
        dispatch(removeFavorite({ id, color: { id: colorId }, size: { id: sizeId } }));

        try {
            // Gửi toàn bộ danh sách favorite mới lên backend
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
        notification(toast, "Thêm sản phẩm vào giỏ hàng thành công thành công", "success");
    }

    return (
        <div className="container-fluid px-4">
            <div className="card shadow-lg border-0 rounded-3 overflow-hidden">
                <div className="table-responsive">
                    <table className="table table-hover mb-0">
                        <thead className="bg-gradient text-white" style={{background: 'linear-gradient(135deg, #6f42c1, #e91e63)'}}>
                            <tr>
                                <th className="text-center py-3 fw-bold">STT</th>
                                <th className="text-center py-3 fw-bold">HÌNH ẢNH</th>
                                <th className="text-center py-3 fw-bold">TÊN SẢN PHẨM</th>
                                <th className="text-center py-3 fw-bold">SIZE</th>
                                <th className="text-center py-3 fw-bold">MÀU SẮC</th>
                                <th className="text-center py-3 fw-bold">GIÁ</th>
                                <th className="text-center py-3 fw-bold">THAO TÁC</th>
                            </tr>
                        </thead>
                        <tbody style={{backgroundColor: '#fdf2f8'}}>
                            {products.length === 0 ? (
                                <tr>
                                    <td colSpan="7" className="text-center py-5 text-muted fs-5">
                                        Không có sản phẩm yêu thích nào.
                                    </td>
                                </tr>
                            ) : (
                                products.map((product, index) => (
                                    <tr
                                        key={`${product.id}-${product.color.id}-${product.size.id}`}
                                        className="border-bottom"
                                        style={{borderColor: '#fce7f3 !important'}}
                                    >
                                        <td className="text-center py-4 align-middle fw-semibold">{index + 1}</td>
                                        <td className="text-center py-4 align-middle">
                                            <img
                                                src={product.image?.src}
                                                alt={product.name}
                                                className="rounded-3 shadow-sm"
                                                style={{width: '64px', height: '64px', objectFit: 'cover'}}
                                            />
                                        </td>
                                        <td className="text-center py-4 align-middle fw-semibold">{product.name}</td>
                                        <td className="text-center py-4 align-middle">
                                            <span className="badge rounded-pill px-3 py-2" style={{backgroundColor: '#e9ecef', color: '#6f42c1'}}>
                                                {product.size?.name}
                                            </span>
                                        </td>
                                        <td className="text-center py-4 align-middle">
                                            <div className="d-flex align-items-center justify-content-center gap-2">
                                                <div
                                                    className="rounded-circle"
                                                    style={{ 
                                                        backgroundColor: product.color?.code,
                                                        width: '20px',
                                                        height: '20px'
                                                    }}
                                                ></div>
                                                <span className="fw-medium">{product.color?.name}</span>
                                            </div>
                                        </td>
                                        <td className="text-center py-4 align-middle text-danger fw-bold fs-5">
                                            {product.price} ₫
                                        </td>
                                        <td className="text-center py-4 align-middle">
                                            <div className="d-flex align-items-center justify-content-center gap-2">
                                                <button
                                                    onClick={() => handleAddToCart(product)}
                                                    className="btn btn-outline-success btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center"
                                                    style={{width: '40px', height: '40px'}}
                                                    title="Thêm vào giỏ hàng"
                                                >
                                                    <ShoppingCart size={16} />
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(product.id, product.color.id, product.size.id)}
                                                    className="btn btn-outline-danger btn-sm rounded-circle p-2 d-flex align-items-center justify-content-center"
                                                    style={{width: '40px', height: '40px'}}
                                                    title="Xóa khỏi danh sách yêu thích"
                                                >
                                                    <Trash2 size={16} />
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