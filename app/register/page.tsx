import FormWrap from '@/app/components/FormWrap'
import Container from '@/app/components/Container'
import RegisterForm from '@/app/register/RegisterForm'

const Page = () => {
  return (
    <Container>
      <FormWrap>
        <RegisterForm />
      </FormWrap>
    </Container>
  )
}

export default Page;