import api from '../services/api';

class PostController {
    async index(req, res) {
        try {
            const { data: users } = await api.get('/users');
            const { data: posts } = await api.get('/posts');

            const newJsonPost = posts.map((post) => {
                let userID;

                users.map((user) => {
                    if (post.userId === user.id) {
                        return (userID = {
                            name: user.name,
                            company: user.company.name,
                        });
                    }
                });
                return {
                    id: post.id,
                    user: userID,
                    title: post.title,
                    body: post.body,
                };
            });

            return res.json(newJsonPost);
        } catch (err) {
            return res.status(501).json({
                error: 'Something is wrong, check your data and try again.',
            });
        }
    }

    async show(req, res) {
        try {
            const { postId } = req.params;

            const { data: post } = await api.get(`/posts/${postId}`);

            const { userId, id, title, body } = post;

            const { data: users } = await api.get(`/users/${userId}`);

            const { name, company } = users;

            return res.json({
                id,
                user: { name, company: company.name },
                title,
                body,
            });
        } catch (err) {
            return res.status(501).json({
                error: 'Something is wrong, check your data and try again.',
            });
        }
    }
}

export default new PostController();
