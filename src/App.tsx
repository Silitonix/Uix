import Hierachy from "./panels/Hierachy";
import Properties from "./panels/Properties";
import ToolBar from "./panels/ToolBar";
import Viewport from "./panels/Viewport";

function App()
{
  return <>
    <Hierachy />
    <Viewport />
    <Properties />
    <ToolBar/>
  </>;
}

export default App;
