import Headings from "./Headings"

export default ({ data }) => {

    return (
        <>
            <div className="rn-service-area pb-20" id="features">
                <div className="container mx-auto">                    
                    <Headings title="What I Do" subtitle="Features" />
                    <div className="flex flex-wrap items-center px-4 xl:px-24">
                        {data.map((item, index) => (
                            <div className="w-full sm:w-1/2 xl:w-1/3 md:px-5 mt-10" key={index}>
                                <div className="rn-service text-left">
                                    <div className="inner">
                                        <div className="icon mb-7">
                                            <div dangerouslySetInnerHTML={{ __html: item.icon }}></div>
                                        </div>
                                        <div className="content">
                                            <h4 className="title"><a href="#">{item.title}</a></h4>
                                            <p className="description">{item.description}</p>
                                            <a className="read-more-button" href="#" dangerouslySetInnerHTML={{ __html: item.arrow }}></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>  
        </>
    )
}