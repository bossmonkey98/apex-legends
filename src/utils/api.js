import axios from "axios";

export const fetchdata = async (
    method,
    endPoint,
    isProtected = false,
    data = {}
) => {
    const token = JSON.parse(localStorage?.getItem("user"))?.token;
    axios.defaults.baseURL = "/api/"

    if (token && isProtected) {
        axios.interceptors.request.use(
            (req) => {
                req.headers.authorization = token
                return req
            },
            (error) => {
                return Promise.reject(error)
            }
        )
    }

    switch (method) {
        case "get": {
            return await axios.get(endPoint)
        }
        case "post": {
            return await axios.post(endPoint, data)
        }
        case "delete":
            return await axios.delete(endPoint, data)
        default:
            return
    }
}

export const formatError = (err) => {
    if (err.response.data.errors) {
      return err.response.data.errors.join(", ");
    }
    return err.message;
  };