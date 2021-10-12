//HOC 
import HomeLayoutHOC from "./HOC/home.hoc";

//components
import Temp from "./Components/temp";
import Master from "./Components/Navbar/master";


function App() {
  return<>
      <HomeLayoutHOC path="/" exact component={()=>{
        return <>
            <Temp className ="text-2xl" />
          </>
      }}  />
      <HomeLayoutHOC path="/:type" exact  component= {Master}  />
  </>
}

export default App;
