import {AboutFilm, Container} from "./components";
import { Route, Routes} from "react-router-dom";


const App = () => {


    return (
        <div>

            <Routes>
                <Route path={'/'} element={<Container/>}>
                    <Route path={'about-film'} element={<AboutFilm/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;
