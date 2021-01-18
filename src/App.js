import { Helmet } from 'react-helmet'
import Portfolio from './pages/Portfolio'
import favicon from './assets/images/favicon.ico'

function App() {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1.0'></meta>
        <title>Tech Donut - Portfolio </title>
        <link rel='icon' type='image/png' href={favicon} sizes='16x16' />
      </Helmet>
      <Portfolio />
    </>
  )
}
export default App
