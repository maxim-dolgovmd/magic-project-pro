import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';

import AuthShema from '../models/Auth.js'

export const register = async (req, res) => {
    try {
        
        const password = req.body.passwordHash
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const doc = AuthShema({
            username: req.body.username,
            email: req.body.email,
            passwordHash: hash,
        })

        const user = await doc.save()

        const token = jwt.sign({
            _id: user._id
        }, 
            'secret555',
        {
            expiresIn: '30d'
        }
        )

        const {passwordHash, ...userData} = user._doc

        res.json({
            userData,
            token
        })

    } catch (error) {
        console.log(error)

        res.status(500).json({
            message: 'Не удалось создать пользователя'
        })
    }
}

export const login = async (req, res) => {
    try {
        
        const user = await AuthShema.findOne({email: req.body.email})

        if (!user) {
            res.status(403).json({
                message: 'Пользователь не найден'
            })
        }

        const isValidPass = await bcrypt.compare(req.body.passwordHash, user._doc.passwordHash)

        if (!isValidPass) {
            res.status(403).json({
                message: 'Неверный логин, или пароль'
            })
        }

        const token = jwt.sign({
            _id: user._id
        }, 
            'secret555',
        {
            expiresIn: '30d'
        }
        )

        const {passwordHash, ...userData} = user._doc

        res.json({
            userData,
            token
        })

    } catch (error) {
        console.log(error)

        res.status(500).json({
            message: 'Не удалось найти пользователя'
        })
    }
}

export const getMe = async (req, res) => {
    try {
        const user = await AuthShema.findById(req.userId)

        if (!user) [
            res.status(404).json({
                message: 'Пользователь не найден'
            })
        ]

        const {passwordHash, ...userData} = user._doc

        res.json({
            ...userData
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: 'Пользователь не найден'
        })
    }
}

export const update = async (req, res) => {
    try {

        const id = req.userId
        console.log(id)

        const password = req.body.passwordHash
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        const user = await AuthShema.updateOne(
            {
                _id: id
            },
            {
                username: req.body.username,
                email: req.body.email,
                passwordHash: hash,
            }
        )

        if (!user) {
            res.status(404).json({
                message: 'Не удалось найти пользователя'
            })
        }

        res.json({
            accsess: true
        })

    } catch (error) {
        console.log(error)

        res.status(500).json({
            message: 'Не удалось обновить данные пользователя'
        })
    }
}