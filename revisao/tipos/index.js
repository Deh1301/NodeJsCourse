const num = 1;
const nome = "Andre";

if (num == 1) {
  console.warn(nome);
}

const numeros = [2, 4, 5];

numeros.push(65);

numeros.forEach((num) => {
  console.log(num);
});

const obj = {
  nome: "Andre",
  profissao: "programador",
  idade: 25,
  parentesco: {
    nome: "Julia",
    idade: 25,
    grau: "Esposa",
  },
};

console.log(obj);

const verdadeiro = true;

function Pessoa() {
  const identidade = {
    tipo: "Rg",
    numId: 532122823
  };
  console.log(identidade)
}

Pessoa();
