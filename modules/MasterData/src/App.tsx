
import "./App.css"
import { Provider } from "react-redux";
import { masterDataStore } from "./store/store";
import SkillsWithStore from "./components/Skills";

interface Props { }

const App = (props: Props) => {
  return <>
    <center><h2>Master Data App</h2></center>
    <SkillsWithStore />
  </ >
};

export default App;
