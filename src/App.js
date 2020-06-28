import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import md5 from "md5";
import Comics from "./components/comics";
import Comic from "./components/comic";
import logo from "./resources/marvel.jpg";
import "./App.scss";

class App extends Component {
    state = {
        filteredComics: [],
        comics: [],
        inputValue: "",
        inputHidden: true,
        showWindowPortal: false,
    };

    componentDidMount() {
        var ts = new Date().getTime();
        var hash = md5(ts + process.env.REACT_APP_PRIVATE_KEY + process.env.REACT_APP_PUBLIC_KEY);

        fetch(`https://gateway.marvel.com:443/v1/public/comics?apikey=${process.env.REACT_APP_PUBLIC_KEY}&ts=${ts}&hash=${hash}`)
            .then((response) => response.json())
            .then((json) => {
                this.setState({
                    comics: json.data.results,
                    filteredComics: json.data.results,
                });
            })
            .catch(console.log);
    }

    render() {
        return (
            <div>
                <div className="header">
                    <img src={logo} alt="marvel" width="200" />
                    <span> COMICS</span>
                </div>
                <Router>
                    <Switch>
                        <Route path="/comic/:comicId" component={Comic}>
                            <Comic />
                        </Route>
                        <Route path="/comic">
                            <h3>Please select a comic.</h3>
                        </Route>
                        <Route path="/">
                            <Comics
                                filteredComics={this.state.filteredComics}
                                inputValue={this.state.inputValue}
                                onSearchCharacter={this.onSearchCharacter}
                                inputHidden={this.state.inputHidden}
                                toggleClass={this.toggleClass}
                                toggleWindowPortal={this.toggleWindowPortal}
                                showWindowPortal={this.state.showWindowPortal}
                            />
                        </Route>
                    </Switch>
                </Router>
                <div>
                    Data provided by Marvel. © 2014 Marvel
                </div>
            </div>
        );
    }

    toggleClass = () => {
        console.log("toggle", this.state.inputHidden);
        this.setState({ inputHidden: !this.state.inputHidden });
    };

    onSearchCharacter = (event) => {
        let searchKey = event.target.value;
        this.setState({ inputValue: searchKey });

        if (searchKey.length === 0) {
            this.setState({ filteredComics: this.state.comics });
        } else {
            this.setState({
                filteredComics: this.state.comics.filter((comic) => {
                    if (comic.characters.items.find((character) => character.name.toLowerCase().includes(searchKey.toLowerCase()))) {
                        return comic;
                    }
                    return null;
                }),
            });
        }
    };
}
export default App;
