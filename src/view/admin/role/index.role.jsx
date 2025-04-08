import { useEffect, useState } from "react";
import { listRole } from "../../../services/admin/role.service";
function ListRole() {
    const [roles, setRoles] = useState(null);
    useEffect(() => {
        const fetchApi = async () => {
            const res = await listRole();
            console.log(res);
        }
        fetchApi();
    }, []);
    return (
        <>
            ok
        </>
     );
}

export default ListRole;