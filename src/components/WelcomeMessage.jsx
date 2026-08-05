const WelcomeMessage = ({ onGetPostsClick }) => {
  return (
    <center className="welcome-message">
      <h2>There are no Posts</h2>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onGetPostsClick}
      >
        Click Here for Posts from server
      </button>
    </center>
  );
};

export default WelcomeMessage;
