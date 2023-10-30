import { IIngredient } from "../redux/slices/addCartSlice"


export const getCountFromCart = (array: IIngredient[]) => {
   const map = new Map()

   for (let i = 0; i < array.length; i++) {
        const element = array[i]
        if (map.has(element._id)) {
            let count = map.get(element._id)
            map.set(element._id,  ++count)
        } else {
            map.set(element._id, 1)
        }
   }
   return map
}

