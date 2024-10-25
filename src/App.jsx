import React, { useState } from 'react';

import Weeelcome from './components/Weelcome';
import Input from './components/input/Input';
import Header from './components/header/Header';
import ExibirCard from './components/ExibirCard';

function App() {
  const [cardsData, setCardsData] = useState([]); // Estado para armazenar os dados dos cards

  const addCard = (newCard) => {
    setCardsData([...cardsData, newCard]); // Adiciona um novo card
  };

  return (
    <>
      <Header
        title={"Entrevero"}
        srcLogo={
          "https://s3-alpha-sig.figma.com/img/4e6d/9066/93eb1349338b462dfd3d37994b677eb4?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vd3ef85J9Js~o78btzEAiW2X322fW0WkAUGATHX-5SSxZ1UZrh1Vd7EtNt6NwDZqFT67fEYgIHPAKevut6ILi53xhN5SgfYXqQSHdOuuetR7cLfes7ZxbS8NtStGjvFMNIVm5b7a9fJb2AmDqZoYbJCEPFFwqHkDy3esb7ar~eHvRpYX1ogmX0HwN0ubRdogxOTbJPl0tl2csWhzVbjjv1Hv7-~QRgC32Y7yfP3EXcgrr5ZuAazhs0EPO6RHd0EXlHiWVKQgHj~mPZkLuFOmwA5evy~HckaEcLhZ4Ys79ShSwIRoFM9-RYk1-0r3cVBTiaSjleyRthD7uwg2dYXfJA__"
        }
      />
      <Weeelcome name={"Anderson"} />
      <div style={{display:"flex", justifyContent: "space-evenly"}}>
      <ExibirCard cardsData={cardsData} />
      
      {/* Passa a função addCard como prop para o Input */}
      <Input addCard={addCard} />
      </div>
    </>
  );
}

export default App;