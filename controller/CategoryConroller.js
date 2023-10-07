import CategoryShema from '../models/Category.js'

export const getCategories = async (req, res) => {
    try {
        
        const categories = await CategoryShema.find()

        res.json({categories})

    } catch (error) {
        console.log(error)

        res.status(500).json({
            message: "Не удалось получить категории"
        })
    }
}

export const createCategories = async (req, res) => {
    try {
        
        const doc = CategoryShema({
            id: req.body.id,
            category: req.body.category
        })

        const category = await category.save()

        res.json(category)
            
    } catch (error) {
        console.log(error)

        res.status(500).json({
            message: "Не удалось создать категорию"
        })
    }
}