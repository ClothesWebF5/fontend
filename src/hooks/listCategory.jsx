import { useEffect, useState } from "react";
import { listCategory } from "../services/admin/category.service";

export const ListCategory = () => {
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        const res = await listCategory();
        if (res.status === 200) {
            setCategories(res.data.result);
        }else if (res.status === 403){
            setCategories(null);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const reload = () => fetchCategories();

    return { categories, reload };
};
