import React, { useState } from 'react';
import Card from './Card'; // Importando o Card

function ExibirCard() {
  const [cards, setCards] = useState([]);

  const addCard = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  return (
    <div>
      {/* Renderiza o Card que adiciona novos cartões */}
      <Card addCard={addCard} />
      
      <div>
        {cards.map((card, index) => (
          <div key={index}> {/* Adiciona a chave ao elemento div */}
            <Card
              srcImage={card.srcImage}
              alt="Foto de perfil"
              style={{ borderRadius: '50%' }}
              nome={card.nome}
              telefone={card.telefone}
              egresso_convidado={card.egresso_convidado}
              pago={card.pago}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExibirCard;
