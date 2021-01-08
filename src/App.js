import './App.css';
import { Helmet } from 'react-helmet';
import Container from './layout/Container';

function App() {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1.0'></meta>
        <title>Tech Donut</title>
      </Helmet>
      <Container/>
    </>
  );
}
export default App;
