import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Headings from "./Headings";

export default () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_286zwza', 'template_pjnzkdh', form.current, 'owd4-jRec29il6zJL')
            .then((result) => {
                alert('Message sent successfully!');
            }, (error) => {
                alert('Failed to send the message, please try again.');
            });
    };

    return (
        <>
            <div className='contact-us-sec pb-20' id='contact'>
                <div className='container mx-auto'>
                    <Headings title='Let’s Discuss Your Project' subtitle='Contact' />
                    <div className='xl:px-24 mt-10'>
                        <div className="flex">
                            <div className="w-5/12 px-4">
                                <div className="contact-about-area p-7">
                                    <div className="thumbnail">
                                        <img src="images/contact.jpg" alt="contact-img" />
                                    </div>
                                    <div className="title-area mb-4">
                                        <h4 className="title mb-2 text-3xl color-[#1e2125] font-bold">Pradeepkumar Neginhal</h4>
                                        <span className="text-lg">Senior Front-End Developer</span>
                                    </div>
                                    <div className="description mb-5">
                                        <p className="text-lg font-normal mb-5">"If the right project comes along, I'm available for freelance work. Feel free to get in touch!"</p>
                                        <span className="phone block text-lg">Phone: <a href="tel:7411501872">+91-7411501872</a></span>
                                        <span className="mail block text-lg">Email: <a href="mailto:pradeepkumar.neginhal@gmail.com">pradeepkumar.neginhal@gmail.com</a></span>
                                    </div>
                                    <div className="social-area">
                                        <div className="name color-[#1e2125] mb-2 text-sm font-medium">FIND WITH ME</div>
                                        <div className="social-icone mt-6 flex">
                                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-7/12 px-4">
                                <div className="contact-form-wrapper p-6 py-8">
                                    <div className="introduce flex justify-between">
                                        <form className="rnt-contact-form rwt-dynamic-form flex flex-wrap" ref={form} onSubmit={sendEmail}>
                                            <div className="w-1/2 px-4">
                                                <div className="form-group mb-5">
                                                    <label htmlFor="contact-name">Your Name</label>
                                                    <input className="form-control form-control-lg" name="name" id="contact-name" type="text" />
                                                </div>
                                            </div>

                                            <div className="w-1/2 px-4">
                                                <div className="form-group mb-5">
                                                    <label htmlFor="contact-phone">Phone Number</label>
                                                    <input className="form-control" name="phone" id="contact-phone" type="text" />
                                                </div>
                                            </div>

                                            <div className="w-full px-4">
                                                <div className="form-group mb-5">
                                                    <label htmlFor="contact-email">Email</label>
                                                    <input className="form-control form-control-sm" id="contact-email" name="email" type="email" />
                                                </div>
                                            </div>

                                            <div className="w-full px-4">
                                                <div className="form-group mb-5">
                                                    <label htmlFor="subject">Subject</label>
                                                    <input className="form-control form-control-sm" id="subject" name="subject" type="text" />
                                                </div>
                                            </div>

                                            <div className="w-full px-4">
                                                <div className="form-group mb-5">
                                                    <label htmlFor="contact-message">Your Message</label>
                                                    <textarea name="message" id="contact-message" cols="30" rows="10"></textarea>
                                                </div>
                                            </div>

                                            <div className="w-full px-4">
                                                <button name="submit" type="submit" id="submit" className="rn-btn">
                                                    <span>SEND MESSAGE</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
