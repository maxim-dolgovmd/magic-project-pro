import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import IngridientOrder from "../ingridient/ingridientOrder";
import CloseImg from '../../assets/icon/close.svg'

import { IIngredient, StatusType, setActiveIngr } from "@/components/redux/slices/addCartSlice";
import { device, size } from "../device/device";
import PriceImg from '../../assets/icon/price.svg'
import { darkTheme, lightTheme } from "../theme/theme";
import { useSelector } from "react-redux";
import { ThemeModeSelect } from "@/components/redux/slices/storageSlice";

const startDate = new Date('2023-01-01');
const endDate = new Date('2023-12-31');

function generateRandomDate(start: Date, end: Date) {
  const startTime = start.getTime();
  const endTime = end.getTime();
  const randomTime = startTime + Math.random() * (endTime - startTime);
  return ''+new Date(randomTime);
}



const BlockOrder = styled.div`
  display: flex;
  flex-direction: column;
  width: 640px;
  >div {
    color: ${({theme}) => theme.dinamicPathTitle}
  }

  @media ${device.tablet} {
    width: 100%;
    padding: 16px;
  }

  @media ${device.mobileL} {
      padding: 4px;
    }
`;

const TimeOrder = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #8585ad;
`;

const PriceSum = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  svg path {
    fill: ${({ theme }) => theme.dinamicPathTitle}
  }
`;

const Price = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  padding-left: 20px;
`;

const Identificator = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
`;

const BlockStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding-top: 40px;
  padding-bottom: 60px;
`;

const StatusTitle = styled.div`
  font-weight: 700;
  font-size: 28px;
  line-height: 30px;
`;

const Status = styled.div`
  color: #00cccc;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const CompoundBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 40px;
  max-width: 100%;
`;

const CompoundTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
`;

const BoxCompound = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 24px;
  gap: 16px;
  height: 300px;

  @media ${device.tablet} {
    padding: 0px;
  }
`;

const BoxTime = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleIngr = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #F2F2F3;
    /* padding-bottom: 150px; */

    @media (min-width: ${size.tablet}) {
        display: none;
    }

    @media ${device.mobileL} {
      padding-bottom: 10px;
    }
`

const Title = styled.div`
    font-weight: 700;
    font-size: 32px;
    line-height: 35px;
    display: flex;
    align-items: center;
    text-align: center;

    @media ${device.mobileL} {
      font-weight: 700;
      font-size: 24px;
      line-height: 30px;
    }
`

const CloseIngr = styled.div`
  cursor: pointer;
  @media ${device.mobileL} {
    padding-right: 16px;
  }
  svg path {
    fill: ${({theme}) => theme.menuClose}
  }
`

type IdNumberType = {
  id: string,
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

interface ModalType {
  order: Order,
  closedModal: () => void,
  status: StatusType
}

const DinamickPath: React.FC<ModalType> = (props) => {

  console.log(props)
  const themeMode = useSelector(ThemeModeSelect)
  const orderObject = props?.order
  console.log(orderObject)
  const dateAfter = orderObject?.createdAt.split('T')[1].split('.')[0].replaceAll('-', ',')
  const dateBefore  =orderObject?.createdAt.split('T')[0].replaceAll('-', '.').split('.').reverse().join('.')
  const dateOrder = `${dateBefore}, ${dateAfter}`
  
  const numberId = orderObject?._id?.slice(-4)

  return (
    <ThemeProvider theme={themeMode === 'light' ? darkTheme : lightTheme}>
    <BlockOrder>
      <TitleIngr>
        {/* <Title>Детали ингредиента</Title> */}
        <CloseIngr onClick={props?.closedModal}>
          <CloseImg/>
        </CloseIngr>
      </TitleIngr>
      <Identificator># {numberId}</Identificator>
      <BlockStatus>
        <StatusTitle>{orderObject?.name}</StatusTitle>
        <Status>{props?.status}</Status>
      </BlockStatus>
      <CompoundBlock>
        <CompoundTitle>Состав:</CompoundTitle>
        <OverlayScrollbarsComponent>
          <BoxCompound>
            {orderObject?.ingredients?.map((obj: IIngredient) => {
              return (
                <>
                  <IngridientOrder
                    photo={obj.previewPhotoUrl}
                    price={obj.price}
                    nameItem={obj.name}
                    quantity={obj.quantity}
                  />
                </>
              );
            })}
          </BoxCompound>
        </OverlayScrollbarsComponent>
      </CompoundBlock>
      <BoxTime>
        <TimeOrder>
          {dateOrder}
        </TimeOrder>
        <PriceSum>
          <Price>{orderObject?.price}</Price>
          <PriceImg/>
        </PriceSum>
      </BoxTime>
    </BlockOrder>
    </ThemeProvider>
  );
};

export default DinamickPath;










