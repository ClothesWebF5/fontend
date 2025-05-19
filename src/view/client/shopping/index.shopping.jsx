
import { useState } from 'react';
import { Trash2 } from 'lucide-react';

export default function ShoppingCart() {
  const [product, setProduct] = useState({
    name: 'Áo peplum phối ren',
    color: 'Trắng',
    size: 'L',
    originalPrice: 1490000,
    discountedPrice: 447000,
    discount: 70,
    quantity: 1,
    image: '/api/placeholder/120/160'
  });

  // Function to update product quantity
  const updateQuantity = (increment) => {
    setProduct({
      ...product,
      quantity: Math.max(1, product.quantity + increment)
    });
  };

  // Format currency
  const formatCurrency = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ";
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Progress indicator */}
      <div className="bg-white rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between relative">
          <div className="w-full absolute top-1/2 h-0.5 bg-gray-200"></div>
          <div className="w-full flex justify-between absolute">
            <div className="flex flex-col items-center relative z-10">
              <div className="h-6 w-6 rounded-full bg-black"></div>
              <span className="text-sm mt-1">Giỏ hàng</span>
            </div>
            <div className="flex flex-col items-center relative z-10">
              <div className="h-6 w-6 rounded-full bg-white border border-gray-300"></div>
              <span className="text-sm mt-1">Đặt hàng</span>
            </div>
            <div className="flex flex-col items-center relative z-10">
              <div className="h-6 w-6 rounded-full bg-white border border-gray-300"></div>
              <span className="text-sm mt-1">Thanh toán</span>
            </div>
            <div className="flex flex-col items-center relative z-10">
              <div className="h-6 w-6 rounded-full bg-white border border-gray-300"></div>
              <span className="text-sm mt-1">Hoàn thành đơn</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left column - Cart items */}
        <div className="flex-grow">
          <h2 className="text-2xl font-bold mb-6">Giỏ hàng của bạn <span className="text-red-500">1 Sản Phẩm</span></h2>
          
          {/* Table header */}
          <div className="grid grid-cols-12 font-medium text-gray-500 mb-4">
            <div className="col-span-6">TÊN SẢN PHẨM</div>
            <div className="col-span-2 text-center">CHIẾT KHẤU</div>
            <div className="col-span-2 text-center">SỐ LƯỢNG</div>
            <div className="col-span-2 text-right">TỔNG TIỀN</div>
          </div>
          
          {/* Product row */}
          <div className="grid grid-cols-12 items-center py-4 border-t border-b">
            {/* Product info */}
            <div className="col-span-6 flex items-center">
              <div className="w-20 h-24 bg-gray-100 mr-4">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-gray-500 text-sm">Màu sắc: {product.color} Size: {product.size}</p>
              </div>
            </div>
            
            {/* Discount */}
            <div className="col-span-2 text-center">
              <p className="text-red-500">-{formatCurrency(product.originalPrice - product.discountedPrice)}</p>
              <p className="text-red-500 text-sm">(-{product.discount}%)</p>
            </div>
            
            {/* Quantity */}
            <div className="col-span-2">
              <div className="flex items-center justify-center">
                <div className="flex border rounded">
                  <button 
                    className="px-3 py-1" 
                    onClick={() => updateQuantity(-1)}
                  >
                    −
                  </button>
                  <span className="px-4 py-1 border-l border-r">{product.quantity}</span>
                  <button 
                    className="px-3 py-1" 
                    onClick={() => updateQuantity(1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            
            {/* Total */}
            <div className="col-span-2 text-right font-bold">
              {formatCurrency(product.discountedPrice)}
            </div>
          </div>
          
          {/* Trash icon */}
          <div className="flex justify-end mt-4">
            <button className="text-gray-500">
              <Trash2 size={20} />
            </button>
          </div>
          
          {/* Continue shopping button */}
          <div className="mt-12">
            <button className="px-6 py-3 border border-gray-300 rounded flex items-center text-gray-700">
              <span className="mr-2">←</span> Tiếp tục mua hàng
            </button>
          </div>
        </div>
        
        {/* Right column - Order summary */}
        <div className="w-full lg:w-80">
          <div className="bg-gray-50 p-6 rounded">
            <h3 className="text-xl font-bold mb-6">Tổng tiền giỏ hàng</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Tổng sản phẩm</span>
                <span>1</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Tổng tiền hàng</span>
                <span>{formatCurrency(product.originalPrice)}</span>
              </div>
              
              <div className="flex justify-between pt-3 border-t">
                <span className="font-bold">Thành tiền</span>
                <span className="font-bold">{formatCurrency(product.discountedPrice)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Tạm tính</span>
                <span className="font-bold">{formatCurrency(product.discountedPrice)}</span>
              </div>
            </div>
            
            <button className="w-full bg-black text-white font-bold py-3 rounded mt-6">
              ĐẶT HÀNG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}