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
    
    if (friends[id-1].clicked === "true")
    {
      this.score = 0;
      for (var i=0; i<friends.length; i++)
        friends[i].clicked = "false";
    }
    else
    {
      friends[id-1].clicked = "true";
      //friends[id-1].name = "clicked";
      this.score = this.score + 1;
  
      friends.sort(() => Math.random() - 0.5);
      // Set this.state.friends equal to the new friends array
      this.setState({ friends });
    }
    console.log(friends);
  };

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