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
import { setActiveIngridients } from "@/components/redux/slices/windowSlice"

const IngridientInfo = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`

const TextStatus = styled.div`
  color: ${({ theme }) => theme.feedStaticTitle};
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

const BlockUpdate = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 20px;
  gap: 16px;
`

const UpdateImage = styled.div`
  svg path {
    fill: ${({ theme }) => theme.menuColorImg}
  }
`

const inputCreateIngridients: React.FC = () => {

    const dispatch = useAppDispatch()
    const {newIngridient} = useSelector(IngrNewSelect)
    const [createIngridient] = useCreateIngridientMutation()
    const {register, handleSubmit, reset, formState: {errors}} = useForm({mode: 'onBlur'})

    const submitFuncIngr = async (data: any) => {
        const {data: res} = await createIngridient(data)
        console.log(res)
        if (Object.keys(res || []).length > 0) {
            dispatch(setActiveIngridients(true))
            setTimeout(() => {
                dispatch(setActiveIngridients(false))
            }, 3000);
        }
    }

    const OnSubmit = async (data: any) => {
        await submitFuncIngr(data)
        reset()
    }

    return (
        <>
            <IngridientInfo onClick={() => dispatch(setNewIngridient(!newIngridient))}>
                <TextStatus>Создание ингридиента</TextStatus>
                <UpdateImage >
                    {newIngridient ? <IconUp /> : <IconDown />}
                </UpdateImage>
            </IngridientInfo>
            <BlockActive activeUpdate={newIngridient}>
                <BlockUpdate onSubmit={handleSubmit(OnSubmit)}>
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
                    <ButtonComponent type='submit' size='small'>Создать ингридиент</ButtonComponent>
                    </BlockButton>
                </BlockUpdate>
            </BlockActive>
        </>
    )
}

export default inputCreateIngridients