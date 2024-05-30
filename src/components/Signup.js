import {React,useState} from "react";
import "./Slogin.css"
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom";
const Signup = (props) => {
    const [credentials,setCredentials]=useState({name: "",email: "",password: "",cpassword: ""});
    let navigate=useNavigate();
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({name: credentials.name,email: credentials.email,password:credentials.password}),
        })
        const json=await response.json();
        console.log(json);
        if(json.success){
            localStorage.setItem('token',JSON.stringify(json.authToken));
            navigate('/');
            alert("successful creation");
        }
        else{
            alert("error");
        }
    // navigate("/");
}
const handleChange=(e)=>{
    e.preventDefault();
    setCredentials({...credentials,[e.target.name]:e.target.value})
}

  return (
    <div className="main456">
      <div className="container1">
    <div className="glass-container">
        <h2 className="my-3">Sign Up</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={handleChange}
          />
          </div>
        <div className="form-group mb-3">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            name="password"
            minLength={5} 
            required
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cpassword mb-3">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            placeholder="Password"
            name="cpassword"
            minLength={5}
            required
            onChange={handleChange}
          />
        </div>
        <div className="my-3">
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
        </div>
        <Link to="/" className="link text-muted">Login?</Link>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Signup;