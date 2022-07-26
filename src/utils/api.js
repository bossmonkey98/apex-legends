import axios from "axios";

export const fetchdata = async (
    method,
    endPoint,
    isProtected = false,
    data = {}
) => {
    const token = JSON.parse(localStorage?.getItem("token"));
    axios.defaults.baseURL = "/api/"
    let authHeader = {}
    if (token && isProtected) {
        authHeader = { headers: { authorization: token } }
    }
    
    switch (method) {
        case "get":
            return await axios.get(endPoint, authHeader)

        case "post":
            return await axios.post(endPoint, data, authHeader)

        case "delete":
            return await axios.delete(endPoint, authHeader)
    
        default:
            return
    }
}
