import { Slide } from 'react-slideshow-image';
import Celular from './celular';
import Computer from './computer';
import styles from './index.module.css';
import Tablet from './tablet';

export default function Features() {     

    const props = {
        indicators: true
    }

    return (
        
        <section id="features" className="pb-5">
            
            <Slide {...props} easing="ease">
                <div className={`${styles.eachSlide} pb-5 `}>
                    <Celular />
                </div>
                <div className={`row ${styles.eachSlide}`}>
                    <Computer />
                </div>
                <div className={`row ${styles.eachSlide}`}>
                    <Tablet />
                </div>
            </Slide>            

        </section>

    )

}