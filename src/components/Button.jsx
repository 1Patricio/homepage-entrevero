Button.jsx

function Button({ nome, colorButton }) {
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
      >
        {nome}
      </button>
    );
  }
  
  export default Button;