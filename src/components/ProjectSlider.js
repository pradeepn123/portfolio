import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Headings from "./Headings";
import Modal from "./Modal";

const ProjectCarousel = ({ projectdata }) => {
    const modal = useRef();
    const [selectedProject, setSelectedProject] = useState(projectdata[0]);

    // function handleModalPopup(project) {
    //     setSelectedProject(project);
    //     modal.current.open();
    // }

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <button className="slide-arrow next-arrow slick-arrow" onClick={onClick}>
                <img className={className} src="./icons/arrow-right.svg" alt="" style={{ ...style }} />
            </button>
        );
    }

    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <button className="slide-arrow prev-arrow slick-arrow" onClick={onClick}>
                <img className={className} src="./icons/arrow-left.svg" alt="" style={{ ...style }} />
            </button>
        );
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        adaptiveHeight: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                    arrows: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    arrows: false,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: true,
                },
            },
        ],
    };

    return (
        <>
            <div className="project-carousel pb-20" id="portfolio">
                <div className="container mx-auto">
                    <Headings title="Recent Projects" subtitle="my work" />
                    <div className="xl:px-24 mt-10">
                        <div className="slider-container">
                            <Slider {...settings}>
                                {projectdata.map((item, index) => (
                                    <div className="px-4" key={index}>
                                        <div className="project-portfolio mb-5 p-6 text-left relative">
                                            <div className="inner-wrapper">
                                                <div className="thumbnail-image">                                                    
                                                    <button className="block rounded-lg overflow-hidden w-full">
                                                        <a href={item.weblink} target="_blank">
                                                            <img
                                                                className="object-cover w-full h-96"
                                                                src={item.image}
                                                                alt="Personal Portfolio"
                                                            />
                                                        </a>
                                                    </button>
                                                </div>
                                                <div className="content-info pt-4">
                                                    <div className="category-info pb-2.5 flex justify-between">
                                                        <div className="category-list flex flex-wrap items-center">
                                                            <span className="uppercase block text-xs font-medium">
                                                                {item.tag}
                                                            </span>
                                                        </div>
                                                        <div className="meta-description">
                                                            <span className="font-medium text-xs flex items-center">
                                                                <img src="./icons/heart.svg" alt="" className="mr-2 w-3" />
                                                                {item.likes}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <a href={item.weblink} target="_blank">
                                                        <h4 className="title">
                                                            <div className="font-semibold text-2xl">
                                                                {item.title}
                                                                <img src="./icons/arrow-up-right.svg" alt="" />
                                                            </div>
                                                        </h4>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            {selectedProject && (
                <Modal ref={modal} buttonCaption="Okay">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="flex items-center gap-4">
                                    <div className="w-3/6">
                                        <div className="portfolio-popup-thumbnail">
                                            <div className="image">
                                                <img className="w-100 rounded-lg h-96 w-full object-cover" src={selectedProject.image} alt="slide" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-3/6">
                                        <div className="modal-text-content">
                                            <h3 className="font-bold text-3xl mb-5">
                                                <span className="text-base font-medium block mb-1">{selectedProject.tag}</span>
                                                {selectedProject.title}
                                            </h3>
                                            <p className="text-base mb-4">{selectedProject.description1}</p>
                                            <p className="text-base mb-4">{selectedProject.description2}</p>
                                            <div className="button-group mt-5">
                                                <a href="#" className="rn-btn">
                                                    <span>VIEW PROJECT</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right">
                                                        <polyline points="9 18 15 12 9 6"></polyline>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
        </>
    );
};

export default ProjectCarousel;
