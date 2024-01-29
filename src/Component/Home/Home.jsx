import { useEffect, useState } from "react";


const Home = () => {
    //Login from State
    const [phone,setPhoneData]=useState("")
    const [password,setPasswordData]=useState("")
    //verfy OTP State
    const [otp,setOtpData]=useState("")
    const [userId,setUserId]=useState("")
    // const [items,setItems]=useState([])
    const handleAddUser=()=>{
        const user={phone,password}
        console.log(user)
        fetch("https://mpotrack.com/public/api/v1/app/login", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
        
    })
    .then((response)=>{
        response.json()
        .then((result)=>{
            console.log(result)
        })
    })
    }
    const handleUserVerify=()=>{
        const sendOtp={otp};
        console.log(sendOtp);
        fetch("https://mpotrack.com/public/api/v1/app/verify-otp", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_id: userId,
                otp: otp
            })
        })
        .then((response)=>{
            response.json()
            .then((result)=>{
                setUserId(result.data.user_id)

            })
        })
    }
//     useEffect(()=>{
// localStorage.setItems('items',JSON.stringify(items))
//     },[items])

    return (
        <div className="md:ml-40">
            <div className="card  md:h-48 card-compact md:w-96 bg-base-100 shadow-xl">
                <div className="ml-10 mt-5">
                    <input className="mt-3 border" type="text" name="phone" value={phone} onChange={(e) => setPhoneData(e.target.value)}></input><br></br>
                    <input className="mt-5 border" type="password" name="password" value={password} onChange={(e) => setPasswordData(e.target.value)}></input><br></br>
                    <button onClick={handleAddUser} className="btn btn-secondary mt-3">AddUser</button>
                    <hr className="mt-3 border"></hr>
                </div>
            </div>

            <div className="mt-10 ">
            <div className="card  md:h-48 card-compact md:w-96 bg-base-100 shadow-xl">
                <h1 className="mt-2 text-center text-2xl">this is verify</h1>
                <input className="border" type="text" name="otp" value={otp} onChange={(e) => setOtpData(e.target.value)}></input><br></br>
                <button  onClick={()=>handleUserVerify } className="btn btn-primary mt-3">Verify</button>
            </div>
            </div>
        </div>
    );
};

export default Home;