import React from "react"
import styled from "styled-components"
import Select from 'react-select'

import IconDown from '../../../public/iconDown.svg'
import IconUp from '../../../public/iconUp.svg'
import ButtonComponent from '@/components/components/button/button'
import BaseInput from "./baseInput"
import { useForm } from "react-hook-form"
import { useUpdateStatusIdMutation } from "@/components/services/ordersApi"
import { useAppDispatch } from "@/components/redux/store";
import { setActiveStatusOrder } from "@/components/redux/slices/windowSlice"

const OrderInfoUpdate = styled.div`
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
      maxHeight: '400px',
      transition: '0.5s ease-in'
    }
  }};
`

const BlockUpdate = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 20px;
  gap: 28px;
`

const SelectBox = styled.div`
  color: #000;
`

const BlockButton = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
`

const UpdateImage = styled.div`
  svg path {
    fill: ${({ theme }) => theme.menuColorImg}
  }
`


const inputUpdateOrder: React.FC = () => {

  const selectArrayOptions = [
    { value: 'closed', label: 'closed' },
    { value: 'canceled', label: 'canceled' },
    { value: 'handed over to courier', label: 'handed over to courier' },
    { value: 'in preparation', label: 'in preparation' },
    { value: 'ready', label: 'ready' }
  ]
  const dispatch = useAppDispatch()
  const { register, handleSubmit: handleInputSubmit, reset, formState: { errors }, setValue, getValues } = useForm({ mode: 'onBlur' })
  const [updateOrder, setUpdateOrder] = React.useState(false)
  const [valueForm, setValueForm] = React.useState()
  const [updateStatusId] = useUpdateStatusIdMutation()

  const handleChange = async (selected: any) => {
    setValueForm(selected?.value)
  }

  const submitFunc = async (data: any) => {
    console.log({ data, statusId: valueForm })
    const { data: res }: any = await updateStatusId({ data, statusId: valueForm })
    console.log(res)
    if (Object.keys(res || []).length > 0) {
      dispatch(setActiveStatusOrder(true))
      setTimeout(() => {
        dispatch(setActiveStatusOrder(false))
      }, 3000);
    }
  }

  const OnSubmit = async(data: any) => {
    console.log(data)
    await submitFunc(data.orderId)
    reset()
  }


  return (
    <>
      <OrderInfoUpdate onClick={() => setUpdateOrder(!updateOrder)}>
        <TextStatus>Изменение статуса заказа</TextStatus>
        <UpdateImage >
          {updateOrder ? <IconUp /> : <IconDown />}
        </UpdateImage>
      </OrderInfoUpdate>
      <BlockActive activeUpdate={updateOrder}>
        <BlockUpdate onSubmit={handleInputSubmit(OnSubmit)}>
          <SelectBox>
            <Select options={selectArrayOptions} defaultValue={selectArrayOptions[3]} onChange={handleChange} />
          </SelectBox>
          <BaseInput
            label="id ордера"
            setValue={setValue}
            error={errors.orderId?.message}
            register={{
              ...register('orderId', {
                required: 'Укажите id'
              })
            }}
          />
          <BlockButton>
            <ButtonComponent type='submit' size='small'>Изменить статус</ButtonComponent>
          </BlockButton>
        </BlockUpdate>
      </BlockActive>
    </>
  )
}

export default inputUpdateOrder