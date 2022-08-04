import {getAllUsers, UserService} from "./redux";
import {useDispatch, useSelector} from "react-redux";
import User from "./components/User";
import {useState} from "react";


const App = () => {
    const [state, setState]= useState([]);
    // const {users} = useSelector(state => state.UserReducer);
    // const dispatch = useDispatch();


    const getUser = () => {
      UserService.getAll().then(value => setState(value))
    }

    const deleteUser = (id) => {
      let users = [...state]
        users = users.filter(value => value.id !== id)
        setState(users)
    }

    console.log(state)

    return (
        <div>

            <div>
                {state && state.map(value => <User key={value.id} user={value} deleteUser={deleteUser}/>)}
            </div>

            <div>
                <button onClick={() => getUser()}>Apply</button>

            </div>
        </div>
    );
};

export default App;
