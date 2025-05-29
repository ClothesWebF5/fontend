import { ArrowRight, Clock, Phone, Plus, RefreshCw, ShieldCheck, ShoppingCart, Star, Truck } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CardProduct from '../../../components/pages/home/CardProduct';
import ProductSlider from "../../../components/pages/home/ProductSlide";
import { ListCategory } from "../../../hooks/listCategory";
import { homeJquery } from '../../../jquery/home.jquery';
import { ToastContainer } from 'react-toastify';

export default function Home() {
    const { categories } = ListCategory();
    const products = useSelector(state => state.productForUser);
    const cart = useSelector(state => state.cart);
    

    const [newArrivals] = useState([
        { id: 1, name: 'Relaxed Short Full Sleeve T-Shirt', price: '$35.00', oldPrice: '$45.00', image: '/api/placeholder/60/80', category: 'Mens Fashion' },
        { id: 2, name: 'Running & Trekking Shoes - White', price: '$70.00', oldPrice: '$90.00', image: '/api/placeholder/60/80', category: 'Footwear' },
        { id: 3, name: 'Girls Pink Embroidery Design Top', price: '$59.00', oldPrice: '$99.00', image: '/api/placeholder/60/80', category: 'Womens Fashion' },
        { id: 4, name: 'Trending & Running Shoes', price: '$70.00', oldPrice: '$100.00', image: '/api/placeholder/60/80', category: 'Footwear' },
        { id: 5, name: 'Black Floral Wrap Midi Skirt', price: '$39.00', oldPrice: '$59.00', image: '/api/placeholder/60/80', category: 'Womens Fashion' },
        { id: 6, name: 'Silver Deer Heart Necklace', price: '$49.00', oldPrice: '$69.00', image: '/api/placeholder/60/80', category: 'Jewelry' },
        { id: 7, name: 'Pure Garment Dyed Cotton Shirt', price: '$45.00', oldPrice: '$56.00', image: '/api/placeholder/60/80', category: 'Mens Fashion' },
        { id: 8, name: 'Pocket Watch Leather Pouch', price: '$106.00', oldPrice: '$120.00', image: '/api/placeholder/60/80', category: 'Accessories' },
        { id: 9, name: 'Sports Class Smart Watch', price: '$235.00', oldPrice: '$285.00', image: '/api/placeholder/60/80', category: 'Technology' }
    ]);


    const [bestSellers] = useState([
        { id: 1, name: 'Baby Fabric Shoes', rating: 5, price: '$5.00', oldPrice: '$8.00', image: '/api/placeholder/60/80', category: 'FOOTWEAR' },
        { id: 2, name: 'Mens Hoodies T-Shirt', rating: 4, price: '$17.00', oldPrice: '$26.00', image: '/api/placeholder/60/80', category: 'CLOTHING' },
        { id: 3, name: 'Girls T-Shirt', rating: 5, price: '$25.00', oldPrice: '$40.00', image: '/api/placeholder/60/80', category: 'CLOTHING' },
        { id: 4, name: 'Woolen Hat For Men', rating: 4, price: '$15.00', oldPrice: '$30.00', image: '/api/placeholder/60/80', category: 'ACCESSORIES' },
    ]);

    const [blogPosts] = useState([
        { id: 1, title: 'Clothes Retail KPIs 2021 Guide for Clothes Executives', image: '/api/placeholder/300/120' },
        { id: 2, title: 'Curbside fashion Trends: How to Win the Pickup Battle', image: '/api/placeholder/300/120' },
        { id: 3, title: 'EBT vendors: Claim Your Share of SNAP Online Revenue', image: '/api/placeholder/300/120' },
        { id: 4, title: 'Curbside fashion Trends: How to Win the Pickup Battle', image: '/api/placeholder/300/120' },
    ]);
    
    const [dealOfTheDayProducts] = useState([
        {
            name: 'Rose Gold Diamonds Earring',
            description: 'Elegant rose gold earrings with premium diamonds, perfect for special occasions. Handcrafted with attention to detail and timeless design.',
            price: '$1,990.00',
            oldPrice: '$2,000.00',
            image: 'http://res.cloudinary.com/dxx1lgamz/image/upload/6f45d675-1730-4f33-99ec-0256711226cd_adidas-utraboost-den',
            sold: 27,
            available: 40,
            discount: '-5%',
            reviews: 42,
            rating: 5,
        },
        {
            name: 'Silver Moonlight Necklace',
            description: 'A stunning silver necklace with a moonlight pendant, ideal for evening wear. Crafted with precision for a sparkling look.',
            price: '$450.00',
            oldPrice: '$500.00',
            image: 'http://res.cloudinary.com/dxx1lgamz/image/upload/6a0ce971-7007-4c0a-865a-bde7d826ee7a_biti-huner-cam',
            sold: 15,
            available: 50,
            discount: '-10%',
            reviews: 35,
            rating: 4,
        },
        {
            name: 'Crystal Drop Earrings',
            description: 'Chic crystal drop earrings that add elegance to any outfit. Perfect for both casual and formal occasions.',
            price: '$320.00',
            oldPrice: '$350.00',
            image: 'http://res.cloudinary.com/dxx1lgamz/image/upload/f8b75faba2-8b31cd64e1d1_nike-air-jordan-xanh-duong',
            sold: 20,
            available: 30,
            discount: '-8%',
            reviews: 28,
            rating: 4,
        },
    ]);
    const heroImages = [
        "http://res.cloudinary.com/dxx1lgamz/image/upload/6a0ce971-7007-4c0a-865a-bde7d826ee7a_biti-huner-cam",
        "http://res.cloudinary.com/dxx1lgamz/image/upload/6f45d675-1730-4f33-99ec-0256711226cd_adidas-utraboost-den",
        "http://res.cloudinary.com/dxx1lgamz/image/upload/f8b75f21-e81a-4b53-aba2-8b31cd64e1d1_nike-air-jordan-xanh-duong"
    ];

    useEffect(() => {
        homeJquery();
    }, [categories]);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentDealSlide, setCurrentDealSlide] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    //     }, 3000);
    //     return () => clearInterval(interval);
    // }, []);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentDealSlide((prev) => (prev + 1) % dealOfTheDayProducts.length);
    //     }, 3000);
    //     return () => clearInterval(interval);
    // }, [dealOfTheDayProducts.length]);

    const [timeLeft, setTimeLeft] = useState({
        days: 360,
        hours: 24,
        minutes: 59,
        seconds: 0
    });

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setTimeLeft(prevTime => {
    //             let { days, hours, minutes, seconds } = prevTime;

    //             if (seconds > 0) {
    //                 seconds -= 1;
    //             } else {
    //                 seconds = 59;
    //                 if (minutes > 0) {
    //                     minutes -= 1;
    //                 } else {
    //                     minutes = 59;
    //                     if (hours > 0) {
    //                         hours -= 1;
    //                     } else {
    //                         hours = 23;
    //                         if (days > 0) {
    //                             days -= 1;
    //                         }
    //                     }
    //                 }
    //             }

    //             return { days, hours, minutes, seconds };
    //         });
    //     }, 1000);

    //     return () => clearInterval(timer);
    // }, []);


    return (
        <>
            <ToastContainer position="top-center" autoClose={2000} pauseOnHover={false} />
            {/* Hero Banner */}
            <div className="relative overflow-hidden rounded-xl h-[400px] sm:h-[500px] mb-4 sm:mb-16 shadow-xl group mt-20 sm:mt-24">
                {/* Main slider container */}
                <div
                    key={currentSlide}
                    className="flex h-fulltransition-transform duration-700 ease-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {heroImages.map((img, index) => (
                        <div
                            key={index}
                            className="w-full h-full flex-shrink-0 sm:h-[500px] flex relative bg-gradient-to-r from-pink-50 via-white to-pink-50"
                        >
                            {/* Decorative background circles */}
                            <div className="absolute inset-0 opacity-10 hidden sm:block">
                                <div className="absolute top-12 left-12 w-32 h-32 rounded-full bg-pink-300" />
                                <div className="absolute bottom-16 right-20 w-24 h-24 rounded-full bg-purple-300" />
                            </div>

                            {/* TEXT CONTENT */}
                            <div className="w-full sm:w-1/2 flex flex-col justify-center p-4 sm:pl-[100px] z-10">
                                <div
                                    className="relative mb-2 animate__animated animate__fadeInDown"
                                    style={{ animationDelay: '0.2s' }}
                                >
                                    <p className="text-xs sm:text-sm font-medium text-pink-600 uppercase tracking-widest">
                                        Just Dropped
                                    </p>
                                </div>

                                <h2
                                    className="text-xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-2 sm:mb-6 animate__animated animate__fadeInDown"
                                    style={{ animationDelay: '0.3s' }}
                                >
                                    Elevate Your Style<br />
                                    with Our <span className="text-pink-600">New Arrivals</span>
                                </h2>

                                <p
                                    className="text-xs sm:text-base text-gray-600 mb-2 sm:mb-8 max-w-[200px] sm:max-w-md animate__animated animate__fadeInDown"
                                    style={{ animationDelay: '0.4s' }}
                                >
                                    Refresh your wardrobe with this season’s trendiest picks. Discover limited-time deals on stylish outfits for every occasion – casual, chic, or classic.
                                </p>

                                <div
                                    className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 animate__animated animate__fadeInDown"
                                    style={{ animationDelay: '0.5s' }}
                                >
                                    <button className="bg-pink-500 hover:bg-pink-600 transition-all duration-300 text-white py-2 sm:py-3 px-4 sm:px-8 rounded-full text-xs sm:text-sm font-semibold shadow-lg hover:shadow-pink-200 transform hover:-translate-y-1">
                                        Shop Now
                                    </button>
                                    <button className="border-2 border-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300 text-gray-800 py-2 sm:py-3 px-4 sm:px-8 rounded-full text-xs sm:text-sm font-semibold transform hover:-translate-y-1">
                                        Explore Collection
                                    </button>
                                </div>
                            </div>

                            {/* IMAGE CONTENT */}
                            <div className="w-full sm:w-1/2 h-[200px] sm:h-[500px] flex items-center justify-center relative px-2 sm:px-8">
                                <div className="absolute w-40 sm:w-80 h-40 sm:h-80 rounded-full bg-gradient-to-tr from-pink-100 to-purple-100 shadow-xl hidden sm:block" />
                                <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                                    <img
                                        src={img}
                                        alt={`Fashion Collection ${index + 1}`}
                                        className="max-h-[180px] sm:max-h-[420px] w-auto object-contain drop-shadow-xl"
                                    />
                                    <div className="absolute -top-5 -right-5 bg-pink-500 text-white w-12 sm:w-16 h-12 sm:h-16 rounded-full items-center justify-center font-bold shadow-lg rotate-12 hidden sm:flex">
                                        <div className="text-center leading-tight text-[8px] sm:text-xs">
                                            <div>UP TO</div>
                                            <div className="text-[10px] sm:text-lg font-extrabold">40%</div>
                                            <div>OFF</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* DOT INDICATORS */}
                <div className="absolute bottom-2 sm:bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
                    {heroImages.map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-pink-500 scale-125' : 'bg-gray-300'
                                }`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>

                {/* NAVIGATION ARROWS */}
                <button
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-90 rounded-full p-1 sm:p-2 text-pink-600 hover:text-pink-800 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-md"
                    onClick={() =>
                        setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1))
                    }
                    aria-label="Previous slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-6 w-4 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-90 rounded-full p-1 sm:p-2 text-pink-600 hover:text-pink-800 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-md"
                    onClick={() =>
                        setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1))
                    }
                    aria-label="Next slide"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-6 w-4 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>


            {/* Main content */}
            <div className="py-2 sm:py-8">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-8">
                    {/* Sidebar */}
                    <div className="col-span-1 hidden sm:block sticky top-24 self-start space-y-2 sm:space-y-8">
                        <div className="mb-8 border p-2 rounded-lg">
                            <h2 className="font-semibold mb-4">CATEGORY</h2>
                            <ul>
                                {categories.map((category, index) => (
                                    <li key={index} className="py-2 border-border-gray-100">
                                        <div className='flex justify-between items-center '>
                                            <div>
                                                <span className="w-8 h-8 inline-block mr-2 bg-gray-200">
                                                    <img src="http://res.cloudinary.com/dv6fjob4v/image/upload/553055ef-abc4-42e8-aafe-f3d0972152ec_bo-nu-rong-xam"
                                                        className='w-full h-full object-cover'
                                                    />
                                                </span>
                                                <span>{category.name}</span>
                                            </div>
                                            <span className="text-gray-400 cursor-pointer show-sub-category"><Plus size={16} /></span>
                                        </div>
                                        <div className='hidden content-slide'>
                                            <div className="mt-2 pt-1 ml-1 text-sm text-gray-600 border-t-2 space-y-2">
                                                {category.children && category.children.length > 0 && category.children.map(sub => (
                                                    <div className="flex justify-between">
                                                        <span>{sub.name}</span>
                                                        <span>{sub.children.length}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-2 sm:mb-8">
                            <h2 className="font-semibold text-xs sm:text-base mb-1 sm:mb-4">BEST SELLERS</h2>
                            {bestSellers.map((product) => (
                                <div key={product.id} className="flex mb-1 sm:mb-4">
                                    <div className="w-12 sm:w-16 h-12 sm:h-16 mr-1 sm:mr-4">
                                        <img src="http://res.cloudinary.com/dv6fjob4v/image/upload/553055ef-abc4-42e8-aafe-f3d0972152ec_bo-nu-rong-xam" alt={product.name} className="w-full h-full object-cover rounded" />
                                    </div>
                                    <div>
                                        <h3 className="text-xs sm:text-sm font-medium">{product.name}</h3>
                                        <div className="flex space-x-0.5 sm:space-x-1 items-center text-yellow-400 text-[8px] sm:text-xs my-0.5 sm:my-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={8} sm:size={12} fill={i < product.rating ? "currentColor" : "none"} />
                                            ))}
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-xs sm:text-sm font-medium text-gray-900">{product.price}</span>
                                            <span className="ml-1 sm:ml-2 text-[8px] sm:text-xs text-gray-400 line-through">{product.oldPrice}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Main product listings */}
                    <div className="col-span-1 sm:col-span-3">
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-2 sm:mb-8">
                            <ProductSlider items={newArrivals} title="New Arrivals" itemsPerPage={3} />
                            <ProductSlider items={newArrivals} title="New Arrivals" itemsPerPage={3} />
                            <ProductSlider items={newArrivals} title="New Arrivals" itemsPerPage={3} />
                        </div>

                        {/* Deal of the day */}
                        <div className="max-w-full mx-auto p-2 sm:p-6">
                            <div className="mb-2 sm:mb-12">
                                <div className="flex items-center justify-between mb-1 sm:mb-6">
                                    <h2 className="text-lg sm:text-2xl font-bold text-gray-800">Deal Of The Day</h2>
                                </div>

                                <div className="relative overflow-hidden rounded-lg sm:rounded-xl shadow-md sm:shadow-lg group">
                                    {/* Main slider container */}
                                    <div
                                        className="flex transition-transform duration-700 ease-out"
                                        style={{ transform: `translateX(-${currentDealSlide * 100}%)` }}
                                    >
                                        {dealOfTheDayProducts.map((product, index) => (
                                            <div
                                                key={index}
                                                className="w-full flex-shrink-0 flex flex-col sm:flex-row bg-gradient-to-r from-pink-50 via-white to-pink-50"
                                            >
                                                {/* Decorative elements */}
                                                <div className="absolute top-0 left-0 w-full h-full opacity-10 hidden sm:block">
                                                    <div className="absolute top-12 left-12 w-32 h-32 rounded-full bg-pink-300"></div>
                                                    <div className="absolute bottom-16 right-20 w-24 h-24 rounded-full bg-purple-300"></div>
                                                </div>

                                                {/* Product Image */}
                                                <div className="w-full sm:w-2/5 p-2 sm:p-8 flex items-center justify-center relative z-10">
                                                    <div className="relative group">
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            className="h-32 sm:h-64 object-contain transition-transform duration-500 transform group-hover:scale-105 drop-shadow-xl"
                                                        />
                                                        <div className="absolute top-0 right-0 bg-pink-500 text-white text-xs font-bold px-1 sm:px-2 py-0.5 sm:py-1 rounded-bl-lg">
                                                            {product.discount}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Product Details */}
                                                <div className="w-full sm:w-3/5 p-2 sm:p-8 flex flex-col justify-center z-10">
                                                    <div className="flex items-center mb-1 sm:mb-2">
                                                        <div className="flex text-yellow-400">
                                                            {[...Array(5)].map((_, i) => (
                                                                <span key={i} className="text-xs sm:text-base">{i < product.rating ? '★' : '☆'}</span>
                                                            ))}
                                                        </div>
                                                        <span className="ml-1 sm:ml-2 text-xs sm:text-sm text-gray-500">({product.reviews} reviews)</span>
                                                    </div>

                                                    <h3 className="text-base sm:text-2xl font-bold mb-1 sm:mb-2 text-gray-800">{product.name}</h3>

                                                    <p className="text-xs sm:text-gray-600 mb-2 sm:mb-4 leading-relaxed line-clamp-2 sm:line-clamp-none">{product.description}</p>

                                                    <div className="flex items-center mb-2 sm:mb-6">
                                                        <span className="text-lg sm:text-3xl font-bold text-pink-600">{product.price}</span>
                                                        <span className="ml-1 sm:ml-3 text-base sm:text-lg text-gray-400 line-through">{product.oldPrice}</span>
                                                    </div>

                                                    <div className="flex flex-col space-y-2 sm:space-y-6">
                                                        <div className="space-y-1 sm:space-y-2">
                                                            <div className="flex justify-between text-xs sm:text-sm">
                                                                <span className="font-medium text-gray-700">ALREADY SOLD: {product.sold}</span>
                                                                <span className="font-medium text-gray-700">AVAILABLE: {product.available}</span>
                                                            </div>
                                                            <div className="w-full bg-gray-200 rounded-full h-1 sm:h-2">
                                                                <div
                                                                    className="bg-pink-500 h-1 sm:h-2 rounded-full"
                                                                    style={{ width: `${(product.sold / (product.sold + product.available)) * 100}%` }}
                                                                ></div>
                                                            </div>
                                                        </div>

                                                        <div className="space-y-1 sm:space-y-2">
                                                            <div className="flex items-center text-gray-700">
                                                                <Clock className="w-3 sm:w-4 h-3 sm:h-4 mr-1 sm:mr-2 text-pink-500" />
                                                                <span className="font-medium text-xs sm:text-base">HURRY UP! OFFER ENDS IN:</span>
                                                            </div>

                                                            <div className="flex space-x-1 sm:space-x-3">
                                                                {Object.entries(timeLeft).map(([unit, value]) => (
                                                                    <div key={unit} className="bg-gray-50 p-1 sm:p-3 rounded-md sm:rounded-lg shadow-sm flex flex-col items-center flex-1">
                                                                        <span className="text-sm sm:text-xl font-bold text-gray-800">{String(value).padStart(2, '0')}</span>
                                                                        <span className="text-[8px] sm:text-xs font-medium text-gray-500 capitalize">{unit}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        <button className="flex items-center justify-center bg-pink-500 hover:bg-pink-600 text-white py-1 sm:py-3 px-2 sm:px-6 rounded-md sm:rounded-lg font-medium transition duration-200 shadow-md transform hover:-translate-y-0.5 sm:hover:-translate-y-1">
                                                            <ShoppingCart className="w-4 sm:w-5 h-4 sm:h-5 mr-1 sm:mr-2" />
                                                            ADD TO CART
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Arrow Navigation */}
                                    <button
                                        className="absolute left-1 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-90 rounded-full p-1 sm:p-2 text-pink-600 hover:text-pink-800 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-md"
                                        onClick={() =>
                                            setCurrentDealSlide((prev) => (prev === 0 ? dealOfTheDayProducts.length - 1 : prev - 1))
                                        }
                                        aria-label="Previous slide"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-6 w-4 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                        </svg>
                                    </button>

                                    <button
                                        className="absolute right-1 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-90 rounded-full p-1 sm:p-2 text-pink-600 hover:text-pink-800 transition-all duration-300 opacity-0 group-hover:opacity-100 shadow-md"
                                        onClick={() =>
                                            setCurrentDealSlide((prev) => (prev === dealOfTheDayProducts.length - 1 ? 0 : prev + 1))
                                        }
                                        aria-label="Next slide"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-6 w-4 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* New Products */}
                        <div className="mb-2 sm:mb-12">
                            <h2 className="font-semibold mb-1 sm:mb-6">Sản phẩm của chúng tôi</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
                                {products.map((product) => (
                                    <CardProduct product={product} key={product.id} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonial */}
            <div className="px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-stretch">
                    <div className="md:col-span-1 space-y-6 h-full">
                        <h2 className="text-xl font-semibold border-b pb-2">Testimonial</h2>
                        <div className="bg-white p-6 rounded-xl shadow text-center space-y-4">
                            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
                                <img
                                    src="http://res.cloudinary.com/dxx1lgamz/image/upload/6a0ce971-7007-4c0a-865a-bde7d826ee7a_biti-huner-cam"
                                    alt="Alan Doe"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">ALAN DOE</h3>
                            <p className="text-sm text-gray-500">CEO & Founder Invision</p>
                            <div className="text-pink-500 text-4xl leading-none">“</div>
                            <p className="text-sm text-gray-600">
                                Lorem ipsum dolor sit amet consectetur <br />
                                Lorem ipsum dolor dolor sit amet.
                            </p>
                        </div>
                    </div>

                    {/* Banner */}
                    <div className="md:col-span-2 h-full">
                        <div className="relative rounded-xl overflow-hidden h-full">
                            <img
                                src="http://res.cloudinary.com/dv6fjob4v/image/upload/553055ef-abc4-42e8-aafe-f3d0972152ec_bo-nu-rong-xam"
                                alt="Summer Collection"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-6">
                                <span className="bg-white text-black text-xs font-semibold px-4 py-1 rounded mb-4">
                                    25% DISCOUNT
                                </span>
                                <h3 className="text-3xl md:text-4xl font-bold drop-shadow">Summer Collection</h3>
                                <p className="text-sm md:text-base text-gray-200 mt-2 mb-6 drop-shadow">
                                    Starting at only <span className="font-semibold">$10</span>
                                </p>
                                <button className="bg-pink-500 hover:bg-pink-600 transition-colors text-white py-2 px-6 rounded-full font-semibold text-sm flex items-center shadow-md">
                                    SHOP NOW <ArrowRight size={16} className="ml-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Services */}
                    <div className="md:col-span-1 space-y-6 h-full">
                        <h2 className="text-xl font-semibold border-b pb-2">Dịch vụ của chúng tôi</h2>
                        <div className="bg-white p-6 rounded-xl shadow space-y-6">
                            {[
                                {
                                    icon: <Truck size={24} />,
                                    title: "Giao hàng miễn phí",
                                    desc: "Cho đơn hàng từ 500.000đ",
                                },
                                {
                                    icon: <Clock size={24} />,
                                    title: "Giao hàng nhanh",
                                    desc: "Nội thành nhận hàng trong 24h",
                                },
                                {
                                    icon: <Phone size={24} />,
                                    title: "Hỗ trợ online",
                                    desc: "Thời gian: 8AM - 11PM",
                                },
                                {
                                    icon: <RefreshCw size={24} />,
                                    title: "Chính sách hoàn trả",
                                    desc: "Dễ dàng và miễn phí",
                                },
                                {
                                    icon: <ShieldCheck size={24} />,
                                    title: "Bảo hành 30 ngày",
                                    desc: "Đổi trả dễ dàng, nhanh chóng",
                                },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start space-x-4">
                                    <div className="text-pink-500">{item.icon}</div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-800">{item.title}</h3>
                                        <p className="text-xs text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}