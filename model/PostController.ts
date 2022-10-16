import Post from './Post';
import PostService from './PostService';

class PostController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body)
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getAll(req, res) {
        try {
            const posts = await PostService.getAll();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getPerekrestok(req, res) {
        try {
            const posts = await PostService.getPerekrestok();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getLanding(req, res) {
        try {
            const posts = await PostService.getLanding();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getMebel(req, res) {
        try {
            const posts = await PostService.getMebel();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getMebelbest(req, res) {
        try {
            const posts = await PostService.getMebelbest();
            return res.json(posts);
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getOne(req, res) {
        try {
            const {id} = req.params
            if (!id) {
                res.status(400).json({message: 'ID не указан'})
            }
            const post = await PostService.getOne(req.params.id);
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async update(req, res) {
        try {
            const updatedPost = await PostService.update(req.body);
            return res.json(updatedPost);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async delete(req, res) {
        try {
            const post = await PostService.delete(req.params.id);
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new PostController();