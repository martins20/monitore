import api from '../services/api';

class UserController {
    async index(req, res) {
        try {
            const { data } = await api.get('/users');

            return res.json(data);
        } catch (err) {
            return res.status(501).json({
                error: 'Something is wrong, check your data and try again.',
            });
        }
    }

    async show(req, res) {
        try {
            const { id } = req.params;

            const { data } = await api.get(`users/${id}`);

            return res.json(data);
        } catch (err) {
            return res.status(501).json({
                error: 'Something is wrong, check your data and try again.',
            });
        }
    }
}

export default new UserController();
