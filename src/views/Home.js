import {  useEffect, useState } from "react";
import Colors from "../components/Colors";
import Navbar from "../components/Navbar";
import { DataConsumer } from "../context/DataProvider";

const Home = () => {
  const [gameMode, setGameMode] = useState("hard");
  
  const { resetGame, winnerColor } = DataConsumer();
  
   
 const changeGameMode = (mode) => {
    setGameMode(mode);
  
 }

 // new game
 const handleNewGame = () => {
    resetGame()
}

  useEffect(() => {
   console.log("game mode");
      
  }, [gameMode])

  ///  new game function

  

  
  return (
    <>
      <section className="guess-total">
        <Navbar changeGameMode={changeGameMode} handleNewGame={handleNewGame} />
        <Colors quantity={
          gameMode === "hard" ? 6 : 3
        } />
      </section>
    </>
  );
};

export default Home;
