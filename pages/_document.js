import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}
	render() {
		return (
			<Html>
			<Head>
			<link rel = "stylesheet"  
			href = "https://fonts.googleapis.com/icon?family=Material+Icons"/>  
			<link rel = "stylesheet"  
			href = "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.3/css/materialize.min.css"/>  
			<link href='https://fonts.googleapis.com/css?family=Cinzel Decorative' rel='stylesheet'/>
			</Head>
			<body>
			<Main />
			<NextScript />
			<script type = "text/javascript" src = "https://code.jquery.com/jquery-2.1.1.min.js">  
			</script>             
			<script src = "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.3/js/materialize.min.js">  
			</script>               
			</body>
			</Html>
			)
		}
	}
	export default MyDocument