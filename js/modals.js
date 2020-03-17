/*function cambiarSeccion(){
  var selectValue = document.getElementById("selectVerSeccion");
  var seccion = selectValue.value;


  if (seccion != 'selectedOption'){
  	document.getElementById("formAñadirProd").style.display="block";
  } else {
  	document.getElementById("formAñadirProd").style.display="none";
  }
}

function selectDinamico(){
  //Conseguir valor del primer select: Seccion
  var selectValue = document.getElementById("selDinamico");
  var seccion = selectValue.value;

  //Conseguir valor del segundo select: Productos (hide)
  var selectedValue2 = document.getElementById("selectBorrarProducto");

  if (seccion != 'selectedOption'){

  	selectedValue2.style.display="block";
  	
  } else {
  	selectedValue2.style.display = "none";
  	
  	var btnAction = document.getElementsByClassName("btn-close")[0]; 

  	if(btnAction.disabled == false){
  			btnAction.disabled = true;
  		} 
  }

}

function btnOn(){

	var selectBorrar = document.getElementById("selectBorrarProducto").value;
	var btnAction = document.getElementsByClassName("btn-close")[0]; 

  	if(selectBorrar != 'selectedOption'){
  			btnAction.disabled = false;
  		} else {
  			btnAction.disabled = true;
  		}	
 }
*/

function verificarInput(){
	var currentElement = document.getElementsByClassName("input_text");

	for (var i = 0; i < currentElement.length; i++){

		var elemento = currentElement[i];
		var existeClase = elemento.classList.contains("addSeccion");		
		
		if (existeClase){
			
		}
	}
	
}