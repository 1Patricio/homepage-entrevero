import { useState } from "react";
import Button from "../Button";
import InputText from "./InputText";

function Input({ addCard }) {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    srcImage: '',
    egresso_convidado: '',
    pago: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação: Verifica se todos os campos obrigatórios foram preenchidos
    if (!formData.nome || !formData.telefone || !formData.srcImage || !formData.egresso_convidado || !formData.pago) {
      alert('Por favor, preencha todos os campos obrigatórios!');
      return;
    }

    // Adiciona o card apenas se todos os campos forem preenchidos
    addCard(formData);
    // Reseta o formData após o cadastro
    setFormData({ nome: '', telefone: '', srcImage: '', egresso_convidado: '', pago: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset style={{ backgroundColor: "#D9D9D9", width: "554px", height: "689px", borderRadius: "20px", padding: "50px" }}>
        <legend style={{ backgroundColor: "#65ABFD", color: "black", borderRadius: "20px", padding: "8px" }}>Preencha seus dados</legend>

        <InputText label={"Nome"} placeholder={"Digite seu nome"} value={formData.nome} onChange={handleChange} />
        <br />
        <InputText label={"Telefone"} placeholder={"Digite seu telefone"} value={formData.telefone} onChange={handleChange}/>

        <div>
          <p>Você é Egresso?</p>
          <input type="radio" id="egresso-sim" name="egresso_convidado" value="Egresso" onChange={handleChange} checked={formData.egresso_convidado === 'Egresso'} />
          <label htmlFor="egresso-sim">Sim</label>
          <input type="radio" id="egresso-nao" name="egresso_convidado" value="Convidado" onChange={handleChange} checked={formData.egresso_convidado === 'Convidado'} />
          <label htmlFor="egresso-nao">Não</label>
        </div>

        <div>
          <p>Pago</p>
          <input type="radio" id="pago-sim" name="pago" value="Já pagou" onChange={handleChange} checked={formData.pago === 'Já pagou'} />
          <label htmlFor="pago-sim">Sim</label>
          <input type="radio" id="pago-nao" name="pago" value="Precisa pagar" onChange={handleChange} checked={formData.pago === 'Precisa pagar'} />
          <label htmlFor="pago-nao">Não</label>
        </div>
        <br />
        <input 
          type="text" 
          id="srcImage" 
          name="srcImage" 
          placeholder="URL da imagem" 
          value={formData.srcImage} 
          onChange={handleChange} 
          style={{ padding: "5px", backgroundColor: "#FFFFFF", width: "384px", height: "54px", borderRadius: "10px", borderStyle: "none", paddingLeft: "15px", margin: "8px 0 20px 0" }} 
        />

        <Button click={handleSubmit} nome={"Cadastrar"} colorButton="#65ABFD" />
      </fieldset>
    </form>
  );
}

export default Input;
