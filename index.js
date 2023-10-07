import express from 'express'
import mongoose from 'mongoose'
import multer from 'multer'
import cors from 'cors'
import { authController, categoryController, ingrController, orderController } from './controller/index.js'
import { IngridientValidations, OrderValidations, authValidation, registerValidation } from './validations.js'
import handleValidationErrors from './utils/handleValidationErrors.js'
import checkAuth from './utils/checkAuth.js'
import roleCheckAuth from './utils/roleCheckAuth.js'

mongoose
    .connect('mongodb+srv://admin:mmmmmm@cluster0.rqgvfch.mongodb.net/magic?retryWrites=true&w=majority')
    .then(() => console.log('DB ok'))
    .catch((error) => console.log('DB error', error))

const app = express()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({storage})

app.use(express.json())
app.use(cors())
app.use('/uploads', express.static('uploads'))

app.post('/auth/register', registerValidation, handleValidationErrors, authController.register)
app.patch('/auth/update',checkAuth, authController.update)
app.post('/auth/login', authValidation, handleValidationErrors, authController.login)
app.get('/auth/me', checkAuth, authController.getMe)

app.get('/ingridients', ingrController.getIngridients)
app.post('/ingridients', IngridientValidations, handleValidationErrors, ingrController.createIngridient)

app.get('/order/user',checkAuth, orderController.getOrder)
app.get('/order/:id', orderController.getOneOrder)
app.patch('/order/:id', orderController.statusUpdate)
app.get('/order', orderController.getServerOrder)
app.post('/order', checkAuth, OrderValidations, handleValidationErrors, orderController.createOrder)

app.get('/category', categoryController.getCategories)
app.get('/category', categoryController.createCategories)

app.post('/upload', upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`
    })
})


app.listen(5555, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log('Server OK')
})
