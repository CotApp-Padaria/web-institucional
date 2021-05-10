import '../styles/customTheme.scss';
import '../styles/global.css';
import '../styles/animations.css';
import 'react-slideshow-image/dist/styles.css'
import { ThemeProvider } from '@material-ui/styles';
import theme from '../styles/theme';

export default function MyApp({ Component, pageProps }) {
    return (         
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}