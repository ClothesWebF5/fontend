import { useEffect, useState } from "react";
import { getInfor } from "../../../services/Client/user.service";
import { useNavigate } from "react-router-dom";

function Infor() {
    const navigate = useNavigate();
    const [infor, setInfor] = useState(null);
    useEffect(() => {
        const fetchApi = async () => {
            const res = await getInfor();
            console.log(res);
            if(res.status === 200){
                setInfor("OKKKKKKKKKKKK")
            }
            // if(res.data.message === "Login success"){
            //     setInfor("da login");
            // }
        }
        fetchApi();
    }, [navigate]);
    if(!infor){
        return null;
    }
    return (
        (infor ? <>
                <div>{infor}</div>
        </> : <>
                <div>Retry page</div>
        </>
        ) 
    );
}

export default Infor;