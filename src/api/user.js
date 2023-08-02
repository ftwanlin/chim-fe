import http from "src/utils/http";

const getUserById = async (id) => {
    const resp = await http.get(`/users/${id}`);
    return resp
}

const login = async (data) => { 
    const resp = await http.post('/auth/login', data);
    return resp
}

export {
    getUserById,
    login
}