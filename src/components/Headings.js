export default ({ title, subtitle }) => {
    return (
        <div className="section-title text-left px-4 md:px-10 xl:px-28">
            <span className="subtitle">{subtitle}</span>
            <h2 className="title">{title}</h2>
        </div>
    )
}