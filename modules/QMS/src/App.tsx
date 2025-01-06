import "./App.css";
import MRCReleaseWithStore from "./components/QualityManagement/MRCRelease";

interface Props {}

const App = (props: Props) => {
  return (
    <>
      <center>
        <h2>QMS</h2>
        <MRCReleaseWithStore />
      </center>
    </>
  );
};

export default App;
