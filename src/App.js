import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {

  score = 0;

  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  findFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    //const friends =v this.state.friends.filter(friend => friend.id !== id);
    
    for (var i=0; i<friends.length; i++)
    {
      if (id === friends[i].id)
      {
        if (friends[i].clicked === "true")
        {
          this.score = 0;
          for (var j=0; j<friends.length; j++)
            friends[j].clicked = "false";
        }
        else
        {
          friends[i].clicked = "true";
          this.score = this.score + 1;
        }
      }
    }
    friends.sort(() => Math.random() - 0.5);
    this.setState({ friends });
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>ClickyGame - Score {this.score}</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            findFriend={this.findFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;