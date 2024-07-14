import { createContext } from "react";

const userContext = createContext({
    logedIn : "default user"
})

export default userContext;