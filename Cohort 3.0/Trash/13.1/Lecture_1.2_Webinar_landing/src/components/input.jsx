


export const Input = ({ type, placeholder, onClick }) => {

    return <span onClick={onClick}
        className='px-2 py-2  text-white text-xl bg-gray-500 rounded-xl'>
        <input type={type} placeholder={placeholder}
            className="pl-2 bg-gray-400 rounded-md"
        />
    </span>
}