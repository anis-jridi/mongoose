import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "./Components/UserList";
import Add from "./Components/Add";

function App() {
  return (
    <div className="App">
      <Add />
      <UserList />
    </div>
  );
}

export default App;
