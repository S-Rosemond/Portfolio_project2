import React from 'react';
import TextCard from '../components/cards/textcard/TextCard';
import Navbar from '../components/navigation/Navbar';
import Main from './../components/main/Main';

import text from '../components/cards/textcard/text';
import DoubleChevronBtn from './../components/button/DoubleChevronBtn';
import ImageCard from './../components/cards/imagecard/ImageCard';
import Btn from './../components/button/Btn';
import AltBtn from './../components/button/AltBtn';
import SmTextCard from './../components/cards/textcard/SmTextCard';
import SmImageCard from '../components/cards/imagecard/SmImageCard';
const Test = () => {
  return (
    <div className='main-container'>
      <section className='main-grid-2'>
        <ImageCard textArray={text} />
        <TextCard textArray={text} />
      </section>

      <section className='side-grid-3'>
        <div className='side-img-1'>
          <SmImageCard />
        </div>

        <div className='main-sm-card-grid side-content'>
          <SmTextCard />
        </div>
        <div className='side-img-2'>
          <SmImageCard
            src='/images/image-about-light.jpg'
            alt='light room with single chair'
          />
        </div>
      </section>

      {/* footer */}
    </div>
  );
};

export default Test;

{
  /* <ImageCard textArray={text} />
   */
}
