#language: pt
Funcionalidade: Cadastro de contas
  Como um usuário 
  Gostaria de cadastrar contas
  Para que eu possa distribuir meu dinheiro de uma forma mais organizada

  Contexto: 
    Dado que estou acessando a aplicação
    Quando informo o usuário "jhoouw_sk8board@hotmail.com"
    E a senha "oicaradeboi"
    E seleciono entrar
    Então visualizo a página inicial
    Quando seleciono Contas
    E seleciono Adicionar

  Esquema do Cenário: Deve validar regras de cadastros
    Quando informo a conta "<conta>"
    E seleciono Salvar
    Então sou notificado com a mensagem "<mensagem>"
    
	Exemplos:
		| conta 		    | mensagem														|
		| Conta teste   | Conta adicionada com sucesso!  	    |
		|		   			    | Informe o nome da conta			      	|
		| Conta teste   | Já existe uma conta com esse nome!	|