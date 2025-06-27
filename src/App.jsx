import React, { useState } from 'react';
import Card from './components/Card';
import './App.css';

const App = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [guess, setGuess] = useState('');
    const [feedback, setFeedback] = useState('');
    const [isFlipped, setIsFlipped] = useState(false);
    const [hasGuessed, setHasGuessed] = useState(false);

    const cardSet = {
        title: "World Geography Quiz",
        description: "Test your knowledge of world geography with these interesting facts!",
        cards: [
            { 
                front: "What is the largest desert in the world?", 
                back: "Antarctic Desert",
                image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=60"
            },
            { 
                front: "Which country has the most natural lakes?", 
                back: "Canada",
                image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&auto=format&fit=crop&q=60"
            },
            { 
                front: "What is the longest mountain range in the world?", 
                back: "The Andes",
                image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&auto=format&fit=crop&q=60"
            },
            { 
                front: "Which country has the most time zones?", 
                back: "France (12 time zones)",
                image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop&q=60"
            },
            { 
                front: "What is the deepest ocean trench in the world?", 
                back: "Mariana Trench",
                image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60"
            },
            { 
                front: "Which country has the most volcanoes?", 
                back: "Indonesia",
                image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&auto=format&fit=crop&q=60"
            },
            { 
                front: "What is the largest island in the Mediterranean Sea?", 
                back: "Sicily",
                image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800&auto=format&fit=crop&q=60"
            },
            { 
                front: "Which country has the most rivers?", 
                back: "Brazil",
                image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&auto=format&fit=crop&q=60"
            },
            { 
                front: "What is the highest waterfall in the world?", 
                back: "Angel Falls, Venezuela",
                image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&auto=format&fit=crop&q=60"
            },
            { 
                front: "Which country has the most UNESCO World Heritage Sites?", 
                back: "Italy",
                image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&auto=format&fit=crop&q=60"
            }
        ]
    };

    const handleGuessChange = (e) => {
        setGuess(e.target.value);
    };

    const handleGuessSubmit = (e) => {
        e.preventDefault();
        setHasGuessed(true);
        const answer = cardSet.cards[currentCardIndex].back.trim().toLowerCase();
        if (guess.trim().toLowerCase() === answer) {
            setFeedback('Correct!');
            setIsFlipped(true);
        } else {
            setFeedback('Incorrect. Try again or view the answer.');
        }
    };

    const handleFlip = () => {
        if (hasGuessed) {
            setIsFlipped(!isFlipped);
        }
    };

    const handleNextCard = () => {
        if (currentCardIndex < cardSet.cards.length - 1) {
            setCurrentCardIndex(currentCardIndex + 1);
            setGuess('');
            setFeedback('');
            setIsFlipped(false);
            setHasGuessed(false);
        }
    };

    const handlePrevCard = () => {
        if (currentCardIndex > 0) {
            setCurrentCardIndex(currentCardIndex - 1);
            setGuess('');
            setFeedback('');
            setIsFlipped(false);
            setHasGuessed(false);
        }
    };

    return (
        <div className="app">
            <header>
                <h1>{cardSet.title}</h1>
                <p>{cardSet.description}</p>
                <div className="card-counter">
                    Card {currentCardIndex + 1} of {cardSet.cards.length}
                </div>
            </header>
            <main>
                <Card
                    front={cardSet.cards[currentCardIndex].front}
                    back={cardSet.cards[currentCardIndex].back}
                    image={cardSet.cards[currentCardIndex].image}
                    isFlipped={isFlipped}
                    onFlip={hasGuessed ? handleFlip : undefined}
                    feedback={feedback}
                />
                <form className="guess-form" onSubmit={handleGuessSubmit}>
                    <label htmlFor="guess-input">Your Guess:</label>
                    <input
                        id="guess-input"
                        type="text"
                        value={guess}
                        onChange={handleGuessChange}
                        disabled={isFlipped}
                        autoComplete="off"
                    />
                    <button type="submit" disabled={isFlipped || !guess.trim()}>
                        Submit
                    </button>
                </form>
                {feedback && (
                    <div className={`feedback ${feedback === 'Correct!' ? 'correct' : 'incorrect'}`}>{feedback}</div>
                )}
                <div className="navigation-buttons">
                    <button
                        onClick={handlePrevCard}
                        disabled={currentCardIndex === 0}
                        className={currentCardIndex === 0 ? 'nav-disabled' : ''}
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNextCard}
                        disabled={currentCardIndex === cardSet.cards.length - 1}
                        className={currentCardIndex === cardSet.cards.length - 1 ? 'nav-disabled' : ''}
                    >
                        Next
                    </button>
                </div>
            </main>
        </div>
    );
};

export default App;