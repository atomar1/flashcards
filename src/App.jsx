import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import './App.css';

const App = () => {
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [usedIndices, setUsedIndices] = useState(new Set());
    
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

    const handleNextCard = () => {
        setUsedIndices(prev => new Set([...prev, currentCardIndex]));

        if (usedIndices.size === cardSet.cards.length - 1) {
            setUsedIndices(new Set());
        }

        const availableIndices = cardSet.cards
            .map((_, index) => index)
            .filter(index => !usedIndices.has(index));

        const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
        setCurrentCardIndex(randomIndex);
    };

    return (
        <div className="app">
            <header>
                <h1>{cardSet.title}</h1>
                <p>{cardSet.description}</p>
                <div className="card-counter">
                    Card {usedIndices.size + 1} of {cardSet.cards.length}
                </div>
            </header>
            
            <main>
                <Card 
                    front={cardSet.cards[currentCardIndex].front}
                    back={cardSet.cards[currentCardIndex].back}
                    image={cardSet.cards[currentCardIndex].image}
                />
                <button onClick={handleNextCard} className="next-button">
                    Next Question
                </button>
            </main>
        </div>
    );
};

export default App;