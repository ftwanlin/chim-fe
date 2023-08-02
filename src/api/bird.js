import http from "src/utils/http";

const createBird = async (bird) => { 
    const resp = await http.post("/bird/create", bird);
    return resp    
}

const updateBird = async (bird) => { 
    const resp = await http.put(`/bird/update`, bird);
    return resp
}

const getListBirds = async (page, limit) => { 
    const resp = await http.get(`/bird?page=${page}&limit=${limit}`);
    return resp
}

const getBirdById = async (id) => { 
    const resp = await http.get(`/bird/${id}`);
    return resp
}

export {
    createBird,
    updateBird,
    getListBirds,
    getBirdById
}

