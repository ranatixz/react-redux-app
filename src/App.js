import React from "react";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./store/store";
import HookCakeContainer from "./components/HookCakeContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserListContainer from "./components/UserListContainer";
import TodoContainer from "./components/TodoContainer";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <h1>Map State to Props</h1>
                <ItemContainer cake />
                <ItemContainer />
                <h1>using connect</h1>
                <CakeContainer />
                <h1>using hooks with react redux</h1>
                <HookCakeContainer />
                <h1>using payload</h1>
                <NewCakeContainer />
                <h1>USER LIST</h1>
                <UserListContainer />
                <h1>TODO</h1>
                <TodoContainer />
            </div>
        </Provider>
    );
}

export default App;
