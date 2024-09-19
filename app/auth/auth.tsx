import {create} from "zustand"
import { persist } from "zustand/middleware"

type AuthState = {
    isLoggedIn: boolean;
    access_token?: any;
    refresh_token?: any;
}

type Actions = {
    login: (email: string, password: any) => void;
    logout: ()=> void;
    check_user?: (_id: any) => string;
    saveToken?: (token: string) => string;
}

export const useAuthUser = create<Actions & AuthState>()(
    set => ({
        isLoggedIn: false,
        logout() {
            set(({refresh_token: null, 
            access_token: null, 
            isLoggedIn: false
        }))
        },

        async login(email, password) {
            let form = new FormData
            form.append("email", email)
            form.append("password", password)
            const response = await fetch("http://192.168.43.68:5000/auth/user/login", {method: "POST", body: form});
            const result = await response.json()

            console.log(result)
            
            if(response.ok){
                alert("you have been loggged in")
                set( ({
                    isLoggedIn: true
                }))
                if(result.token){
                    set(({
                        access_token: result.token
                    }))
                }
            }else{
                alert("somrthing happend")
            }
        }
    })
)