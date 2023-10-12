import React from "react"
import styled from "styled-components"
import {useSelector, useDispatch} from 'react-redux'

import IconDown from '../../../public/iconDown.svg'
import IconUp from '../../../public/iconUp.svg'
import BaseInput from "./baseInput"
import ButtonComponent from '@/components/components/button/button'
import { useForm } from "react-hook-form"
import { useAppDispatch } from "@/components/redux/store"
import { IngrNewSelect, setNewIngridient } from "@/components/redux/slices/ingridientSlice"
import { useCreateIngridientMutation } from "@/components/services/ingridientsApi"

const IngridientInfo = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`

const TextStatus = styled.div`
  color: #f2f2f3;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
`;

type TypeActiveUpdate = {
    activeUpdate: boolean
  }
const BlockActive = styled.div`
  overflow: hidden;
  max-height: 0px;
  transition: 0.5s ease-out;

  ${(props: TypeActiveUpdate) => {
    return props.activeUpdate && {
      maxHeight: '750px',
      transition: '0.5s ease-in'
    }
  }};
`

const BlockButton = styled.div`
    display: flex;
    justify-content: center;
`

const BlockUpdate = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 20px;
  gap: 16px;
`

const inputCreateOrder: React.FC = () => {

    const dispatch = useAppDispatch()
    const {newIngridient} = useSelector(IngrNewSelect)
    const [createIngridient] = useCreateIngridientMutation()
    const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onBlur'})

    const OnSubmit = handleSubmit((data) => {
        createIngridient(data)
      })

    return (
        <>
            <IngridientInfo onClick={() => dispatch(setNewIngridient(!newIngridient))}>
                <TextStatus>Создание ингридиента</TextStatus>
                <div >
                    {newIngridient ? <IconUp /> : <IconDown />}
                </div>
            </IngridientInfo>
            <BlockActive activeUpdate={newIngridient}>
                <BlockUpdate>
                    <BaseInput 
                    label="largePhotoUrl"
                    error={errors.largePhotoUrl?.message}
                    register={{
                        ...register('largePhotoUrl', {
                            required: 'Укажите путь к картинке'
                        })
                    }}
                    />
                    <BaseInput 
                    label="normalPhotoUrl"
                    error={errors.normalPhotoUrl?.message}
                    register={{
                        ...register('normalPhotoUrl', {
                            required: 'Укажите путь к картинке'
                        })
                    }}
                    />
                    <BaseInput 
                    label="mobilePhotoUrl"
                    error={errors.mobilePhotoUrl?.message}
                    register={{
                        ...register('mobilePhotoUrl', {
                            required: 'Укажите путь к картинке'
                        })
                    }}
                    />
                    <BaseInput 
                    label="previewPhotoUrl"
                    error={errors.previewPhotoUrl?.message}
                    register={{
                        ...register('previewPhotoUrl', {
                            required: 'Укажите путь к картинке'
                        })
                    }}
                    />
                    <BaseInput 
                    label="price"
                    type="number"
                    error={errors.price?.message}
                    register={{
                        ...register('price', {
                            required: 'Укажите стоимость'
                        })
                    }}
                    />
                    <BaseInput 
                    label="name"
                    error={errors.name?.message}
                    register={{
                        ...register('name', {
                            required: 'Укажите название',
                            minLength: {
                            value: 6,
                            message: 'Минимум 6 символов'
                            }
                        })
                    }}
                    />
                    <BaseInput 
                    label="category"
                    error={errors.category?.message}
                    register={{
                        ...register('category', {
                            required: 'Укажите категорию'
                        })
                    }}
                    />
                    <BlockButton>
                    <ButtonComponent onClick={OnSubmit} size='small'>Создать ингридиент</ButtonComponent>
                    </BlockButton>
                </BlockUpdate>
            </BlockActive>
        </>
    )
}

export default inputCreateOrder