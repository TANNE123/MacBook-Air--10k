

const ButtonCompoent= ({style,text,icon})=>{
    return(
        <button className={style} data-aos="zoom-in">{icon}{text}</button>
    )
}

export default ButtonCompoent;