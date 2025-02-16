import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import { ContactFormData } from '../app/actions/contact'

interface ContactNotificationEmailProps {
  data: ContactFormData
}

export default function ContactNotificationEmail({ data }: ContactNotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Nueva consulta desde El Buchén</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Nueva Consulta - El Buchén</Heading>
          <Text style={text}>Has recibido una nueva consulta desde el sitio web:</Text>

          <Section style={section}>
            <Text style={label}>Nombre:</Text>
            <Text style={value}>{data.name}</Text>

            <Text style={label}>Email:</Text>
            <Text style={value}>{data.email}</Text>

            {data.phone && (
              <>
                <Text style={label}>Teléfono:</Text>
                <Text style={value}>{data.phone}</Text>
              </>
            )}

            <Text style={label}>Mensaje:</Text>
            <Text style={value}>{data.message}</Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            Este es un email automático enviado desde el formulario de contacto de El Buchén.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

// Styles
const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '580px',
}

const h1 = {
  color: '#1B4332',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '30px 0',
  padding: '0',
}

const section = {
  padding: '24px',
  border: 'solid 1px #dedede',
  borderRadius: '5px',
  margin: '20px 0',
}

const label = {
  color: '#666',
  fontSize: '12px',
  fontWeight: 'bold',
  textTransform: 'uppercase' as const,
  margin: '16px 0 4px',
}

const value = {
  color: '#1B4332',
  fontSize: '14px',
  margin: '0 0 10px',
}

const text = {
  color: '#333',
  fontSize: '14px',
  margin: '24px 0',
}

const footer = {
  color: '#898989',
  fontSize: '12px',
  margin: '24px 0',
}

const hr = {
  borderColor: '#dedede',
  margin: '20px 0',
}
