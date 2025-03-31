function contra() {
    var user = document.getElementById("User").value;
    var contraseña = document.getElementById("Contraseña").value;

    if ((user == "Meli" && contraseña == "130") || 
        (user == "Elisa" && contraseña == "100") || 
        (user == "Ange" && contraseña == "545")) {
        
        Swal.fire({
            title: "¡Acceso concedido!",
            text: "Bienvenido al sistema",
            icon: "success",
            position: "center",
        }).then((result) => {
            window.location = "index.html";
        });
    } else {
        Swal.fire({
            title: "Error de inicio de sesión",
            text: "Usuario o contraseña incorrectos",
            icon: "error",
            position: "center",
        });
    }
}