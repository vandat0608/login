import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {

    const navigate = useNavigate()
    // Xử lý 
    const handleLogout = () => {
        axios.get('http://localhost:8081/Home')
            .then(res => {
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="">
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </div>
    )
}
export default Home;