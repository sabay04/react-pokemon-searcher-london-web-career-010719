import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

class PokemonCollection extends React.Component {
  render() {
    console.log(this.props);
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.pokemons.map(pokemon => (
          <PokemonCard
            key={pokemon.id}
            {...pokemon}
            hidePokemon={this.props.hidePokemon}
          />
        ))}
      </Card.Group>
    );
  }
}

export default PokemonCollection;
