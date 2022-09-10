# Hangman Game

This is my attemp at building the hangman game

# 💾 API 💾

I used this random word api http://random-word-api.herokuapp.com/home This is a cool api, it lets you customize what you fetch to a certain extent(lang, length,
how many words). This can be usefull if you want to inplement some game variations

# 🎮THE GAME 🎮

The game came with it's own set of challenges, but nothing you can't solve. Every thing used here is either native JS functions, REACT hooks and some humpf
oil + trial and error. 🤭 What happens? -The game fetchs the random word when you're on the landing page(prevent's loading time when you click play). -You play
the game, the letter you enter triggers some events: Is it already inside the array of good answers or wrong answers? If not is it wrong? If so it goes in the
wrong letters array/spot and one part of the hangman is revealed If it's not wrong it renders in the missing spot. And so on until you win or lose. This is how
I viewed the game, which is why there are 6 game states in the context.

# THOUGHTS

There are probably something I can improve in the futur, more functionalities to add... This was a fun challenge, you can learn a lot by translating games into
an "app".
