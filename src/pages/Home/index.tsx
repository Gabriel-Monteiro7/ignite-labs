import Logo from '~/components/Logo'
import Footer from '~/components/Footer'
import Form from './components/Form'

import {
  Container,
  Content,
  Image,
  Title,
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
