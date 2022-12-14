import EmployeeListItem from "./EmployeeListItem";
import EmployeeData from "../data";
import { Link } from "react-router-dom";

const employees = EmployeeData.map((ele, index) => {
  return (
    <Link to={`/employee/${index}`}>
  <EmployeeListItem key={index} {...ele} />
  </Link>
  );
});
export default function EmployeeList(props) {
  return (
    <div>
        <section className="lists">{employees} </section>
    </div>
  );
}