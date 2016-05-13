//stateless function
var React = require('react')

function puke(object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
};

function ConfirmBattle(props) {
    if(props.isLoading) {
      return (
        <p> Loading </p>
      )
    }
    else {
      return (
        <div> Confirm Battle: {puke(props)} </div>
      )
    }
}

module.exports = ConfirmBattle;
