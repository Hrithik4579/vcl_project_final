import React, { useEffect,useState} from 'react'
import axios from 'axios'
import "./Ahome.css"
import Anavbar from './Anavbar';
function Ahome(){
    useEffect(()=>{
        get_details();
    },[]);
    const [detail,setDetail]=useState(null);
    const get_details=async ()=>{
        // try{
        // const result=await axios.get("http://localhost:5000/api/details/fetch"s)
        //  setDetail(result.data.data);
        // }
        // catch(error){
        //     console.log("error")
        // }
        try {
            const response = await fetch('http://localhost:5000/api/details/fetch');
            const jsonData = await response.json();
            console.log(jsonData)

            console.log(detail);
            setDetail(jsonData );
            console.log(detail);
          } catch (error) {
            console.error('Failed to fetch data:', error);
          }
    }
    const showResume=(resume)=>{
        window.open(`http://localhost:5000/files/${resume}`,"_blank","nonreferrer")
    }
    const formatRegister=(dateString)=>{
        return new Date(dateString).toLocaleDateString()
    }
    const formatTime=(timeString)=>{
        return new Date(timeString).toLocaleTimeString()
    }
    return(
        <div className='container'>
            <Anavbar/>
            <div className='start'>
            <h1 className='student_details'> Student Details </h1>         
        <div className='tablehead'>
            <table className='styled-table'>
                <thead>
        <tr>
                         <th>Student Name</th>
                         <th>Student email</th>
                         <th>Student Contact</th>
                         <th>Date of Uploading</th>
                         <th>Time of Uploading</th>
                         <th>Student Resume</th>
                        </tr>
                        </thead>
                        <tbody>
        {detail==null?"":
            detail.map((data)=>{
                return (
                        <tr>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.contact}</td>
                            <td>{formatRegister(data.date)}</td>
                            <td>{formatTime(data.date)}</td>
                            <td><button className='btn btn-dark' onClick={()=>showResume(data.resume)}>Student Resume</button></td>
                        </tr>
                );
            })
        }
        </tbody>
        </table>
        </div>
        </div>
        </div>
    )
}
export default Ahome;