//solicita ao usuario o nome do vinho desejada por este
let nome_vinho = prompt("Qual vinho o senhor deseja?\n1 - Pétrus\n2 - Domaine de La Romanée-Conti\n3 - Sauvignon Del Vale");
//solicita ao usuario a opcao de vinho desejada por este
let vinho = prompt("Qual vinho o senhor deseja\n 1 - Tinto\n2 - Branco\n3 - Rose");
//solicita ao usuario o ano da safra 
let safra = prompt("De qual ano o senhor deseja a safra?");
//solicita a quantidade de vinhos 
let estoque = prompt("Qual a quantidade em estoque?");

//inserção de variaveis com o prompt sempre retornando em string, tornando necessario converte-los em valor numerico 
nome_vinho = parseInt(nome_vinho);
vinho = parseInt(vinho);
safra = parseInt(safra);
estoque = parseInt(estoque);

// verifica o conjunto valido de opcoes 
if (vinho < 1 || vinho > 3) || (nome_vinho < 1 || nome_vinho > 3 ) {
    // Se a opção for inválida, exibe um alerta avisando o usuário
    alert("Digite uma opção válida");
}
else {
    // Se a opção for válida avisa que os dados serão exibidos no console
    alert("As informações sobre seu vinho estão expostas na aba console!");
}

// Verifica cada opção escolhida e exibe os dados correspondentes no console
if (vinho == 1) {
   if (nome_vinho == 1) {
     console.log(`Vinho cadastrado: Pétrus Tinto\nSafra: ${safra}\nQntd no estoque: ${estoque}`);
   }
   else if (nome_vinho == 2) {
     console.log(`Vinho cadastrado: Domaine de La Romanée-Conti Tinto\nSafra: ${safra}\nQntd no estoque: ${estoque}`);
   }
   else {
     console.log(`Vinho cadastrado: Sauvignon Del Vale Tinto\nSafra: ${safra}\nQntd no estoque: ${estoque}`);
   }
}
else if (vinho == 2) {
   if (nome_vinho == 1) {
     console.log(`Vinho cadastrado: Pétrus Branco\nSafra: ${safra}\nQntd no estoque: ${estoque}`);
   }
   else if (nome_vinho == 2) {
     console.log(`Vinho cadastrado: Domaine de La Romanée-Conti Branco\nSafra: ${safra}\nQntd no estoque: ${estoque}`);
   }
   else {
     console.log(`Vinho cadastrado: Sauvignon Del Vale Branco\nSafra: ${safra}\nQntd no estoque: ${estoque}`);    
   }
}
else {
   if (nome_vinho == 1) {
     console.log(`Vinho cadastrado: Pétrus Rose\nSafra: ${safra}\nQntd no estoque: ${estoque}`);
   }
   else if (nome_vinho == 2) {
     console.log(`Vinho cadastrado: Domaine de La Romanée-Conti Rose\nSafra: ${safra}\nQntd no estoque: ${estoque}`);
   }
   else {
     console.log(`Vinho cadastrado: Sauvignon Del Vale Rose\nSafra: ${safra}\nQntd no estoque: ${estoque}`);
}
