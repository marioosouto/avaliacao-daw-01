var jason = [
    {
        "nome": "Carlos Alexandre Dias Leal",
        "email": "carlos.diasleal@gmail.com"
    },
    {
        "nome": "Carlos Beirigo Fernandes",
        "email": "carlosbeirigo@hotmail.com"
    },
    {
        "nome": "Carlos Eduardo Cabral",
        "email": "edu.carlos2000@hotmail.com"
    },
    {
        "nome": "Gustavo William de Bessa",
        "email": "gustavoux@yahoo.com.br"
    },
    {
        "nome": "Jaccques Jonas de Souza Júnior",
        "email": "jacquesjr19@gmail.com"
    },
    {
        "nome": "Lucas Tayar Alvarenga Cunha",
        "email": "lucastayar12@gmail.com"
    },
    {
        "nome": "Luciano Gobo Saraiva Leite",
        "email": "lucianogobo@gmail.com"
    },
    {
        "nome": "Marco Antonio Guarato Alves",
        "email": "demonhunter1512@gmail.com"
    },
    {
        "nome": "Mario Augusto Oliveira Souto",
        "email": "mario1119@hotmail.com"
    },
    {
        "nome": "Márcio Alves Junior",
        "email": "marcioalves.jr97@gmail.com"
    },
    {
        "nome": "Pedro Henrique Ribeiro Cortez",
        "email": "pedrocortez877@gmail.com"
    },
    {
        "nome": "Rafael Silveira Assunção",
        "email": "rafael.silveira.a12@gmail.com"
    },
    {
        "nome": "Tainá Costa Caetano Pires",
        "email": "tainaccpires@gmail.com"
    }
]

var l = document.getElementById("lista");

for (let i = 0; i < 13; i++) {
    var tr = document.createElement("tr");
    var linha = "<td>" + jason[i].nome + "</td>" +
        "<td>" + jason[i].email + "</td>";

    tr.innerHTML = linha;
    l.appendChild(tr);

    if (jason[i].nome == 'Mario Augusto Oliveira Souto') {
        tr.innerHTML = "<td> <a href='/eu'>Mario Augusto Oliveira Souto</a> </td>" +
            "<td><a href='/eu'>mario1119@hotmail.com</a> </td>"

    }
}