const userService = require('../services/userService');

const createUser = async(req, res) => {
    try {
        console.log(req.body);
        const res = await userService.createUser()
        return res.status(200).json(res);
    } catch (error) {
        return res.status(404).json({
            message: error
        });
    }
}
module.exports = {
    createUser
} 