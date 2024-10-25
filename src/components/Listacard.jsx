import React, { useState } from 'react';
import Input from './input/Input';
import Card from './Card';

function ListCard() {
    const [cardsData, setCardsData] = useState([]);

    const addCard = (newCard) => {
        setCardsData((prevCards) => [...prevCards, newCard]);
    };

    return (
        <div>
            <h1>Faça seu cadastro para garantir a vaga no Entreveiro!</h1>
            <Input addCard={addCard} />
            {cardsData.map((card, index) => (
                <Card
                    key={index}
                    srcImage={card.srcImage}
                    nome={card.nome}
                    telefone={card.telefone}
                    egresso_convidado={card.egresso_convidado}
                    pago={card.pago}
                />
            ))}
        </div>
    );
}

export default ListCard;
