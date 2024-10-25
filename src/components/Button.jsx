function Button({ click, nome, colorButton }) {
    // Verifica se a prop click é uma função
    const handleClick = typeof click === "function" ? click : () => {};
  
    return (
      <button
        style={{
          backgroundColor: colorButton,
          width: "300px",
          height: "60px",
          borderRadius: "20px",
          borderStyle: "none",
          marginTop: "20px",
          fontFamily: "sans-serif",
          fontSize: "19px",
        }}
        type="submit"
        onClick={handleClick} // Usa a função handleClick
      >
        {nome}
      </button>
    );
  }
  
  export default Button;
  