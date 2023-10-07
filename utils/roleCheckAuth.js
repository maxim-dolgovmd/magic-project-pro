import jwt from 'jsonwebtoken';

export default async (req, res, next) => {

    const token = (req.headers.authorization || '').replace(/"/g, "")
    const role = req.params.role
    
    if (token) {

        try {
            console.log(token)
            const decoded = jwt.verify(token, 'secret555')
            console.log(decoded)

            if (role === 'admin') {
                next()
            } 
            if (role==='user') {
                req.userId = decoded._id
                next()
            }

        } catch (error) {
            console.log(error)
            res.status(403).json({
                message: 'Неверный токен'
            })
        }

    } else {
        return res.status(403).json({
            message: 'Нет доступа'
        })
    }

    // if (role === 'user') {

    //     next()
    // }

}