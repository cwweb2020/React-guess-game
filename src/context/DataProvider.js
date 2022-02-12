import { useContext, createContext, useState } from "react";


const DataContext = createContext();

export const DataConsumer = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const [originalState, setOriginalState] = useState(false);
 // const [randomNumber, setRandomNumber] = useState(null);
  
   const resetGame = () => {
        setOriginalState(!originalState);
    }
 

    // get random number
    // const getRandomNumber = (number) => {
    //     setRandomNumber(number);
    //     console.log(randomNumber);
    // }






  
  return (
    <DataContext.Provider
      value={{
        originalState,
        resetGame,
        
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
