import '../styles/customTheme.scss';
import '../styles/global.css';
import '../styles/animations.css';
import 'react-slideshow-image/dist/styles.css'

export default function MyApp({ Component, pageProps }) {
    return (                
        <Component {...pageProps} />
    );
}