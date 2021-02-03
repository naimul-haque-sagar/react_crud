import axios from 'axios';

const BASE_URL= "https://jsonplaceholder.typicode.com/posts";

class PostServices{
    getAllPosts(){
        return axios.get(BASE_URL);
    }

    createPost(post){
        return axios.post(BASE_URL, post);
    }

    updatePost(post,id){
        return axios.put(BASE_URL+'/'+id,post);
    }

    getPostById(id){
        return axios.get(BASE_URL+'/'+id)
    }

    deletePost(id){
        return axios.delete(BASE_URL+'/'+ id);
    }
}

export default new PostServices()