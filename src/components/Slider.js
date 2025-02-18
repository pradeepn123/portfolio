import { TypeAnimation } from 'react-type-animation';

export default () => {
    return (
        <>
            <div className="slider main-slider-sec pb-20" id="home">
                <div className="container mx-auto">
                    <div className="flex items-center xl:px-20 gap-y-10 flex-col-reverse sm:gap-y-0 md:flex-row relative">
                        <div className="w-full sm:w-7/12 px-4 md:px-8">
                            <div className="content text-left">
                                <div className="inner">
                                    <span className="subtitle rounded mb-5 uppercase text-sm font-medium">Welcome to my world</span>
                                    <h1 className="title font-bold">Hi, I’m <span>Pradeep Neginhal</span><br/>
                                        <span className="header-caption" id="page-top">                                            
                                            <span className="cd-headline clip is-full-width">
                                                <span>a </span>                                             
                                                <TypeAnimation
                                                    sequence={[                                                        
                                                        'Developer.',
                                                        1000, 
                                                        'Professional Coder.',
                                                        1000,
                                                        'Developer.',
                                                        1000
                                                    ]}
                                                    wrapper="span"
                                                    speed={10}
                                                    className='cd-words-wrapper'                                                    
                                                    style={{ fontSize: '1em', display: 'inline-block' }}
                                                    repeat={Infinity}
                                                />
                                            </span>                                     
                                        </span>
                                    </h1>
                                    <div>
                                        <p className="description text-base">
                                            Experienced and versatile web developer with 8 years of hands-on
                                            experience in designing, developing, and maintaining cutting-edge web
                                            applications.
                                        </p>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                        <div className="w-full md:w-5/12 px-4 sm:px-8">
                            <div className="image-thumbnail">
                                <div className="inner">
                                    <img src="pradeep.png" alt="Personal Portfolio Image" />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

