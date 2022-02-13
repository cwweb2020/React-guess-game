 import { DataConsumer } from "../context/DataProvider";


const Navbar = ({ changeGameMode, handleNewGame }) => {
    const { winnerColor } = DataConsumer();

  return (
    <>
      <header>
        <h2>the color guessing game!</h2>
        <h2 style={{ fontSize: "25px" }}>{winnerColor}</h2>
        <div className="button-container">
          <button
            style={{ background: "orangered", color: "white" }}
            onClick={() => handleNewGame()}
          >
            new game
          </button>
          <button
            style={{ background: "gold", color: "black" }}
            onClick={() => changeGameMode("easy")}
          >
            easy
          </button>
          <button onClick={() => changeGameMode("hard")}>hard</button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
