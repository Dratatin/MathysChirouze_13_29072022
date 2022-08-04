import { createContext, useState } from "react"

export const LoginContext = createContext()

export const LoginProvider = ({ children }) => {
    const [logged, setIsLogged] = useState(false)

    return (
        <LoginContext.Provider value={{ logged, setIsLogged }}>
            {children}
        </LoginContext.Provider>
    )
}

