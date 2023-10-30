import { IIngredient, StatusType } from "@/components/redux/slices/addCartSlice";
import React from "react";
import styled from "styled-components";

interface Order {
  _id: string;
  createdAt: string;
  name: string;
  price: number;
  status: StatusType;
  ingredients: IIngredient[];
}

type PropsOrderType = {
  active: boolean
}

const ReadiOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${(props: PropsOrderType) => {
    return props.active && {
      display: 'none'
    }
  }};
`;

const TextStatus = styled.div`
  color: ${({ theme }) => theme.feedStaticOrderStatus};
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
`;

const ReadyStatus = styled.ul`
  color: #00cccc;
  font-weight: 400;
  font-size: 28px;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`


type StatusTypeProps = {
  order: Order[],
  status: string,
}

const StatusOrder: React.FC<StatusTypeProps> = (props) => {
    console.log(props)
    const array = props?.order
    const numberId = props?.order?.[0]?._id?.slice(-4)
    return (
        <ReadiOrder active={!props?.order}>
            <TextStatus>{props.status}:</TextStatus>
            <ReadyStatus>
                {
                  array?.map((obj) => {
                    return (
                      <Box>{obj._id.slice(-4)}</Box>
                    )
                  })
                }
            </ReadyStatus>
        </ReadiOrder>
    )
}

export default StatusOrder;
