import { useState } from "react";
import "./App.css";
import ComponentExemplo from "./components/ComponentExemplo";
import Titulo from "./components/Titulo";
function App() {
  const cssDinamico = 10;
  const [name] = useState("Thiago");

  return (
    <div className="App">
      {/* CSS Global */}
      <h1>CSS React</h1>

      {/* CSS Componente */}
      <ComponentExemplo />
      <p>
        Paragrafo com exemplo de vazamento de css. Essa classe está descrita no
        ComponentExemplo.css
      </p>

      {/* CSS Inline */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Exemplo aplicação inline. Essa maneira deve ser evitada.
      </p>

      {/* CSS Inline Dinamico */}
      <h2 style={cssDinamico > 10 ? { color: "green" } : { color: "red" }}>
        CSS Dinamico Color baseado em teste lógico.
      </h2>
      <h2 style={cssDinamico <= 10 ? { color: "green" } : { color: "red" }}>
        CSS Dinamico Color baseado em teste lógico.
      </h2>
      <h2
        style={name === "Thiago" ? { color: "blue", background: "grey" } : null}
      >
        O nome correspondeu ao teste da variável name. Se a lógica não atendesse
        seria nulo sem aplicação do css.
      </h2>

      {/* CSS classe Dinamica */}
      <h2 className={cssDinamico <= 10 ? "red-title" : "title"}>
        CSS Dinamico Color baseado em teste lógico e utilizacao de classes.
      </h2>

      {/* CSS classe componentizado */}
      <Titulo />
    </div>
  );
}

export default App;
