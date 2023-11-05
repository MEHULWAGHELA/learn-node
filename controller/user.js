
const userModel = require('../model/userModel')
const getUser = (req, res) => {
    res.status(200).json({
        data: [],
        success: "true",
        message: 'data retrived successfully'
    })
}
const addUser = (req, res) => {
    console.log(req.body)
    const { name, surname, email } = req.body;
    res.status(200).json({
        data: [{
            name, surname, email
        }],
        success: "true",
        message: 'data retrived successfully'
    })
    res.status(200).json({
        data: [{
            name, surname, email
        }],
        success: "true",
        message: 'data retrived successfully'
    })
}
const newUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user=await userModel.create({
            name,email,password
        })
        res.status(200).json({
            data: [{
                name, email, password
            }],
            success: "true",
            message: 'data retrived successfully'
        })

    }
    catch (error) {
        console.log(error)
    }
}

module.exports = { getUser, newUser, addUser }