export default ({children, ...props}) => {
    return(
        <button className="px-4 py-2 text-xs md:text-base rounded-md text-stone-400 hover:text-stone-100"
        {...props}>
            {children}
        </button>
    )
}