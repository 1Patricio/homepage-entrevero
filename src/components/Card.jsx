function Card({ nome, telefone, egresso_convidado, pago, srcImage }) {
  return (
    <div style={{ border: "1px solid white", display: "flex", padding: "10px", margin: "10px 0", borderRadius: "10px" }}>
      <div style={{fontFamily:"sans-serif", height:"280px", textAlign:"center", width:"100%", backgroundColor:"#6B6B6B", borderRadius:"20px", paddingTop:"30px"}}>
        {srcImage && (
          <img src={srcImage} alt="Foto de perfil" style={{ borderRadius: "50%", width: "100px", height: "100px" }} />
        )}
        <p>{nome}</p>
        <p>{telefone}</p>
        <p>{egresso_convidado}</p>
        <p>{pago}</p>
      </div>
    </div>
  );
}

export default Card;
