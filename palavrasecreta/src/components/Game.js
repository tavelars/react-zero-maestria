import "./Game.css";

const Game = ({ verifyLetter }) => {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação 000</span>
      </p>
      <h1>Advinhe a Palavra</h1>
      <h3 className="tip">
        Dica sobre a plavra: <span>Dica....</span>
      </h3>
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blankSqare"></span>
      </div>
      <div className="letterContainer">
        <p>Tente adivinha uma letra da palavra:</p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button>Enviar</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizada:</p>
        <span>a, </span>
        <span>v, </span>
      </div>
    </div>
  );
};
export default Game;
