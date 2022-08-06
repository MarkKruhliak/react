import {getAllMovies, getAllUsers} from "./redux";
import {useDispatch, useSelector} from "react-redux";

import {AllMovies, Container, User, UserDetails} from "./components";




const App = () => {
    // const [state, setState]= useState([]);
    const {users} = useSelector(state => state.UserReducer);
    const {movies} = useSelector(state => state.MovieReducer)
    const dispatch = useDispatch();


    // const getUser = () => {
    //   UserService.getAll().then(value => setState(value))
    // }

    // const deleteUser = (id) => {
    //   let users = [...state]
    //     users = users.filter(value => value.id !== id)
    //     setState(users)
    // }

    console.log(users)

    return (
        <div>
            <Container/>
            {users && users.map(value => <User key={value.id} user={value}/>)}
            <UserDetails/>


            <button onClick={() => dispatch(getAllUsers())}>Apply</button>

            <div>
                <button onClick={() => dispatch(getAllMovies())}>GetMovies</button>
            </div>

            <div>
                {movies && movies.map(value => <AllMovies key={value.id} movie={value}/>)}
            </div>
        </div>
    );
};

export default App;
