
import Home from './pages/home';
import Mantors from './pages/mantors';
import Catagories from './pages/catagories.jsx';
import Participant from './pages/participant';
import Sidebar from './component/sidebar';
import Clock from './component/clock';
import From from "./component/from"
import TemperatureView from "./component/temperaterCalview";



function App() {
  return (
    <div>
      {/* <Clock local="bn-BD" />
      <Sidebar /> */}
      {/* <From/> */}
      <TemperatureView/>

    </div>
  )
}

export default App
