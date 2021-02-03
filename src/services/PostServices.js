import axios from 'axios';

const BASE_URL= "https://jsonplaceholder.typicode.com/posts";

class PostServices{
    getAllPosts(){
        return axios.get(BASE_URL);
    }
}

export default new PostServices()