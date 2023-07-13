import React from "react";

interface Props {
    buttonText: string;
    onClick : ()=>void;
}

export const SearchButton = ({buttonText, onClick}:Props)=> {
    return (
        <button onClick={onClick}>{buttonText}</button>
    )

}