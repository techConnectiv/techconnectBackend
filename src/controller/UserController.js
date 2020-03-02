const User = require('../schema/User');
module.exports = {
    async store(req, res) {

        const {
            name,
            login,
            password,
            email,
            cpf,
            dtNasc,
            address,
            sexo,
            tel,
            latitude,
            longitude
        } = req.body;

        const userExists = await User.findOne({ where: { email: req.body.email } } ||
            { where: req.body.cpf } || { where: req.body.tel }
        );

        if (userExists) {
            return res.status(400).json({ error: 'Usuário existente' });
        }

        const location = {
            type: 'Point',
            coordinates: [longitude, latitude],
        };

        const user = await User.create({
            name,
            login,
            password,
            email,
            cpf,
            dtNasc,
            address,
            sexo,
            tel,
            location
        });

        return res.json(user);

    },
    async update(req, res) {

    }

}
