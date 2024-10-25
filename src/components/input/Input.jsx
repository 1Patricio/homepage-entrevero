Input.jsx 

import { useState } from "react";
import Button from "../Button";
import InputText from "./InputText";

function Input({ addCard }) {


  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target)

    // TROCA ESSA VALIDACAO USANDO GET
    // Validação: Verifica se todos os campos obrigatórios foram preenchidos
    if (!form.get("nome") || !form.get("telefone") || !form.get("image") || !form.get("egresso_convidado") || !form.get("pago")) {
      alert('Por favor, preencha todos os campos obrigatórios!');
      return;
    }

    const dados = {
      nome: form.get("nome"),
      telefone: form.get("telefone"),
      srcImage: form.get("image"),
      egresso_convidado: form.get("egresso_convidado"),
      pago: form.get("pago")
    }

    console.log(dados)
    
    clearForms(e.target)
    // Adiciona o card apenas se todos os campos forem preenchidos
    addCard(dados);
  };

  function clearForms(form) {
    form.reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset style={{ backgroundColor: "#D9D9D9", width: "550px", height: "650px", borderRadius: "20px", padding: "50px 0 50px 100px"}}>
        <legend style={{ backgroundColor: "#65ABFD", color: "black", borderRadius: "20px", padding: "8px", width:"200px", textAlign:"center", fontSize:"16px", fontFamily:"sans-serif"}}>Preencha seus dados</legend>

        {/* REMOVE OS ONCHANGE E PASSA O NAME POR PROPS**/} 
        <InputText label={"Nome"} placeholder={"Digite seu nome"} name="nome"/>
        <br />

        {/* REMOVE OS ONCHANGE E PASSA O NAME POR PROPS**/} 
        <InputText label={"Telefone"} placeholder={"Digite seu telefone"}  name="telefone"/>

        <div style={{fontFamily:"sans-serif", fontSize:"20px"}}>
          <p>Você é Egresso?</p>
          {/* REMOVE OS ONCHANGE E PASSA O NAME **/} 
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