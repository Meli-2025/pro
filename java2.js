function cal_subtotal()
{


  var  precio = parseFloat(document.getElementById("precio").value);
  var  cantidad = parseInt(document.getElementById("cantidad").value);
var sub = (precio*cantidad);
var impuesto = (sub*0.15);
var total = (sub+impuesto);
document.getElementById("sub").value=sub.toFixed(2);
document.getElementById("impuesto").value=impuesto.toFixed (2);
document.getElementById("total").value=total.toFixed(2);
}