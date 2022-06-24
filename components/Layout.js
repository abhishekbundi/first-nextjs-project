import Header from "./Header";
import Footer from "./Footer";
import Head from 'next/head'
const layout=({children})=>{
    return(
        <>
        <Head>
  <title>JAIPUR CART</title>
        </Head>
        <Header />    
         {children}
        <Footer />
        </>
    )
}

export default layout