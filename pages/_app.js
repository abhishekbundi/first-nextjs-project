import Layout from '../components/Layout'
import '../components/css/style.css'
function MyApp({ Component, pageProps }) {
    return (
        <Layout>
          <Component {...pageProps} />  
        </Layout>
    )
  }
  export default MyApp
