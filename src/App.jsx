import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Script from "./components/Script";
import Request from "./components/Request";
import './App.css'
function App() {


  return (
    <>
      <Navbar></Navbar>
      <main className="main-container">
        <Main></Main>
      </main>
      <Script></Script>
      <Request></Request>
    </>
  );
};

export default App;
