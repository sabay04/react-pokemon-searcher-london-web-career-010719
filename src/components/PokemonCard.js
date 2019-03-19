import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    front: true
  };

  render() {
    const { name, sprites, stats, hidePokemon, id } = this.props;
    return (
      <Card onClick={() => this.setState({ front: !this.state.front })}>
        <div>
          <div className="image">
            <img
              src={this.state.front ? sprites.front : sprites.back}
              alt="oh no!"
            />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />

              {stats.map(stat => {
                if (stat.name === "hp") return stat.value;
              })}
            </span>
          </div>
        </div>
        <button onClick={() => hidePokemon(id)}>Hide</button>
      </Card>
    );
  }
}

export default PokemonCard;
