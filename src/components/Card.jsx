function Card({ nome, telefone, egresso_convidado, pago, srcImage }) {
  return (
    <div style={{ border: "1px solid white", display: "flex", padding: "10px", margin: "10px 0", borderRadius: "10px" }}>
      <div>
        {srcImage && (
          <img src={srcImage} alt="Foto de perfil" style={{ borderRadius: "50%", width: "100px", height: "100px" }} />
        )}
        <p><strong>Nome:</strong> {nome}</p>
        <p><strong>Telefone:</strong> {telefone}</p>
        <p><strong>Egresso ou Convidado:</strong> {egresso_convidado}</p>
        <p><strong>Status de Pagamento:</strong> {pago}</p>
      </div>
    </div>
  );
}

export default Card;
