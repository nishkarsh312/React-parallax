import React from 'react';
import { FaDatabase, FaFacebook, 
         FaAsterisk, FaAccusoft, 
         FaTwitter, FaGithub } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">
                <div className="content">
                    <div className="col-1">
                            <h1>Data to enrich your</h1>
                            <h1><span className='primary-color'>Online Business</span></h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quod error architecto non alias, commodi labore ratione nihil adipisci, eaque ducimus delectus et. Cum ad eaque esse ut obcaecati modi quos sit voluptate quae, et tempora a possimus at non minima saepe, pariatur veritatis illum voluptates voluptatibus facere officia provident.</p>
                        <div className="used-by">
                            <p>USED BY :</p>
                            <div className="icons">
                                <span><FaDatabase /> Straxx</span><br />
                                <span><FaAsterisk /> Star AI</span><br />
                                <span><FaAccusoft /> Accusoft</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="form-layout">
                            <div className="form-container">
                                <p className='sign-in-txt'>Sign in with</p>
                                <div className='social-login'>
                                    <span><FaFacebook size={20}/></span>
                                    <span><FaTwitter size={20}/></span>
                                    <span><FaGithub  size={20}/></span>
                                </div>
                                <div className='divider'>
                                    <p><span>Or</span></p>
                                </div>
                                <form>
                                    <input type='text' placeholder='Name'/>
                                    <input type='email' placeholder='Email'/>
                                    <input type='password' placeholder='Password'/>
                                    <button>Create Your Account</button>
                                </form>
                            </div>
                            <div className="form-footer">
                                <p>
                                    By signing up, you agree to our
                                    <span className='primary-color'> Terms, Data Policy and </span><span className='primary-color'>Cookies Policy</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;