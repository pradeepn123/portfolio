import { useEffect } from "react";
export default () => {
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const isSticky = (e) => {
        const header = document.querySelector('.header--fixed');
        const scrollTop = window.scrollY;
        scrollTop >= 200 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };
    return (
        <>
            <header className="header--fixed header--sticky">
                <div className="container mx-auto">
                    <div className="main-header flex items-center p-3">
                        <div className="w-3/12">
                            <div className="logo">
                                <a href="index.html">
                                    <img src="./logo-dark.png" alt="logo" />
                                </a>
                            </div>
                        </div>
                        <div className="w-9/12">
                            <nav id="sideNav" className="mainmenu-nav navbar-example2 d-none d-xl-block onepagenav">                        
                                <ul className="primary-menu flex justify-end">
                                    <li className="px-2.5 py-2.5 current">
                                        <a className="px-3 py-2" href="#home">Home</a>
                                    </li>
                                    <li className="px-2.5 py-2.5">
                                        <a className="px-3 py-2" href="#features">Features</a>
                                    </li>
                                    <li className="px-2.5 py-2.5">
                                        <a className="px-3 py-2" href="#portfolio">Portfolio</a>
                                    </li>
                                    <li className="px-2.5 py-2.5">
                                        <a className="px-3 py-2" href="#resume">Resume</a>
                                    </li>                                    
                                    <li className="px-2.5 py-2.5">
                                        <a className="px-3 py-2" href="#blog">blog</a>
                                    </li>
                                    <li className="px-2.5 py-2.5">
                                        <a className="px-3 py-2" href="#contact">Contact</a>
                                    </li>
                                </ul>                        
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}