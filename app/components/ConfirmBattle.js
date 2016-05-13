//stateless function
var React = require('react')
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;

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
        <div>
          <h1>Confirm Players</h1>
          <div>
            <h3>Player 1</h3>
            {puke(props.playersInfo[0])}
          </div>

          <div>
            <h3>Player 1</h3>
            {puke(props.playersInfo[1])}
          </div>

          <div>
            <button
              onClick={props.onInitiateBattle}
              type="button">
              INITIATE BATTLE
            </button>
          </div>
          <div>
            <Link to='/playerOne'>
              <button type='button' >Reselect Players</button>
            </Link>
          </div>
        </div>
      )
    }
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;
