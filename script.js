function validarFormulario() {
    const nome = document.getElementById("nome").value.trim();
    const cpf = document.getElementById("cpf").value.trim();
    const login = document.getElementById("login").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const senhaConfirma = document.getElementById("senhaConfirma").value.trim();
    const salario = document.getElementById("salario").value.trim();
    const dependentes = document.getElementById("dependentes").value.trim();
    const campoIR = document.getElementById("ir");
    const regexSenha = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
    const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    const regexLogin =  /^[A-Za-z0-9.-]{4,}$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const salarioNum = parseInt(salario, 10);
    const dependenteNum = parseInt(dependentes, 10);

    if(!nome){
        alert("Favor preencher o campo Nnome.");
        return;
    }

    if(nome.lenght <= 3){
        alert("O nome deve conter no mínimo 3 caracteres.");
        return;
    }

    if(!cpf){
        alert("Favor preencher o campo CPF.");
        return;
    }

    if(!regexCPF.test(cpf)){
        alert("Formato de CPF inválido. Tente o seguinte formato: 000.000.000-00.");
        return;
    }

    if(!login){
        alert("Favor preencher o campo Login.");
        return;
    }

    if(login.lenght <= 3){
        alert("O Login deve conter no mínimo 3 caracteres.");
        return;
    }
    
    if(!regexLogin.test(login)){
        alert("Formato de Login inválido. Utilize apenas letras, numeros e simbolos como (. , / _ -).");
        return;
    }

    if(!email){
        alert("Favor preencher o campo email.");
        return;
    }

    if(!regexEmail.test(email)){
        alert("Formato de email inválido.");
        return;
    }

    if(!senha){
        alert("Favor preencher a senha.");
        return;
    }

    if(!regexSenha.test(senha)){
        alert("A senha deve conter pelo menos 1 digito e 1 letra");
        return;
    }
    
    if(senha.lenght < 8){
        alert("Digite uma senha com no mínimo 8 caracteres.");
        return;
    }


    if(!senhaConfirma){
        alert("Favor preencher o campo de confirmação da senha.");
        return;
    }

    if(senhaConfirma < 8){
        alert("Favor preencher a confirmação da senha com no mínimo 8 caracteres.");
    }

    if(senhaConfirma !== senha){
            alert("As senhas não batem.");
            return;
    }

    if(!salario){
        alert("Favor preencher o campo salário.");
        return;
    }

    if(isNaN(salarioNum) || salarioNum <= 0) {
    alert("O salário deve ser um número inteiro maior ou igual a zero.");
    return;
    }

    if(!dependentes){
        alert("Favor preencher o campo Dependentes.");
        return;
    }

    if(isNaN(dependenteNum) || dependenteNum <= 0) {
    alert("O valor para dependentes deve ser um número inteiro maior ou igual a zero.");
    return;
    }

    // validações básicas
    if (isNaN(salario) || salario <= 0 || isNaN(dependentes) || dependentes < 0) {
        campoIR.value = "";
        return;
    }

    // dedução por dependente (valor exemplo)
    const deducaoDependente = 189.59;
    const baseCalculo = salario - (dependentes * deducaoDependente);

    // regra simples de IR (exemplo)
    let ir = baseCalculo * 0.15;

    // se negativo, não cobra IR
    if (ir < 0) ir = 0;

    campoIR.value = ir.toFixed(2); // duas casas decimais
}

// Função para alternar campo de senha
function toggleSenha(idCampo, elemento) {
    const campo = document.getElementById(idCampo);

    if (campo.type === "password") {
        campo.type = "text";
        elemento.textContent = "🙈";
    } else {
        campo.type = "password";
        elemento.textContent = "👁️";
    }
}