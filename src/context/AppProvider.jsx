import { createContext, useContext, useState } from "react";
import data from '../data'
const AppContext = createContext()

const AppProvider = ({children}) => {
const [questions, setQuestions] = useState(data)
const [activeID, setactiveID] = useState(null)

const showMore = (id) => {
    const newActiveID = activeID === id ? null : id 
    setactiveID(newActiveID)
}
    return (
        <AppContext.Provider value={{questions, activeID, showMore}}>
            {children}
        </AppContext.Provider>
    )
}


const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider, useGlobalContext}