

export const Button1 = ({Number,isSelect,onClick}) =>{

    return <button onClick={onClick}
    className={` w-10 gap-8 h-10 translate-y-5 shadow-md hover:bg-black hover:text-white ${isSelect? "bg-black text-white" : "bg-white text-black" }`}>{Number}</button>
}
