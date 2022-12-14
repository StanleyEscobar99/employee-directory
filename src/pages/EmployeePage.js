import { useParams } from 'react-router-dom'
import EmployeeData from "../data";
import { Link } from "react-router-dom"


export default function EmployeePage(props) {
  const { id } = useParams()
  console.log(id)
  return (
    <div>
         <div className="EmpHead">
         <Link to="/">
         <img className='backButton' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAB4UlEQVRIie3WP08WQRAG8J+2SolRQaLyKvR+BTsVaQnfwD9YCH4PS6I2ViAS1GhMKLWESkzUmBAT7azECoS8Fjcvqxe52zuMseBJNpebe2ae2dmdveUA/wiHGnCHcBWXcBqDYf+CT3iOp/j8t5IbwCy20a0ZO3gUie0L4/geQTcxhwmM4EiMkbDNB6eLDYy1Fb2lmEEXj3E2w2cYi9Lsp5qKjofjNm43dcZ0+O9oMPNBqbxtRHuYkcp+MsfhgVTe/WIpYt2rIw4pyrtp7zU9hlW8zhDuRKxtqf3+iJuR4VyF6FpwVjKEKdqri+tVpJdBmqgRXYv3HEyGz4sq0scgnSvZ+/Emvr3D8UxRij7v4n0VaSNIfSX7qvpTqzfKa98n7e5dHG6QeS66bZw+hOP5kr1c6hMNYo7+4reL8ozX43mhZP+Ki3gbgZblb65erPUq0o3Ibn6P723aaSH416pIp6QDZLhCfAWvMkQ72MIPNQcI3I8MFzMC1+FJxJrNIQ9IbTW9D9E7EeObBptxTPqtzbQU7flfaeo8JV0ElhTrVYeOVN4dxdnfCmNS2bcUB/6koqWOxhgN20JweuW93Fa0h37cVezMnMveQxlr2uR6Oyhdb8/4/Xq7rvj7PIv3A/w/+Am/TqGFCMnpPgAAAABJRU5ErkJggg=="/>
         </Link>
            <h1 className="Head1">Employee</h1>
        </div> 
     <img className="EmpIMG" src={EmployeeData[id].img} alt={EmployeeData[id].img} />
        <div>
      <p className="EmpName">{EmployeeData[id].name}</p>
      <p>{EmployeeData[id].title}</p>
      <h3>Call Office</h3>
      <p>{EmployeeData[id].callOffice}</p>
      <h3>Call Mobile</h3>
      <p>{EmployeeData[id].callMobile}</p>
      <h3>SMS</h3>
      <p>{EmployeeData[id].sms}</p>
      <h3>Email</h3>
      <p>{EmployeeData[id].email}</p>
      </div>
        
    </div>
  );
}