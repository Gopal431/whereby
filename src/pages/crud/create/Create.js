import React, { useState } from "react";
import "./Create.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Create() {
    const navigate =useNavigate()
  const [info, setInfo] = useState({ fName: "", lName: "", photo: "" });
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/crud", {
        fName: info.fName,
        lName: info.lName,
        photo: info.photo,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
      navigate('/read')
    setInfo({ fName: "", lName: "", photo: "" });
  };
  return (
    <div className="main">
      <form onSubmit={submitHandler}>
       <div className="main-div">
       <label for="fName">First Name</label>
        <input
          type="text"
          value={info.fName}
          onChange={(e) => setInfo({ ...info, fName: e.target.value })}
          placeholder="Your name.."
        />
       </div>

        <label for="lname">Last Name</label>
        <input
          type="text"
          value={info.lName}
          onChange={(e) => setInfo({ ...info, lName: e.target.value })}
          placeholder="Your last name.."
        />

        <label for="country">Photo</label>
        <input
          type="text"
          value={info.photo}
          onChange={(e) => setInfo({ ...info, photo: e.target.value })}
          placeholder="Photo Url"
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Create;
