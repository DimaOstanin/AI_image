import {surpriseMePrompts} from "../assets/constants";
import FileSaver from 'file-saver';

export function getRandomPromt(prompt){
    const randomIndex = Math.floor(Math.random()* surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex]
    if(randomPrompt === prompt){
        return getRandomPromt(prompt);
    }
    
    return randomPrompt;
}

export async function downloadImage(_id,photo){
    FileSaver.saveAs(photo ,`download-${_id}.jpg`);
}