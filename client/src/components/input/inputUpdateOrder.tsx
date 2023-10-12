import React from "react"
import styled from "styled-components"

import IconDown from '../../../public/iconDown.svg'
import IconUp from '../../../public/iconUp.svg'
import ButtonComponent from '@/components/components/button/button'
import BaseInput from "./baseInput"
import { useForm } from "react-hook-form"
import { useUpdateStatusIdMutation } from "@/components/services/ordersApi"

const OrderInfoUpdate = styled.div`
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
      maxHeight: '270px',
      transition: '0.5s ease-in'
    }
  }};
`

const BlockUpdate = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-top: 20px;
  gap: 16px;
`

const BlockButton = styled.div`
    display: flex;
    justify-content: center;
`


const inputUpdateOrder: React.FC = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onBlur'})
    const [updateOrder, setUpdateOrder] = React.useState(false)
    const [updateStatusId] = useUpdateStatusIdMutation()

    const OnSubmit = handleSubmit((data) => {
        updateStatusId(data)
      })

    return (
        <>
            <OrderInfoUpdate onClick={() => setUpdateOrder(!updateOrder)}>
            <TextStatus>Изменение статуса заказа</TextStatus>
            <div >
                {updateOrder ? <IconUp /> : <IconDown />}
            </div>
            </OrderInfoUpdate>
            <BlockActive activeUpdate={updateOrder}>
            <BlockUpdate>
                <BaseInput 
                label="id ордера"
                error={errors.orderId?.message}
                register={{
                    ...register('orderId', {
                        required: 'Укажите id'
                    })
                }}
                />
                <BaseInput 
                label="статус ордера"
                error={errors.statusId?.message}
                register={{
                    ...register('statusId', {
                        required: 'Укажите статус'
                    })
                }}
                />
                <BlockButton>
                <ButtonComponent onClick={OnSubmit} size='small'>Изменить статус</ButtonComponent>
                </BlockButton>
            </BlockUpdate>
            </BlockActive>
        </>
    )
}

export default inputUpdateOrder