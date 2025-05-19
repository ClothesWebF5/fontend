// import { Eye, Heart, RefreshCwIcon, ShoppingCart } from "lucide-react";
// import { useState } from "react";

// function CardProduct({ product }) {
//     const [hoveredCard, setHoveredCard] = useState(null);
//     return (
//         <>
//             <div
//                 key={product.id}
//                 className="relative border overflow-hidden rounded-lg group transform transition-all duration-300 hover:scale-[1.005] hover:shadow-[0_0_20px_rgba(0,0,0,0.1)]"
//                 onMouseEnter={() => setHoveredCard(product.id)}
//                 onMouseLeave={() => setHoveredCard(null)}
//             >
//                 <div className="absolute z-10 top-[14px] left-[24px]">
//                     <div className="bg-black text-white px-6 h-6 font-bold text-xs flex items-center justify-center transform rotate-[-45deg] origin-bottom-left translate-y-4 -translate-x-6">
//                         SALE
//                     </div>
//                 </div>
//                 <div className="relative h-64 w-full overflow-hidden">
//                     <img src="http://res.cloudinary.com/dxx1lgamz/image/upload/6a0ce971-7007-4c0a-865a-bde7d826ee7a_biti-huner-cam" alt={product.name} className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110" />
//                     <div className="absolute right-2 top-2 flex flex-col gap-2">
//                         <button className={`p-2 bg-white rounded-full shadow-md transition-all duration-300 ${hoveredCard === product.id ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
//                             <Heart size={18} className="text-gray-600" />
//                         </button>
//                         <button className={`p-2 bg-white rounded-full shadow-md transition-all duration-300 delay-75 ${hoveredCard === product.id ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
//                             <Eye size={18} className="text-gray-600" />
//                         </button>
//                         <button className={`p-2 bg-white rounded-full shadow-md transition-all duration-300 delay-100 ${hoveredCard === product.id ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
//                             <RefreshCwIcon size={18} className="text-gray-600" />
//                         </button>
//                         <button className={`p-2 bg-white rounded-full shadow-md transition-all duration-300 delay-150 ${hoveredCard === product.id ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
//                             <ShoppingCart size={18} className="text-gray-600" />
//                         </button>
//                     </div>
//                 </div>

//                 {/* Product Details */}
//                 <div className="p-4">
//                     <p className="text-rose-400 uppercase text-sm font-medium">{product.category}</p>
//                     <h3 className="text-gray-600 font-medium mt-1">{product.name}</h3>

//                     {/* Rating Stars */}
//                     <div className="flex mt-2">
//                         {[...Array(5)].map((_, index) => (
//                             <svg
//                                 key={index}
//                                 className={`w-4 h-4 ${index < product.rating ? 'text-orange-400' : 'text-gray-300'}`}
//                                 fill="currentColor"
//                                 viewBox="0 0 20 20"
//                             >
//                                 <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                             </svg>
//                         ))}
//                     </div>

//                     {/* Price */}
//                     <div className="flex items-center mt-2">
//                         <span className="text-black font-bold text-lg">${product?.currentPrice?.toFixed(2)}</span>
//                         {product.originalPrice && (
//                             <span className="ml-2 text-gray-400 line-through">${product?.originalPrice?.toFixed(2)}</span>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default CardProduct;
// import { Eye, Heart, RefreshCwIcon, ShoppingCart, Check } from "lucide-react";
// import { useState } from "react";

// function CardProduct({ product }) {
//     const [hoveredCard, setHoveredCard] = useState(null);
//     const [selectedColor, setSelectedColor] = useState(null);
//     const [selectedSize, setSelectedSize] = useState(null);

//     const colors = product.colors || ["#e0e0e0", "#264653", "#f4a261"]; // HEX hoặc tên màu
//     const sizes = product.sizes || ["S", "M", "L", "XL"];

//     return (
//         <div
//             key={product.id}
//             className="relative border overflow-hidden rounded-lg group transform transition-all duration-300 hover:scale-[1.005] hover:shadow-[0_0_20px_rgba(0,0,0,0.1)]"
//             onMouseEnter={() => setHoveredCard(product.id)}
//             onMouseLeave={() => setHoveredCard(null)}
//         >
//             {/* SALE Badge */}
//             <div className="absolute z-10 top-[14px] left-[24px]">
//                 <div className="bg-black text-white px-6 h-6 font-bold text-xs flex items-center justify-center transform rotate-[-45deg] origin-bottom-left translate-y-4 -translate-x-6">
//                     SALE
//                 </div>
//             </div>

//             {/* Image */}
//             <div className="relative h-64 w-full overflow-hidden">
//                 <img
//                     src="http://res.cloudinary.com/dxx1lgamz/image/upload/6a0ce971-7007-4c0a-865a-bde7d826ee7a_biti-huner-cam"
//                     alt={product.name}
//                     className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
//                 />
//                 {/* Action buttons */}
//                 <div className="absolute right-2 top-2 flex flex-col gap-2">
//                     {[Heart, Eye, RefreshCwIcon, ShoppingCart].map((Icon, i) => (
//                         <button
//                             key={i}
//                             className={`p-2 bg-white rounded-full shadow-md transition-all duration-300 ${
//                                 hoveredCard === product.id
//                                     ? `translate-x-0 opacity-100 delay-[${i * 75}ms]`
//                                     : "translate-x-12 opacity-0"
//                             }`}
//                         >
//                             <Icon size={18} className="text-gray-600" />
//                         </button>
//                     ))}
//                 </div>
//             </div>

//             {/* Product Info */}
//             <div className="p-4">
//                 <p className="text-rose-400 uppercase text-sm font-medium">{product.category}</p>
//                 <h3 className="text-gray-600 font-medium mt-1">{product.name}</h3>

//                 {/* Color Selection */}
//                 <div className="flex items-center space-x-2 mt-3">
//                     {colors.map((color, index) => (
//                         <button
//                             key={index}
//                             onClick={() => setSelectedColor(color)}
//                             className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
//                                 selectedColor === color ? "border-gray-600" : "border-gray-300"
//                             }`}
//                             style={{ backgroundColor: color }}
//                         >
//                             {selectedColor === color && <Check size={12} className="text-white" />}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Size Selection */}
//                 <div className="flex flex-wrap gap-2 mt-3">
//                     {sizes.map((size, index) => (
//                         <button
//                             key={index}
//                             onClick={() => setSelectedSize(size)}
//                             className={`px-2 py-1 text-xs border rounded-md ${
//                                 selectedSize === size
//                                     ? "bg-black text-white border-black"
//                                     : "bg-white text-gray-700 border-gray-300"
//                             }`}
//                         >
//                             {size}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Rating */}
//                 <div className="flex mt-3">
//                     {[...Array(5)].map((_, index) => (
//                         <svg
//                             key={index}
//                             className={`w-4 h-4 ${index < product.rating ? "text-orange-400" : "text-gray-300"}`}
//                             fill="currentColor"
//                             viewBox="0 0 20 20"
//                         >
//                             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                         </svg>
//                     ))}
//                 </div>

//                 {/* Price */}
//                 <div className="flex items-center mt-2">
//                     <span className="text-black font-bold text-lg">
//                         {product?.currentPrice?.toLocaleString()}đ
//                     </span>
//                     {product.originalPrice && (
//                         <span className="ml-2 text-gray-400 line-through">
//                             {product?.originalPrice?.toLocaleString()}đ
//                         </span>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CardProduct;

import { Eye, Heart, RefreshCwIcon, ShoppingCart, Check } from "lucide-react";
import { useState } from "react";

function CardProduct({ product }) {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);

    const colors = product.colors || ["#e0e0e0", "#264653", "#f4a261"];
    const sizes = product.sizes || ["S", "M", "L", "XL"];

    return (
        <div
            key={product.id}
            className="relative border overflow-hidden rounded-lg group transform transition-all duration-300 hover:scale-[1.005] hover:shadow-[0_0_20px_rgba(0,0,0,0.1)]"
            onMouseEnter={() => setHoveredCard(product.id)}
            onMouseLeave={() => setHoveredCard(null)}
        >
            {/* SALE Badge */}
            <div className="absolute z-10 top-[14px] left-[24px]">
                <div className="bg-black text-white px-6 h-6 font-bold text-xs flex items-center justify-center transform rotate-[-45deg] origin-bottom-left translate-y-4 -translate-x-6">
                    SALE
                </div>
            </div>

            {/* Product Image */}
            <div className="relative h-64 w-full overflow-hidden">
                <img
                    src="http://res.cloudinary.com/dxx1lgamz/image/upload/6a0ce971-7007-4c0a-865a-bde7d826ee7a_biti-huner-cam"
                    alt={product.name}
                    className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                />

                {/* Action Buttons */}
                <div className="absolute right-2 top-2 flex flex-col gap-2">
                    <button className={`p-2 bg-white rounded-full shadow-md transition-all duration-300 ${hoveredCard === product.id ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
                        <Heart size={18} className="text-gray-600" />
                    </button>
                    <button className={`p-2 bg-white rounded-full shadow-md transition-all duration-300 delay-75 ${hoveredCard === product.id ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
                        <Eye size={18} className="text-gray-600" />
                    </button>
                    <button className={`p-2 bg-white rounded-full shadow-md transition-all duration-300 delay-100 ${hoveredCard === product.id ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
                        <RefreshCwIcon size={18} className="text-gray-600" />
                    </button>
                    <button className={`p-2 bg-white rounded-full shadow-md transition-all duration-300 delay-150 ${hoveredCard === product.id ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
                        <ShoppingCart size={18} className="text-gray-600" />
                    </button>
                </div>
            </div>

            {/* Product Details */}
            <div className="p-4">
                <p className="text-rose-400 uppercase text-sm font-medium">{product.category}</p>
                <h3 className="text-gray-600 font-medium mt-1">{product.name}</h3>

                {/* Color Selection */}
                <div className="flex items-center space-x-2 mt-3">
                    {colors.map((color, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedColor(color)}
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                                selectedColor === color ? "border-gray-600" : "border-gray-300"
                            }`}
                            style={{ backgroundColor: color }}
                        >
                            {selectedColor === color && <Check size={12} className="text-white" />}
                        </button>
                    ))}
                </div>

                {/* Size Selection */}
                <div className="flex flex-wrap gap-2 mt-3">
                    {sizes.map((size, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedSize(size)}
                            className={`px-2 py-1 text-xs border rounded-md ${
                                selectedSize === size
                                    ? "bg-black text-white border-black"
                                    : "bg-white text-gray-700 border-gray-300"
                            }`}
                        >
                            {size}
                        </button>
                    ))}
                </div>

                {/* Rating */}
                <div className="flex mt-3">
                    {[...Array(5)].map((_, index) => (
                        <svg
                            key={index}
                            className={`w-4 h-4 ${index < product.rating ? 'text-orange-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>

                {/* Price */}
                <div className="flex items-center mt-2">
                    <span className="text-black font-bold text-lg">
                        {product?.currentPrice?.toLocaleString()}đ
                    </span>
                    {product.originalPrice && (
                        <span className="ml-2 text-gray-400 line-through">
                            {product?.originalPrice?.toLocaleString()}đ
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CardProduct;
