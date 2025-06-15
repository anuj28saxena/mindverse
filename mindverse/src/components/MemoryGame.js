import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
// import "../styles/memorygame.css"; // Ensure this CSS exists

const emojis = ["🐶", "🐱", "🦊", "🐼", "🐵", "🐸", "🐷", "🦁"];

const generateShuffledDeck = () => {
  const deck = [...emojis, ...emojis]
    .map((emoji, i) => ({
      id: i + "-" + emoji,
      emoji,
      flipped: false,
      matched: false,
    }))
    .sort(() => Math.random() - 0.5);
  return deck;
};


const MemoryGame = () => {
    const [deck, setDeck] = useState(generateShuffledDeck());
    const [selected, setSelected] = useState([]);
    const [hasWon, setHasWon] = useState(false);

    const [moves, setMoves] = useState(0);
    const [timer, setTimer] = useState(0);
    const [isTiming, setIsTiming] = useState(false);

    const [bestTime, setBestTime] = useState(
    localStorage.getItem("bestTime") ? parseInt(localStorage.getItem("bestTime")) : null
    );
    const [bestMoves, setBestMoves] = useState(
    localStorage.getItem("bestMoves") ? parseInt(localStorage.getItem("bestMoves")) : null
    );

  useEffect(() => {
    if (selected.length === 2) {
      const [firstIndex, secondIndex] = selected;
      const firstCard = deck[firstIndex];
      const secondCard = deck[secondIndex];

      if (firstCard.emoji === secondCard.emoji) {
        const newDeck = deck.map((card, i) =>
          i === firstIndex || i === secondIndex ? { ...card, matched: true } : card
        );
        setDeck(newDeck);
        setSelected([]);
      } else {
        setTimeout(() => {
          const newDeck = deck.map((card, i) =>
            i === firstIndex || i === secondIndex ? { ...card, flipped: false } : card
          );
          setDeck(newDeck);
          setSelected([]);
        }, 800);
      }
    }
  }, [selected]);

  useEffect(() => {
    if (deck.every((card) => card.matched)) {
        setHasWon(true);
        setIsTiming(false);

        // Save best time
        if (bestTime === null || timer < bestTime) {
        localStorage.setItem("bestTime", timer);
        setBestTime(timer);
        }

        // Save best moves
        if (bestMoves === null || moves < bestMoves) {
        localStorage.setItem("bestMoves", moves);
        setBestMoves(moves);
        }
    }
    }, [deck]);


  useEffect(() => {
    let interval;
    if (isTiming) {
        interval = setInterval(() => {
        setTimer((prev) => prev + 1);
        }, 1000);
    }
    return () => clearInterval(interval);
    }, [isTiming]);


  const handleCardClick = (index) => {
    if (!isTiming) setIsTiming(true);

    if (selected.length === 1) {
     setMoves((prev) => prev + 1);
    }

    if (deck[index].flipped || deck[index].matched || selected.length === 2) return;

    const newDeck = deck.map((card, i) =>
      i === index ? { ...card, flipped: true } : card
    );
    setDeck(newDeck);
    setSelected((prev) => [...prev, index]);
  };

  const resetGame = () => {
    setDeck(generateShuffledDeck());
    setSelected([]);
    setHasWon(false);
    setMoves(0);
    setTimer(0);
    setIsTiming(false);
  };

  return (
    <div className="memory-container">
      
      <h2>🧩 Memory Game</h2>
      {hasWon ? <p className="win-message">🎉 You Won! 🎉</p> : <p>Find all matching pairs!</p>}
      <div className="stats">
        <div className="time_and_moves">
        <p>Time: {timer}s</p>
        <p>Moves: {moves}</p>
        {bestTime !== null && <p>Best Time: {bestTime}s</p>}
        {bestMoves !== null && <p>Best Moves: {bestMoves}</p>}
        </div>

       

        <button className="clear_btn" onClick={() => {
            localStorage.removeItem("bestTime");
            localStorage.removeItem("bestMoves");
            setBestTime(null);
            setBestMoves(null);
            }}>
            Clear Best Scores
        </button>
      </div>
        {hasWon && (
        <p className="win-message">🎉 You Won in {moves} moves and {timer} seconds!</p>
        )}
      <div className="memory-grid">
        {deck.map((card, index) => (
         <div
            key={card.id}
            className={`memory-card ${card.flipped || card.matched ? "flipped" : ""}`}
            onClick={() => handleCardClick(index)}
            >
            <div className="card-inner">
                <div className="card-front">❓</div>
                <div className="card-back">{card.emoji}</div>
            </div>
            </div>

        ))}
      </div>
      <button onClick={resetGame} className="reset-btn">Restart</button>
    </div>
  );
};

export default MemoryGame;
