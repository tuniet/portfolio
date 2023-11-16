import './Work.css';
import React, { useState } from 'react';
import frontlib from '../media/logos/frontlib.png'
import homehealth from '../media/logos/homehealth.png'
import parthenon from '../media/logos/parthenon.png'

function Work() {
  const [selectedItem, setSelectedItem] = useState(0);

  const resetSelectedItem = () => {
    setSelectedItem(null);
  };

  return (
    <div id='work' className='Work'>
        <h1 className='title'>My latest work</h1>
        <div className='grid'>
            <div id='1' className={`element one ${selectedItem === 1 ? 'expanded' : ''}`} onClick={() => setSelectedItem(1)}><img src={homehealth} alt=''></img></div>
            <div id='2' className={`element two ${selectedItem === 2 ? 'expanded' : ''}`}  onClick={() => setSelectedItem(2)}><img src={frontlib} alt=''></img></div>
            <div id='3' className={`element three ${selectedItem === 3 ? 'expanded' : ''}`}  onClick={() => setSelectedItem(3)}><img src={parthenon} alt=''></img></div>
        </div>
    </div>
  );
}

export default Work;