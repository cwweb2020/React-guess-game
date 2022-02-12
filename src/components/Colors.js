import { useEffect, useState } from "react";
import ColorIndividual from "./ColorIndividual";
import { DataConsumer } from "../context/DataProvider";



const Colors = ({ quantity }) => {
    const [colors, setColors] = useState([])
    const [singleColor, setSingleColor] = useState(null)

    const { originalState } = DataConsumer(); // boolean value
  //  console.log(originalState);

    const getRandomColor = () => {
        let colors = [];
        for (let i = 0; i < 3; i++) {
            colors.push(Math.ceil(Math.random() * 256));
             
        }
        let color = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
      //  console.log(typeof color);
        return color;
    }
    ///

    const getRandomColor2 = (quantity) => {
        let colors = [];
        for (let i = 0; i < quantity; i++) {
            colors.push(getRandomColor());
             
        }
       setColors(colors);
    }

    useEffect(() => {
        getRandomColor2(quantity)
    }, [quantity, originalState])

    ///////////////
  //   useEffect(() => {
  //     getRandomColor2(quantity)
  // }, [originalState])

  

    // pick up a single color
    useEffect(() => {

       setSingleColor(colors[Math.ceil(Math.random() * colors.length)])
    //   console.log("single color " +  singleColor);
      
    }, [quantity, colors])

  
 
    // compare the single color with the colors array

    const handleclick = (color) => {
       console.log("color elegido " + color);
       if (color === singleColor) {
         setColors(colors.filter(c => c === color))
       }else if (color !== singleColor) {
         setColors(colors.filter(c => c !== color))
       }


    }

  //  const goToStartGame = (originalState) => {
  //     if (originalState) {
  //       getRandomColor2()
        
  //     }
    
  //   }


  return (
    <>
      <div className="color-wrap">
      {
        colors.map((color, index) => (
            <ColorIndividual color={color} key={index} handleclick={handleclick}/>
        ))
      }
        
      </div>
    </>
  );
};

export default Colors;
