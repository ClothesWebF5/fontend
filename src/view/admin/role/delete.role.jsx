import { Trash2 } from "lucide-react";
import { deleteRole } from "../../../services/admin/role.service";

function DeleteRole({ item, reload, type }) {

    const handleDeleteRole = async (id) => {
        const res = await deleteRole(id);
        if (res.status == 200) {
            reload();
        }
    };

    return (
        <>
            {
                type == "desktop" ? (
                    <button onClick={() => handleDeleteRole(item.id)} className="text-red-500 hover:bg-red-100 p-2 rounded">
                        <Trash2 size={20} />
                    </button>
                ) : (
                    <button onClick={() => handleDeleteRole(item.id)} className="text-red-500 hover:bg-red-100 p-2 rounded">
                        <Trash2 size={20} />
                    </button>
                )
            }
        </>
    );
}

export default DeleteRole;