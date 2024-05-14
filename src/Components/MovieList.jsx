import React, {useState, useRef, useEffect} from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Movie from "./Movie";

function MovieList() {
    const [movies, setMovies] = useState([
      
    ]);

    const [movieId, setMovieId] = useState({
        id: 0
    });

    const titleInputRef = useRef();
    const ratingInputRef = useRef();

    useEffect(() => {
        console.log(movies);
      }, [movies]);

    function addMovie(event){
        if(titleInputRef.current.value == '' || ratingInputRef.current.value == 0){
            alert("Du måste ange en titel och ett betyg");
            
        } else {
            //const id = movies.length > 0 ? movies[movies.length-1] + 1 : 1;
            setMovieId({
                id: movieId.id+1
            });

            setMovies([...movies, {
                    id: movieId.id,
                    title: titleInputRef.current.value,
                    rating: ratingInputRef.current.value
            }]);

            console.log(titleInputRef.current.value);
            
            titleInputRef.current.value ="";
            ratingInputRef.current.value="0";
        }

       
    }
    

    function deleteMovie(id){
        setMovies(movies.filter((item) => item.id !== id));
    }

    function sortMovieByAlphabet(){
        const newMovieItems = [...movies];
        newMovieItems.sort((a, b) => a.title.localeCompare(b.title));
        setMovies(newMovieItems, console.log(movies));
    }

    function sortMovieByRating(){
        const newMovieItems = [...movies];
        newMovieItems.sort((a, b) => a.rating.localeCompare(b.rating));
        setMovies(newMovieItems, console.log(movies));
    }

    return (
        <>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Titel</Form.Label>
                        <Form.Control type="email" placeholder="Skriv in titel här..." ref={titleInputRef}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Betyg</Form.Label>
                        <Form.Select aria-label="Default select example" ref={ratingInputRef}>
                            <option value="0">Välj betyg här..</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
                <div className="d-grid gap-2">
                    <Button variant="success" size="nd" onClick={addMovie}>
                        Spara film
                    </Button>
                </div>
                <hr />
                <h3>Filmer</h3>
                <ListGroup>
                    { movies.map(movie => <Movie key={movie.id} item={movie} deleteItem={deleteMovie} />)}
                </ListGroup>
                <Button variant="primary" onClick={sortMovieByAlphabet}>Alfabetisk ordning</Button>
                <Button variant="primary" onClick={sortMovieByRating}>Betyg ordning</Button>
            </div>
        </>
    )
}

export default MovieList