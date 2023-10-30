import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import DinamickPath from "@/components/components/dinamickPath/dinamickPath";
import { statusCategories } from "@/components/components/statusCategories/statusCategories";
import { IIngredient } from "@/components/redux/slices/addCartSlice";
import { device } from "@/components/components/device/device";

const Window = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-Index: 200;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.backgroundWindow};
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;

    @media ${device.tablet} {
      padding: 0px;
    }
`

const OrderContent = styled.h1`
    max-width: 718px;
    background: ${({ theme }) => theme.backgroundWindow};
    display: flex;

    @media ${device.tablet} {
      width: 100%;
    }
`

type IdNumberType = {
  id: string,
}

interface ContextType {
  params: IdNumberType
}

type StatusTypeEn = 'ready' | 'in preparation' | 'handed over to courier' | 'canceled' | 'closed';
  
interface Order {
    _id: string;
    createdAt: string;
    name: string;
    price: number;
    status: StatusTypeEn;
    ingredients: IIngredient[];
}

interface ModalOrder {
  order: Order
}

interface ModalType {
  order: ModalOrder
}

interface IngredientPaths {
  _id: string,
  largePhotoUrl: string,
  normalPhotoUrl: string,
  mobilePhotoUrl: string,
  previewPhotoUrl: string,
  price: number,
  name: string,
  category: string,
  quantity: number,
}

const InfoCardOrder: React.FC<ModalType> = ({order}) => {
  console.log(order)

  const orderObject = order?.order
  console.log(orderObject)

  const router = useRouter()

  const closedModal = () => {
    router.push('/account/order-history')
  }

  return (
    <Window onClick={() => closedModal()}>
      <OrderContent onClick={(e) => e.stopPropagation()}>
        <DinamickPath closedModal={closedModal}  order={orderObject} status={statusCategories[orderObject?.status]}/>
      </OrderContent>
    </Window>
  );
};

export const getStaticProps = async (context: ContextType) => {

  const id = context?.params?.id
  console.log(id)
  const responce = await fetch(`http://localhost:5555/order/${id}`)
  const data = await responce.json()
  console.log(data)
  return {
    props: {order: data}
  }
} 

export const getStaticPaths = async () => {

  const responce = await fetch(`http://localhost:5555/order`)
  const data = await responce.json()

  const paths = data?.map((order: IngredientPaths) => {
    return {
      params: {id: String(order?._id)}
    }
  })
  return {
    paths,
    fallback: true,
  }
}

export default InfoCardOrder;