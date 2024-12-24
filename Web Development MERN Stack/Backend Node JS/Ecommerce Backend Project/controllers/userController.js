import userModel from "../models/userModel.js";

export const registerController = async (req, res) => {
    try {
        const { name, email, password, address, city, country, age, phone } = req.body;

        if (!name || !email || !password || !city || !address || !country) {
            return res.status(500).send({
                success: false,
                message: 'Please provide all fields',
            });
        }

        const user = await userModel.create({
            name, email, password, address, city, country, age, phone
        });

        res.status(201).send({
            success: true,
            message: 'Registration created',
            user
        });
    } catch (error) {
        console.log(error);

        res.status(500).send({
            success: false,
            message: 'Error in Register API',
            error
        });
    }
};