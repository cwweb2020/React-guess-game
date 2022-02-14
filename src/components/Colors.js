import { useEffect, useState } from "react";
import ColorIndividual from "./ColorIndividual";
import { DataConsumer } from "../context/DataProvider";
import Swal from 'sweetalert2'



const Colors = ({ quantity }) => {
    const [colors, setColors] = useState([])
    const [singleColor, setSingleColor] = useState(null)

    const { originalState, changeWinnerColor } = DataConsumer(); // boolean value
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
        pickaColor(colors)
       setColors(colors);
    }

    useEffect(() => {
        getRandomColor2(quantity)
        /* eslint-disable */
    }, [quantity]) // only run this effect when quantity changes
    
     console.log(colors, singleColor);
    ///////////////
  

     const pickaColor = (colors) => { // pick a color from the array of colors /  
         const pickedColor = colors[Math.ceil(Math.random() * colors.length - 1)];
         setSingleColor(pickedColor)
         changeWinnerColor(pickedColor)
     }

  
 
    // compare the single color with the colors array

    const handleclick = (color) => {
       console.log("color elegido " + color);
       if (color === singleColor) {
        // setColors(colors.filter(c => c === color))
      
         setColors(colors.map(c => c = color ))
          Swal.fire({
            title: 'Correcto!',
            text: 'Has ganado!',
            icon: 'success',
            confirmButtonText: 'Continuar'
          })
       }else if (color !== singleColor) {
        
         setColors(colors.map(c => c === color ? c = "white" : c))
       }


    }

    useEffect(() => {
        getRandomColor2(quantity)
         /* eslint-disable */
    }, [originalState]); // only run this effect when originalState changes

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
