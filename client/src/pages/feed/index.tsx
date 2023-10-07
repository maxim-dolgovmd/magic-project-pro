import React from "react";
import styled from "styled-components";
import Container from "../../components/container/container";
import Head from "next/head";
import axios from 'axios'

import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import CardOrder from "../../components/cardOrder/cardOrder";
import { useGetAdminOrderQuery, useGetOrderQuery, useUpdateStatusIdMutation } from "../../services/ordersApi";

import StatusOrder from "../../components/statusOrder/statusOrder";

import { getObjStatus } from "../../utils/getObjStatus";
import Link from "next/link";
import { statusCategories } from "@/components/components/statusCategories/statusCategories";
import { AddCartSelect, IIngredient, setActiveIngr } from "@/components/redux/slices/addCartSlice";
import Tab from "@/components/components/tabs/tab";
import { device, size } from "@/components/components/device/device";
import useDeviceDetect from "@/components/hooks/useDeviceDetect";
import { useAppDispatch } from "@/components/redux/store";
import { useSelector } from "react-redux";
import useDeviceHeight from "@/components/hooks/useDeviceHeight";
import { StorageSelect, setUser } from "@/components/redux/slices/storageSlice";
import { useRouter } from "next/router";

import ButtonComponent from '@/components/components/button/button'
import BaseInput from "@/components/components/input/baseInput";
import { useForm } from "react-hook-form";
import { TokenGetMeFunc } from "@/components/utils/tokenGetMeFunc";
import { useGetMeMutation } from "@/components/services/registrationApi";

const Box = styled.div`
  padding-top: 150px;
  margin: 0 20px;

  @media ${device.tablet} {
    padding-top: 120px;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h1`
  color: #f2f2f3;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  padding-bottom: 16px;

  @media ${device.tablet} {
    text-align: center;
  }
`;

const GridColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px;

  @media ${device.laptop} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

type ScrollHistoryType = {
  heightScroll: number
}

const BoxOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: auto;

  ${(props: ScrollHistoryType) => {
    return props.heightScroll && {
      height: `${props.heightScroll}px`
    }
  }};

  @media ${device.tablet} {
    height: auto;
  }
`;

const GridStatus = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 36px;

  @media ${device.laptop} {
    grid-template-columns: repeat(1, 1fr);
  }

  @media ${device.mobileL} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const TextStatus = styled.div`
  color: #f2f2f3;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
`;

const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
  }

  @media ${device.tablet} {
    flex-direction: column;
  }

  @media ${device.mobileL} {
    text-align: center;
  }
`;

const BlockThisTime = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const BlockForToday = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const NumbersOfOrder = styled.div`
  color: #f2f2f3;
  font-weight: 400;
  font-size: 122px;
  line-height: 120px;
  text-shadow: 0px 0px 16px rgba(51, 51, 255, 0.25),
    0px 0px 8px rgba(51, 51, 255, 0.25), 0px 4px 32px rgba(51, 51, 255, 0.5);
  display: flex;
  align-items: center;

  @media ${device.mobileL} {
    justify-content: center;
  }
`;

const CategoriesTab = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 16px;
  width: 100%;

  @media (min-width: ${size.tablet}) {
    display: none;
  }
`

const CompletedOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }

  @media ${device.mobileL} {
    flex-direction: column;
  }
`

const ContainerStyle = styled(Container)`
  @media ${device.mobileL} {
    padding: 0 8px;
  }
`

const BlockButton = styled.div`
    display: flex;
    justify-content: center;
`

const BlockUpdate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const tsStatus = {
  'closed': 'Закрытые',
  'canceled': 'Отмененные',
  'handed over to courier': 'Переданные курьеру',
  'in preparation': 'в работе',
  'ready': 'готовые',

}

const tabMenu = [
  {
    id: 0,
    category: 'Заказы',
  },
  {
    id: 1,
    category: 'Статистика',
  }
]

export type StatusType = 'Закрытые' | 'Отмененные' | 'Переданные курьеру' | 'в работе' | 'готовые';
  
export interface Order {
    _id: string;
    createdAt: string;
    name: string;
    price: number;
    status: StatusType;
    ingredients: IIngredient[];
}


const OrderFeet: React.FC = () => {

  const dispatch = useAppDispatch()
  const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onBlur'})
  const [updateStatusId] = useUpdateStatusIdMutation()
  const [getMe] = useGetMeMutation()
  const router = useRouter()

  const OnSubmit = handleSubmit((data) => {
    updateStatusId(data)
  })
  
  React.useEffect(() => {
    const fetchMe = async () => {
        const {data}: any = await getMe()
        if (!Object.keys(data || '').length || data?.email !== 'admin@admin.com') {
          router.push('/')
        }
        if (Object.keys(data || 0).length > 0) {
          dispatch(setUser(data?.email))
        }
    }
    fetchMe()
}, [])

  const {data: orders} = useGetAdminOrderQuery();
  console.log(orders)
  const today = new Date().toISOString().split("T")[0];
  const day = orders?.filter((obj: Order) => obj.createdAt.split("T")[0] === today);

  const { heightMobile } = useDeviceHeight()
  console.log(heightMobile)
  const heightScroll = Number(heightMobile) - 100

 
  const { isMobile } = useDeviceDetect()
  const ordersMap = getObjStatus(orders);
  console.log(ordersMap)
  const [statusActive, setStatusActive] = React.useState(tabMenu[0])
  console.log(ordersMap.get('canceled'))


  return (
    <div>
      <ContainerStyle>
        <Box>
          <Title>Лента заказов</Title>
          <CategoriesTab>
            {
              tabMenu.map((obj, index) => {
                return (
                  <Tab
                    key={index}
                    status={statusActive.id === obj.id}
                    onClick={() => setStatusActive(obj)}
                  >
                    {obj.category}
                  </Tab>
                )
              })
            }
          </CategoriesTab>
          <GridColumn>
            {
              isMobile ?
                (statusActive.category === 'Заказы' ?
                  <div>
                    <OverlayScrollbarsComponent>
                      <BoxOrder heightScroll={heightScroll}>
                        {orders?.map((obj: Order) => {
                          console.log(obj)
                          return (
                            <Link key={obj._id} href={`/feed/${obj._id}`}>
                              <CardOrder orders={obj} status={statusCategories[obj.status]} />
                            </Link>
                          );
                        })}
                      </BoxOrder>
                    </OverlayScrollbarsComponent>
                  </div>
                  : <BoxInfo>
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
                    <GridStatus>
                      <StatusOrder order={ordersMap?.get('closed')} status={tsStatus['closed']} />
                      <StatusOrder order={ordersMap?.get('canceled')} status={tsStatus['canceled']} />
                      <StatusOrder order={ordersMap?.get('handed over to courier')} status={tsStatus['handed over to courier']} />
                    </GridStatus>
                    <CompletedOrder>
                      <BlockThisTime>
                        <TextStatus>Кол-во заказов за все время:</TextStatus>
                        <NumbersOfOrder>{orders?.length}</NumbersOfOrder>
                      </BlockThisTime>
                      <BlockForToday>
                        <TextStatus>Кол-во заказов за сегодня:</TextStatus>
                        <NumbersOfOrder>{day?.length}</NumbersOfOrder>
                      </BlockForToday>
                    </CompletedOrder>
                  </BoxInfo>) :
                <>
                  <div>
                    <OverlayScrollbarsComponent>
                      <BoxOrder heightScroll={heightScroll}>
                        {orders?.map((obj: Order) => {
                          console.log(obj)
                          return (
                            <Link key={obj._id} href={`/feed/${obj._id}`}>
                              <CardOrder orders={obj} status={statusCategories[obj.status]} />
                            </Link>
                          );
                        })}
                      </BoxOrder>
                    </OverlayScrollbarsComponent>
                  </div>
                  <BoxInfo>
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
                    <GridStatus>
                      <StatusOrder order={ordersMap?.get('closed')} status={tsStatus['closed']} />
                      <StatusOrder order={ordersMap?.get('canceled')} status={tsStatus['canceled']} />
                      <StatusOrder order={ordersMap?.get('handed over to courier')} status={tsStatus['handed over to courier']} />
                    </GridStatus>
                    <CompletedOrder>
                      <BlockThisTime>
                        <TextStatus>Кол-во заказов за все время:</TextStatus>
                        <NumbersOfOrder>{orders?.length}</NumbersOfOrder>
                      </BlockThisTime>
                      <BlockForToday>
                        <TextStatus>Кол-во заказов за сегодня:</TextStatus>
                        <NumbersOfOrder>{day?.length}</NumbersOfOrder>
                      </BlockForToday>
                    </CompletedOrder>
                  </BoxInfo>
                </>
            }
          </GridColumn>
        </Box>
      </ContainerStyle>
    </div>
  );
}

export default OrderFeet;


