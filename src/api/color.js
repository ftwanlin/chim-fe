import http from "src/utils/http";

const createColor = async (color) => { 
    const resp = await http.post("/create", color);
    return resp
}

const updateColor = async (color) => { 
    const resp = await http.put(`/update`, color);
    return resp
}

const getListColors = async (page, limit) => {
    const resp = await http.get(`/list?page=${page}&limit=${limit}`);
    return resp
}

const getAllColors = async () => { 
    const resp = await http.get(`/all`);
    return resp
}

const getColorById = async (id) => { 
    const resp = await http.get(`/${id}`);
    return resp
}

export { 
    createColor,
    updateColor,
    getListColors,
    getAllColors,
    getColorById
}