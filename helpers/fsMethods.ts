import fs from "fs";
import { ISpent } from "../interfaces/interfaces";

export const getWithFS = (file: string): Promise<[ISpent]> => {       //tipado de objeto mediante interfaz

    return new Promise((resolve, reject) =>{
        fs.readFile(`./${file}.json`, "utf8", (err, content) =>{   //1er arg: ruta; 2do:codificacion, 3ro:handler err o cont
            if (err){
                reject(err);
            }
            resolve(JSON.parse(content));

        })

    })
}


export const saveWithFs = (file:string, content:ISpent[]): Promise<void> =>{     //traigo nombre de archvo a guardar y el contenido a guardar

    return new Promise ((resolve, reject)=>{
        fs.writeFile(`./${file}.json`, JSON.stringify(content), (err) =>{   //1.nombre de archivo a guardar,2.contenido stringifado a guardar,3.callback
            if(err){
                reject(err)
            }
            resolve(console.log("Gasto registrado"));
        }) 

    })

}