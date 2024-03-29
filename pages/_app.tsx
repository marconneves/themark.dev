import type { AppProps } from 'next/app'

import { ChakraProvider } from "@chakra-ui/react"

import chakraTheme from "../styles/styles"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp
