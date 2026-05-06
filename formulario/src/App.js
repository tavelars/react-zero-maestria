import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h2>App Formularios</h2>
      <MyForm
        user={{
          name: "Thiago Silva",
          email: "tavelars@gmail.com",
          role: "dev",
          bio: "Tecnologo Aplicado.",
        }}
      />
    </div>
  );
}

export default App;
