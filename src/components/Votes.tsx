import { useState } from "react";
import "./Votes.css";

const Votes = () => {
  const [chocolateVote, setChocolateVote] = useState(0);
  const [vanillaVote, setVanillaVote] = useState(0);
  const [strawberryVote, setStrawberryVote] = useState(0);
  const totalVotes = chocolateVote + vanillaVote + strawberryVote;

  return (
    <div className="Votes">
      <h2>Vote Here</h2>
      <div className="VoteButtonContainer">
        <button onClick={() => setChocolateVote((prev) => prev + 1)}>
          Chocolate
        </button>
        <button onClick={() => setVanillaVote((prev) => prev + 1)}>
          Vanilla
        </button>
        <button onClick={() => setStrawberryVote((prev) => prev + 1)}>
          Strawberry
        </button>
      </div>
      {totalVotes === 0 && <p>No votes yet.</p>}
      <div className="ChocolateVotes">
        <p>
          Chocolate: {chocolateVote}{" "}
          {totalVotes > 0 && (
            <span>{` (${((chocolateVote / totalVotes) * 100).toFixed(
              1
            )}%)`}</span>
          )}
        </p>
        {totalVotes > 0 && (
          <div
            className="GraphBar"
            style={{ width: `${(chocolateVote / totalVotes) * 100}%` }}
          ></div>
        )}
      </div>
      <div className="VanillaVotes">
        <p>
          Vanilla: {vanillaVote}{" "}
          {totalVotes > 0 && (
            <span>{` (${((vanillaVote / totalVotes) * 100).toFixed(
              1
            )}%)`}</span>
          )}
        </p>
        {totalVotes > 0 && (
          <div
            className="GraphBar"
            style={{ width: `${(vanillaVote / totalVotes) * 100}%` }}
          ></div>
        )}
      </div>
      <div className="StrawberryVotes">
        <p>
          Strawberry: {strawberryVote}{" "}
          {totalVotes > 0 && (
            <span>{` (${((strawberryVote / totalVotes) * 100).toFixed(
              1
            )}%)`}</span>
          )}
        </p>
        {totalVotes > 0 && (
          <div
            className="GraphBar"
            style={{ width: `${(strawberryVote / totalVotes) * 100}%` }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default Votes;
