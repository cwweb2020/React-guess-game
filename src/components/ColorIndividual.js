



const ColorIndividual = ({ color, handleclick }) => {

 
  return (
     <>
          <div className="color-box" style={{ background: color }} onClick={()=> handleclick(color)}></div>
     </>
  )
}

export default ColorIndividual