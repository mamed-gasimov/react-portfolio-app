import { FC, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client, urlFor } from '../../services/client';
import { AboutType } from './types';
import { AppWrap, MotionWrap } from '../../wrappers';
import './About.scss';

const About: FC = () => {
    const [abouts, setAbouts] = useState<AboutType[]>([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query)
            .then((data) => {
                setAbouts(data as AboutType[]);
            })
            .catch(e => console.log('Error in About container', e));
    }, []);

    return (
        <div className='app__about-container'>
            <h2 className='head-text head-text-about'>
                I Know that <span>Good Design</span> <br />means  <span>Good Business</span>
            </h2>
            <div className='app__profiles'>
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className='app__profile-item'
                        key={about.title + index}
                    >
                        <img src={String(urlFor(about.imgUrl))} alt={about.title} />
                        <h2 className='bold-text'>{about.title}</h2>
                        <p className='p-text'>{about.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default AppWrap(
    MotionWrap(About, 'app_about'),
    'about',
    'app__whitebg',
);