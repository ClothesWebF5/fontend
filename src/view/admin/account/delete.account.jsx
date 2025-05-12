import { Trash } from "lucide-react";
import Swal from "sweetalert2";
import { deleteAccount } from "../../../services/admin/account.service";

function DeleteAccount({ reload, item, type = "desktop" }) {
  const handleDelete = async (id) => {
    const res = await deleteAccount(id);
    if (res.status == 200) {
      reload();
    }
  }
  const handleClick = () => {
    Swal.fire({
      title: "Bạn có chắc chắn?",
      text: "Thay đổi trạng thái tài khoản",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Chấp nhận",
      cancelButtonText: "Hủy bỏ"
    }).then((result) => {
      if (result.isConfirmed) {
        handleDelete(item.id);
        Swal.fire({
          title: "Đã cập nhật!",
          text: "Thay đổi trạng thái thành công.",
          icon: "success",
          timer: 1500,
          showConfirmButton: false
        });
      }
    })
  }
  return (
    <>
      {type == "desktop" ? (
        <button onClick={handleClick}
          className="p-2 text-red-500 hover:bg-red-50 rounded-full">
          <Trash className="w-4 h-4" />
        </button>
      ) : (
        <button onClick={handleClick}
          className="p-2 bg-red-100 text-red-600 rounded-full">
          <Trash className="w-4 h-4" />
        </button>
      )}
    </>
  );
}

export default DeleteAccount;