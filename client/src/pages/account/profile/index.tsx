import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Container from "../../../components/container/container";
import BaseInput from "../../../components/input/baseInput";
import { useForm } from "react-hook-form";
import ButtonComponent from '../../../components/button/button'
import Link from "next/link";
import { device, size } from "@/components/components/device/device";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { StorageSelect, ThemeModeSelect, setUser } from "@/components/redux/slices/storageSlice";
import { useAuthUpdateMutation, useGetMeMutation } from "@/components/services/registrationApi";
import { TokenGetMeFunc } from "@/components/utils/tokenGetMeFunc";
import { darkTheme, lightTheme } from "@/components/components/theme/theme";
import { UpdateActiveSelect, setUpdateActive } from "@/components/redux/slices/windowSlice";
import PopUpWindow from "@/components/components/button/popUpWindow";


const Box = styled.div`
  padding-top: 150px;
  margin: 0 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    padding-top: 100px;
  }
`;

const ButtonBox = styled.div`
  display: grid;
  grid-template-rows: repeat(3);
  padding-bottom: 80px;
`;

type ActiveButton = {
  active?: boolean
}

const Button = styled.div`
  display: flex;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  align-items: center;
  background: ${({ theme }) => theme.buttonProfile};
  padding: 15px 0 15px 0;
  color: #8585ad;

  span:hover {
    cursor: pointer;
    color: ${({theme}) => theme.buttonHoverProfile};
  }

    ${(props: ActiveButton) => {
    return (
      props.active && {
        color: '#64646e'
      }
    );
  }}
`;

const InputBlock = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.div`
  color: #8585ad;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  span:hover {
    color: ${({theme}) => theme.buttonHoverProfile};
  }
`

const ComponentBlock = styled.div`
  display: flex;
  justify-content: flex-end;

  @media ${device.tablet} {
    justify-content: center;
  }
`

const ContentCategory = styled.div`
  display: none;
  @media (min-width: ${size.tablet}) {
      display: block;
  }
`

const TitleCategory = styled.div`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  text-align: center;
  padding-bottom: 24px;

  @media (min-width: ${size.tablet}) {
    display: none;
  }
`

interface DataType {
  loginValue: string,
  passwordUser: string,
  userName: string,
}

const PersonalArea:React.FC = () => {

  const themeMode = useSelector(ThemeModeSelect)
  const updateActive = useSelector(UpdateActiveSelect)
  const dispatch = useDispatch()
  const [authUpdate] = useAuthUpdateMutation()
  const [activeButton, setActiveButton] = React.useState(false)
  const {register,watch, handleSubmit, reset, formState: {errors}, setValue} = useForm<DataType>({mode: 'onBlur'})
  const router = useRouter()
  const {user} = useSelector(StorageSelect)
  const [getMe] = useGetMeMutation()

  // React.useEffect(() => {
  //   if (!localStorage.getItem('token')) {
  //     router.push('/')
  //   }
  // }, [user])

  TokenGetMeFunc()
  
  const onSubmit = async (data: any) => {
    if (window.confirm('Вы действительно хотите обновить данные')) {
      const {data: res}: any = await authUpdate(data)

      if (Object.keys(res || []).length > 0) {
        dispatch(setUpdateActive(true))
        setTimeout(() => {
          dispatch(setUpdateActive(false))
        }, 3000);
      }

      reset()
    }
  }

  const exitTheAccount = () => {
    setActiveButton(true)
    if (window.confirm('Вы действительно хотите выйти с личного кабинета ?')) {
      window.localStorage.removeItem('token')
      dispatch(setUser(''))
      router.push('/')
    }
    
  }

  return (
    <ThemeProvider theme={themeMode === 'light' ? darkTheme : lightTheme}>
      <Container>
        <Box>
          <TitleCategory>
            Профиль
          </TitleCategory>
          <ContentCategory>
            <ButtonBox>
              <Button active={!activeButton} onClick={() => setActiveButton(false)}>
                <span>Профиль </span>
              </Button>
                <Button>
                  <Link href={'/account/order-history'}>
                    <span>История заказов </span>
                  </Link>
                </Button>
              <Button active={activeButton} onClick={exitTheAccount}>
                <span>Выход </span>
              </Button>
            </ButtonBox>
            <Title>
              <span>
                В этом разделе вы можете изменить свои персональные данные{" "}
              </span>
            </Title>
          </ContentCategory>
          <InputBlock onSubmit={handleSubmit(onSubmit)}>
            <BaseInput 
              label={"Имя"}
              setValue={setValue}
              error={errors.userName?.message}
              register={{
                ...register('userName', {
                  required: 'Введите свое Имя',
                })
              }}
              valueField={watch('userName')} type={""}          />
            <BaseInput 
              label={"Логин"}
              setValue={setValue}
              error={errors.loginValue?.message}
              register={{
                ...register('loginValue', {
                  required: 'Введите логин ', minLength: {
                    value: 5,
                    message: 'Минимум 5 символов'
                  },
                })
              }}
              valueField={watch('loginValue')} type={""}          />
            <BaseInput 
              label={"Пароль"} 
              type="password" 
              setValue={setValue}
              error={errors.passwordUser?.message} 
              register={{...register('passwordUser', {required: 'Введите пароль', minLength: {
                value: 8,
                message: 'Минимум 8 символов'
              },})}}
              valueField={watch('passwordUser')}
            />
            <ComponentBlock >
              <ButtonComponent type='submit' size='medium'>Сохранить</ButtonComponent>
            </ComponentBlock>
          </InputBlock>
          {
            updateActive && <PopUpWindow text={'Данные профиля изменены'}/>
          }
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default PersonalArea;
