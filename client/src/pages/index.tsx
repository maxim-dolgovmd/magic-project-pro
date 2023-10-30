import React from "react";
import styled, { ThemeProvider } from "styled-components";

import Tab from "../components/tabs/tab";
import Ingridient from "../components/ingridient/ingridient";
import PriceImage from '../assets/icon/price.svg'
import Button from "../components/button/button";
import IngredientBurger from '../components/ingridient/ingridientBurger'
import ModalWindow from "../components/modal/modalWindow/modalWindow";
import ModalOrder from "../components/modal/modalOrders/modalOrders";
import Container from "../components/container/container";
import { getCountFromCart } from '../utils/getCountFromCart'
import { device, size } from '../components/device/device'

import { usePostOrderMutation } from '../services/ordersApi'
import { useGetIngridientQuery } from '../services/ingridientsApi'

import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

import { useSelector } from "react-redux";

import useDeviceDetect from "../hooks/useDeviceDetect";
import useDeviceHeight from "../hooks/useDeviceHeight";
import { useRouter } from "next/router";
import LoadingSkeleton from '../components/skeleton/skeleton'

import {
    setActiveOrder,
    setDeleteOrder,
    AddCartSelect,
    IIngredient,
} from "../redux/slices/addCartSlice";
import { useAppDispatch } from "../redux/store";
import { useGetCategoryQuery } from "../services/categoriesApi";
import { useGetMeMutation } from "../services/registrationApi";
import { StorageSelect, ThemeModeSelect, setUser } from "../redux/slices/storageSlice";
import SkeletonCategory from "../components/skeleton/skeletonCaterory";
import { darkTheme, lightTheme } from "../components/theme/theme";

type heightCartType = {
    heightScrollCart: number
}

type categoryType = {
    id: number,
    category: string,
}

type heightType = {
    heightScrollIngr: number
}

type BorderType = {
    borderFirst: boolean,
    borderLast: boolean,
}

type DataGetMe = {
    _id: string
    email: string
    username: string
    createdAt: string
    updatedAt: string
}

interface GetMeType {
    data: DataGetMe
}

const Box = styled.div`
    display: flex;
    flex-direction: column;
`

const TopMargin = styled.div`
  padding: 150px 0 0px 0;
  margin: 0 20px;

    @media ${device.mobileL} {
        margin: 0;
    }
`;

const Title = styled.h1`
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  color: ${({ theme }) => theme.text};
  padding: 0 0 20px 0;

  @media ${device.mobileL} {
    font-size: 28px;
    line-height: 30px;
}
`;

const GridTab = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 0 40px 0;

    @media ${device.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const GridMenu = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  justify-items: center;

    @media ${device.laptop} {
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${device.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const GridColumns = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;

    @media ${device.laptop} {
        grid-template-columns: repeat(1, 1fr);
    }

    @media (max-width: ${size.tablet}) {
        padding-bottom: 80px;
    }
`;

const GridBurger = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-end;
    gap: 16px;
    height: auto;
    ${(props: heightCartType) => {
        return props.heightScrollCart && {
            height: `${props.heightScrollCart}px`
        }
    }};
    @media ${device.laptop} {
        padding: 0 20px;
        height: auto;
    }
`;

const TitleBlock = styled.div`
  color: ${({ theme }) => theme.text};
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;

  @media ${device.laptop} {
    padding-bottom: 16px;
  }
`;

const BoxOrder = styled.div`
  padding-top: 50px;
  display: flex;
  align-items: center;
  gap: 40px;
  justify-content: flex-end;

  @media ${device.laptop} {
    padding: 50px 20px
  }
`;

const BoxSum = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  & > div {
    font-size: 48px;
    font-weight: 400;
    line-height: 36px;
  }

  svg path {
        fill: ${({ theme }) => theme.text};
    }
`;

const HeaderCard = styled.div`
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  color: ${({ theme }) => theme.text};
  padding: 0 0 20px 0px;
`;

const ColumnsIngr = styled.div`
    
`
const ColumnsCart = styled.div`
    @media ${device.tablet} {
        display: none;
    }
`

const ViewOrder = styled.div`
    background-color: ${({ theme }) => theme.backgroundWrapper};
    position: fixed;
    bottom: 0;
    z-index: 20;
    width: 100%;

    @media (min-width: ${size.tablet}) {
        display: none;
    }
`
const ViewSum = styled.div`
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 20px;
    line-height: 18px;
    padding-right: 8px;

    svg path {
        fill: '#fff';
    }
`

const BoxView = styled.div`
    display: flex;
    padding: 16px 0;
    justify-content: center;
    gap: 16px;
`

const ContentContainer = styled(Container)`
    z-index: 3;
    width: 100%;
    flex: 1 1 auto;
`

const ScrollHeight = styled.div`
    height: auto;
    ${(props: heightType) => {
        return props.heightScrollIngr && {
            height: `${props.heightScrollIngr}px`
        }
    }};
    @media ${device.tablet} {
        height: auto;
    }
`

const BoxBorder = styled.div`
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.backgroundCart};
    border-radius: 40px;
    padding: 16px 24px;
    gap: 20px;

    @media (min-width: ${size.tablet}) {
        justify-content: space-around;
        gap: 0;
    }
    

    ${(props: BorderType) => {
        if (props.borderFirst) {
            return props.borderFirst && {
            borderRadius: '88px 88px 40px 40px'
        }
        }
        if (props.borderLast) {
            return props.borderLast && {
            borderRadius: '40px 40px 88px 88px'
        }
        }
    }};

`

const SumProductStyles = styled.div`
    color: ${({ theme }) => theme.ingridientTextBox};
`

const SumModal = styled.div`
    color: #fff;
`

const EmptyCart = styled.div`
    color: ${({ theme }) => theme.ingridientTextBox};
`

const Constructor: React.FC = () => {

    const themeMode = useSelector(ThemeModeSelect)
    console.log(themeMode)
    
    const dispatch = useAppDispatch();
    const { heightMobile } = useDeviceHeight()
    const heightScrollIngr = Number(heightMobile) - 310
    const heightScrollCart = Number(heightMobile) - 415
    const { user } = useSelector(StorageSelect);
    const [getMe] = useGetMeMutation()

    React.useEffect(() => {
        const fetchMe = async () => {
            const { data }: any = await getMe()
            console.log(data)
            if (Object.keys(data || '').length > 0) {
                dispatch(setUser(data?.email))
            }
        }
        fetchMe()
    }, [])

    const router = useRouter()

    const { data: categoriesData, isLoading: loadingCategory } = useGetCategoryQuery()
    const { data: arrayProduct, isLoading: Loading } = useGetIngridientQuery()
    const [createOrder] = usePostOrderMutation()

    console.log(categoriesData)
    const [filterIngr, setFilterIngr] = React.useState({
        id: Number(1),
        category: "Все",
    });

    const { sumProduct, addProduct, activeIngr, activeOrder } = useSelector(AddCartSelect);

    const hasBunds = addProduct?.find((product: IIngredient) => product.category === 'Булки')

    const addMap = (id: number) => {
        return getCountFromCart(addProduct).get(id)
    }

    console.log(addProduct, sumProduct)
    const isProduct = {
        addProduct,
        sumProduct
    }

    const createOrderFunc = () => {
        if (!user) {
            alert('Для создания заказа необходимо авторизоваться')
        } else {
            dispatch(setActiveOrder(true))
            dispatch(setDeleteOrder())
            createOrder(isProduct)
        }
    }


    const arrIngrReduce = arrayProduct?.reduce((acc: IIngredient[], ingredient: IIngredient, index: number) => {
        if (filterIngr?.category === 'Все') {
            acc?.push(ingredient)
        }
        if (ingredient?.category === filterIngr?.category) {
            acc?.push(ingredient)
        }
        return acc
    }, [])

    

    return (
        <ThemeProvider theme={ themeMode === 'light' ? darkTheme : lightTheme}>
            <Box>
                <ContentContainer>
                    <TopMargin>
                        <Title>Соберите бургер</Title>
                        <GridColumns>
                            <ColumnsIngr>
                                <GridTab>
                                    {
                                        loadingCategory ? (
                                            <SkeletonCategory />
                                        ) : (
                                            [...categoriesData?.categories]
                                                ?.sort((a: categoryType, b: categoryType) => a.id - b.id)
                                                ?.map((obj: categoryType, index: number) => {
                                                    return (
                                                        <Tab
                                                            key={index}
                                                            status={filterIngr?.id === obj?.id}
                                                            onClick={() => {
                                                                setFilterIngr(obj);
                                                            }}
                                                        >
                                                            {obj.category}
                                                        </Tab>
                                                    )
                                                })
                                        )
                                    }
                                </GridTab>
                                <OverlayScrollbarsComponent>
                                    <ScrollHeight heightScrollIngr={heightScrollIngr}>
                                        <TitleBlock>{filterIngr?.category}</TitleBlock>
                                        <GridMenu>
                                            {
                                                Loading ? (
                                                    Array(12)
                                                        .fill(0)
                                                        .map((_, index) => <LoadingSkeleton key={index} />)
                                                ) : (
                                                    [...arrIngrReduce]
                                                        ?.sort((a: IIngredient, b: IIngredient) => a.category.localeCompare(b.category))
                                                        ?.map((ingr: IIngredient) => {
                                                            return (
                                                                <Ingridient
                                                                    key={ingr?._id}
                                                                    nameItem={ingr?.name}
                                                                    photo={`http://localhost:5555${ingr?.largePhotoUrl}`}
                                                                    price={ingr?.price}
                                                                    objIngredient={ingr}
                                                                    hasBunds={hasBunds}
                                                                    addMap={addMap(ingr?._id)}
                                                                />
                                                            )
                                                        })
                                                )
                                            }

                                        </GridMenu>
                                    </ScrollHeight>
                                </OverlayScrollbarsComponent>
                            </ColumnsIngr>
                            <ColumnsCart>
                                <HeaderCard>Корзина</HeaderCard>
                                <OverlayScrollbarsComponent>
                                    <GridBurger heightScrollCart={heightScrollCart}>
                                        {addProduct?.length > 0 ? (
                                            // <CardBurger addProduct={addProduct} />
                                            addProduct.map((obj, index) => {
                                                console.log(obj)
                                                return (
                                                
                                                    <BoxBorder 
                                                        borderFirst={index===0 && obj.category === 'Булки'} 
                                                        borderLast={index === addProduct.length-1 && obj.category === 'Булки'}
                                                    >
                                                        <IngredientBurger 
                                                            key={obj._id}
                                                            photo={obj?.mobilePhotoUrl}
                                                            nameItem={obj?.name}
                                                            price={obj?.price}
                                                            index={index}
                                                        /> 
                                                    </BoxBorder>
                                                )
                                            }) 
                                        ) : (
                                            <EmptyCart>Ваша корзина пуста</EmptyCart>
                                        )}
                                    </GridBurger>
                                </OverlayScrollbarsComponent>
                                <BoxOrder>
                                    <BoxSum>
                                        <SumProductStyles>{sumProduct}</SumProductStyles>
                                        <PriceImage />
                                    </BoxSum>
                                    <Button
                                        size="large"
                                        onClick={createOrderFunc}
                                        disabled={addProduct?.length === 0}
                                    >
                                        Оформить заказ
                                    </Button>
                                </BoxOrder>
                            </ColumnsCart>
                            {activeIngr && (
                                <div>
                                    <ModalWindow />
                                </div>
                            )}
                            {activeOrder && (
                                <div >
                                    <ModalOrder />
                                </div>
                            )}
                        </GridColumns>
                    </TopMargin >
                </ContentContainer >
                <ViewOrder>
                    <BoxView>
                        <ViewSum>
                            <SumModal>{sumProduct}</SumModal>
                            <PriceImage />
                        </ViewSum>
                        <Button
                            size="small"
                            onClick={() => {
                                router.push('/cart-order')
                            }}
                            disabled={addProduct?.length === 0}
                        >
                            Смотреть заказ
                        </Button>
                    </BoxView>
                </ViewOrder>
            </Box>
        </ThemeProvider>
    );
};

export default Constructor;
