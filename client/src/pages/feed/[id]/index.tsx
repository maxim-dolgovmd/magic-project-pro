import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import DinamickPath, { orders } from "@/components/components/dinamickPath/dinamickPath";
import { statusCategories } from "@/components/components/statusCategories/statusCategories";
import { device } from "@/components/components/device/device";
import { useAppDispatch } from "@/components/redux/store";
import { IIngredient, setActiveIngr } from "@/components/redux/slices/addCartSlice";

const Window = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-Index: 200;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,1);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 16px 0 16px;

    @media ${device.tablet} {
      padding: 0px;
    }
`

const OrderContent = styled.div`
    max-width: 718px;
    background:  rgba(0,0,0,1);
    border: 1px solid  rgba(0,0,0,1);
    display: flex;

    @media ${device.tablet} {
      /* height: 100%; */
      width: 100%;
    }
`

type IdNumberType = {
  id: string,
}

interface ContextType {
  params: IdNumberType,
  locales: any,
  locale: any,
  defaultLocale: any,
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

const InfoCardOrder: React.FC<ModalType> = ({order}) => {
  console.log(order)

  const orderObject = order?.order
  console.log(orderObject)

  const router = useRouter()

  const closedModal = () => {
    router.push('/feed')
  }

  return (
    <Window onClick={() => closedModal()}>
      <OrderContent onClick={(e) => e.stopPropagation()}>
        {/* <DinamickPath closedModal={closedModal}/> */}
        <DinamickPath closedModal={closedModal}  order={orderObject} status={statusCategories[orderObject?.status]}/>
      </OrderContent>
    </Window>
  );
}

export default InfoCardOrder;

export const getStaticProps = async (context: ContextType) => {

  const id = context?.params?.id
  console.log(id)
  const responce = await fetch(`http://localhost:5555/order/${id}`)
  const data = await responce.json()

  return {
    props: {order: data}
  }
} 

export const getStaticPaths = async () => {

  const responce = await fetch('http://localhost:5555/order')
  const data = await responce.json()

  console.log(data)

  const paths = data?.map((order: any) => {
    return {
      params: {id: String(order?._id)}
    }
  })

  return {
    paths,
    fallback: true,
  }
}