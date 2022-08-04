import {addUser, deleteUser, UserService} from "./redux";
import {useDispatch, useSelector} from "react-redux";
import User from "./components/User";

const App = () => {
    const {users} = useSelector(state => state.UserReducer);
    const dispatch = useDispatch();
    const getter = () => {
        UserService.getAll().then(value => dispatch(addUser({data: value})))
    }
    console.log(users)

    const deleter = () => {

    }

    return (
        <div>

            <div>
                {users && users.map(value => <User key={value.id} user={value}/>)}
            </div>

            <div>
                <button onClick={() => getter()}>Apply</button>

            </div>
        </div>
    );
};

export default App;
