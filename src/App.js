import { Helmet } from 'react-helmet'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1.0'></meta>
        <title>Tech Donut - Portfolio </title>
        <link rel='icon' type='image/png' href='./images/favicon.ico' sizes='16x16' />
      </Helmet>
      <Portfolio />
    </>
  )
}
export default App
