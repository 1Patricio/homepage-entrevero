import Button from "../Button";
import InputText from "./InputText";

function Input({ addCard }) {

  const handleSubmit = (e) => {   // Função que lida com o envio do furmulário
    e.preventDefault();           // Previne o comportamento padrão do formulário

    const form = new FormData(e.target)   // Cria o objeto form de FormData com os dados do formulário

    // Validação: Verifica se todos os campos obrigatórios foram preenchidos
    if (!form.get("nome") || !form.get("telefone") || !form.get("image") || !form.get("egresso_convidado") || !form.get("pago")) {
      alert('Por favor, preencha todos os campos obrigatórios!');
      return;
    }

    // Coleta os dados do formulário e os armazena no objeto dados
    const dados = {
      nome: form.get("nome"),
      telefone: form.get("telefone"),
      srcImage: form.get("image"),
      egresso_convidado: form.get("egresso_convidado"),
      pago: form.get("pago")
    }
    
    clearForms(e.target)   // Limpa
    addCard(dados);        // Chama a função addCard passando o objeto dados que foi preenchido
  };

  function clearForms(form) {
    form.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset style={{ backgroundColor: "#D9D9D9", width: "550px", height: "650px", borderRadius: "20px", padding: "50px 0 50px 100px"}}>
        <legend style={{ backgroundColor: "#65ABFD", color: "black", borderRadius: "20px", padding: "8px", width:"200px", textAlign:"center", fontSize:"16px", fontFamily:"sans-serif"}}>Preencha seus dados</legend>

        <InputText label={"Nome"} placeholder={"Digite seu nome"} name="nome"/>
        <br />

        <InputText label={"Telefone"} placeholder={"Digite seu telefone"}  name="telefone"/>

        <div style={{fontFamily:"sans-serif", fontSize:"20px"}}>
          <p>Você é Egresso?</p>
          <input type="radio" id="egresso-sim" name="egresso_convidado" value="true" />
          <label htmlFor="egresso-sim">Sim</label>
          <input type="radio" id="egresso-nao" name="egresso_convidado" value="false" />
          <label htmlFor="egresso-nao">Não</label>
        </div>

        <div style={{fontFamily:"sans-serif", fontSize:"20px"}}>
          <p>Pago</p>
          <input type="radio" id="pago-sim" name="pago" value="true" />
          <label htmlFor="pago-sim">Sim</label>
          <input type="radio" id="pago-nao" name="pago" value="false" />
          <label htmlFor="pago-nao">Não</label>
        </div>
        <br />
        <br />
        <label style={{fontFamily:"sans-serif", fontSize:"20px"}}>Foto</label>
        <br />
        <input 
          type="text" 
          id="srcImage" 
          name="image" 
          placeholder="URL da imagem" 
          style={{ padding: "5px", backgroundColor: "#FFFFFF", width: "384px", height: "54px", borderRadius: "10px", borderStyle: "none", paddingLeft: "15px", margin: "8px 0 20px 0" }} 
        />

        <Button nome={"Cadastrar"} colorButton="#65ABFD" />
      </fieldset>
    </form>
  );
}

export default Input;