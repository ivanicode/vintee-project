import { useState } from 'react'
import {Carousel} from '3d-react-carousal';

import gdanskBiala from './pictures/gdansk_biala.jpg';
import legendaBiala from './pictures/legenda_biala.jpg';
import legendaCzarna from './pictures/legenda_czarna.jpg';
import malborkBiala from './pictures/malbork_biala.jpg';
import malborkCzarna from './pictures/malbork_czarna.jpg';
import sukienniceBiala from './pictures/sukiennice_biala.jpg';
import sukienniceSzara from './pictures/sukiennice_szara.jpg';
import logo from './pictures/logo.png';


const slides = [
  <figure>
      <img src={gdanskBiala} alt="gdansk_biala.jpg" className="picture" />
      <figcaption className="description">Koszulka bawełniana JHK o gramaturze 150 g/cm2.<br />Dostępne rozmiary: S, M, L, XL, XXL.</figcaption>
    </figure>,
  <figure>
  <img src={legendaBiala} alt="legenda_biala.jpg" className="picture" />
  <figcaption className="description">Koszulka bawełniana JHK o gramaturze 150 g/cm2.<br />Dostępne rozmiary: S, M, L, XL, XXL.</figcaption>
</figure>,
<figure>
  <img src={legendaCzarna} alt="legenda_czarna.jpg" className="picture" />
  <figcaption className="description">Koszulka bawełniana JHK o gramaturze 150 g/cm2.<br />Dostępne rozmiary: 3/4, 5/6, 7/8, 9/11, 12/14, XS, S, M, L, XL, XXL.</figcaption>
</figure>,
<figure>
  <img src={sukienniceBiala} alt="sukiennice_biala.jpg" className="picture" />
  <figcaption className="description">Koszulka bawełniana JHK o gramaturze 150 g/cm2<br />Dostępne rozmiary: S, M, L, XL, XXL.</figcaption>
</figure>,
<figure>
  <img src={sukienniceSzara} alt="sukiennice_szara.jpg" className="picture" />
  <figcaption className="description">Koszulka bawełniana B&C o gramaturze 180 g/cm2<br />Dostępne rozmiary: 12/14, XS, S, M, L, XL, XXL.</figcaption>
</figure>,
  <figure>
  <img src={malborkBiala} alt="malbork_biala.jpg" className="picture" />
  <figcaption className="description">Koszulka bawełniana Fruit of the Loom o gramaturze 150 g/cm2.<br />Koszulka dla dzieci JHK o gramaturze 150 g/cm2.</figcaption>
</figure>,
<figure>
  <img src={malborkCzarna} alt="malbork_czarna.jpg" className="picture" />
  <figcaption className="description malborkCzarna">Koszulka bawełniana Fruit of the Loom o gramaturze 150 g/cm2.<br />
    Koszulka dla dzieci JHK o gramaturze 150 g/cm2.<br />
    Dostępne rozmiary: 3/4, 5/6, 7/8, 9/11, 12/14, S, M, L, XL, XXL.
  </figcaption>
</figure>
];

const shirts = {
  malborkShirts: [
    <figure>
      <img src={malborkBiala} alt="malbork_biala.jpg" className="picture" />
      <figcaption className="description">Koszulka bawełniana Fruit of the Loom o gramaturze 150 g/cm2.<br />Koszulka dla dzieci JHK o gramaturze 150 g/cm2.</figcaption>
    </figure>,
    <figure>
      <img src={malborkCzarna} alt="malbork_czarna.jpg" className="picture" />
      <figcaption className="description malborkCzarna">Koszulka bawełniana Fruit of the Loom o gramaturze 150 g/cm2.<br />
        Koszulka dla dzieci JHK o gramaturze 150 g/cm2.<br />
        Dostępne rozmiary: 3/4, 5/6, 7/8, 9/11, 12/14, S, M, L, XL, XXL.
      </figcaption>
    </figure>,
    <figure>
    <img src={malborkBiala} alt="malbork_biala.jpg" className="picture" />
    <figcaption className="description">Koszulka bawełniana Fruit of the Loom o gramaturze 150 g/cm2.<br />Koszulka dla dzieci JHK o gramaturze 150 g/cm2.</figcaption>
  </figure>
  ],
  krakowShirts: [
    <figure>
      <img src={legendaBiala} alt="legenda_biala.jpg" className="picture" />
      <figcaption className="description">Koszulka bawełniana JHK o gramaturze 150 g/cm2.<br />Dostępne rozmiary: S, M, L, XL, XXL.</figcaption>
    </figure>,
    <figure>
      <img src={legendaCzarna} alt="legenda_czarna.jpg" className="picture" />
      <figcaption className="description">Koszulka bawełniana JHK o gramaturze 150 g/cm2.<br />Dostępne rozmiary: 3/4, 5/6, 7/8, 9/11, 12/14, XS, S, M, L, XL, XXL.</figcaption>
    </figure>,
    <figure>
      <img src={sukienniceBiala} alt="sukiennice_biala.jpg" className="picture" />
      <figcaption className="description">Koszulka bawełniana JHK o gramaturze 150 g/cm2<br />Dostępne rozmiary: S, M, L, XL, XXL.</figcaption>
    </figure>,
    <figure>
      <img src={sukienniceSzara} alt="sukiennice_szara.jpg" className="picture" />
      <figcaption className="description">Koszulka bawełniana B&C o gramaturze 180 g/cm2<br />Dostępne rozmiary: 12/14, XS, S, M, L, XL, XXL.</figcaption>
    </figure>
  ],
  gdanskShirts: [
    <figure>
      <img src={gdanskBiala} alt="gdansk_biala.jpg" className="picture" />
      <figcaption className="description">Koszulka bawełniana JHK o gramaturze 150 g/cm2.<br />Dostępne rozmiary: S, M, L, XL, XXL.</figcaption>
    </figure>
  ]
}



function App() {

  const [city, setCity] = useState(slides)
  
  function foo(event){
    const cityLink = event.target.id
    setCity(shirts[cityLink])
  }

  return (
    <div className="container">
      <div className="menu">
        <img src={logo} alt="logo" width={400} className="logo" />
        <ul className="ul">
          <li className="listItem" id="gdanskShirts" onClick={foo}>Gdańsk</li>
          <li className="listItem" id="malborkShirts" onClick={foo}>Malbork</li>
          <li className="listItem" id="krakowShirts" onClick={foo}>Kraków</li>
        </ul>
      </div>
      
      <div className="carousel-viewport">
      <div className="carousel">
        <Carousel slides={city} autoplay={false} />
      </div>
      </div>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@700&display=swap');
</style>
    </div>
    
  );
}

export default App;
