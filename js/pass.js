function checkLogin(event) {
    event.preventDefault(); // Evitar comportamento padrão do formulário

    console.log('teste');
    
    // Obter o valor inserido nos campos de e-mail e senha
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;

    // Verificar se o e-mail e senha correspondem aos valores predefinidos (para fins de demonstração)
    var validEmail = "admin@desafio.com.br";
    var validPassword = "S3nh4-Secr3t4";

    // Verificar se o checkbox foi marcado
    var checkboxMarcado = document.getElementById("aceitarCheckbox").checked;

    if (checkboxMarcado && email === validEmail && password === validPassword) {
        // Se o checkbox estiver marcado e as credenciais estiverem corretas, redirecionar para outra página
        window.location.href = "../final.html";
    } else if (!checkboxMarcado) {
        // Se o checkbox não estiver marcado, mostrar uma mensagem de erro
        alert("Você precisa aceitar os termos para continuar.");
    } else {
        // Se as credenciais estiverem incorretas, mostrar uma mensagem de erro (opcional)
        alert("E-mail ou senha incorretos. Por favor, tente novamente.");
    }
}
