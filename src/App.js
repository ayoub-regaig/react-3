import React from 'react';
import './App.css';
import Program from './compoments/Program';
import City from './compoments/City';

function App() {
  return (
<div>
  <div>
  <h2>NOS PROGRAMMES</h2>
  <Program abc="part time program" des="welcome to part time program" />
  <Program abc="summer academy" des="welcome to summer academy" />
  <Program abc="kids coding program" des="welcome to kids coding program"/>
  <Program abc="full time program" des="welcome to full time program"/>
  </div>

    <div>
  <h2>Ou passent les session?</h2>
  <p>les session se passent dans les hackspaces de GoMyCode dans les villes suivant:L'hébergement est possible dans la limite des places disponible</p>
  <City aze="https://objects.airfrance.com/FR/common/common/img/tbaf/destinations/TUN/video/TUN-video-1_1-1024x1024.jpg" des="Tunis"/>
  <City aze="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Sousse_Ribat_Aussicht.JPG/280px-Sousse_Ribat_Aussicht.JPG" des="sousse"/>
  <City aze="https://tn24.ween.tn/news/uploads/articles/85464.jpg" des="sfax"/>
  </div>

</div>

  );
}


export default App;
