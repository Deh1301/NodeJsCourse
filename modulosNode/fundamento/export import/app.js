export class Funcionario{
  constructor(nome,email,senha){
    this.nome = nome
    this.email = email
    this.senha = senha
  }
  autenticar(senhaAcesso){
    return this.senha === senhaAcesso
  }
}