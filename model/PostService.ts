import Post from "./Post";

class PostService {
    async create(post) {
        const createdPost = await Post.create({...post})
        return createdPost;
    }
    async getAll() {
        const posts = await Post.find();
        return posts;
    }

    async getPerekrestok() {
        const perekrestok = await Post.find({"index": "perekrestok"})
        return perekrestok;
    }
    async getLanding() {
        const landing = await Post.find({"index": "landing"})
        return landing;
    }
    async getMebel() {
        const mebel = await Post.find({"index": "mebel"})
        return mebel;
    }
    async getMebelbest() {
        const mebelbest = await Post.find({"index": "mebelbest"})
        return mebelbest;
    }
   
    async getOne(id) {
        if (!id) {
            throw new Error('Не указан ID')
        }
        const post = await Post.findById(id);
        return post
    }
    async update(post) {
        if (!post._id) {
            throw new Error('не указан ID')
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
        return updatedPost;
    }
    async delete(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const post = await Post.findByIdAndDelete(id);
        return post;
    }
} 

export default new PostService()