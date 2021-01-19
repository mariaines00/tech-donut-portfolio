import { Helmet, HelmetProvider } from 'react-helmet-async'
import Portfolio from './pages/Portfolio'
import favicon from './assets/images/favicon.ico'

function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width,initial-scale=1.0'></meta>
          <title>Tech Donut - Portfolio </title>
          <link rel='icon' type='image/png' href={favicon} sizes='16x16' />
        </Helmet>
      </HelmetProvider>
      <Portfolio />
    </>
  )
}
export default App
