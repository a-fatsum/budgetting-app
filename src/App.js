import "./App.css";
// import components
import Form from "./components/Form";
// import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../bootstrap/dist/js/bootstrap.min.css ";

//

function App() {
  return (
    <div className="App container">
      <header>
        <h2>Monthly Budget Planner</h2>
      </header>
      <Form></Form>
    </div>
  );
}

export default App;
