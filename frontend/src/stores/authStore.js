import create from "zustand";
import axios from "axios";

const authStore = create((set) => ({
    loggedIn: null,

    loginForm: {
        email: "",
        password: "",
    },

    signupForm: {
        email: "",
        password: "",
    },

    updateLoginForm: (e) => {
        const { name, value } = e.target;

        set((state) => {
            return {
                loginForm: {
                    ...state.loginForm,
                    [name]: value,
                },
            };
        });
    },

    updateSignupForm: (e) => {
        const { name, value } = e.target;

        set((state) => {
            return {
                signupForm: {
                    ...state.signupForm,
                    [name]: value,
                },
            };
        });
    },

    login: async (e) => {
        const {loginForm} = authStore.getState();

        const res = await axios.post("/login", loginForm);

        set({
            loggedIn: true,
            loginForm: {
                email: "",
                password: "",
            },
        });

        console.log(res);
    },

    checkAuth: async () => {
        try {
            const res = await axios.get("/check-auth");
            set({loggedIn: true});
        } catch (err) {
            set({loggedIn: false});
        }
    },

    signup: async (e) => {
        const {signupForm} = authStore.getState();

        const res = await axios.post("/signup", signupForm);

        set({
            signupForm: {
                email: "",
                password: "",
            },
        });
    },

    logout: async () => {
        await axios.get("/logout");
        set({loggedIn: false});
    }

}));


export default authStore;
