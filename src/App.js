import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Context from "./Context/Context";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import ListForm from "./Components/ListForm/ListForm";
import CategoriesPage from "./Components/CategoriesPage/CategoriesPage";
import EditList from "./Components/EditList/EditList";
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import Register from "./Components/Register/Register";

import GroceryList from "./Components/GroceryList/GroceryList";
import listData from "./listData";
import config from "./config";
import TokenService from "./Services/token-service";

class App extends React.Component {
  state = {
    categories: listData.categories,
    user: {
      userName: "",
      user_id: "",
    },
  };

  componentDidMount() {
    // fetch(`${config.API_ENDPOINT}/lists`)
    // .then((res) => res.json())
    // .then((lists) => this.setState({lists}))

    if(TokenService.hasAuthToken()) {
      this.init()
    }
  }

  init = () => {
    const {user_id} = TokenService.readJwtToken()
    fetch(`${config.REACT_APP_API_BASE_URL}/lists/all/${user_id}`, {
      method: 'GET',
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      }
    })
    .then(res => {
      if (!res.ok) {
        return res.json().then((error) => Promise.reject(error));
      }
      return res.json();
    }).then(lists => {
        this.initializeList(lists)
    })
}

  

  

  setUser = (user) => {
    this.setState({
      user: {
        username: user.sub,
        user_id: user.user_id,
      },
    });
  };

  initializeList = (lists) => {
    this.setState({
      lists: lists,
    });
  };

  createList = (list) => {
    this.setState({
      lists: [...this.state.lists, list],
    });
  };

  deleteList = (listid) => {
    let newLists = this.state.lists.filter((list) => list.id !== listid);
    this.setState({
      lists: newLists,
    });
  };

  /* unable to update list */

  updateList = (editList) => {
    this.setState({
      lists: this.state.lists.map((list) =>
        list.id !== editList.id ? list : editList
      ),
    });
  };

  render() {
    let contextValue = {
      lists: this.state.lists,
      categories: this.state.categories,
      user: this.state.user,
      // setLoggedInUserLists: this.setLoggedInUserLists,
      setUser: this.setUser,
      // setCategories: this.setCategories,
      handleLogout: this.handleLogout,
      toggleComplete: this.toggleComplete,
      createList: this.createList,
      deleteList: this.deleteList,
      updateList: this.updateList,
      initializeList: this.initializeList
    };
    return (
      <Context.Provider value={contextValue}>
        <ErrorPage>
          <div className="App">
            <Route path="/" component={Navbar} />

           
            <Route exact path="/login" component={Login} />

            <Route
              exact
              path={["/add-list", "/add-list/:category"]}
              component={ListForm}
            />
            <Route exact path="/register" component={Register} />
            <Route
              exact
              path="/grocery-list-categories"
              component={CategoriesPage}
            />
            <main>
              <div className="main-lists">
                <Route
                  exact
                  path={[
                    "/grocery-lists",
                    "/grocery-lists/:id",
                    "/completed-lists",
                    "/completed-lists/:id",
                  ]}
                  render={(props) => <GroceryList {...props} checked={false} />}
                />
                <Route
                  exact
                  path={[
                    "/grocery-lists",
                    "/grocery-lists/:id",
                    "/completed-lists",
                    "/completed-lists/:id",
                  ]}
                  render={(props) => <GroceryList {...props} checked={true} />}
                />
              </div>
              <Route exact path="/edit-lists/:id" component={EditList} />
              <Route exact path="/" component={Features} />
            </main>

            <Route path="/" component={Footer} />
          </div>
        </ErrorPage>
      </Context.Provider>
    );
  }
}

export default App;
