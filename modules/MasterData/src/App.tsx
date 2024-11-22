
import "./App.css"
import { Provider } from "react-redux";
import { masterDataStore } from "./store/store";
import SkillsWithStore from "./components/Skills";
import EmployeeWithStore from "./components/Employee";

interface Props { }

const App = (props: Props) => {
  return <>
    <center><h2>Master Data App</h2></center>
    {/* <SkillsWithStore /> */}
    <EmployeeWithStore />
  </ >
};

export default App;
