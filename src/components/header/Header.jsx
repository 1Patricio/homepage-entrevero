function Header({title, srcLogo}) {
    return (
        <>
            <div style={{backgroundColor: "#65ABFD", display: "flex", width: "100%", heigth: "127px"}}>
                <img src={srcLogo} style={{borderRadius: "50%" , width: "120px"}}  alt="Logo" />
                <h1 style={{margin: "auto auto", fontFamily:"sans-serif", fontWeight:"700",alignItems:"center" }}>{title}</h1>
            </div>
        </>
    )
}
export default Header