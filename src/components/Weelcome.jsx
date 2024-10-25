import Button from "./Button";
import { useFetch } from "../hooks/useFetch";
import { useState, useEffect } from "react";

function Weeelcome({ name }) {
    const [cepEvento, setCepEvento] = useState("88990000"); // Estado para o CEP
    const { cep } = useFetch(`https://viacep.com.br/ws/${cepEvento}/json/`); // Passa a URL para o useFetch

    function handleButton() {
        // Você pode definir um novo CEP aqui, se desejar
        const novoCep = "88990000"; // Ou qualquer outro CEP
        setCepEvento(novoCep); // Atualiza o estado com o novo CEP
    }

    return (
        <>
            {cep && (
                <>
                    <h2 style={{fontFamily:"sans-serif", fontSize:"32px", marginLeft:"40px"}}>Seja bem vindo, {name}</h2>

                    <div style={{marginLeft: "50px", marginBottom:"10px"}}>
                        <Button onClick={handleButton} nome="Localização" colorButton="#65ABFD" />
                        <div style={{display:"flex", marginLeft:"-50px"}}>
                            <ul style={{ listStyle: "none", fontWeight:"700" }}>
                                <li style={{paddingTop:"5px", fontFamily:"sans-serif", fontSize:"32px"}}>CEP: {cep.cep}</li>
                                <li style={{paddingTop:"5px", fontFamily:"sans-serif", fontSize:"32px"}}>ESTADO: {cep.estado}</li>
                                <li style={{paddingTop:"5px", fontFamily:"sans-serif", fontSize:"32px"}}>HORÁRIO: </li>
                            </ul>
                            <ul style={{ listStyle: "none", fontWeight:"700" }}>
                                <li style={{paddingTop:"5px", fontFamily:"sans-serif", fontSize:"32px"}}>UF: {cep.localidade}</li>
                                <li style={{paddingTop:"5px", fontFamily:"sans-serif", fontSize:"32px"}}>REGIÃO: {cep.regiao}</li>
                            </ul>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Weeelcome;