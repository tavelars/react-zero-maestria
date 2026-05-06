import { useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");
  const [role, setRole] = useState(user ? user.role : "");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando o formulário");
    console.log(name, email, bio, role);

    setName("");
    setEmail("");
    setBio("");
  };

  return (
    <div>
      <h1>Meu Formulario</h1>
      {/* Configuracao do Formulario */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome."
            onChange={handleName}
            value={name}
          />

          {/* Label envolvendo input e onchange com funcao anonima chamando diretamente o set email*/}
          <label>
            <span>E-mail:</span>
            <input
              type="email"
              name="email"
              placeholder="Digite o seu e-mail."
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>

          <label>
            <span>Bio:</span>
            <textarea
              name="bio"
              placeholder="Descreva a Bio do usuário."
              onChange={(e) => setBio(e.target.value)}
              value={bio}
            />
          </label>

          <label>
            <span>Role usuário:</span>
            <select
              name="role"
              onChange={(e) => setRole(e.target.value)}
              value={role}
            >
              <option value="admin">Administrador</option>
              <option value="editor">Edição</option>
              <option value="redator">Redator</option>
              <option value="dev">Desenvolvedor</option>
            </select>
          </label>

          <input type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  );
};
export default MyForm;
