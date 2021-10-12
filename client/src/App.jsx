//HOC 
import HomeLayoutHOC from "./HOC/home.hoc";

//components
import Temp from "./Components/temp";

function App() {
  return<>
      <HomeLayoutHOC path="/" exact component={()=>{
        return <>
            <Temp className ="text-2xl" />
          </>
      }}  />
  </>
}

export default App;
