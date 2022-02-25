import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"

//allow us to use the AuthContext and to get the current user
export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if(!context) {
    throw Error('useAuthContext must be used inside an AuthContextProvider')
  }

  return context
}