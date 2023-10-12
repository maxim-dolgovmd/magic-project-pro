import ingridientShema from '../models/Ingridient.js'

export const getIngridients = async (req, res) => {
    try {
        
        const ingridients = await ingridientShema.find()

        res.json(ingridients)

    } catch (error) {
        console.log(error)

        res.status(500).json({
            message: 'Отсутствуют ингридиенты'
        })
    }
}

export const createIngridient = async (req, res) => {
    try {
        
        const doc = ingridientShema({
            largePhotoUrl: req.body.largePhotoUrl,
            normalPhotoUrl: req.body.normalPhotoUrl,
            mobilePhotoUrl: req.body.mobilePhotoUrl,
            previewPhotoUrl: req.body.previewPhotoUrl,
            price: req.body.price,
            name: req.body.name,
            category: req.body.category,
            quantity: req.body.quantity,
        })

        const ingridient = await doc.save()

        res.json({ingridient})

    } catch (error) {
        console.log(error)

        res.status(500).json({
            message: 'Не удалось создать ингридиент'
        })
    }
}