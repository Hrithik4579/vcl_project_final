import "./Slogin.css"
import React,{useState} from "react"
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
function Stafflogin() {
    let navigate=useNavigate();

    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const handleSubmit=async (e)=>{

      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/auth/stafflogin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({email: credentials.email,password:credentials.password}),
      })
      const json=await response.json();
      console.log(json);
      if(json.success){
          localStorage.setItem('token',JSON.stringify(json.authToken));
          alert("successfully logged in");
          navigate('/ahome');
          
      }
      else{
          alert("invalid credentials");
      }
    }

    const handleChange = (e) => {

        e.preventDefault();

        setCredentials({ ...credentials, [e.target.name]: e.target.value })

      }

    

      return (

        <div className="main456">

          <div className="container1"> 

            <h2 className="admin fs-4 text-start">Staff Login</h2>

            <form onSubmit={handleSubmit}>

              <div className="form-group mb-3 my-4">

              <label htmlFor="email" className="ftext">Email:</label>

            <div className="inpbox">

              <input

                type="text"

                className="form-control"

                id="email"

                name="email"

                value={credentials.email}

                aria-describedby="emailHelp"

                placeholder="Enter email"

                onChange={handleChange}

              />

            </div>

            </div>

            <div className="form-group ">

            <label htmlFor="password" className="ftext">Password:</label>

            <div className="inpbox">

              <input

                type="password"

                className="form-control"

                id="password"

                name="password"

                value={credentials.password}

                placeholder="Password"

                onChange={handleChange}

              />

            </div>

            </div>

          <button type="submit" className="btn btn-dark my-3 mt-5 signin" >

            Sign in

          </button>

          <div className="text-center">

            <Link to="/" className="link text-muted">Sign in as Student?</Link><br /><br />

          </div>
          <div className="text-center">

<Link to="/staffsignup" className="link text-muted">Sign up<br /><br/></Link>

</div>

        </form>

      </div>

    </div>

  );

}

export default Stafflogin;
