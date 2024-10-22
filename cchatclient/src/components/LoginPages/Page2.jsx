import { useState } from "react";
import "./Page2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropd from "./Dropd2";
import { Link } from "react-router-dom";
import axios from "axios";
function Page2() {
  // country_cosde`,`user_num`,`user_name`,`user_password
  const [values,setValues]=useState({
    user_cosde:'', 
    user_num:''
  })
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("");
  // logic for enter only 11 number
  const handlePhoneNumberChange = (event) => {
    let inputValue = event.target.value;
    let numericValue = inputValue.replace(/[^\d]/g, "");
    if (numericValue.length > 10) {
      numericValue = numericValue.substring(0, 10);
    }
    setPhoneNumber(numericValue);
    // setValues({...values ,[event.target.user_num]:[event.target.value]  });
  };
  const handleCountryCodeChange = (event) => {
    let inputValue = event.target.value;
    // Ensure the input starts with "+"
    if (inputValue.length > 3) {
      inputValue = inputValue.substring(0, 3);
    }
    setCountryCode(inputValue.startsWith("+") ? inputValue : `+${inputValue}`);
    setValues({...values ,[event.target.user_cosde]:[event.target.value]  })
  };
  // function to store the country code and number
  const handleSubmit = async (e) => {
    console.log(phoneNumber, countryCode);
    try {
      const res = await axios.post("http://localhost:4500/numbers", {
        user_num: phoneNumber ,
        country_code: countryCode
      });
      console.log(res);     
      
      // console.log(response.data);
    } 
    catch (error) {
      console.error("Error Storing Number", error);
    }
  };

  return (
    <>
      <div className="Page2 container-fluid">
        <Dropd />
        <div className="content">
          <h1>Enter your phone number</h1>
          <div className="paragraph-content">
            <p>
              {/* <p></p> */}
              Unity will need to verify your phone number and your country code.
            </p>
            <h6>
              Carrier charges may apply.<span> What s your Number?</span>
            </h6>
          </div>
        </div>
        <div className="mid-content">
          <div className="number">
            {/* <label htmlFor="">Country code</label> */}
            <input
              type="text"
              placeholder="+Country code"
              value={countryCode}
              onChange={handleCountryCodeChange}
              className="input-style"
            />
            <input
              type="text"
              placeholder="ENTER YOUR NUMBER"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              className="input-style"
            />
          </div>
          <select
            className="select"
            onChange={(e) => setCountryCode(`+${e.target.value}`)}
            defaultValue=""
          >
            <option value="" disabled>
              Select your country
            </option>
            <option value="92">Pakistan (+92)</option>
            <option value="91">India (+91)</option>
            <option value="93">Afghanistan (+93)</option>
            <option value="44">England (+44)</option>
          </select>
        </div>
        <div className="button">
          <Link
            to="/page3"
            onClick={(e) =>
              !phoneNumber ||
              phoneNumber.length < 10 ||
              phoneNumber.startsWith("0")
                ? e.preventDefault() + alert("invalid number or start with 0")
                : null
            }
          >
            <button
              className="button1"
              onClick={(e) => {
                if (!countryCode || countryCode.length < 3) {
                  e.preventDefault();
                  alert("country code is invalid");
                } else {
                  handleSubmit(e); // Call handleSubmit function
                }
              }}
            >
              Next
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Page2;
