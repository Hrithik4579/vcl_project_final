import React,{useRef,useState} from "react"
import { useNavigate } from "react-router-dom"
import Snavbar from "./Snavbar"
import "./Slogin.css"
import "./Shome.css"
import axios from "axios"
export default function Shome(){
  const navigate=useNavigate();
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [contact,setContact]=useState(0)
  const [resume,setResume]=useState("")
  const formRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData=new FormData();
    formData.append("name",name)
    formData.append("email",email)
    formData.append("contact",contact)
    formData.append("resume",resume)
    const result=await axios.post(
      "http://localhost:5000/api/details/resume",
      formData,
      {
        headers: {"Content-type": "multipart/form-data"},
      }
    );
      alert("Details added successfully")
    
    // const formData = new FormData(formRef.current);

    // try {
    //   const response = await fetch("http://localhost:5000/api/details/resume", {
    //     method: "POST",
    //     headers:{
    //       "content-type":"multipart/form-data"
    //     },
    //     body: formData,
    //   });

    //   if (!response.ok) {


        // console.log(response.statusText);
        // console.log(response.error);
    //     throw new Error("Failed to add details");
    //   }

    //   alert("Details added successfully");
    //   formRef.current.reset();
    // } catch (error) {
      // console.error(error);
    //   alert("Failed to add details");
    // }
  };
//   const handleChange=(e)=>{
//     e.preventDefault();
//     setCredentials({...credentials,[e.target.name]:e.target.value})
// }  
//         const formRef=useRef();
        return (
        <div className="addcomp">
    <Snavbar/>

    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 glass-container">
          <div className="mt-1 nav d-flex justify-content-center">
            <h2>ENTER DETAILS BELOW:</h2>
          </div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-2">
                  <label htmlFor="Name" className="form-label">
                    Name:
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    onChange={(e)=>setName(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="email" className="form-label">
                    email
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="contact" className="form-label">
                    Contact:
                  </label>
                  <input
                    name="contact"
                    type="number"
                    className="form-control"
                    onChange={(e)=>setContact(e.target.value)}
                  />
                </div>
                <label htmlFor="resume" className="form-label">
                    Resume
                </label>
                <input type="file" className="form-control mb-5" id="inputGroupFile02" required accept='.docx, .doc, .pdf' onChange={(e)=>setResume(e.target.files[0])}/> 
               </div>
               <div>
                <button type="submit" className="btn btn-dark btn-lg mt-2">Submit</button>
               </div>
            </div>
            <br />
            <br />
            {/* <div className="text-center">
              <button type="submit" className="btn btn-dark btn-lg mt-2">
                Add Company
              </button>
            </div> */}
          </form>
        </div>
      </div>
    </div>
        </div>
    )
}
