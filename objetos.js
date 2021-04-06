// Em JS toda a função é um objeto

/*function Usuario(nome, sobrenome, cidade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.cidade = cidade;
}
Usuario.prototype.apresentar = function() {
    console.log("Meu nome é ", this.nome, this.sobrenome);
};
const maiara = new Usuario('Maiara', 'Schein', 'POA');
maiara.apresentar();*/

//nova sintaxe de classes no JS 2015
class Usuario {
  constructor(nome, sobrenome, cidade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.cidade = cidade;
  }
  apresentar(){
    console.log("Meu nome é ", this.nome, this.sobrenome);
  }
}

//HERANÇA:
class FacebookUsuario extends Usuario {
   constructor(nome, sobrenome, cidade, facebookId){
     super(nome, sobrenome, cidade);
    this.facebookId = facebookId;
  }
}
const maiara = new FacebookUsuario('Maiara', 'Schein', 'POA', '37684672');
maiara.apresentar();