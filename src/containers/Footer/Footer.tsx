import { FC, FormEvent, useState } from 'react';
import { images } from '../../assets/images';
import { AppWrap, MotionWrap } from '../../wrappers';
import { client } from '../../services/client';
import './Footer.scss';

const Footer: FC = () => {
    const [formData, setFormData] = useState({ username: '', email: '', message: '' });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { username, email, message } = formData;

    const handleChangeInput = (e: FormEvent<HTMLInputElement> | FormEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target as HTMLInputElement;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        if (username.trim() && email.trim() && message.trim()) {
            e.preventDefault();
            setLoading(true);

            const contact = {
                _type: 'contact',
                name: formData.username,
                email: formData.email,
                message: formData.message,
            };

            client.create(contact)
                .then(() => {
                    setLoading(false);
                    setIsFormSubmitted(true);
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <>
            <h2 className='head-text'>Take a coffee & chat with me</h2>

            <div className='app__footer-cards'>
                <div className='app__footer-card '>
                    <img src={images.email} alt='email' />
                    <a href='mailto:mamed.gasymov@gmail.com' className='p-text'>mamed.gasymov@gmail.com</a>
                </div>
            </div>
            {!isFormSubmitted ? (
                <form className='app__footer-form app__flex' onSubmit={handleSubmit}>
                    <div className='app__flex'>
                        <input
                            className='p-text'
                            type='text'
                            placeholder='Your Name'
                            name='username'
                            value={username}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className='app__flex'>
                        <input
                            className='p-text'
                            type='email'
                            placeholder='Your Email'
                            name='email'
                            value={email}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div>
                        <textarea
                            className='p-text'
                            placeholder='Your Message'
                            value={message}
                            name='message'
                            onChange={handleChangeInput}
                        />
                    </div>
                    <button
                        type='submit'
                        className='p-text'
                        disabled={loading}
                    >
                        {!loading ? 'Send Message' : 'Sending...'}
                    </button>
                </form>
            ) : (
                <div>
                    <h3 className='head-text'>
                        Thank you for getting in touch!
                    </h3>
                </div>
            )}
        </>
    );
};

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg',
);