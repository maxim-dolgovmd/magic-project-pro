import OrderShema from '../models/Order.js'

export const getOrder = async (req, res) => {
    try {
        
        const id = req.userId

        const orders = await OrderShema.find({user: id})
            res.json(orders)

    } catch (error) {
        console.log(error)

        res.status(500).json({
            message: "Не удалось получить ордера"
        })
    }
}

export const getServerOrder = async (req, res) => {
    try {
        
        const orders = await OrderShema.find()
        
        res.json(orders)

    } catch (error) {
        console.log(error)

        res.status(500).json({
            message: "Не удалось получить ордера"
        })
    }
}

export const getOneOrder = async (req, res) => {
    try {
        
        const id = req.params.id

        const order = await OrderShema.findById(id)

        res.json({order})

    } catch (error) {
        console.log(error)

        res.status(500).json({
            message: "Не удалось получить ордер"
        })
    }
}

export const createOrder = async (req, res) => {
    try {
        
        const doc = OrderShema({
            name: req.body.name,
            price: req.body.price,
            status: req.body.status,
            ingredients: req.body.ingredients,
            user: req.userId,
        })

        const order = await doc.save()

        res.json({
            order
        })

    } catch (error) {
        console.log(error)

        res.status(500).json({
            message: 'Не удалось создать ордер'
        })
    }
}

export const statusUpdate = async (req, res) => {
    try {
        
        const orderId = req.params.id

        await OrderShema.updateOne(
            {
                _id: orderId
            },
            {
                status: req.body.status
            }
        )

        res.json({
            success: true
        })

    } catch (error) {
        console.log(error)

        res.status(500).json({
            message: 'Не удалось обновить статус ордера'
        })
    }
}