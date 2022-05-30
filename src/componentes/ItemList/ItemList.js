import React from "react";
import CardItem from "../Item/Item";


function ItemList() {
    return (
        <div className="container">
            <div className="row">
                <h1>
                    Collar para tu perro!
                </h1>
                <div className="col-md-3">
                    <CardItem title={"Collar"} pesos="$800" stock={2} imagen="./collar.jpg"/>
                    
                </div>
                <div className="col-md-3">
                    <CardItem title={"Collar hembra"} pesos="$300" stock={10} imagen="./collar-perro-rosa.jpg"/>
                </div>
                <div className="col-md-3">
                    <CardItem title={"Collar Ac/Dc"} pesos="$500"stock={8} imagen="./collar-perro-rock.jpg"/>
                </div>
                <div className="col-md-3">
                    <CardItem title={"Collar de cuero"} pesos="$500" stock={6} imagen="./collar-perro-cuero.jpg" />
                </div>
            </div>
        </div>
    )
} 
export default ItemList
