let nombre;
let apellido;
let claveComprobacion;
let clave;
let opcion;
let dinero=0;
let ingreso;
let extracciones=[];
let cargas=[];

function extraerDinero(cantidad){
    dinero = dinero - cantidad;
    return dinero;
}

function extraer(){
    let cantidadExtraccion = prompt("cuanto dinero quiere sacar?: ");
    if(cantidadExtraccion <= dinero && cantidadExtraccion > 0){
      extraerDinero(cantidadExtraccion);
      extracciones.push(cantidadExtraccion);
      alert("Usted retiro: $"+cantidadExtraccion+" \nLe quedan: $"+dinero);
    }else{
      alert("accion imposible de realizar");
    }
}


let btnAcceso = document.getElementsByClassName("btnAcceso");
let contenedorAcceso = document.getElementById("contenedorIngreso");

btnAcceso[0].addEventListener("click", respuestaClickSI)

function respuestaClickSI(){
    let nuevoInput = document.createElement("div");
    nuevoInput.innerHTML = '<div> <p>Ingrese clave de acceso: </p> <input type="password" name="" id="clave">  </div> <a href="#" class="btn btn-primary" id="btnContinuar">Continuar</a>';
    contenedorAcceso.append(nuevoInput)
    let claveacc = document.getElementById("clave");
    let Continuar = document.getElementById("btnContinuar");
    Continuar.addEventListener("click", () => {
        claveComprobacion = claveacc.value; 
        if(clave != claveComprobacion){
            alert("No ingreso bien su clave")       
       } else {
            nuevoInput.innerHTML = ` `;
            let mensajeBienvenida = document.createElement("div");
            mensajeBienvenida.innerHTML = `<div><p>bienvenida/o ${nombre} ${apellido} que desea hacer? escriba un numero de estos en el cuadro de texto:</p> <ul><li>1.Ver Dinero</li> <li>\n2.Retirar Dinero</li> <li>\n3.Ingresar Dinero</li> <li>\n4.Ver Datos Importantes</li> <li>\n5.Ver todas las extracciones hechas</li></ul></div> <input type="number" name="" id="op"> <a href="#" class="btn btn-primary" id="btnContinuarOp">Continuar</a> `;
            contenedorAcceso.append(mensajeBienvenida)
    
            let opcion = document.getElementById("op");
            let btnContinuarOp = document.getElementById("btnContinuarOp");

            btnContinuarOp.addEventListener("click", ()=>{
                opcionElegida = opcion.value;

                if(opcionElegida < 1 || opcionElegida > 5){
                    alert("escriba numeros entre el 1 y el 6 dependiendo de la opcion que elija")
                } else {

                switch (opcionElegida){
                    case "1":
                        alert("Usted tiene $"+dinero);
                        if( dinero > 0)
                        {
                            let sacarDinero = prompt("Quiere sacar dinero?: \n1.si \n2.no");
                            if(sacarDinero == 1){
                                extraer();
                            }
                        }
                        break;
                    case "2":
                        extraer();
                        break;
                    case "3":
                            ingreso = parseInt(prompt("cuanto dinero desea ingresar?: "));
                            dinero = dinero + ingreso;
                        break;
                    case "4":
            
                        class Person {
                            constructor(nomb, apell, din){
                            this.nombre = nombre,
                            this.apellido = apellido,
                            this.dinero = dinero
                            }
                            mostrarDatos(){
                                alert(`Nombre: ${this.nombre}, Apellido: ${this.apellido}, Dinero: ${this.dinero}`)
                        }}
                        const persona = new Person(nombre, apellido, dinero);
                        
                        persona.mostrarDatos();
                                
                        break;
                        case "5":
                            if(extracciones.length < 1){
                                alert("No hay extracciones hechas");
                            }else{
                            for(let i = 0; i < extracciones.length; i++){
                                alert("ID de Extraccion: "+i+"\nCantidad de extraccion: $"+extracciones[i])
                            }
                        }

                        break;
                    default:
                            alert("Error elija una opcion");
                        break;
                   }

            }
        })
   
       }
    })
     
}


btnAcceso[1].addEventListener("click", respuestaClickNO)

function respuestaClickNO(){
        nombre = prompt("ingrese su nombre: ");
        apellido = prompt("ingrese su apellido: ");
        clave = prompt("ingrese clave a utilizar: ");
        alert("Datos actualizados!");
        tieneClave = 1;
}




