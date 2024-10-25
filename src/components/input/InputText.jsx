function InputText({ label, placeholder, value, onChange }) {
    return (
        <>
            <label style={{ fontFamily: "sans-serif", padding: "10px" }} htmlFor={label}>{label}</label>
            <br />
            <input
                style={{
                    padding: "5px",
                    backgroundColor: "#FFFFFF",
                    width: "384px",
                    height: "54px",
                    borderRadius: "10px",
                    borderStyle: "none",
                    paddingLeft: "15px",
                    margin: "8px 0 20px 0"
                }}
                type="text"
                id={label} // Use o label como id para uma melhor acessibilidade
                name={label.toLowerCase()} // Use o label em letras minúsculas como name
                size="20"
                placeholder={placeholder}
                value={value} // Adiciona a prop value
                onChange={onChange} // Adiciona a prop onChange
            />
        </>
    );
}

export default InputText;
