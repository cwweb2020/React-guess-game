import { DataConsumer } from "../context/DataProvider";



const Navbar = ({ changeGameMode, handleNewGame }) => {
//  const { randomNumber } = DataConsumer();


  return (
    <>
        <header>
          <h2>the color guessing game</h2>
          <h2 style={{fontSize: "25px"}}>rgb(166, 247, 3)</h2>
          <div className="button-container">
            <button style={{ background: "orangered", color: "white" }} onClick={()=> handleNewGame()}>
              new game
            </button>
            <button onClick={()=> changeGameMode("easy")}>easy</button>
            <button onClick={()=> changeGameMode("hard")}>hard</button>
          </div>
        </header>
    </>
  );
};

export default Navbar;