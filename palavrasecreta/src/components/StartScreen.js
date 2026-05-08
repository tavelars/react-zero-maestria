import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Jogo de Adivinhação de Palavras.</h1>
      <p>Para iniciar o jogo, é necessário clicar no botão abaixo:</p>
      <button onClick={startGame}>Iniciar Jogo</button>
    </div>
  );
};
export default StartScreen;
