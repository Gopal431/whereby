import React, { useState } from "react";
import "./Edit.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Edit() {
    const [id] = useState(localStorage.getItem("id"));
    const [fName , setFName]=useState(localStorage.getItem("fName"))
    const [lName , setLName]=useState(localStorage.getItem("lName"))
    const [photo , setPhoto]=useState(localStorage.getItem("photo"))
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/crud/${id}`, {
        fName: fName,
        lName: lName,
        photo: photo,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    navigate("/read");
  };
  return (
    <div className="main">
      <form onSubmit={submitHandler}>
      <div className="main-div">
      <label for="fName">First Name</label>
        <input
          type="text"
          value={fName}
          onChange={(e) => setFName(  e.target.value )}
          placeholder="Your name.."
        />
      </div>

        <label for="lname">Last Name</label>
        <input
          type="text"
          value={lName}
          onChange={(e) => setLName( e.target.value )}
          placeholder="Your last name.."
        />

        <label for="country">Photo</label>
        <input
          type="text"
          value={photo}
          onChange={(e) => setPhoto( e.target.value )}
          placeholder="Photo Url"
        />

        <input type="submit" value="Update" />
      </form>
    </div>
  );
}

export default Edit;
