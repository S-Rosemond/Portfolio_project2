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
    <div>
      <div className='grid-2'>
        <ImageCard textArray={text} />
        <TextCard textArray={text} />
      </div>

      <div className='grid-3'>
        <div>
          <SmImageCard />
        </div>

        <div>
          <SmTextCard />
        </div>

        <div>
          <SmImageCard
            src='/images/image-about-light.jpg'
            alt='light room with single chair'
          />
        </div>
      </div>

      {/* footer */}
    </div>
  );
};

export default Test;

{
  /* <ImageCard textArray={text} />
   */
}
