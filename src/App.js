import {getAllUsers} from "./redux";
import {useDispatch, useSelector} from "react-redux";
import User from "./components/User";


const App = () => {
    const {users} = useSelector(state => state.UserReducer);
    const dispatch = useDispatch();


    console.log(users)

    return (
        <div>

            <div>
                {users.map(value => <User key={value.id} user={value}/>)}
            </div>

            <div>
                <button onClick={() => dispatch(getAllUsers())}>Apply</button>

            </div>
        </div>
    );
};

export default App;
