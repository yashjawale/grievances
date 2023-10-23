import React, { createContext } from 'react'

interface AppProps {
    
}

export const AppContext = createContext<undefined>(undefined)

export const AppProvider = (props: {children: React.ReactNode})=>{
    return(
        <AppContext.Provider value={undefined}>
            {props.children}
        </AppContext.Provider>
    )
}
