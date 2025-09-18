function soma {} {
    var n1, n2, soma;

    n1 = document.getElementById ("PrimeiroNumero").value; 
    n2 = document.getElementById ("SegundoNumero").value;

    n1 = parseInt (n1);
    n2 = parseInt (n2);

    soma = n1 + n2;

    document.getElementById ("resposta").innerHTML = soma;
}