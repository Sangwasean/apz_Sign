import Advantages from "./components/Advantages";
import Document_boxes from "./components/Document_boxes";
import Main from "./components/Main";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App h-screen place-items-center ">
      <NavBar />
      <Main/>
      <Document_boxes/>
      <Advantages/>
    </div>
  );
}

export default App;
