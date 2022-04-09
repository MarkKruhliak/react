import React from 'react';

import {Layouts} from "./layouts";
import {Home} from "./pages";


const App = () => {
    return (
        <div>
            <Layouts>
                <Home/>
            </Layouts>
        </div>
    );
};

export default App;