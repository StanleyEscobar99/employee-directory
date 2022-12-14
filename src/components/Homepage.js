import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

export default function Homepage(props) {
  return (
    <div>
      <Header />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}