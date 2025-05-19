import { useEffect, useState } from 'react';

export default function ProductSlider({ title = "Products", items = [], itemsPerPage = 3 }) {
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        setTotalPages(Math.ceil(items.length / itemsPerPage));
    }, [items, itemsPerPage]);

    const getPageItems = (pageIndex) => {
        const startIndex = pageIndex * itemsPerPage;
        return items.slice(startIndex, startIndex + itemsPerPage);
    };

    return (
        <div className="w-full">
            <h2 className="font-semibold">{title}</h2>
            <div className="relative">
                <div
                    className="overflow-x-auto whitespace-nowrap py-4 snap-x snap-mandatory transition-all duration-300 scrollbar-none hover:scrollbar-thin hover:scrollbar-thumb-gray-300 hover:scrollbar-track-gray-100"
                >
                    {Array.from({ length: totalPages }).map((_, pageIndex) => (
                        <div
                            key={pageIndex}
                            className="inline-block w-full flex-shrink-0 snap-center transition-transform duration-300"
                        >
                            <div className="flex flex-col-reverse gap-3 mr-2 ml-2">
                                {getPageItems(pageIndex).map(product => (
                                    <div
                                        key={product.id}
                                        className="w-full bg-white rounded-lg shadow p-3 transition-all duration-300 hover:shadow-md transform hover:scale-[1.02]"
                                    >
                                        <div className="flex items-start">
                                            <img
                                                src="http://res.cloudinary.com/dv6fjob4v/image/upload/553055ef-abc4-42e8-aafe-f3d0972152ec_bo-nu-rong-xam"
                                                alt={product.name}
                                                className="w-20 h-20 object-contain"
                                            />
                                            <div className="ml-3 flex-1">
                                                <h3 className="text-sm font-semibold truncate max-w-[80%]">{product.name}</h3>
                                                <p className="text-xs text-gray-500">{product.category}</p>
                                                <div className="text-sm mt-1">
                                                    <span className="text-pink-600 font-bold mr-2">${product.price}</span>
                                                    <span className="line-through text-gray-400">${product.oldPrice}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
