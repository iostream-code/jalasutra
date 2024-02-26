import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(!!localStorage.getItem('token'))

    const login = () => {
        localStorage.setItem('token', 'token')
        setIsLogin(true)
    }

    const logout = async () => {
        localStorage.removeItem('token')
        setIsLogin(false)
    }

    return (
        <AuthProvider value={{ isLogin, login, logout }}>
            {children}
        </AuthProvider>
    )
}

export default AuthContext