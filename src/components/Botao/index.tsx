import React from "react";
import style from './Botao.module.scss';

class Botao extends React.Component<{
    //?: significa que é uma prop opcional
    type?: "button" | "submit" | "reset" | undefined
}> {
    render() {
        //se o tipo não for especificado, será o tipo button
        const { type = "button" } = this.props; 
        return (
            <button type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;