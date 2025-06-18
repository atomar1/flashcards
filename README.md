# Web Development Project 2 - Geography Quiz Flashcards

Submitted by: **Ansh Tomar**

This web app: A modern, interactive flashcard application for learning world geography facts. Users can flip cards to reveal answers and navigate through a randomized set of geography questions, each accompanied by relevant images.

Time spent: **4** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed 
  - [x] A short description of the card set is displayed 
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed 
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information 
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards contain images in addition to or in place of text
  - [x] All cards have images in addition to text
- [] Cards have different visual styles such as color based on their category
  - Implemented a clean, modern design with:
    - Subtle geometric pattern background
    - Card flip animations
    - Responsive layout
    - Clear typography and spacing

The following **additional** features are implemented:

* [x] Sequential card tracking - ensures all cards are shown before repeating
* [x] Card counter showing current position in the deck
* [x] Responsive design that works on all screen sizes
* [x] Smooth animations and transitions
* [x] Modern UI with clean typography and spacing

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with [Kap](https://getkap.co/) for macOS

## Notes

Challenges encountered while building the app:
1. Implementing the card flip animation while maintaining image quality
2. Creating a responsive design that works well with both text and images
3. Ensuring the card counter accurately reflects the sequence of shown cards
4. Optimizing image loading and display for better performance

## License

    Copyright [2024] [Ansh Tomar]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.