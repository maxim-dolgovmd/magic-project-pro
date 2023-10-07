import {body} from 'express-validator'

export const authValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('passwordHash', 'Пароль должен быть минимум 6 символов').isLength({min: 6}),
]

export const registerValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('passwordHash', 'Пароль должен быть минимум 6 символов').isLength({min: 6}),
    body('username', 'Имя должно быть минимум 3 символа').isLength({min: 3})
]

export const IngridientValidations = [
    body('largePhotoUrl', 'Отсутствует фотография').optional(),
    body('normalPhotoUrl', 'Отсутствует фотография').optional(),
    body('mobilePhotoUrl', 'Отсутствует фотография').optional(),
    body('previewPhotoUrl', 'Отсутствует фотография').optional(),
    body('price', 'Не указана стоимость'),
    body('name', 'Название ингридиента от 6 символов').isLength({min: 6}),
    body('category', 'Не указана категория').isString(),
    body('quantity', 'Укажите количество ингридиентов'),
]

export const OrderValidations = [
    body('name', 'Укажите название бургера').isString().optional(),
    body('price', 'Укажите стоимость бургера').optional(),
    body('status', 'Укажите статус заказа').isString().optional(),
    body('ingredients', 'Неверный формат(должен быть массив)').isArray(),
]