import {  useState,useEffect } from "react";
import "./Page3.css";
import Drop from "./Dropd3";

import { useNavigate } from "react-router-dom";
import axios, { HttpStatusCode } from "axios";
let user;
const Page3 = () => {
  const [name, setName] = useState("");
  const [pasword, setPasword] = useState("");
  const [imageData, setImageData] = useState(null);
 const navigate=useNavigate();
  const handleChange = (event) => {
    setName(event.target.value);
    user = name;
  };
  // useEffect(() => {
  //   fetch('Http://localhttp://localhost:4500/user_s')
  //   .then(res=>res.jason()  
  //   )
  //   .then(data=>console.log(data))
  //   .catch(err=> console.log(err) )
  //   return () => {
  //   }
  // }, [])
  const handleChangepassword = (event) => {
    let inputValue = event.target.value;
    let numericValue = inputValue;
    if (numericValue.length > 8) {
      numericValue = numericValue.substring(0, 8);
    }
    setPasword(numericValue);
  };
  const handleSubmit = async (e) => {
    console.log(name, pasword, imageData);
    e.preventDefault();
    if (!name || !pasword) {
      alert("Please enter username and password");
    } else {
      try {
        const res = await axios.post("http://localhost:4500/unity_chat", {
          user_name: name,
          user_password: pasword     
        });
        console.log(res);
        navigate('/Page4');
      } catch (error) {
        console.error("Error storing name and password", error);
        // setError("user_name alkready exsit.");
      }
      // alert(error);
    }
  };
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      setImageData(e.target.result); 
      displayImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const displayImage = (imageDataUrl) => {
    let imageContainer = document.getElementById("image");
    imageContainer.innerHTML = `<span><img src="${imageDataUrl}" alt="Uploaded Image"></span>`;
  };

  return (
    <>
      <Drop />
      <div className="content">
        <h2>Profile info</h2>
        <p> Please provide your name and optional profile photo</p>
      </div>
      <div className="img-input">
        <input
          type="file"
          name=""
          id="file"
          accept=".jpeg,.png"
          onChange={handleFileUpload}
        />
      </div>
      <div className="img" id="image"></div>
      <div className="inputfields">
        <div className="username">
          <input
            type="text"
            placeholder="USER NAME"
            id="nam"
            onChange={handleChange}
          />

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
          </svg>
        </div>
        <div className="password">
          <input
            type="password"
            placeholder="CHOOSE PASSWORD"
            id="password"
            value={pasword}
            onChange={handleChangepassword}
          />
        </div>
      </div>

      <div className="button">
              
          <button
            className="b"
            onClick={ handleSubmit
            }
          >
            Next
          </button>
              </div>
    </>
  );
};
export { user };
export default Page3;