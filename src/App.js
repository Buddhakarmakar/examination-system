import { BrowserRouter as Router, Route } from "react-router-dom";
// import Login from './pages/login/Login';
import Question from './pages/question/Question';
// import SendData from "./pages/question/SendData"
import './App.css';
import CheckAnswer from "./pages/question/CheckAnswer";
// import { MyComponent } from "./pages/farmer_motion/MyComponent";

function App() {
  return (
    <Router>
        <div>
          <Route exact path="/" component={Question} />
          <Route path="/examination-system" component={Question}/>
          <Route path="/show-answer/" component={CheckAnswer}/>
        </div>

    </Router>

    
  );
}

export default App;
