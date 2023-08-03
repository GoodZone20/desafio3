function checkLogin(event) {
    event.preventDefault(); 
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;
    var validEmail = "admin@desafio.com.br";
    var validPassword = "S3nh4-Secr3t4";
    var checkboxMarcado = document.getElementById("aceitarCheckbox").checked;
    if (checkboxMarcado && email === validEmail && password === validPassword) {
        window.location.href = "../final.html";
    } else if (!checkboxMarcado) {
        alert("Você precisa aceitar os termos para continuar.");
    } else {
        alert("E-mail ou senha incorretos. Por favor, tente novamente.");
    }
}
