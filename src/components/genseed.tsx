import React from 'react';

class GenSeed extends React.Component {

  genSeed = async () => {

  }

  componentDidMount = () => {
    console.log("Generating Seed")
  }

  render () {
    return (
      <div>
        Generating Seed
        <button onClick={() => {this.genSeed()}}>Genseeed</button>
      </div>
    );
  }
}
  
export default GenSeed;