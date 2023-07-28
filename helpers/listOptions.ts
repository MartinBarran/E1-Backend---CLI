import { getWithFS, saveWithFs } from "./fsMethods"
import { newSpentPrompt } from "./spentPrompt"

export const getAllSpents = async() =>{
    const currentUsers = await getWithFS("spents") //tipado: objeto me devuelve una interfaz IUser

    console.log(currentUsers)

}

export const createNewSpent = async() =>{
    const newSpentData = await newSpentPrompt();

    const currentSpents = await getWithFS("spents")

    currentSpents.push(newSpentData)

    await saveWithFs("spents", currentSpents)
    

}