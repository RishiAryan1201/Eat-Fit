import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "Rishi Aryan",
        email: "support@eatfit.com",
    },
});
export default UserContext;