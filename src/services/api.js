import axios from "axios";

const api = axios.create({
    baseURL: "https://potterapi-fedeperin.vercel.app/pt/",
});

// Busca todos os personagens (com paginação opcional)
export const getCharacters = (page = 0, max = 10) =>
    api.get(`characters?max=${max}&page=${page}`);

// Busca um personagem pelo índice
export const getCharacterByIndex = (index) =>
    api.get(`characters/${index}`);

// Busca todos os livros
export const getBooks = () =>
    api.get("books");

// Busca um livro pelo índice
export const getBookByIndex = (index) =>
    api.get(`books/${index}`);

// Busca todos os feitiços
export const getSpells = (page = 0, max = 20) =>
    api.get(`spells?max=${max}&page=${page}`);

// Busca todas as casas de Hogwarts
export const getHouses = () =>
    api.get("houses");

export default api;
