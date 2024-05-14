import React from "react";
import { useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

function Movie(props){
    //const [stars, setStars] = useState([]);
    //const Stars = ({count}) => (
      //  Array.from({length: count}).map((_item, index) => <Image src="src/assets/delete.png" index={index} />)
    //)

    function Stars(){
        let arr = [];
        for(let i=0; i<props.item.rating; i++){
            arr.push(<Image src="src/assets/star.png"/>);
        }
        return (
            <>
            {arr.map(input => input)}
            </>
        )
    }
    
    return (
        <>
            <ListGroup.Item>
                { props.item.title }

                <Stars></Stars>
                <Image src="src/assets/delete.png" fluid onClick={() => {props.deleteItem(props.item.id)}}/>
            </ListGroup.Item> 
        </>
        
    )
}

export default Movie