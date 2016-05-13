var React = require('react');
var PropTypes = React.PropTypes;

// functional stateless components
function Prompt(props) {
  return (
    <div>
      <h1>{props.header}</h1>
      <div>
        <form onSubmit={props.onSubmitUser}>
          <div>
            <input
              onChange={props.onUpdateUser}
              placeholder="Username"
              type="text"
              value={props.username} />
          </div>
          <div>
            <button
              type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// Makes the header prop required in the PromptContainer component
Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
}

module.exports = Prompt;
