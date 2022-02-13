import { useContext, createContext, useState } from "react";


const DataContext = createContext();

export const DataConsumer = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const [originalState, setOriginalState] = useState(false);
  const [winnerColor, setWinnerColor] = useState(null);
 // const [randomNumber, setRandomNumber] = useState(null);
  
   const resetGame = () => {
        setOriginalState(!originalState);
    }
 

    // get random number
    // const getRandomNumber = (number) => {
    //     setRandomNumber(number);
    //     console.log(randomNumber);
    // }


    const changeWinnerColor = (pickedcolor) => {
       setWinnerColor(pickedcolor);
    }




  
  return (
    <DataContext.Provider
      value={{
        originalState,
        winnerColor,
        resetGame,
        changeWinnerColor
        
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
