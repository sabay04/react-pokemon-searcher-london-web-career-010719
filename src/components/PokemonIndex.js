import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";
const API = "http://localhost:3000/pokemon";

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    searchTerm: "",
    hiddenPokemonIds: []
  };

  hidePokemon = pokemonId => {
    this.setState({
      hiddenPokemonIds: [...this.state.hiddenPokemonIds, pokemonId]
    });
  };

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(pokemons => this.setState({ pokemons }));
  }

  filterPokemons = () => {
    return this.state.pokemons
      .filter(p => !this.state.hiddenPokemonIds.includes(p.id))
      .filter(p =>
        p.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      );
  };

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  addNewPokemon = pokemon => {
    // this.setState({
    //   pokemons: [...this.state.pokemons, pokemon]
    // });
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pokemon)
    };

    return fetch(API, options)
      .then(resp => resp.json())
      .then(pokemon =>
        this.setState({ pokemons: [...this.state.pokemons, pokemon] })
      );
  };

  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={this.handleChange} showNoResults={false} />
        <br />
        <PokemonCollection
          hidePokemon={this.hidePokemon}
          pokemons={this.filterPokemons()}
        />
        <br />
        <PokemonForm addNewPokemon={this.addNewPokemon} />
      </div>
    );
  }
}

export default PokemonPage;
