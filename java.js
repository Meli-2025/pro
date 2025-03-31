function Calcular_prom()
{
    var numero1= parseFloat(document.getElementById("numero1").value);
    var numero2= parseFloat(document.getElementById("numero2").value);
    var numero3= parseFloat(document.getElementById("numero3").value);

    var p=(numero1+numero2+numero3)/3;

    document.getElementsByName("total")[0].value=p;
    
}
