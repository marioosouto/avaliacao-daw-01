function dataAtual () {
   
    var date = new Date();
    var dia = date.getDate();
    var mes = date.getMonth();
    var ano = date.getFullYear();

    return dia + '/' + (mes + 1) + '/' + ano;
}

data = dataAtual();

var d = document.getElementById("recebeData");

d.innerHTML = data; 