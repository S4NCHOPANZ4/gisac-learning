import React, { useState } from 'react'
import KaliLogin from "./pages/KaliLogin";
import MenuPage from './pages/MenuPage';
function App() {
  const [finished, setFinished] = useState(false)


  return (
    <div>
      {!finished ? <KaliLogin setFinished={setFinished} /> : <MenuPage />}
    </div>
  );
}

export default App
