window.onload = function () {

    var formulario = document.createElement("form"); //Se crea la etiqueta <form></form> para crear el formulario. 
    formulario.id = "formulario"; //Se añade un ID al formulario <form id="formulrio"></form>

    //CAMPO DE TEXTO PARA PONER EL DNI: 
    var parrafo1 = document.createElement("p"); //Se crea la etiqueta <p></p> 
    parrafo1.id = "parrafo1"; //Se crea el ID de la etiqueta <p id="parrafo1"></p> 
    var text1 = document.createTextNode("DNI: "); //Se crea el texto que va a preceder al campo donde se va a introducir el DNI del usuario
    parrafo1.appendChild(text1); //<p id="parrafo1"> DNI: </p>. A la etiqueta p con ID parrafo1 se le añade el texto1 que corresponde al DNI. 
    formulario.appendChild(parrafo1); //Al formulario se le está añadiendo el párrafo1. 
    
    var input1 = document.createElement("input"); //Se crea la etiqueta <input></input>
    input1.id = "DNI"; //<input id="input1"></input>.A la etiqueta input se le añade un ID. 
    input1.type = "text"; //<input id="input1" type="text"></input>.
    input1.name = "DNI"; // <input id="input1" type="text" name="DNI"></input>. 
    formulario.appendChild(input1); //Se añade el input dentro del formulario. 
   

    //CAMPO DE TEXTO PARA PONER EL NOMBRE: 
    var parrafo2 = document.createElement("p"); 
    parrafo2.id = "parrafo2";
    var text2 = document.createTextNode("NOMBRE: "); 
    parrafo2.appendChild(text2); 
    formulario.appendChild(parrafo2); 

    var input2 = document.createElement("input"); 
    input2.id = "NOMBRE"; 
    input2.type = "text"; 
    input2.name = "NOMBRE"; 
    formulario.appendChild(input2); 


    //CAMPO DE TEXTO PARA PONER LOS APELLIDOS: 
    var parrafo3 = document.createElement("p"); 
    parrafo3.id = "parrafo3";
    var text3 = document.createTextNode("APELLIDOS: "); 
    parrafo3.appendChild(text3); 
    formulario.appendChild(parrafo3); 

    var input3 = document.createElement("input"); 
    input3.id = "APELLIDOS"; 
    input3.type = "text"; 
    input3.name = "APELLIDOS"; 
    formulario.appendChild(input3); 


    //CAMPO DE TEXTO PARA PONER LA DIRECCIÓN: 
    var parrafo4 = document.createElement("p"); 
    parrafo4.id = "parrafo4";
    var text4 = document.createTextNode("DIRECCIÓN: "); 
    parrafo4.appendChild(text4); 
    formulario.appendChild(parrafo4); 

    var input4 = document.createElement("input"); 
    input4.id = "DIRECCIÓN"; 
    input4.type = "text"; 
    input4.name = "DIRECCIÓN"; 
    formulario.appendChild(input4); 


    //CAMPO DE TEXTO PARA PONER EL TELÉFONO: 
    var parrafo5 = document.createElement("p"); 
    parrafo5.id = "parrafo5";
    var text5 = document.createTextNode("TELÉFONO: "); 
    parrafo5.appendChild(text5); 
    formulario.appendChild(parrafo5); 

    var input5 = document.createElement("input"); 
    input5.id = "TELÉFONO"; 
    input5.type = "number"; 
    input5.name = "TELÉFONO"; 
    formulario.appendChild(input5); 

    // Con estas líneas consigo poner el párrafo junto con el input para que visualmente se vea bien colocado.
    parrafo1.appendChild(input1); 
    parrafo2.appendChild(input2);
    parrafo3.appendChild(input3);
    parrafo4.appendChild(input4);
    parrafo5.appendChild(input5);

    var saltoLinea = document.createElement("br"); 
    formulario.appendChild(saltoLinea);

    //PRIMER RADIO BUTTON, CON 4 OPCIONES A ELEGIR: 
    /*Primero se crea el elemento <p> con un ID al que se le añade un texto para indicar al usuario que elija la opción deseada de bebida. 
    Después se crea un elemento <input> con sus atributos correspondientes y se añade al fomulario tanto el párrafo como el input.
    Este es el primer input de la página. 
    Se crean consecutivamente tambien mediante texto las opciones que tendrá este input añadiendo cada una de ellas a este primer input y al
    formulario para que aparezcan en la página.*/
    var parrafo6 = document.createElement("p"); 
    parrafo6.id = "parrafo6";
    var text6 = document.createTextNode("Elija opción de bebida: "); 
    parrafo6.appendChild(text6); 
    formulario.appendChild(parrafo6); 
    
    var input6 = document.createElement("input");
    input6.id = "agua"; 
    input6.type = "radio";
    input6.name = "bebida";
    input6.value= "A";
    formulario.appendChild(input6)

    var text7 = document.createTextNode("Agua"); 
    input6.appendChild(text7); 
    formulario.appendChild(text7);
    
    var saltoLinea = document.createElement("br"); 
    formulario.appendChild(saltoLinea);
    
    var input7 = document.createElement("input");
    input7.id = "vino"; 
    input7.type = "radio";
    input7.name = "bebida";
    input7.value= "V";
    formulario.appendChild(input7)

    var text8 = document.createTextNode("Vino"); 
    input7.appendChild(text8); 
    formulario.appendChild(text8);

    var saltoLinea = document.createElement("br"); 
    formulario.appendChild(saltoLinea);

    var input8 = document.createElement("input");
    input8.id = "Refresco"; 
    input8.type = "radio";
    input8.name = "bebida";
    input8.value= "R";
    formulario.appendChild(input8)

    var text9 = document.createTextNode("Refresco"); 
    input8.appendChild(text9); 
    formulario.appendChild(text9);

    var saltoLinea = document.createElement("br"); 
    formulario.appendChild(saltoLinea);

    var input9 = document.createElement("input");
    input9.id = "Zumo"; 
    input9.type = "radio";
    input9.name = "bebida";
    input9.value= "Z";
    formulario.appendChild(input9)

    var text10 = document.createTextNode("Zumo"); 
    input9.appendChild(text10); 
    formulario.appendChild(text10);
   
    var saltoLinea = document.createElement("br"); 
    formulario.appendChild(saltoLinea);
    var saltoLinea = document.createElement("br"); 
    formulario.appendChild(saltoLinea); 
    var saltoLinea = document.createElement("br"); 
    formulario.appendChild(saltoLinea); 

    //SEGUNDO RADIO BUTTON, CON 4 OPCIONES A ELEGIR: 
    var parrafo7 = document.createElement("p"); 
    parrafo7.id = "parrafo7";
    var text11 = document.createTextNode("Elija opción para acompañar a la bebida: "); 
    parrafo7.appendChild(text11); 
    formulario.appendChild(parrafo7); 

    var input10 = document.createElement("input");
    input10.id = "frutos secos"; 
    input10.type = "radio";
    input10.name = "complemento";
    input10.value= "F";
    formulario.appendChild(input10)

    var text11 = document.createTextNode("Frutos secos"); 
    input10.appendChild(text11); 
    formulario.appendChild(text11);
   
    var saltoLinea = document.createElement("br"); 
    formulario.appendChild(saltoLinea);

    var input11 = document.createElement("input");
    input11.id = "Palomitas"; 
    input11.type = "radio";
    input11.name = "complemento";
    input11.value= "P";
    formulario.appendChild(input11)

    var text12 = document.createTextNode("Palomitas"); 
    input11.appendChild(text12); 
    formulario.appendChild(text12);
   
    var saltoLinea = document.createElement("br"); 
    formulario.appendChild(saltoLinea);

    var input12 = document.createElement("input");
    input12.id = "Chocolate"; 
    input12.type = "radio";
    input12.name = "complemento";
    input12.value= "C";
    formulario.appendChild(input12)

    var text13 = document.createTextNode("Chocolate"); 
    input12.appendChild(text13); 
    formulario.appendChild(text13);
   
    var saltoLinea = document.createElement("br"); 
    formulario.appendChild(saltoLinea);

    var input13 = document.createElement("input");
    input13.id = "Gominolas"; 
    input13.type = "radio";
    input13.name = "complemento";
    input13.value= "G";
    formulario.appendChild(input13)

    var text14 = document.createTextNode("Gominolas"); 
    input13.appendChild(text14); 
    formulario.appendChild(text14);
   
    var saltoLinea = document.createElement("br"); 
    formulario.appendChild(saltoLinea);
    var saltoLinea = document.createElement("br"); 
    formulario.appendChild(saltoLinea); 
    var saltoLinea = document.createElement("br"); 
    formulario.appendChild(saltoLinea); 


    //CREAR 5 CHECKBOX DIFERENTES
    var parrafo8 = document.createElement("p"); 
    parrafo8.id = "parrafo8";
    var text12 = document.createTextNode("Elija su hamburguesa Avenger para comer: "); 
    parrafo8.appendChild(text12); 
    formulario.appendChild(parrafo8); 

    var input14 = document.createElement("input");
    input14.id = "Hamburguesa Hulk"; 
    input14.type = "checkbox";
    input14.name = "plato_principal";
    input14.value= "Hulk";
    formulario.appendChild(input14)

    var text15 = document.createTextNode("Hamburguesa Hulk"); 
    input14.appendChild(text15); 
    formulario.appendChild(text15);
   
    var saltoLinea = document.createElement("br"); 
    formulario.appendChild(saltoLinea);

    var input15 = document.createElement("input");
    input15.id = "Hamburguesa Spider Man"; 
    input15.type = "checkbox";
    input15.name = "plato_principal";
    input15.value= "SpiderMan";
    formulario.appendChild(input15)

    var text16 = document.createTextNode("Hamburguesa Spider-Man"); 
    input15.appendChild(text16); 
    formulario.appendChild(text16);
   
    var saltoLinea = document.createElement("br"); 
    formulario.appendChild(saltoLinea);

    var input16 = document.createElement("input");
    input16.id = "Hamburguesa Iron Man"; 
    input16.type = "checkbox";
    input16.name = "plato_principal";
    input16.value= "IronMan";
    formulario.appendChild(input16)

    var text17 = document.createTextNode("Hamburguesa Iron Man"); 
    input16.appendChild(text17); 
    formulario.appendChild(text17);
   
    var saltoLinea = document.createElement("br"); 
    formulario.appendChild(saltoLinea);

    var input17 = document.createElement("input");
    input17.id = "Hamburguesa Thor"; 
    input17.type = "checkbox";
    input17.name = "plato_principal";
    input17.value= "Thor";
    formulario.appendChild(input17)

    var text18 = document.createTextNode("Hamburguesa Thor"); 
    input17.appendChild(text18); 
    formulario.appendChild(text18);
   
    var saltoLinea = document.createElement("br"); 
    formulario.appendChild(saltoLinea);

    var input18 = document.createElement("input");
    input18.id = "Hamburguesa CapitanAmerica"; 
    input18.type = "checkbox";
    input18.name = "plato_principal";
    input18.value= "Capi";
    formulario.appendChild(input18)

    var text19 = document.createTextNode("Hamburguesa Capitan América"); 
    input18.appendChild(text19); 
    formulario.appendChild(text19);
   
    var saltoLinea = document.createElement("br"); 
    formulario.appendChild(saltoLinea);
    var saltoLinea = document.createElement("br"); 
    formulario.appendChild(saltoLinea); 
    var saltoLinea = document.createElement("br"); 
    formulario.appendChild(saltoLinea); 


    //IMÁGENES: 
    var parrafo9 = document.createElement("p"); 
    parrafo9.id = "parrafo9";
    var text13 = document.createTextNode("Presentación de la carta de hamburguesas"); 
    parrafo9.appendChild(text13); 
    formulario.appendChild(parrafo9); 

    var imagen1 = document.createElement("img"); 
    imagen1.id = "hulk";
    imagen1.src = "img/Hulk_Hamburguesa.jpg"; 
    imagen1.alt ="Hamburguesa del increible Hulk"; 
    formulario.appendChild(imagen1); 

    var imagen2 = document.createElement("img"); 
    imagen2.id = "Spider-man";
    imagen2.src = "img/Spider-man_Hamburguesa.webp"; 
    imagen2.alt ="Hamburguesa del hombre araña"; 
    formulario.appendChild(imagen2); 

    var imagen3 = document.createElement("img"); 
    imagen3.id = "Iron-man";
    imagen3.src = "img/IronMan_Hamburguesa.jpg"; 
    imagen3.alt ="Hamburguesa IronMan"; 
    formulario.appendChild(imagen3); 

    var imagen4 = document.createElement("img"); 
    imagen4.id = "Thor";
    imagen4.src = "img/Thor_Hamburguesa.jpg"; 
    imagen4.alt ="Hamburguesa Thor"; 
    formulario.appendChild(imagen4); 

    var imagen5 = document.createElement("img"); 
    imagen5.id = "CapitanAmerica";
    imagen5.src = "img/CapitanAmerica_Hamburguesa.webp"; 
    imagen5.alt ="Hamburguesa CapitanAmerica"; 
    formulario.appendChild(imagen5); 

    var saltoLinea = document.createElement("br"); 
    formulario.appendChild(saltoLinea);

    var saltoLinea = document.createElement("br"); 
    formulario.appendChild(saltoLinea); 
    var saltoLinea = document.createElement("br"); 
    formulario.appendChild(saltoLinea); 


    //UN CAMPO SELECT. 
    var parrafo10 = document.createElement("p"); 
    parrafo10.id = "parrafo10";
    var text14 = document.createTextNode("Elige tu salsa malvada favorita: "); 
    parrafo10.appendChild(text14); 
    formulario.appendChild(parrafo10); 

    var select1 = document.createElement("select"); 
    select1.name = "Salsa Villana"; 
    
    var opcion0 = document.createElement("option"); 
    opcion0.value = "Elige tu favorita"; 
    select1.appendChild(opcion0);
    var txtop0 = document.createTextNode("Elige tu salsa villana"); 
    opcion0.appendChild(txtop0); 

    var opcion1 = document.createElement("option"); 
    opcion1.value = "salsa barbacoa Thanos"; 
    select1.appendChild(opcion1);
    var txtop1 = document.createTextNode("salsa barbacoa Thanos"); 
    opcion1.appendChild(txtop1); 
 
    var opcion2 = document.createElement("option"); 
    opcion2.value = "salsa carbonara Loki"; 
    select1.appendChild(opcion2);
    var txtop2 = document.createTextNode("salsa carbonara Loki"); 
    opcion2.appendChild(txtop2); 

    var opcion3 = document.createElement("option"); 
    opcion3.value = "salsa de mostaza Ultrón"
    select1.appendChild(opcion3);
    var txtop3 = document.createTextNode("salsa mostaza Ultrón"); 
    opcion3.appendChild(txtop3); 

    formulario.appendChild(select1); 

    var saltoLinea = document.createElement("br"); 
    formulario.appendChild(saltoLinea); 
    var saltoLinea = document.createElement("br"); 
    formulario.appendChild(saltoLinea); 


    //UN TEXT AREA: 
    var parrafo11 = document.createElement("p"); 
    parrafo11.id = "parrafo11";
    var text15 = document.createTextNode("Observaciones: "); 
    parrafo11.appendChild(text15); 
    formulario.appendChild(parrafo11); 
    var textarea = document.createElement("textarea"); 
    formulario.appendChild(textarea); 

    document.getElementById("contenedor").appendChild(formulario); //Se añade el formulario como hijo del DIV de la página HTML. 
    //document.body.appendChild(formulario); //Se añade el formulario al body del HTML.  
}