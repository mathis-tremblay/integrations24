export default function ErrorPage() {

    return (
        <div id="error-page" style={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
        }}>
            <div style={{
                backgroundColor: "rgba(85, 136, 38, 0.80)",
                padding: "30px",
                borderRadius: "16px",
                maxWidth: "90%"
            }}>
                <h1 align='center' style={{fontSize: "50px"}}>Oups!</h1>
                <p align='center' style={{fontSize: "36px"}}>Désolé, une erreur inattendu est survenue.</p>
            </div>
        </div>
    );
}