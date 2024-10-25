import React from 'react';
import Card from './Card'; // Importando o Card

function ExibirCard({cardsData}) {
  return (
    <div>
      {/* Renderiza o Card que adiciona novos cartões */}
      
      <div style={{ width:"304px", color:"white"}}>
        {cardsData.map((card, index) => (
          <div key={index} > {/* Adiciona a chave ao elemento div */}
            <Card
              srcImage={card.srcImage}
              alt="Foto de perfil"
              style={{ borderRadius: '50%' }}
              nome={card.nome}
              telefone={card.telefone}
              egresso_convidado={card.egresso_convidado ? "Egresso/Convidado" : "Estudante"}
              pago={card.pago ? "Confirmado" : "Não confirmado"}
            />
          </div>
          
        ))}
      </div>
    </div>
  );
}

export default ExibirCard;