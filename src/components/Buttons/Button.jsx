const Button = (props) => {
    return (
        <button className="bg-gray-900 hover:bg-slate-600 text-white font-bold py-2 px-4 m-2 rounded" onClick={props.func}>
            {props.text}
        </button>
    )
}

export default Button;