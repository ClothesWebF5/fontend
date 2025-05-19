import { Check, Minus, Plus, RefreshCcw, ShieldCheck, ShoppingBag, Star, Truck } from "lucide-react";
import { useState } from "react";
import CardProduct from "../../../components/pages/home/CardProduct";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


const ProductDetail = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("description");
    const [isFavorite, setIsFavorite] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [showGuide, setShowGuide] = useState(false);
    const colors = ["#e0e0e0", "#264653", "#f4a261"];
    const sizes = ["S", "M", "L", "XL"];

    const sizeGuide = [
        { name: "S", description: "Dành cho người cao dưới 1m60, dưới 50kg" },
        { name: "M", description: "Chiều cao 1m60 - 1m70, nặng 50 - 60kg" },
        { name: "L", description: "Chiều cao 1m70 - 1m75, nặng 60 - 70kg" },
        { name: "XL", description: "Trên 1m75 hoặc trên 70kg" },
    ];

    const [products] = useState([
        { id: 1, name: 'Military Winter Jacket', rating: 4, price: '$34.00', oldPrice: '$50.00', image: '/api/placeholder/80/100', category: 'JACKET' },
        { id: 2, name: 'Pure Garment Dyed Cotton Shirt', rating: 5, price: '$45.00', oldPrice: '$60.00', image: '/api/placeholder/80/100', category: 'SHIRT' },
        { id: 3, name: 'Mens Flat Cap Jacket', rating: 3, price: '$59.00', oldPrice: '$75.00', image: '/api/placeholder/80/100', category: 'JACKET' },
        { id: 4, name: 'Mens Flower Print Shirt', rating: 4, price: '$45.00', oldPrice: '$60.00', image: '/api/placeholder/80/100', category: 'SHIRT' },
        { id: 5, name: 'Elegant Mens Leather Boots', rating: 5, price: '$95.00', oldPrice: '$115.00', image: '/api/placeholder/80/100', category: 'SHOES' },
        { id: 6, name: 'Pocket Watch Leather Pouch', rating: 4, price: '$108.00', oldPrice: '$120.00', image: '/api/placeholder/80/100', category: 'JEWELRY' },
        { id: 7, name: 'Apple Watch Series 5 40mm', rating: 5, price: '$300.00', oldPrice: '$350.00', image: '/api/placeholder/80/100', category: 'TECHNOLOGY' },
        { id: 8, name: 'Womens Party Dress Shoes', rating: 4, price: '$125.00', oldPrice: '$150.00', image: '/api/placeholder/80/100', category: 'WOMEN' },
        { id: 9, name: 'Mens Winter Jacket', rating: 4, price: '$95.00', oldPrice: '$120.00', image: '/api/placeholder/80/100', category: 'JACKET' },
        { id: 10, name: 'Sports & Running Shoes - Black', rating: 5, price: '$59.00', oldPrice: '$80.00', image: '/api/placeholder/80/100', category: 'SHOES' },
        { id: 11, name: 'Mens Leather Formal Wear Shoes', rating: 4, price: '$59.00', oldPrice: '$80.00', image: '/api/placeholder/80/100', category: 'SHOES' },
        { id: 12, name: 'Pastel Basic T-shirt', rating: 5, price: '$29.00', oldPrice: '$39.00', image: '/api/placeholder/80/100', category: 'WOMEN' },
    ]);
    const features = [
        { icon: <Truck size={16} />, text: "Giao hàng miễn phí cho đơn hàng từ 300.000₫" },
        { icon: <ShieldCheck size={16} />, text: "Bảo hành chất lượng 30 ngày" },
        { icon: <RefreshCcw size={16} />, text: "Đổi trả trong vòng 7 ngày" }
    ];

    const decrementQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat("vi-VN").format(price) + "₫";
    };

    return (
        <>
            <div className="max-w-7xl mx-auto p-4 font-sans">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left: Product Images */}
                    <div className="space-y-4">
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}
                            loop={true}
                            spaceBetween={10}
                            navigation={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper2"
                        >
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    {/* Right: Product Details */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                                Áo Thun Nữ Cao Cấp Premium Cotton Sure Fashion
                            </h1>
                            <div className="flex items-center mt-2 space-x-4">
                                <div className="flex items-center">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} size={18} className="text-yellow-400 fill-yellow-400" />
                                    ))}
                                    <span className="ml-2 text-sm text-gray-600">(7 đánh giá)</span>
                                </div>
                                <span className="text-sm text-gray-500">Đã bán: 213</span>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="flex items-baseline space-x-3">
                            <span className="text-2xl font-bold text-red-600">{formatPrice(149000)}</span>
                            <span className="text-lg text-gray-500 line-through">{formatPrice(290000)}</span>
                            <span className="text-sm font-medium px-2 py-1 bg-red-100 text-red-600 rounded">-49%</span>
                        </div>

                        {/* Features */}
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <ul className="space-y-2">
                                {features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-gray-700">
                                        <span className="mr-2 text-blue-600">{feature.icon}</span>
                                        {feature.text}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Size Options */}
                        <div className="flex items-center space-x-2 mt-3">
                            {colors.map((color, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedColor(color)}
                                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${selectedColor === color ? "border-gray-600" : "border-gray-300"
                                        }`}
                                    style={{ backgroundColor: color }}
                                >
                                    {selectedColor === color && <Check size={12} className="text-white" />}
                                </button>
                            ))}
                        </div>

                        {/* Size Selection */}
                        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <div className="flex flex-wrap gap-3">
                                {sizes.map((size, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedSize(size)}
                                        className={`min-w-[48px] px-4 py-2 text-sm font-medium border rounded-lg transition-colors duration-200
                                        ${selectedSize === size
                                                ? "bg-black text-white border-black shadow-md"
                                                : "bg-white text-gray-700 border-gray-300 hover:border-black hover:text-black"
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                            <div
                                onClick={() => setShowGuide(!showGuide)}
                                className="text-sm text-blue-600 hover:cursor-pointer ml-1 sm:ml-4 whitespace-nowrap">
                                Tư vấn size
                            </div>
                        </div>


                        {/* Quantity */}
                        <div className="mt-6">
                            <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">
                                Số lượng
                            </h3>
                            <div className="flex items-center gap-6">
                                <div className="flex items-center border border-gray-300 rounded-full overflow-hidden shadow-sm">
                                    <button
                                        onClick={decrementQuantity}
                                        className="px-3 py-2  text-gray-600 transition"
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <input
                                        type="text"
                                        readOnly
                                        value={quantity}
                                        className="w-10 text-center py-2 bg-white text-gray-800 text-sm font-medium focus:outline-none"
                                    />
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="px-3 py-2  text-gray-600 transition"
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>

                                <span className="text-sm text-gray-500">
                                    Còn lại: <span className="font-semibold text-gray-700">86</span> sản phẩm
                                </span>
                            </div>
                        </div>


                        {/* Total */}
                        <div className="py-3 border-t border-b border-gray-200">
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-medium text-gray-700">Tạm tính:</span>
                                <span className="text-xl font-bold text-red-600">{formatPrice(149000 * quantity)}</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <button className="flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                                <ShoppingBag size={20} />
                                <span>Mua ngay</span>
                            </button>
                            <button className="flex items-center justify-center space-x-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-colors">
                                <Plus size={20} />
                                <span>Thêm vào giỏ</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Product Info Tabs */}
                <div className="mt-12">
                    <div className="border-b border-gray-200">
                        <nav className="flex space-x-8">
                            {[
                                { id: "description", label: "Mô tả sản phẩm" },
                                { id: "details", label: "Thông tin chi tiết" },
                                { id: "reviews", label: "Đánh giá (7)" }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`py-4 px-1 text-sm font-medium border-b-2 ${activeTab === tab.id
                                        ? "border-blue-600 text-blue-600"
                                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </div>

                    <div className="py-6">
                        {activeTab === "description" && (
                            <div className="prose max-w-none">
                                <h3 className="text-lg font-semibold mb-3">Áo Thun Nữ Cao Cấp Premium Cotton</h3>
                                <p>
                                    Chất liệu cotton cao cấp, mềm mại, thoáng khí và thấm hút mồ hôi tốt. Thiết kế đơn giản nhưng
                                    thanh lịch, phù hợp với nhiều phong cách và dịp khác nhau.
                                </p>
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-medium mb-2">Ưu điểm nổi bật</h4>
                                        <ul className="list-disc pl-5 space-y-1 text-sm">
                                            <li>Chất liệu Premium Cotton cao cấp</li>
                                            <li>Thoáng khí, thấm hút mồ hôi tốt</li>
                                            <li>Kháng khuẩn, an toàn cho da</li>
                                            <li>Form dáng chuẩn châu Á</li>
                                            <li>Màu sắc bền đẹp, không xù lông</li>
                                        </ul>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                        <h4 className="font-medium mb-2">Hướng dẫn bảo quản</h4>
                                        <ul className="list-disc pl-5 space-y-1 text-sm">
                                            <li>Giặt máy ở nhiệt độ thường</li>
                                            <li>Không sử dụng chất tẩy</li>
                                            <li>Phơi trong bóng râm</li>
                                            <li>Là ủi ở nhiệt độ thấp</li>
                                            <li>Giặt riêng sản phẩm tối màu</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "details" && (
                            <div className="space-y-4">
                                <table className="min-w-full border border-gray-200">
                                    <tbody>
                                        <tr className="bg-gray-50">
                                            <td className="py-2 px-4 border-b font-medium w-1/3">Thương hiệu</td>
                                            <td className="py-2 px-4 border-b">Sure Fashion</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-4 border-b font-medium">Chất liệu</td>
                                            <td className="py-2 px-4 border-b">100% Premium Cotton</td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="py-2 px-4 border-b font-medium">Xuất xứ</td>
                                            <td className="py-2 px-4 border-b">Việt Nam</td>
                                        </tr>
                                        <tr>
                                            <td className="py-2 px-4 border-b font-medium">Kiểu dáng</td>
                                            <td className="py-2 px-4 border-b">Ôm nhẹ, cổ tròn</td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="py-2 px-4 border-b font-medium">Phù hợp</td>
                                            <td className="py-2 px-4 border-b">Đi làm, đi chơi, dạo phố</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {activeTab === "reviews" && (
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div className="text-3xl font-bold">4.9</div>
                                        <div>
                                            <div className="flex">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <Star key={star} size={20} className="text-yellow-400 fill-yellow-400" />
                                                ))}
                                            </div>
                                            <div className="text-sm text-gray-500">7 đánh giá</div>
                                        </div>
                                    </div>
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">
                                        Viết đánh giá
                                    </button>
                                </div>

                                {/* Sample reviews */}
                                {[
                                    {
                                        name: "Nguyễn Thị Hương",
                                        date: "12/04/2025",
                                        rating: 5,
                                        content: "Áo đẹp, chất vải mềm mịn, thoáng mát. Form áo chuẩn, mặc tôn dáng. Đặt hàng lần đầu ở shop mà ưng ý lắm nha. Sẽ ủng hộ tiếp!"
                                    },
                                    {
                                        name: "Trần Minh Anh",
                                        date: "05/04/2025",
                                        rating: 5,
                                        content: "Đã mua nhiều lần, chất lượng luôn ổn định. Mình cao 1m58, nặng 48kg mặc size M vừa xinh."
                                    }
                                ].map((review, index) => (
                                    <div key={index} className="border-b pb-4">
                                        <div className="flex justify-between items-center">
                                            <div className="font-medium">{review.name}</div>
                                            <div className="text-sm text-gray-500">{review.date}</div>
                                        </div>
                                        <div className="flex my-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star
                                                    key={star}
                                                    size={16}
                                                    className={star <= review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                                                />
                                            ))}
                                        </div>
                                        <p className="text-gray-700 text-sm mt-1">{review.content}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Product recommendations */}
                <div className="mt-12">
                    <h3 className="text-xl font-bold mb-6">Có thể bạn cũng thích</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {
                            products.map(product => (
                                <CardProduct key={product.id} product={product}/>
                            ))
                        }
                    </div>
                </div>
            </div>

            {showGuide && (
                <div className="custom-modal-overlay">
                    <div className="custom-modal">
                        <div className="custom-modal-header">
                            <h2 className="custom-modal-title">BẢNG TƯ VẤN SIZE</h2>
                            <button
                                className="custom-modal-close"
                                onClick={() => setShowGuide(false)}
                            >
                                ✕
                            </button>
                        </div>
                        <div className="custom-modal-body">
                            <table className="size-guide-table">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="py-3 px-6 text-left font-semibold text-gray-800">Kích cỡ</th>
                                        <th className="py-3 px-6 text-left font-semibold text-gray-800">Mô tả</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sizeGuide.map((size, index) => (
                                        <tr
                                            key={index}
                                            className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                                } hover:bg-blue-50 transition-colors duration-200`}
                                        >
                                            <td className="py-4 px-6 font-medium text-gray-900">{size.name}</td>
                                            <td className="py-4 px-6 text-gray-700">{size.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductDetail;