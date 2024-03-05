import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "2d7b044f7bab4d43ae18a8ebbf5e437f",
    },
});