import React from "react";
import CardItem from "./Card";
function Cards() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <CardItem title={"Collar de perro"} pesos="$800"/>
                </div>
                <div className="col-md-3">
                    <CardItem title={"Collar de gato"} pesos="$300"/>
                </div>
                <div className="col-md-3">
                    <CardItem title={"Pretal para perro"} pesos="$500" />
                </div>
                <div className="col-md-3">
                    <CardItem title={"Pretal para gato"} pesos="$500" />
                </div>
            </div>
        </div>
    )
} 
export default Cards