import {addUser, deleteUser, UserService} from "./redux";
import {useDispatch, useSelector} from "react-redux";
import User from "./components/User";
import {useState} from "react";

const App = () => {
    const [users, setUsers] = useState([]);

    const getter = () => {
      UserService.getAll().then(value => setUsers(value))
    }

    const deleteUser = (id) => {

    }

    return (
        <div>

            <div>
                {users && users.map(value => <User key={value.id} user={value} deleteUser={deleteUser}/>)}
            </div>

            <div>
                <button onClick={() => getter()}>Apply</button>

            </div>
        </div>
    );
};

export default App;
