import {surpriseMePrompts} from "../assets/constants";

export function getRandomPromt(prompt){
    const randomIndex = math.flor(Math.random()* surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex]
    if(randomPrompt === prompt){
        return getRandomPromt(prompt);
    }
    
    return randomPrompt;
}