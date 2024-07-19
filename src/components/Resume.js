import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Headings from './Headings';
import ProgressBar from "@ramonak/react-progress-bar";

export default ({ resumedata }) => {
    console.log(resumedata, 'resumedata');

    return (
        <>
            <div className='my-resume-sec pb-20' id='resume'>
                <div className='container mx-auto'>
                    <Headings title='My Resume' subtitle='8+ YEARS OF EXPERIENCE' />
                    <div className='xl:px-24 mt-10'>
                        <Tabs>
                            <TabList className='flex custom-tab-list'>
                                <Tab className='basis-1/4 text-center'>
                                    <a href='javascript:void(0)' className='nav-link'>education</a>
                                </Tab>
                                <Tab className='basis-1/4 text-center'>
                                    <a href='javascript:void(0)' className='nav-link'>professional Skills</a>
                                </Tab>
                                <Tab className='basis-1/4 text-center'>
                                    <a href='javascript:void(0)' className='nav-link'>experience</a>
                                </Tab>
                                <Tab className='basis-1/4 text-center'>
                                    <a href='javascript:void(0)' className='nav-link'>interview</a>
                                </Tab>
                            </TabList>

                            {resumedata.map((data, index) => (
                                <TabPanel key={index}>
                                    <div className={`mt-10 ${data.maincontent.some(section => section.resumeinfo) ? 'personal-experience-inner' : ''} ${data.maincontent.some(section => section.professionalskills) ? 'tab-professionalskills' : ''}`}>
                                        <div className='content-info flex'>
                                            {data.maincontent.map((section, sectionIndex) => (
                                                <div key={sectionIndex} className={`${data.maincontent.some(section => section.resumeinfo) ? 'w-1/2 px-3' : ''} ${data.maincontent.some(section => section.professionalskills) ? 'w-full' : ''}`}>
                                                    {section.resumeinfo ? (
                                                        <div className=''>
                                                            <span className='subtitle text-sm font-medium'>{section.year}</span>
                                                            <h4 className='maintitle font-bold text-4xl text-[#1E2125] mb-5'>{section.heading}</h4>
                                                            <div className='experience-list'>
                                                                {section.resumeinfo.map((item, itemIndex) => (
                                                                    <div className='resume-single-list' key={itemIndex}>
                                                                        <div className='resume-inner-info'>
                                                                            <div className='heading flex items-center mb-5 pb-5 justify-between'>
                                                                                <div className='title mb-4'>
                                                                                    <h4 className='text-2xl font-medium text-[#1e2125]'>{item.title}</h4>
                                                                                    <span className='text-sm block text-[#3c3e41]'>{item.university}</span>
                                                                                </div>
                                                                                <div className='date-of-time'>
                                                                                    <span>{item.rating}</span>
                                                                                </div>
                                                                            </div>
                                                                            <p className='description'>{item.content}</p>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ) : section.professionalskills ? (
                                                        <div className=''>
                                                            {/* <span className='subtitle text-sm font-medium'>{section.year}</span>
                                                            <h4 className='maintitle font-bold text-4xl text-[#1E2125] mb-5'>{section.heading}</h4> */}
                                                            <div className='professional-list flex'>
                                                                {section.professionalskills.map((skill, skillIndex) => (
                                                                    <div className='resume-single-list w-1/2 px-3' key={skillIndex}>
                                                                        <div className='resume-inner-info progress-wrapper'>
                                                                            <div className='heading flex items-center mb-5 justify-between'>
                                                                                <div className='title-info'>
                                                                                    <span className='subtitle text-sm block text-[#3c3e41]'>{skill.subtitle}</span>
                                                                                    <h4 className='maintitle text-2xl font-medium text-[#1e2125]'>{skill.title}</h4>
                                                                                </div>
                                                                            </div>
                                                                            <div className='skill-content'>
                                                                                {skill.skillsinfo.map((skillItem, skillItemIndex) => (
                                                                                    <div className='skill-single-item' key={skillItemIndex}>
                                                                                        <div className='skill-title'>{skillItem.content}</div>                                                                                        
                                                                                        <ProgressBar 
                                                                                            completed={skillItem.rating} 
                                                                                            transitionDuration={1} 
                                                                                            transitionTimingFunction={'ease-in-out'}
                                                                                            height={14}
                                                                                            labelAlignment={'center'}
                                                                                            animateOnRender='true'
                                                                                            
                                                                                        />
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div>No content available</div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </TabPanel>
                            ))}
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    );
};
