import {Carousel} from '3d-react-carousal';

import gdanskBiala from './pictures/gdansk_biala.jpg';
import legendaBiala from './pictures/legenda_biala.jpg';
import legendaCzarna from './pictures/legenda_czarna.jpg';
import malborkBiala from './pictures/malbork_biala.jpg';
import malborkCzarna from './pictures/malbork_czarna.jpg';
import sukienniceBiala from './pictures/sukiennice_biala.jpg';
import sukienniceSzara from './pictures/sukiennice_szara.jpg';

const slides = [
  <img src={gdanskBiala} alt="gdansk_biala.jpg" className="picture" />,
      <img src={legendaBiala} alt="legenda_biala.jpg" className="picture" />,
      <img src={legendaCzarna} alt="legenda_czarna.jpg" className="picture" />,
      <img src={malborkBiala} alt="malbork_biala.jpg" className="picture" />,
      <img src={malborkCzarna} alt="malbork_czarna.jpg" className="picture" />,
      <img src={sukienniceBiala} alt="sukiennice_biala.jpg" className="picture" />,
  <img src={sukienniceSzara} alt="sukiennice_szara.jpg" className="picture" />
];

{/*<img src={gdanskBiala} alt="gdansk_biala.jpg" className="gallery-cell initial" />
        <img src={legendaBiala} alt="legenda_biala.jpg" className="gallery-cell" />
        <img src={legendaCzarna} alt="legenda_czarna.jpg" className="gallery-cell" />
        <img src={malborkBiala} alt="malbork_biala.jpg" className="malbork_biala" />
        <img src={malborkCzarna} alt="malbork_czarna.jpg" className="malbork_czarna" />
        <img src={sukienniceBiala} alt="sukiennice_biala.jpg" className="sukiennice_biala" />
        <img src={sukienniceSzara} alt="sukiennice_szara.jpg" className="sukiennice_szara" />*/}

function App() {

  
  
  return (
    <Carousel slides={slides} autoplay={false} />
  );
}

export default App;
