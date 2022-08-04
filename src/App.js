import {addUser, deleteUser, UserService} from "./redux";
import {useDispatch, useSelector} from "react-redux";
import User from "./components/User";


const App = () => {
    const selector = useSelector(state => state.UserReducer);
    const dispatch = useDispatch();

    const getter = () => {
      UserService.getAll().then(value => dispatch(addUser(value)))
    }


    const deleteUser = (id) => {


    }

    console.log(selector)

    return (
        <div>

            <div>
                { selector.map(value => <User key={value.id} user={value}/>)}
            </div>

            <div>
                <button onClick={() => getter()}>Apply</button>

            </div>
        </div>
    );
};

export default App;
