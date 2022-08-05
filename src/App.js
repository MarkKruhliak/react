import {getAllUsers, UserService} from "./redux";
import {useDispatch, useSelector} from "react-redux";
import User from "./components/User";
import {useState} from "react";
import UserDetails from "./components/UserDetails";



const App = () => {
    // const [state, setState]= useState([]);
    const {users} = useSelector(state => state.UserReducer);
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

                {users && users.map(value => <User key={value.id} user={value} />)}
                <UserDetails/>

            <div>
                <button onClick={() => dispatch(getAllUsers())}>Apply</button>

            </div>

        </div>
    );
};

export default App;
