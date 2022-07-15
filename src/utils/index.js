import toast from "react-hot-toast"

export const initialLoginCred = {
    username: "",
    password:""
}

export const initialSignUpCred = {
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmPassword:"",
}

export const guestCred = {
    username: "Bossmonkey",
    password: "123456789",
}

export const notify = (content, type = "success") => toast(content, { type });
