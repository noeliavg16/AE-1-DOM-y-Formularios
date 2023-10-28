/*Función que sirve para VALIDAR un formulario.*/
function validacion() {
    console.log("validando los datos del formulario.")

    //VALIDACIÓN de campos input rellenos de tipo texto. Deben de estar rellenos para que sean válidos. 
    //Accedo a los <input> mediante el DOM a través de sus ID. 
    /*Las ultimas versiones de JS crean variables con el ID de los elementos HTML, por tanto, no hace falta usar el 
    el método document.getElementById("id"). Un ejemplo sería: var nombre = document.getElementById("nombre");
    */
    /*Realizo una función IF que evalúa cada campo input para que no esté vacío. 
      Esto garantiza que todos los campos de texto estén rellenos antes de permitir el envío del formulacio y
      muestra una alerta de error si algún campo está vacío.
    */
    if (nombre.value.trim() === "" || direccion.value.trim() === "" || telefono.value.trim() === "" || email.value.trim() === "") {
        alert('[ERROR] Todos los campos de texto deben estar rellenos');
        return false; /*Evita el envío del formulario si algún campo está vacío. 
                        Si todos los campos están rellenos, el formulario se enviará.*/
    }   

	//VALIDACIÓN de que se haya elegido alguna opción del input radio. 
    /*Se accede a los elementos input por NAME para obtener una colección de elementos HTML que tienen el atributo
      name igual a "tamanoPizza", así se tienen todos los radio button. 
      Mediante el bucle for se recorren los input como una colección de elementos de radio con el nombre "tamanoPizza" y 
      se verifica si al menos uno de estos elementos está marcado como "checked", es decir, si está o no seleccionada 
      alguna opción. 
      Después se verifica si opcseleccionada sigue siendo false, lo que significa que ningún elemento de radio se ha seleccionado. 
      En ese caso, muestra una alerta de error con un mensaje.
      Finalmente, devuelve false para evitar que el formulario se envíe si no se ha seleccionado ningún tamaño de pizza.
    */
    tamanoPizza = document.getElementsByName("tamanoPizza");
    var opcseleccionada = false; //Sirva para rastrear si se ha seleccionado alguna opción.
    for(var i=0; i<tamanoPizza.length; i++) { //Itera a través de los elementos de radio.
        if(tamanoPizza[i].checked) { //Para cada elemento de radio se verifica si está marcado como "checked" (seleccionado). 
            opcseleccionada = true; //Si encuentra al menos un elemento de radio que esté marcado, establece opcseleccionada en true.
            break;//en cuanto alguna opción este seleccionada se para la ejecución del for, es decir, salir del bucle. 
        }
    }
    if(!opcseleccionada) {
        alert('[ERROR] Debe seleccionar un tamaño de pizza');
        return false;
    }

	//VALIDACIÓN de que se haya elegido alguna opción del input checkbox.
	ingredientes = document.getElementsByName("ingredientes");
    var opcseleccionada = false;
    for(var i=0; i<ingredientes.length; i++) {
        if(ingredientes[i].checked) {
            opcseleccionada = true;
            break;
        }
    }
    if(!opcseleccionada) {
        alert('[ERROR] Debe seleccionar un ingrediente para la pizza');
        return false;
    }
    
    //BOTON PROCESAR PEDIDO. 
   /*Se debe agregar un manejador de eventos al botón de calcular precio para ello primero se obtiene una
     referencia al elemento del formulario en el HTML con el atributo id igual a "formulario" y lo almacena
     en la variable formulario.
    */
    var formulario = document.getElementById("formulario");
    /*Se le agrega un manejador de eventos al formulario. El evento que se escucha es "submit", que ocurre cuando
      se envía el formulario. Cuando se dispara este evento, se ejecuta la función anónima proporcionada como segundo argumento.
      event.preventDefault(); evita que el formulario se envíe de manera predeterminada, lo que permitirá que manejemos la
      validación y el cálculo de precios antes de enviar el formulario al servidor. 
    */
    formulario.addEventListener("submit", //"buttton"
    function(e){
        e.preventDefault(); /*Evita el envío del formulario por defecto para permitir la validación y cálculo de precios 
                              antes de que se envíe el formulario al servidor. */
    }
  );

    /*  
    botonPrueba.addEventListener("click", 
        function(e){
            e.preventDefault(); 
        }
    )
    elDivSecundario.addEventListener("click", 
        function(){
        muestraMensajeConParametros("Homer")
        }
    );
    */

    /*Al pulsar el botón de procesar el pedido, se muestra el precio total del pedido calculándolo en base a 
      el tamño de pizza seleccionado y los ingredientes añadidos. 
    */
    // Obtener el precio del tamaño de la pizza seleccionado. 
    /* En este bloque, se obtiene una referencia a los elementos de radio que representan los tamaños de pizza 
       (pequeño, mediano y grande) y se almacenan en las variables tamSmall, tamMediano y tamGrande. Luego, se inicializa
       precioPizza en 0 y se va verificando cuál de los tamaños está seleccionado. El precio de la pizza se establece en función
       de la selección y, si ninguno está seleccionado, se muestra una alerta y se detiene la función. */
    var tamSmall = document.getElementById("tamaño_pequeño");
    var tamMediano = document.getElementById("tamaño_mediano");
    var tamGrande = document.getElementById("tamaño_grande");

    let precioTamPizza = 0;

    if (tamSmall.checked) {
        precioTamPizza = 5;
    } else if (tamMediano.checked) {
        precioTamPizza = 10;
    } else if (tamGrande.checked) {
        precioTamPizza = 15;
    } 
    
    // Obtener los ingredientes seleccionados. 
    /* Como por defecto se crea una variable por cada ID de los elementos HTML no he utilizado el método
       document.getElementById("id") para acceder a ellos como en el paso anterior. 
    
        Se inicializa precioIngredientes en 0 y se verifica cuáles de los ingredientes están marcados (seleccionados). 
        Se suma 1 al precio por cada ingrediente seleccionado.
    */

    let precioIngredientes = 0;

    if (aceitunas.checked) {
        precioIngredientes += 1;
    }
    if (queso.checked) {
        precioIngredientes += 1;
    }
    if (bacon.checked) {
        precioIngredientes += 1;
    }
    if (piña.checked) {
        precioIngredientes += 1;
    }

    // Calcular el precio total sumando el precio de la pizza (precioPizza) y el precio de los ingredientes (precioIngredientes).
    var precioTotal = precioTamPizza + precioIngredientes;

    // Finalmente, se muestra el precio total en el campo de texto con el id "precioTotal" en el formulario.
    document.getElementById("precioTotal").value = precioTotal + " €";

    return true; 
}

/* Colocar la funcion window.onload al final del código JS asegura que todas las funciones y elementos necesarios para
   la validación del formulario ya estén disponibles en el DOM antes de que se intente asociar eventos o interactuar con ellos.
   Si se coloca al principio, podría haber problemas si algunos elementos no se han cargado en el DOM antes de que se intente 
   acceder a ellos. Colocarlo al final garantiza que el DOM esté listo antes de ejecutar la función que asocia el evento onclick. 
*/
window.onload = function(){ 
    botonPrueba.onclick = validacion; //Meter el manejador de eventos onclick a la funciónn validacion
                                
}