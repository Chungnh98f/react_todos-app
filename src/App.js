import "./App.css";
import ToDoList from "./components/ToDoList";

function App() {
    return (
        <div
            style={{
                backgroundColor: "#eee",
                minHeight: "100vh",
                marginTop: "-48px",
                paddingTop: "48px",
            }}
        >
            <ToDoList />
        </div>
    );
}

export default App;
