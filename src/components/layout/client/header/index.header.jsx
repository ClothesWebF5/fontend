import { Popover, Transition } from "@headlessui/react";
import { Menu, UserRound, ShoppingCart, Search, Heart, X, ChevronDown, Bell, LogOut, User, Package, Settings, History, Phone } from "lucide-react";
import { useState, Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { handleLogout } from "../../../../view/auth/logout";
import { Link } from "react-router-dom";

export default function Header({ headerRef }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
    // Demo state cho người dùng đã đăng nhập
    const infor = Object.keys(useSelector(state => state.infor)).length > 0 ? useSelector(state => state.infor) : null;
    
    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (menuOpen || categoryMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menuOpen, categoryMenuOpen]);

    const navigation = [
        { name: "Trang chủ", href: "#" },
        { name: "Về chúng tôi", href: "#" },
        { name: "Tin tức", href: "#" },
        { name: "Liên hệ", href: "#" },
        { name: "Danh mục sản phẩm", hasCategory: true}
    ];

    const categories = [
        {
            name: "Thời trang nam",
            icon: <User size={18} />,
            subcategories: ["Áo", "Quần", "Phụ kiện", "Giày dép"]
        },
        {
            name: "Thời trang nữ",
            icon: <User size={18} />,
            subcategories: ["Áo", "Quần", "Váy đầm", "Phụ kiện", "Giày dép"]
        },
        {
            name: "Điện thoại & Máy tính bảng",
            icon: <Phone size={18} />,
            subcategories: ["Điện thoại", "Máy tính bảng", "Phụ kiện"]
        },
        {
            name: "Máy tính & Laptop",
            icon: <Package size={18} />,
            subcategories: ["Laptop", "PC", "Linh kiện", "Phụ kiện"]
        },
        {
            name: "Thiết bị điện tử",
            icon: <Settings size={18} />,
            subcategories: ["TV & Màn hình", "Loa & Âm thanh", "Máy ảnh", "Phụ kiện"]
        },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white" ref={headerRef}>
            <div className="border-b border-gray-100">
                <div className="flex items-center justify-between px-4 md:px-6 py-4 max-w-7xl mx-auto">
                    {/* Mobile: Menu icon */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="p-1 rounded-md hover:bg-gray-100 transition-colors duration-200"
                        >
                            {menuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>

                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            src="https://themesflat.co/html/modave/images/logo/logo.svg"
                            alt="Logo"
                            className="h-8 md:h-10"
                        />
                    </div>

                    {/* Menu desktop */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <div key={item.name} className="relative group">
                                {item.hasCategory ? (
                                    <Popover className="relative">
                                        {({ open }) => (
                                            <>
                                                <Popover.Button className="font-medium text-gray-700 hover:text-black py-2 transition-colors duration-200 flex items-center focus:outline-none">
                                                    {item.name}
                                                    <ChevronDown className="ml-1 w-4 h-4" />
                                                </Popover.Button>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-200"
                                                    enterFrom="opacity-0"
                                                    enterTo="opacity-100"
                                                    leave="transition ease-in duration-150"
                                                    leaveFrom="opacity-100"
                                                    leaveTo="opacity-0"
                                                >
                                                    <Popover.Panel className="absolute top-full left-0 z-50 mt-2 w-80 bg-white shadow-lg rounded-md overflow-hidden">
                                                        <div className="p-4">
                                                            <h3 className="font-medium text-gray-900 mb-3">Danh mục sản phẩm</h3>
                                                            <div className="space-y-1">
                                                                {categories.map((category, idx) => (
                                                                    <Popover key={idx} className="relative">
                                                                        {({ open: subOpen }) => (
                                                                            <>
                                                                                <Popover.Button className="w-full text-left px-3 py-2 rounded flex items-center justify-between hover:bg-gray-100 transition-colors focus:outline-none">
                                                                                    <div className="flex items-center">
                                                                                        <span className="mr-2">{category.icon}</span>
                                                                                        <span className="text-sm">{category.name}</span>
                                                                                    </div>
                                                                                    <ChevronDown className={`w-4 h-4 transition-transform ${subOpen ? 'rotate-180' : ''}`} />
                                                                                </Popover.Button>
                                                                                <Transition
                                                                                    as={Fragment}
                                                                                    enter="transition ease-out duration-200"
                                                                                    enterFrom="opacity-0"
                                                                                    enterTo="opacity-100"
                                                                                    leave="transition ease-in duration-150"
                                                                                    leaveFrom="opacity-100"
                                                                                    leaveTo="opacity-0"
                                                                                >
                                                                                    <Popover.Panel className="px-3 py-2">
                                                                                        <div className="pl-6 space-y-1 border-l border-gray-200">
                                                                                            {category.subcategories.map((sub, subIdx) => (
                                                                                                <a 
                                                                                                    key={subIdx} 
                                                                                                    href="#" 
                                                                                                    className="block text-sm py-1 hover:text-blue-600"
                                                                                                >
                                                                                                    {sub}
                                                                                                </a>
                                                                                            ))}
                                                                                        </div>
                                                                                    </Popover.Panel>
                                                                                </Transition>
                                                                            </>
                                                                        )}
                                                                    </Popover>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </Popover.Panel>
                                                </Transition>
                                            </>
                                        )}
                                    </Popover>
                                ) : (
                                    <a
                                        href={item.href}
                                        className="font-medium text-gray-700 hover:text-black py-2 transition-colors duration-200 flex items-center"
                                    >
                                        {item.name}
                                        {item.hasSubmenu && <ChevronDown className="ml-1 w-4 h-4" />}
                                    </a>
                                )}

                                {item.hasSubmenu && (
                                    <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                                        <div className="py-2">
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sản phẩm mới</a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Khuyến mãi</a>
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Bán chạy nhất</a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Icons */}
                    <div className="flex items-center space-x-5">
                        <Popover className="relative hidden md:block">
                            {({ open }) => (
                                <>
                                    <Popover.Button className="rounded-md p-1.5 hover:bg-gray-100 transition-colors duration-200 focus:outline-none">
                                        <Search className="w-5 h-5" />
                                    </Popover.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute right-0 mt-2 w-80 rounded-md bg-white shadow-lg p-4 z-50">
                                            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                                                <input
                                                    type="text"
                                                    placeholder="Tìm kiếm..."
                                                    className="w-full px-4 py-2 focus:outline-none text-sm"
                                                />
                                                <button className="bg-gray-100 px-3 py-2 hover:bg-gray-200 transition-colors">
                                                    <Search className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>

                        {/* Thông báo - Chỉ hiển thị khi đã đăng nhập */}
                        {infor && (
                            <Popover className="relative hidden md:block">
                                {({ open }) => (
                                    <>
                                        <Popover.Button className="rounded-md p-1.5 hover:bg-gray-100 transition-colors duration-200 focus:outline-none">
                                            <div className="relative">
                                                <Bell className="w-5 h-5" />
                                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full font-medium">
                                                    3
                                                </span>
                                            </div>
                                        </Popover.Button>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="opacity-0 translate-y-1"
                                            enterTo="opacity-100 translate-y-0"
                                            leave="transition ease-in duration-150"
                                            leaveFrom="opacity-100 translate-y-0"
                                            leaveTo="opacity-0 translate-y-1"
                                        >
                                            <Popover.Panel className="absolute right-0 mt-2 w-80 rounded-md bg-white shadow-lg overflow-hidden z-50">
                                                <div className="p-3 border-b border-gray-100 flex justify-between items-center">
                                                    <h3 className="font-medium">Thông báo</h3>
                                                    <button className="text-xs text-blue-600 hover:underline">Đánh dấu đã đọc</button>
                                                </div>
                                                <div className="max-h-80 overflow-y-auto">
                                                    <div className="p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer flex items-start">
                                                        <span className="w-2 h-2 mt-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
                                                        <div>
                                                            <p className="text-sm">Đơn hàng #12345 của bạn đã được giao thành công.</p>
                                                            <p className="text-xs text-gray-500 mt-1">2 giờ trước</p>
                                                        </div>
                                                    </div>
                                                    <div className="p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer flex items-start">
                                                        <span className="w-2 h-2 mt-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
                                                        <div>
                                                            <p className="text-sm">Sản phẩm yêu thích của bạn đang được giảm giá 20%.</p>
                                                            <p className="text-xs text-gray-500 mt-1">Hôm qua</p>
                                                        </div>
                                                    </div>
                                                    <div className="p-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer flex items-start">
                                                        <span className="w-2 h-2 mt-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></span>
                                                        <div>
                                                            <p className="text-sm">Chúng tôi vừa cập nhật chính sách giao hàng mới.</p>
                                                            <p className="text-xs text-gray-500 mt-1">2 ngày trước</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="p-3 text-center border-t border-gray-100">
                                                    <a href="#" className="text-sm text-blue-600 hover:underline">Xem tất cả thông báo</a>
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>
                        )}

                        {/* User Dropdown dùng Headless UI */}
                        <Popover className="relative">
                            {({ open }) => (
                                <>
                                    <Popover.Button className="rounded-md p-1.5 hover:bg-gray-100 transition-colors duration-200 focus:outline-none">
                                        {infor ? (
                                            <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200">
                                                <img
                                                    src={infor.avatar}
                                                    alt={infor.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ) : (
                                            <UserRound className="w-5 h-5" />
                                        )}
                                    </Popover.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel className="absolute right-0 mt-2 w-72 rounded-md bg-white shadow-lg overflow-hidden z-50">
                                            {infor ? (
                                                <>
                                                    <div className="p-4 border-b border-gray-100 bg-gray-50">
                                                        <div className="flex items-center">
                                                            <div className="w-10 h-10 rounded-full overflow-hidden mr-3 border border-gray-200">
                                                                <img
                                                                    src={infor.avatar}
                                                                    alt={infor.name}
                                                                    className="w-full h-full object-cover"
                                                                />
                                                            </div>
                                                            <div>
                                                                <p className="font-medium">{infor.name}</p>
                                                                <p className="text-xs text-gray-500">Thành viên VIP</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="py-2">
                                                        <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                            <span className="mr-3 ">
                                                                <User color="#2e0a17" />
                                                            </span> Thông tin tài khoản
                                                        </a>
                                                        <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                            <span className="mr-3">
                                                                <Package color="#bebb60" />
                                                            </span> Đơn hàng của tôi
                                                        </a>
                                                        <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                            <span className="mr-3">
                                                                <Heart color="#f00a0a" />
                                                            </span> Sản phẩm yêu thích
                                                            <span className="ml-auto bg-gray-100 text-xs px-2 py-0.5 rounded-full">8</span>
                                                        </a>
                                                        <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                            <span className="mr-3">
                                                                <History color="#0acaf0" />
                                                            </span> Lịch sử giao dịch
                                                        </a>
                                                        <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                                            <span className="mr-3">
                                                                <Settings color="#6e7a7c" />
                                                            </span> Cài đặt tài khoản
                                                        </a>
                                                    </div>
                                                    <div className="p-3 border-t border-gray-100">
                                                        <button
                                                            onClick={() => handleLogout()}
                                                            className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
                                                        >
                                                            <LogOut className="w-4 h-4 mr-2" /> Đăng xuất
                                                        </button>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="p-6 border-b border-gray-100">
                                                        <Link to={"/login"}>
                                                            <button className="bg-black text-white py-2.5 rounded-md w-full font-medium hover:bg-gray-800 transition-colors duration-200">
                                                                ĐĂNG NHẬP
                                                            </button>
                                                        </Link>
                                                        <Link to={"/register"}>
                                                            <p className="mt-4 text-gray-600 text-center text-sm">
                                                                Chưa có tài khoản?{" "}
                                                                <span className="text-black font-medium hover:text-gray-700">
                                                                    Đăng ký
                                                                </span>
                                                            </p>
                                                        </Link>
                                                    </div>
                                                </>
                                            )}
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>

                        <button className="rounded-md p-1.5 hover:bg-gray-100 transition-colors duration-200 hidden md:block">
                            <Heart className="w-5 h-5" />
                        </button>

                        <div className="relative">
                            <button className="relative rounded-md p-1.5 hover:bg-gray-100 transition-colors duration-200">
                                <ShoppingCart className="w-5 h-5" />
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-medium">
                                    1
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <Transition
                show={menuOpen}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-1"
            >
                <div className="md:hidden fixed top-16 left-0 w-full bg-white shadow-md border-t border-gray-100 max-h-[calc(100vh-4rem)] overflow-y-auto">
                    {infor && (
                        <div className="p-4 border-b border-gray-100 bg-gray-50">
                            <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 mr-3">
                                    <img
                                        src={infor.avatar}
                                        alt={infor.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-medium">{infor.name}</p>
                                    <p className="text-xs text-gray-500">Thành viên VIP</p>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="p-4 bg-gray-50 border-b border-gray-100">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Tìm kiếm..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none text-sm"
                            />
                            <Search className="absolute right-3 top-2.5 text-gray-400 w-4 h-4" />
                        </div>
                    </div>
                    <nav className="py-2">
                        {navigation.map((item, index) => (
                            <div key={index}>
                                {item.hasCategory ? (
                                    <div>
                                        <button 
                                            onClick={() => setCategoryMenuOpen(!categoryMenuOpen)}
                                            className="flex items-center justify-between w-full px-4 py-3 hover:bg-gray-50 border-b border-gray-100"
                                        >
                                            <span className="font-medium">{item.name}</span>
                                            <ChevronDown className={`w-4 h-4 transition-transform ${categoryMenuOpen ? 'rotate-180' : ''}`} />
                                        </button>
                                        
                                        {categoryMenuOpen && (
                                            <div className="bg-gray-50 py-2">
                                                {categories.map((category, cidx) => (
                                                    <div key={cidx} className="border-b border-gray-100 last:border-b-0">
                                                        <div 
                                                            className="flex items-center justify-between px-4 py-3 cursor-pointer"
                                                            onClick={() => {
                                                                // Toggle visibility logic for subcategories
                                                                const el = document.getElementById(`subcategory-${cidx}`);
                                                                if (el) {
                                                                    el.style.display = el.style.display === 'none' ? 'block' : 'none';
                                                                }
                                                            }}
                                                        >
                                                            <div className="flex items-center">
                                                                <span className="mr-2">{category.icon}</span>
                                                                <span className="text-sm font-medium">{category.name}</span>
                                                            </div>
                                                            <ChevronDown className="w-4 h-4" />
                                                        </div>
                                                        <div id={`subcategory-${cidx}`} className="px-4 py-2" style={{display: 'none'}}>
                                                            <div className="pl-6 space-y-2 border-l border-gray-200">
                                                                {category.subcategories.map((sub, subIdx) => (
                                                                    <a 
                                                                        key={subIdx} 
                                                                        href="#" 
                                                                        className="block text-sm py-1 hover:text-blue-600"
                                                                    >
                                                                        {sub}
                                                                    </a>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <a
                                        href={item.href}
                                        className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 border-b border-gray-100"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        <span className="font-medium">{item.name}</span>
                                        {item.hasSubmenu && <ChevronDown className="w-4 h-4" />}
                                    </a>
                                )}
                            </div>
                        ))}
                    </nav>

                    {infor ? (
                        <div className="bg-gray-50 p-4 space-y-3">
                            <div className="flex items-center justify-between">
                                <a href="#" className="text-sm font-medium hover:underline flex items-center">
                                    <span className="mr-2"><Package color="#bebb60" /></span> Đơn hàng của tôi
                                </a>
                            </div>
                            <div className="flex items-center justify-between">
                                <a href="#" className="text-sm font-medium hover:underline flex items-center">
                                    <span className="mr-2"><Heart color="#f00a0a" /></span> Sản phẩm yêu thích
                                </a>
                            </div>
                            <button
                                onClick={() => handleLogout()}
                                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors mt-2"
                            >
                                <LogOut className="w-4 h-4 mr-2" /> Đăng xuất
                            </button>
                        </div>
                    ) : (
                        <div className="bg-gray-50 p-4 flex items-center justify-between">
                            <Link to={"/login"}>
                                <a href="#" className="text-sm font-medium hover:underline">Đăng nhập</a>
                            </Link>
                            <span className="text-gray-300">|</span>
                            <Link to={"/register"}>
                                <a href="#" className="text-sm font-medium hover:underline">Đăng ký</a>
                            </Link>
                        </div>
                    )}
                </div>
            </Transition>
        </header>
    );
}