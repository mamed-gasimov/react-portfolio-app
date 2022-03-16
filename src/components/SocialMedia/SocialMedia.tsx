import { FC } from 'react';
import { FaGithub } from 'react-icons/fa';

const SocialMedia: FC = () => {
    return (
        <div className='app__social'>
            <div>
                <a href='https://github.com/mamed-gasimov' target='_blank' rel="noreferrer">
                    <FaGithub />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia;