
import { useState } from "react"
import Cart from "./components/ecosystem/Cart"
import Main from "./components/ecosystem/Main"
import Navbar from "./components/ecosystem/Navbar"
import Provider from "./context/Provider"

function App() {

  const [showCart,setShowCart] = useState(false)

  return (
    <Provider>
      <Navbar setShow={setShowCart}/>
      <Main />
      {showCart && <Cart setShow={setShowCart} />}
    </Provider>
  );
}

export default App
