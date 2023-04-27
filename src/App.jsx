import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from 'values.js'
import { ToastContainer, toast } from 'react-toastify';


const App = () => {

  const [colors, setColor] = useState(new Values('#8f2828').all(10))

  const addColor = (color)=>{
    try {

      const newColors = new Values(color).all(10)
      setColor(newColors)

    } catch (error) {
      toast.error('This is not a color!')
    }
  }

  return (
    <main>
      <Form addColor={addColor}/>
      <ColorList colors={colors} />
      <ToastContainer />
    </main>);
};
export default App;
