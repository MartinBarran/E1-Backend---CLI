import inquirer from "inquirer"
import { createNewSpent, getAllSpents } from "./helpers/listOptions";


const main = async () =>{

    let run = true;

while (run){

    const action = await inquirer.prompt([
        {
            type:"list",
            name:"chosenOption",
            message:"Elija una opción:",
            choices:[
                {
                    value:1,
                    name:"Ver gastos",
                },
                {
                    value:2,
                    name:"Registrar nuevo gasto",
                },
                {
                    value:3,
                    name:"Salir"
                }
            ],
        }

    ])

    switch(action.chosenOption){
        case 1:
            await getAllSpents();
            break;
        case 2:
            await createNewSpent();
            break;
        case 99:
            run=false;
            break;
        default:
            run=false;
            break;
            
    }

}   

}


main()














// const main = async () =>{
    
//     const answers = await inquirer.prompt([
//         {
//             type: "input",
//             name: "nombre",
//             message: "Ingresa tu nombre",

//         },
//         {
//             type: "input",
//             name: "apellido",
//             message: "Ingresa tu apellido",

//         },
//         {
//             type: "number",
//             name: "costo",
//             message: "¿Cuánto costó?"
//         }
//     ]);

//     console.log(answers);
//     console.log(`Tu nombre es ${answers.nombre} y tu apellido es ${answers.apellido}`);
    
// };

// main()