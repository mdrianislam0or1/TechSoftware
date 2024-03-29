import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import DashBoard from "../DashBoard/DashBoard";
import FooterInfo from "../Shared/Footer/FooterInfo";
import DeleteData from "./DeleteData";

const ManageData = () => {
  const [manage, setManage] = useState([]);

  const [loggedInUser,setLoggedInUser] = useContext(UserContext)



  // useEffect(()=>{

  //   fetch("https://techsoft-backend.vercel.app/manageAll",{
  //     method:'POST',
  //     headers:{'content-type':'application/json'},
  //     body:JSON.stringify({email: loggedInUser.email})
  //   })
  //   .then((res) => res.json())
  //    .then((data) => setManage(data))

  // },[])

  useEffect(() => {
    fetch("https://techsoft-backend.vercel.app/manageAll")
      .then((res) => res.json())
      .then((data) => setManage(data))
  }, []);

  return (
    <div className="container-fluid">
    <div className="container">
     <h1 className="text-center">Admin Can Manage</h1>
        <div className="col-md-12">
        <div className="row">
        {manage.map((de) => (
            <DeleteData de={de} />
          ))}
        </div>
          
        </div>
     
      
    </div>
    <FooterInfo/>
    </div>
  );
};

export default ManageData;
