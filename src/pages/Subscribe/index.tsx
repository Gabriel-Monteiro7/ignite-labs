import Logo from '~/components/Logo'
import Footer from '~/components/Footer'
import Form from './components/Form'

import {
  Container,
  Content,
  Image,
  Title,
  Description,
  ColorfulTitle,
  LeftContent,
  RightContent
} from './styles'

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <LeftContent>
            <Logo />
            <Title>
              Construa uma <ColorfulTitle>aplicação completa</ColorfulTitle>, do
              zero, com
              <ColorfulTitle>React JS</ColorfulTitle>
            </Title>
            <Description>
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais utilizadas e com alta demanda para acessar as
              melhores oportunidades do mercado.
            </Description>
          </LeftContent>
          <RightContent>
            <Form />
          </RightContent>
        </Content>
        <Image />
      </Container>
      <Footer />
    </>
  )
}

export default Home
