import { GetServerSideProps } from 'next'
import axios from '../configs/api'

export default function Slug() {
  return <div />
}

export const getServerSideProps: GetServerSideProps = async context => {
  const url = await axios.get(`/get-original-url/${context.params?.slug}`)

  if (url.data) {
    return {
      redirect: {
        destination: url.data.originalUrl,
        permanent: false,
      },
    }
  } else {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
}

