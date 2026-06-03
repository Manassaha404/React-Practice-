//why we use ContextApi in react ??? 
// --> in react there is a concept called Lifting the state up, in the concept we assume the parent element as source of truth 
// if we want to pass data to children it goes through props form parent. 


// in this concept is good for simple cases, but in real world where we a big nested parent-child relation there the problem comes. 
// in that case we pass state to every child, even through that component not use that state 
// it makes the code structure messy and complex 


// here comes contextApi or useContext() 
// in this method we create a global provider which warp the the whole App or the most outer parent 
// it gives access of state to all the children without passing unnecessary props


// to implement context there is 3 parts.. 
// 1. create context provider 
// 2. warp the the parent with provider 
// 3. call useContext() hook to access state from any children 

import { createContext } from "react";
import type { User } from "../types/User";


export const dashboardContext = createContext<User|null>(null); // how we create the provider 
