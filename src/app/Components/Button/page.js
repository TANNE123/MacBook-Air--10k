

const ButtonCompoent= ({style,text,icon})=>{
    return(
        <button className={style}>{icon}{text}</button>
    )
}

export default ButtonCompoent;