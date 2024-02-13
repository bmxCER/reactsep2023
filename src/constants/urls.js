const baseURL = 'https://jsonplaceholder.typicode.com'


const todos = '/todos'
const albums = '/albums'
const comments = '/comments'

const urls = {
    todos: {
        base: todos,
        byId: (id) => `${todos}/${id}`
    },
    albums: {
        base: albums,
        byId: (id) => `${albums}/${id}`
    },
    comments: {
        base: comments,
        byId: (id) => `${comments}/${id}`,
        getPostsByPostId: (id) => `/posts/${id}`
    }
}
export {
    baseURL,
    urls
}