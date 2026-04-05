//solicita ao usuario a opcao de vinho desejada por este
let vinho = prompt("Qual vinho o senhor deseja\n 1 - Tinto\n2 - Branco\n3 - Rose")
//solicita ao usuario o ano da safra 
let safra = prompt("De qual ano o senhor deseja a safra?")
//solicita a quantidade de vinhos 
let estoque = prompt("Qual a quantidade em estoque?")

//inserção de variaveis com o prompt sempre retornando em string, tornando necessario converte-los em valor numerico 
vinho = parseInt(vinho)
safra = parseInt(safra)   
estoque = parseInt(estoque)

