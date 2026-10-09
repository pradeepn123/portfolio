import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Headings from "./Headings";

const ContactUs = () => {
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

export default ContactUs;
