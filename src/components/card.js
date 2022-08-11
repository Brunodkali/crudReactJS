import React from "react";
import "./card.css";
import FormDialog from "./dialog/dialog";

export default function Card(props) {

    const [open, setOpen]= React.useState(false);

    const HandleClickCard = () =>{
        setOpen(true);
    };

    return (
        <>
        <FormDialog 
        open={open} 
        setOpen={setOpen} 
        nome={props.nome} 
        preco={props.preco}
        categoria={props.categoria}
        listCard={props.listCard}
        setListCard={props.setListCard}
        />
        <div className="card-direction">
            <div className="card-container" onClick={()=> HandleClickCard()}>
                <h1 className="card-title">{props.nome}</h1>
                <p className="card-preco">{props.preco}</p>
                <p className="card-categoria">{props.categoria}</p>
            </div>  
        </div>
        </>
    );
}