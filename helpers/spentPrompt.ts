import inquirer from "inquirer"
import { ISpent } from "../interfaces/interfaces"

export const newSpentPrompt= async(): Promise<ISpent> =>{
    return await inquirer.prompt([
        {
            type:"input",
            name: "name",
            message:"Nombre de Gasto:"
        },
        {
            type:"input",
            name: "category",
            message:"Categoría:"
        },
        {
            type:"number",
            name: "cost",
            message:"Costo:" 
        }

    ])

}