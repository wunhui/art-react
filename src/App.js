import './reset.css';
import './App.css';
import './M-App.css';
import { useMediaQuery } from 'react-responsive'
import Navi from './component/Navigation';
import Imgsection from './component/Imgsection';
import Modal from './component/Modal';
import Artmusium from './component/Artmusium';
import Exhibition from './component/Exhibition';
import Collection from './component/Collection';
import Digital from './component/Digital';
import News from './component/News';
import Research from './component/Research';
import Notice from './component/Notice';
import Footer from './component/Footer';
import Address from './component/Address';
import { useState } from 'react';
import Popup from './component/Popup';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  return isDesktop ? children : null
}

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

function App() {
  const [modal, setModal] = useState(true)
  const [popup, setPopup] = useState(true)
  return (
    <div className="App">
      {popup ? <Popup onClose={setPopup} /> : null}
      <Navi/>
      {/* {modal ? <Modal onClose={setModal} /> : null} */}
      <Imgsection/>
      <Artmusium/>
      <Exhibition />
      <Collection />
      <Digital />
      <News />
      <Research />
      <Notice />
      <Footer />
      <Address />
    </div>
  );
}

export default App;

