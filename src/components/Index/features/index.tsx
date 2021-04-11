import { Slide } from 'react-slideshow-image';
import Celular from './celular';
import Computer from './computer';
import styles from './index.module.css';
import Tablet from './tablet';

export default function Features() {     

    return (
        
        <section id="features">
            
            <Slide easing="ease">
                <div className={`${styles.eachSlide}`}>
                    <Celular />
                </div>
                <div className={`${styles.eachSlide}`}>
                    <Computer />
                </div>
                <div className={`${styles.eachSlide}`}>
                    <Tablet />
                </div>
            </Slide>            

        </section>

    )

}