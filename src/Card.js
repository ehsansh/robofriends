import React from "react";

const Card = ( {id, name, email} ) => {
    return(
        <div className="tc bg-light-green dib br3 pad3 ma2 grow bw2 shadow-5">
            <img alt="" src={`https://robohash.org/${id}>200x200`} />
            <h2>{name}</h2>
            <p>
                {email}
            </p>
        </div>
    )
}

export default Card;