

export const Button = ({ disabled, children, onClick }) => {

    return <span onClick={onClick}
        className={`cursor-pointer px-10 py-2 text-white text-xl ${disabled ? "bg-green-500" : "bg-red-500"}  rounded-xl`} >
        {children}
    </span>
}