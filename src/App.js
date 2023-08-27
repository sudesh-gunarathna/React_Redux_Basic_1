import "./App.css"
import { Provider } from "react-redux";
import store from "./redux/store";
import FruitSection from "./componants/FruitSection";
import MilkSection from "./componants/MilkSection";
import CheeseSection from "./componants/CheeseSection";




function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>my first react redux App</h1>
      <FruitSection/>
      <MilkSection/>
      <CheeseSection/>
     
    </div>
    </Provider>
  );
}

export default App;
