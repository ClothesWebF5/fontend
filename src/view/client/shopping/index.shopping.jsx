// import { useState } from 'react';
// import { Trash2 } from 'lucide-react';

// export default function ShoppingCart() {
//     const [products, setProducts] = useState([
//         {
//             id: 1,
//             name: 'Áo peplum phối ren',
//             color: 'Trắng',
//             size: 'L',
//             originalPrice: 1490000,
//             discountedPrice: 447000,
//             discount: 70,
//             quantity: 1,
//             image: 'http://res.cloudinary.com/dv6fjob4v/image/upload/b0302499-d528-4e2a-b36b-d0ec8babccba_au-cong-so-nam-xam'
//         },
//         {
//             id: 2,
//             name: 'Quần jean ống đứng',
//             color: 'Xanh đậm',
//             size: 'M',
//             originalPrice: 890000,
//             discountedPrice: 712000,
//             discount: 20,
//             quantity: 1,
//             image: 'http://res.cloudinary.com/dv6fjob4v/image/upload/b0302499-d528-4e2a-b36b-d0ec8babccba_au-cong-so-nam-xam'
//         },
//         {
//             id: 3,
//             name: 'Túi xách thời trang',
//             color: 'Đen',
//             size: 'Free size',
//             originalPrice: 1200000,
//             discountedPrice: 960000,
//             discount: 20,
//             quantity: 1,
//             image: 'http://res.cloudinary.com/dv6fjob4v/image/upload/b0302499-d528-4e2a-b36b-d0ec8babccba_au-cong-so-nam-xam'
//         },
//         {
//             id: 4,
//             name: 'Giày cao gót',
//             color: 'Đỏ',
//             size: '38',
//             originalPrice: 1500000,
//             discountedPrice: 1050000,
//             discount: 30,
//             quantity: 1,
//             image: 'http://res.cloudinary.com/dv6fjob4v/image/upload/b0302499-d528-4e2a-b36b-d0ec8babccba_au-cong-so-nam-xam'
//         },
//         {
//             id: 5,
//             name: 'Áo khoác dạ dài',
//             color: 'Nâu',
//             size: 'XL',
//             originalPrice: 2490000,
//             discountedPrice: 1743000,
//             discount: 30,
//             quantity: 1,
//             image: 'http://res.cloudinary.com/dv6fjob4v/image/upload/b0302499-d528-4e2a-b36b-d0ec8babccba_au-cong-so-nam-xam'
//         },
//         {
//             id: 6,
//             name: 'Váy dự tiệc',
//             color: 'Hồng pastel',
//             size: 'S',
//             originalPrice: 1890000,
//             discountedPrice: 1323000,
//             discount: 30,
//             quantity: 1,
//             image: 'http://res.cloudinary.com/dv6fjob4v/image/upload/b0302499-d528-4e2a-b36b-d0ec8babccba_au-cong-so-nam-xam'
//         },
//         {
//             id: 7,
//             name: 'Khăn quàng cổ',
//             color: 'Xám',
//             size: 'Free size',
//             originalPrice: 550000,
//             discountedPrice: 385000,
//             discount: 30,
//             quantity: 1,
//             image: 'http://res.cloudinary.com/dv6fjob4v/image/upload/b0302499-d528-4e2a-b36b-d0ec8babccba_au-cong-so-nam-xam'
//         }
//     ]);

//     // Calculate totals
//     const totalItems = products.reduce((total, product) => total + product.quantity, 0);
//     const totalOriginalPrice = products.reduce((total, product) => total + (product.originalPrice * product.quantity), 0);
//     const totalDiscountedPrice = products.reduce((total, product) => total + (product.discountedPrice * product.quantity), 0);

//     // Function to update product quantity
//     const updateQuantity = (productId, increment) => {
//         setProducts(products.map(product => {
//             if (product.id === productId) {
//                 return {
//                     ...product,
//                     quantity: Math.max(1, product.quantity + increment)
//                 };
//             }
//             return product;
//         }));
//     };

//     // Function to remove product
//     const removeProduct = (productId) => {
//         setProducts(products.filter(product => product.id !== productId));
//     };

//     // Format currency
//     const formatCurrency = (amount) => {
//         return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
//     };

//     return (
//         <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
//             {/* Progress indicator */}
//             <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
//                 <div className="relative flex items-center justify-between">
//                     {/* Progress bar line */}
//                     <div className="absolute w-full top-3 h-0.5 bg-gray-200"></div>

//                     {/* Progress steps */}
//                     <div className="flex justify-between w-full relative">
//                         <div className="flex flex-col items-center z-10">
//                             <div className="h-6 w-6 rounded-full bg-black"></div>
//                             <span className="text-sm mt-2 font-medium text-gray-800">Giỏ hàng</span>
//                         </div>
//                         <div className="flex flex-col items-center z-10">
//                             <div className="h-6 w-6 rounded-full bg-white border border-gray-300"></div>
//                             <span className="text-sm mt-2 text-gray-500">Đặt hàng</span>
//                         </div>
//                         <div className="flex flex-col items-center z-10">
//                             <div className="h-6 w-6 rounded-full bg-white border border-gray-300"></div>
//                             <span className="text-sm mt-2 text-gray-500">Thanh toán</span>
//                         </div>
//                         <div className="flex flex-col items-center z-10">
//                             <div className="h-6 w-6 rounded-full bg-white border border-gray-300"></div>
//                             <span className="text-sm mt-2 text-gray-500">Hoàn thành đơn</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="flex flex-col lg:flex-row gap-8">
//                 {/* Left column - Cart items */}
//                 <div className="flex-grow">
//                     <h2 className="text-2xl font-bold mb-6 text-gray-800">Giỏ hàng của bạn <span className="text-red-600">{totalItems} Sản Phẩm</span></h2>

//                     {/* Table header - Now sticky */}
//                     <div className="sticky top-0 bg-white z-10 grid grid-cols-12 text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider py-2">
//                         <div className="col-span-5">TÊN SẢN PHẨM</div>
//                         <div className="col-span-2 text-center">CHIẾT KHẤU</div>
//                         <div className="col-span-2 text-center">SỐ LƯỢNG</div>
//                         <div className="col-span-2 text-right">TỔNG TIỀN</div>
//                         <div className="col-span-1"></div>
//                     </div>

//                     {/* Product list with scroll */}
//                     <div className="overflow-y-auto max-h-96">
//                     {/* Product rows */}
//                     {products.map(product => (
//                         <div key={product.id} className="grid grid-cols-12 items-center py-5 border-t border-gray-200">
//                             {/* Product info */}
//                             <div className="col-span-5 flex items-center">
//                                 <div className="w-24 h-28 mr-5 bg-gray-50 flex items-center justify-center overflow-hidden">
//                                     <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
//                                 </div>
//                                 <div>
//                                     <h3 className="font-medium text-gray-800">{product.name}</h3>
//                                     <p className="text-gray-500 text-sm mt-1">Màu sắc: {product.color} &nbsp; Size: {product.size}</p>
//                                 </div>
//                             </div>

//                             {/* Discount */}
//                             <div className="col-span-2 text-center">
//                                 <p className="text-red-600 font-medium">-{formatCurrency(product.originalPrice - product.discountedPrice)}</p>
//                                 <p className="text-red-600 text-sm mt-1">(-{product.discount}%)</p>
//                             </div>

//                             {/* Quantity */}
//                             <div className="col-span-2 flex justify-center">
//                                 <div className="flex items-center">
//                                     <div className="flex border border-gray-300 rounded">
//                                         <button
//                                             className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50"
//                                             onClick={() => updateQuantity(product.id, -1)}
//                                         >
//                                             −
//                                         </button>
//                                         <div className="w-10 h-8 flex items-center justify-center border-l border-r border-gray-300">
//                                             {product.quantity}
//                                         </div>
//                                         <button
//                                             className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50"
//                                             onClick={() => updateQuantity(product.id, 1)}
//                                         >
//                                             +
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Total */}
//                             <div className="col-span-2 text-right font-bold text-gray-800">
//                                 {formatCurrency(product.discountedPrice * product.quantity)}
//                             </div>

//                             {/* Trash icon - now in the same row */}
//                             <div className="col-span-1 flex justify-center">
//                                 <button 
//                                     className="text-gray-500 hover:text-red-600"
//                                     onClick={() => removeProduct(product.id)}
//                                 >
//                                     <Trash2 size={20} />
//                                 </button>
//                             </div>
//                         </div>
//                     ))}
//                     </div>

//                     {/* Continue shopping button */}
//                     <div className="mt-14">
//                         <button className="px-6 py-3 border border-gray-300 rounded flex items-center text-gray-700 hover:bg-gray-50 transition-colors">
//                             <span className="mr-2">←</span> Tiếp tục mua hàng
//                         </button>
//                     </div>
//                 </div>

//                 {/* Right column - Order summary - now with sticky positioning */}
//                 <div className="w-full lg:w-96 lg:sticky lg:top-8 h-fit">
//                     <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
//                         <h3 className="text-xl font-bold mb-6 text-gray-800">Tổng tiền giỏ hàng</h3>

//                         <div className="space-y-4">
//                             <div className="flex justify-between items-center">
//                                 <span className="text-gray-600">Tổng sản phẩm</span>
//                                 <span className="text-gray-800 font-medium">{totalItems}</span>
//                             </div>

//                             <div className="flex justify-between items-center">
//                                 <span className="text-gray-600">Tổng tiền hàng</span>
//                                 <span className="text-gray-800 font-medium">{formatCurrency(totalOriginalPrice)}</span>
//                             </div>

//                             <div className="flex justify-between items-center pt-4 border-t border-gray-200">
//                                 <span className="font-bold text-gray-800">Thành tiền</span>
//                                 <span className="font-bold text-gray-800">{formatCurrency(totalDiscountedPrice)}</span>
//                             </div>

//                             <div className="flex justify-between items-center">
//                                 <span className="text-gray-600">Tạm tính</span>
//                                 <span className="font-bold text-gray-800">{formatCurrency(totalDiscountedPrice)}</span>
//                             </div>
//                         </div>

//                         <button className="w-full bg-black text-white font-bold py-3 rounded-lg mt-8 hover:bg-gray-900 transition-colors">
//                             ĐẶT HÀNG
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

import { useState } from 'react';
import { Trash2 } from 'lucide-react';

export default function ShoppingCart() {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Áo peplum phối ren',
            color: 'Trắng',
            size: 'L',
            originalPrice: 1490000,
            discountedPrice: 447000,
            discount: 70,
            quantity: 1,
            image: 'http://res.cloudinary.com/dv6fjob4v/image/upload/b0302499-d528-4e2a-b36b-d0ec8babccba_au-cong-so-nam-xam'
        },
        {
            id: 2,
            name: 'Quần jean ống đứng',
            color: 'Xanh đậm',
            size: 'M',
            originalPrice: 890000,
            discountedPrice: 712000,
            discount: 20,
            quantity: 1,
            image: 'http://res.cloudinary.com/dv6fjob4v/image/upload/b0302499-d528-4e2a-b36b-d0ec8babccba_au-cong-so-nam-xam'
        },
        {
            id: 3,
            name: 'Túi xách thời trang',
            color: 'Đen',
            size: 'Free size',
            originalPrice: 1200000,
            discountedPrice: 960000,
            discount: 20,
            quantity: 1,
            image: 'http://res.cloudinary.com/dv6fjob4v/image/upload/b0302499-d528-4e2a-b36b-d0ec8babccba_au-cong-so-nam-xam'
        },
        {
            id: 4,
            name: 'Giày cao gót',
            color: 'Đỏ',
            size: '38',
            originalPrice: 1500000,
            discountedPrice: 1050000,
            discount: 30,
            quantity: 1,
            image: 'http://res.cloudinary.com/dv6fjob4v/image/upload/b0302499-d528-4e2a-b36b-d0ec8babccba_au-cong-so-nam-xam'
        },
        {
            id: 5,
            name: 'Áo khoác dạ dài',
            color: 'Nâu',
            size: 'XL',
            originalPrice: 2490000,
            discountedPrice: 1743000,
            discount: 30,
            quantity: 1,
            image: 'http://res.cloudinary.com/dv6fjob4v/image/upload/b0302499-d528-4e2a-b36b-d0ec8babccba_au-cong-so-nam-xam'
        },
        {
            id: 6,
            name: 'Váy dự tiệc',
            color: 'Hồng pastel',
            size: 'S',
            originalPrice: 1890000,
            discountedPrice: 1323000,
            discount: 30,
            quantity: 1,
            image: 'http://res.cloudinary.com/dv6fjob4v/image/upload/b0302499-d528-4e2a-b36b-d0ec8babccba_au-cong-so-nam-xam'
        },
        {
            id: 7,
            name: 'Khăn quàng cổ',
            color: 'Xám',
            size: 'Free size',
            originalPrice: 550000,
            discountedPrice: 385000,
            discount: 30,
            quantity: 1,
            image: 'http://res.cloudinary.com/dv6fjob4v/image/upload/b0302499-d528-4e2a-b36b-d0ec8babccba_au-cong-so-nam-xam'
        }
    ]);

    // Calculate totals
    const totalItems = products.reduce((total, product) => total + product.quantity, 0);
    const totalOriginalPrice = products.reduce((total, product) => total + (product.originalPrice * product.quantity), 0);
    const totalDiscountedPrice = products.reduce((total, product) => total + (product.discountedPrice * product.quantity), 0);

    // Function to update product quantity
    const updateQuantity = (productId, increment) => {
        setProducts(products.map(product => {
            if (product.id === productId) {
                return {
                    ...product,
                    quantity: Math.max(1, product.quantity + increment)
                };
            }
            return product;
        }));
    };

    // Function to remove product
    const removeProduct = (productId) => {
        setProducts(products.filter(product => product.id !== productId));
    };

    // Format currency
    const formatCurrency = (amount) => {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
    };

    // Mobile product card view
    const MobileProductCard = ({ product }) => (
        <div className="bg-white border-b border-gray-200 py-4">
            <div className="flex items-center mb-2">
                {/* Product image */}
                <div className="w-24 h-28 mr-4">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>

                {/* Product info */}
                <div className="flex-1">
                    <h3 className="font-medium text-gray-800">{product.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">Màu sắc: {product.color}</p>
                    <p className="text-gray-500 text-sm">Size: {product.size}</p>

                    <div className="text-red-600 mt-1">
                        -{formatCurrency(product.originalPrice - product.discountedPrice)}
                        <span className="ml-2">(-{product.discount}%)</span>
                    </div>
                </div>

                {/* Trash icon */}
                <button
                    className="text-gray-400 self-start ml-2"
                    onClick={() => removeProduct(product.id)}
                >
                    <Trash2 size={20} />
                </button>
            </div>

            {/* Quantity controls */}
            <div className="flex justify-between items-center mt-3">
                <div className="flex items-center border border-gray-300 rounded w-fit">
                    <button
                        className="w-10 h-10 flex items-center justify-center text-gray-600 text-lg"
                        onClick={() => updateQuantity(product.id, -1)}
                    >
                        −
                    </button>
                    <div className="w-10 h-10 flex items-center justify-center border-l border-r border-gray-300">
                        {product.quantity}
                    </div>
                    <button
                        className="w-10 h-10 flex items-center justify-center text-gray-600 text-lg"
                        onClick={() => updateQuantity(product.id, 1)}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );

    // Desktop product row
    const DesktopProductRow = ({ product }) => (
        <div className="grid grid-cols-12 items-center py-5 border-t border-gray-200">
            {/* Product info */}
            <div className="col-span-5 flex items-center">
                <div className="w-24 h-28 mr-5 bg-gray-50 flex items-center justify-center overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div>
                    <h3 className="font-medium text-gray-800">{product.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">Màu sắc: {product.color} &nbsp; Size: {product.size}</p>
                </div>
            </div>

            {/* Discount */}
            <div className="col-span-2 text-center">
                <p className="text-red-600 font-medium">-{formatCurrency(product.originalPrice - product.discountedPrice)}</p>
                <p className="text-red-600 text-sm mt-1">(-{product.discount}%)</p>
            </div>

            {/* Quantity */}
            <div className="col-span-2 flex justify-center">
                <div className="flex items-center">
                    <div className="flex border border-gray-300 rounded">
                        <button
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50"
                            onClick={() => updateQuantity(product.id, -1)}
                        >
                            −
                        </button>
                        <div className="w-10 h-8 flex items-center justify-center border-l border-r border-gray-300">
                            {product.quantity}
                        </div>
                        <button
                            className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50"
                            onClick={() => updateQuantity(product.id, 1)}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>

            {/* Total */}
            <div className="col-span-2 text-right font-bold text-gray-800">
                {formatCurrency(product.discountedPrice * product.quantity)}
            </div>

            {/* Trash icon */}
            <div className="col-span-1 flex justify-center">
                <button
                    className="text-gray-500 hover:text-red-600"
                    onClick={() => removeProduct(product.id)}
                >
                    <Trash2 size={20} />
                </button>
            </div>
        </div>
    );

    return (
        <div className="max-w-6xl mx-auto px-4 py-6 font-sans">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
                <div className="relative flex items-center justify-between">
                    {/* Progress bar line */}
                    <div className="absolute w-full top-3 h-0.5 bg-gray-200"></div>

                    {/* Progress steps */}
                    <div className="flex justify-between w-full relative">
                        <div className="flex flex-col items-center z-10">
                            <div className="h-6 w-6 rounded-full bg-black"></div>
                            <span className="text-sm mt-2 font-medium text-gray-800">Giỏ hàng</span>
                        </div>
                        <div className="flex flex-col items-center z-10">
                            <div className="h-6 w-6 rounded-full bg-white border border-gray-300"></div>
                            <span className="text-sm mt-2 text-gray-500">Đặt hàng</span>
                        </div>
                        <div className="flex flex-col items-center z-10">
                            <div className="h-6 w-6 rounded-full bg-white border border-gray-300"></div>
                            <span className="text-sm mt-2 text-gray-500">Thanh toán</span>
                        </div>
                        <div className="flex flex-col items-center z-10">
                            <div className="h-6 w-6 rounded-full bg-white border border-gray-300"></div>
                            <span className="text-sm mt-2 text-gray-500">Hoàn thành đơn</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

                <div className="flex-grow">
                    <h2 className="text-lg font-bold mb-4 text-gray-800">
                        Giỏ hàng của bạn <span className="text-red-600">{totalItems} Sản Phẩm</span>
                    </h2>

                    {/* Desktop view - hidden on mobile */}
                    <div className="hidden md:block">
                        {/* Table header - Now sticky */}
                        <div className="sticky top-0 bg-white z-10 grid grid-cols-12 text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider py-2">
                            <div className="col-span-5">TÊN SẢN PHẨM</div>
                            <div className="col-span-2 text-center">CHIẾT KHẤU</div>
                            <div className="col-span-2 text-center">SỐ LƯỢNG</div>
                            <div className="col-span-2 text-right">TỔNG TIỀN</div>
                            <div className="col-span-1"></div>
                        </div>

                        {/* Product list with scroll */}
                        <div className="overflow-y-auto max-h-96">
                            {products.map(product => (
                                <DesktopProductRow key={product.id} product={product} />
                            ))}
                        </div>

                        {/* Continue shopping button */}
                        <div className="mt-14">
                            <button className="px-6 py-3 border border-gray-300 rounded flex items-center text-gray-700 hover:bg-gray-50 transition-colors">
                                <span className="mr-2">←</span> Tiếp tục mua hàng
                            </button>
                        </div>
                    </div>

                    {/* Mobile view - Card layout */}
                    <div className="md:hidden">
                        <div>
                            {products.map(product => (
                                <MobileProductCard key={product.id} product={product} />
                            ))}
                        </div>

                        {/* Continue shopping button */}
                        <div className="mt-8">
                            <button className="w-full px-4 py-3 border border-gray-300 rounded flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors">
                                <span className="mr-2">←</span> Tiếp tục mua hàng
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right column - Order summary - now with sticky positioning */}
                <div className="w-full lg:w-96 lg:sticky lg:top-8 h-fit mt-6 lg:mt-0">
                    <div className="bg-gray-50 p-4 lg:p-6 rounded-lg border border-gray-100">
                        <h3 className="text-lg lg:text-xl font-bold mb-4 lg:mb-6 text-gray-800">Tổng tiền giỏ hàng</h3>

                        <div className="space-y-3 lg:space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Tổng sản phẩm</span>
                                <span className="text-gray-800 font-medium">{totalItems}</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Tổng tiền hàng</span>
                                <span className="text-gray-800 font-medium">{formatCurrency(totalOriginalPrice)}</span>
                            </div>

                            <div className="flex justify-between items-center pt-3 lg:pt-4 border-t border-gray-200">
                                <span className="font-bold text-gray-800">Thành tiền</span>
                                <span className="font-bold text-gray-800">{formatCurrency(totalDiscountedPrice)}</span>
                            </div>

                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Tạm tính</span>
                                <span className="font-bold text-gray-800">{formatCurrency(totalDiscountedPrice)}</span>
                            </div>
                        </div>

                        <button className="w-full bg-black text-white font-bold py-3 rounded-lg mt-6 lg:mt-8 hover:bg-gray-900 transition-colors">
                            ĐẶT HÀNG
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}