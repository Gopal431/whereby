import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Read.css";
import axios from "axios";
const Read = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  const getData = () => {
    axios
      .get("http://localhost:3000/crud")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  const editHandler = (id, fName ,lName , photo) =>{
    localStorage.setItem("id",id)
    localStorage.setItem('fName',fName)
    localStorage.setItem('lName',lName)
    localStorage.setItem('photo',photo)
    navigate('/edit')

  }
  const deleteHandler = (id) =>{
    axios.delete(`http://localhost:3000/crud/${id}`)
    .then(()=>getData())
    .catch((err)=>console.log(err))
    
  }
  return (
    <div>
     <Link to="/create"> <button className="create">
        Create
      </button></Link>
      <div style={{padding:"20px"}}>
        {data.map((item, index) => {
          return (
            <div  key={index} className="main-card">
              <div class="card">
                <img src={item.photo} alt="Avatar" />
                <div class="container">
                  <h4>
                    <b>{item.fName} </b>
                    <b>{item.lName} </b>
                  </h4>
                </div>
                <div className="btn-div">
                  <button className="edit-btn" onClick={()=>editHandler(item.id , item.fName, item.lName ,item.photo)}>Edit</button>
                  <button className="delete-btn" onClick={()=>deleteHandler(item.id)}>Delete</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Read;
