import http from "src/utils/http";

const createBreed = async (breed) => { 
    const resp = await http.post("/create", breed);
    return resp
}

const updateBreed = async (breed) => { 
    const resp = await http.put(`/update`, breed);
    return resp
}

const getListBreeds = async (page, limit) => { 
    const resp = await http.get(`?page=${page}&limit=${limit}`);
    return resp
}

const getAllBreeds = async () => { 
    const resp = await http.get(`/all`);
    return resp
}

const getBreedById = async (id) => { 
    const resp = await http.get(`/${id}`);
    return resp
}

export { 
    createBreed,
    updateBreed,
    getListBreeds,
    getAllBreeds,
    getBreedById
}