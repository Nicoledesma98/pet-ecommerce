import React from "react";
import CardItem from "../Card/Card";


function ItemListContainer() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <CardItem title={"Collar de perro"} pesos="$800" stock={2}/>
                </div>
                <div className="col-md-3">
                    <CardItem title={"Collar de gato"} pesos="$300" stock={10}/>
                </div>
                <div className="col-md-3">
                    <CardItem title={"Pretal para perro"} pesos="$500"stock={8}/>
                </div>
                <div className="col-md-3">
                    <CardItem title={"Pretal para gato"} pesos="$500" stock={6} />
                </div>
            </div>
        </div>
    )
} 
export default ItemListContainer