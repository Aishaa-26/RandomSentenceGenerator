document.querySelector("#generate").addEventListener("click", () => {
  generate();
});

generate = () => {
  var myData = {
    //replicate the data make another
    "1-Random":
      "In the aftermath of my tooth extraction, I have returned home  ~ Hinglish meaning of this line  : mere daant nikaalane ke baad, main ghar laut aaya hoon ",
    "Flexibility of the word FUCK 😂":
      "Sexual: Let's fuck.  Mischief: Let's fuck with them.  Aggression: Let's fuck them up.  Anger: Fuck you.    Regret: Fuck me!     Resignation: Oh, fuck it     Surprise: Holy fuck!    Puzzlement: What the fuck?     Greeting: How the fuck are you?      Fraud: I got fucked over.          Identification: Who the fuck are you?     Philosophical: Who gives a fuck?     Compliment: She's so fucking beautiful.    Confusion: Where the fuck are we?     Wonder: What the fuck is that?     Amazement: How the fuck did he do that?           Threat: Don't fuck with me!             Realization: I fucking knew it!",
    "1-Ig: The Knowledge Spreader":
      "Keep it down  ~ Hinglish meaning of this line  : Thoda kam shor Machao ",
    "2-Ig: The Knowledge Spreader":
      "Latch/bolt the door  ~ Hinglish meaning of this line  : Kundi laga do ",
    "3-Ig: The Knowledge Spreader":
      "Make your bed  ~ Hinglish meaning of this line  : Bistar sahi karo ",
    "4-Ig: The Knowledge Spreader":
      "This is no brainer  ~ Hinglish meaning of this line  : Isme Zyada Dimag Lagane ki Zaroorat Nahi hai ",
    "5-Ig: The Knowledge Spreader":
      "I've had anough of you  ~ Hinglish meaning of this line  : Mai tumhe bohot jhel chuki hun ",
    "6-Ig: The Knowledge Spreader": "Asthma  ~ Pronounce  : Az-Ma ",
    "7-Ig: The Knowledge Spreader": "Breakfast  ~ Pronounce  : Break-fst ",
    "8-Ig: The Knowledge Spreader": "Dessert  ~ Pronounce  : Di-Zuhrt ",
    "9-Ig: The Knowledge Spreader": "Jewellery  ~ Pronounce  : Jool-Ri ",
    "10-Ig: The Knowledge Spreader": "Tomorrow  ~ Pronounce  : To-Maw-ro ",
    "2-Random ": "Cynophile ~ A person who loves dogs , Dog lover 🐕",
    "3-Random ": "Musicophile ~ One who loves music 🎸",
    "4-Random ": "Autophile ~ A person who loves being alone. 😔",
    "5-Random ": "Dendrophile ~ A person who loves trees 🌴",
    "6-Random ": "Hodophile ~ One who loves to travel ✈️",
    "7-Random ": "Thalassophile ~ Someone who loves the sea 🌊",
    "8-Random ": "Selenophile ~ a person who loves the moon 🌚",
    "9-Random ": "Astrophile ~ One who loves stars or astronomy 🚀",
    "1-Ocean English Academy":
      "Thank you for showering me with a lot of love ~ Hinglish meaning of this line  : Mere upar itna sara payar barsane k liye bohot sukriya app sabhika😘💕",
    "2-Ocean English Academy":
      "This is what I did ~ Hinglish meaning of this line  : Jo maine kiya tha 🙂",
    "3-Ocean English Academy":
      "I just need to make sure ~ Hinglish meaning of this line  : mujhe bas yah sunishchit karane kee zaroorat hai 🙄",
    "4-Ocean English Academy":
      "I do mean it,In real life ~ Hinglish meaning of this line  : mera matalab hai, vaastavik jeevan mein 😒",
    "5-Ocean English Academy":
      "I don't want to bombard with you lots of motivation ~ Hinglish meaning of this line  : main aapake saath dher saaree preranaon kee bauchhaar nahin karana chaahata 😁",
    "6-Ocean English Academy":
      "This is what I did ~ Hinglish meaning of this line  : Jo maine kiya tha 🙂",
    "7-Ocean English Academy":
      "May/Could I speak to Subham ? / If you confirm - Is this subham I'm talking to? ~ Hinglish meaning of this line  : Keya mai subham se baad kar sakhta hun ? 🤙",
    "8-Ocean English Academy":
      "Yes this is he.Please tell me how could I be of help ?~ Hinglish meaning of this line  : haan yah vahee hai.krpaya mujhe batao ki main kaise madad kar sakata hoon? 🤔",
    "9-Ocean English Academy":
      "The reason I am calling is to........ ~ Hinglish meaning of this line  : Maine jis liye call kiya wo hai 🙂",
    "10-Ocean English Academy":
      "Just a quick call to update you that today's meeting has been called off ~ Hinglish meaning of this line  : aapako apadet karane ke lie bas ek tvarit kol ki aaj kee baithak ko band kar diya gaya hai🙂",
    "10-Random ": "skeptical ~ an attitude of doubt 🤔",
    "11-Random ":
      "I just took a year off.The love of fitness never fades ~ mainne abhee ek saal kee chhuttee lee hai.fitness ka pyaar kabhee kam nahin hota 💪",
    "12-Random ": " I'll confront him  ~ main usaka saamana karoonga 💪 ",
    "13-Random ":
      "Love is unconditional when you can bolster that person through ETERNITY!",
    "14-Random ": "very weird  ~ Bizzare 🦉 ",
    "15-Random ": "Iron ~ Pronounce : Ion 😸",
    "16-Random ":
      "Touch wood ! ~ Hinglish meaning of this word : khi nazar n lge 🌚 ",
    "17-Random ":
      "Many-Many happy returns of the day ! ~ Hinglish meaning of this line  : Bhagwan kre yeh din bar bar aaye ! 🙂",
    "18-Random ":
      "I screwed up ~  Hinglish meaning of this line  : It's my mistake.🙄",
    "20-Random ":
      "Blow your own trumpet ~ to talk about oneself or one's achievements especially in a way that shows that one is proud or too proud He had a very successful year and has every right to blow his own trumpet. 😎",
    "21-Random ":
      "blow your own horn ~  to talk about oneself or one's achievements especially in a way that shows pride or too much pride We've had a very successful year, and I think we have a right to blow our own horn a little.😎",
    "22-Random ":
      "blow the whistle ~ you report them to the authorities about illegal or immoral things that they may have done 😡",
    "23-Random ":
      "When the pigs fly ~  used to say that one thinks that something will never happen.😮‍💨",
    "24-Random ":
      "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "25-Random ":
      "Aaj mere paas gaadi hai, bungla hai, paisa hai... tumhare paas kya hai? Mere paas, mere paas... Maa hai ~ English Meaning : A Mother is the most priced possession ",
    "26-Random ":
      "Don't put all your eggs in one basket ~ Meaning : In stock market, don't put all your money in one company's stocks as you may lose it, if that company gors bankrupt",
    "27-Random ":
      "The ball is in your court ~ Meaning : It's your decision now that matters ",
    "28-Random ":
      "I'll have what she's having ~ Meaning : You say it on a date if you couldn't select a dish. P.S : It impresses the girl too",
    "29-Random ":
      "Your future is created by what you do today, not tomorrow - APJ Abdul Kalam ~ Meaning : Never wait for things to happen, start today ",
    "30-Random ":
      "Through thick and thin ~ Meaning : Being loyal to someone no matter what the situation is",
    "31-Random ":
      "Kabhi Kabhi Kuch Jeetne Ke Liya Kuch Haar Na Padta Hai. Aur Haar Ke Jeetne Wale Ko Baazigar Kehte Hain ~ Meaning : Sometimes, you have to lose to actually win",
    "32-Random ":
      "Don't beat around the bush ~ Hinglish Meaning : Seedhe point pe aao na",
    "33-Random ":
      "Hum jahan khade ho jaate hain, line wahi se shuru hoti hain ~ Meaning : Wherever I stand, the line starts from there",
    "34-Random ":
      "Winners are not those who never fail but those who never quit - APJ Abdul Kalam ~ Meaning : Winner never quit and quitters never win",
    "35-Random ":
      "YOLO - You Only Live Once  ~ Hinglish Meaning : Apna har din aise jiyo jaise ki aakhri ho",
    "36-Random ":
      "Find people who will make you better - Michelle Obama ~ Meaning : Remove toxic people from your life",
    "37-Random ":
      "Success🥇 is not final, Failiure😞 is not fatal, it is the courage to continue 🏃‍♂️ that counts - Winston S.Churchil ~ Meaning : Being consistent is most important no matter what you are doing",
    "38-Random ": 
      "Tough time⌛ never last, tough people 💪do - Robert schuller",
    "39-Random ":
      "No one is perfect that's why pencils✏️ have erasers - Wolfgang Rieve ~ Meaning : Stop being perfectionist.",
    "40-Random ":
      "Except your past⏲️ without regret😞, Handle your present with confidence😊, and face your future without fear😱 - APJ Abdul Kalam",
    "41-Random ":
      "Optimism is the faith that leads to achievement🥇. Nothing can be done without hope and confidence😊 - Helen Keller ~ Meaning : One should not loose hope, faith and confidence",
    "42-Random ":
      "There are no shortcut's to any place🌄 worth going - Beverly Sills ~ Meaning : If you will get something immediately you will not get real essence of getting that",
    "43-Random ":
      "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible - Francis of assisi",
    "44-Random ":
      "Any fool can know. The point is to understand📔 - Albert Einstein ~ Meaning ~ Knowing is not enough, understanding is important",
    "45-Random ":
      "You don't drown by falling in the water🌊; you drown by staying there - Edcole ~ Meaning : Leave that place where you not getting what you want" ,
    "46-Random ":
      "Many life's failures are people who did not resalise how close they were to success when they gave up😞 - Thomas A. Edison ~ Meaning : Never gave up success is just one step away",  
    "47-Random ":
      "Never Let your memories be greater than your dreams 💭- Douglas Ivester",
    "48-Random ":
    "When every seems to be going against you, remember that the airplane✈️ takes off against the wind🌬️, not with it - Henery Ford ~ Meaning : Fight against your fear that's when you get to your destination",
    
    
      "1-Harry Potter ": 
      "Do not pity the dead⚰️, Pity the living, and, above all those who live without love💘 - Albus Dumbledore ~ Meaning : There are people who live but without love and that is more pitiable, which is why we must spread love at all occasions ",
      
      "2-Harry Potter ": 
      "It is impossible to manufacture or imitate love💝 -  Horace Slughorn ~ Meaning : Love is something that happens on its own ",
    
     "3-Harry Potter ": 
      "When in doubt🤷‍♂️, go to the library📖 — Ron Weasley  ~ Meaning : As in the library there is near-infinite knowledge available",
    
     "4-Harry Potter ": 
      "We are only as strong💪 as we are united, as weak as we are divided➗ -  Albus Dumbledore ~ Meaning : We can fight it only by showing an equally strong bond of friendship and trust ",
    
     "5-Harry Potter ": 
      "The wand🪄 chooses the wizard🧙 — Garrick Ollivander ~ Meaning : There is a level of compatibility between the wand and the magic-user that needs to be taken into account",
    
      "1-Inspiration ": 
      "If you want to shine like a sun, first burn like a sun - Dr APJ Abdul Kalam ~ Hinglish Meaning :  agar sooraj kee tarah chamakana hai to pahale sooraj kee tarah jalo ",
      
      "2-Inspiration ": 
      "It is during our darkest moments that we must focus to see the light — Aristotle ~ Hinglish Meaning :  yah hamaare sabase andhere kshanon ke dauraan hai ki hamen prakaash ko dekhane ke lie dhyaan kendrit karana chaahie.",
    
    "3-Inspiration ": 
      "Try to be a rainbow in someone's cloud — Maya Angelou ~ Hinglish Meaning : kisee ke baadal mein indradhanush banane kee koshish karo ",
    
    "4-Inspiration ": 
      "We are not our best intentions, We are what we do — Amy Dickinson ~ Hinglish Meaning :  ham apane sabase achchhe iraade nahin hain, ham vahee hain jo ham karate hain",
    
    "5-Inspiration ": 
      "Being vulnerable is a strength, not a weakness — Selena Gomez ~ Hinglish Meaning :  kamajor hona ek taakat hai, kamajoree nahin"
  
  };

  // grab all the keys in the dictionary (authors) and store in an array
  var authors = Object.keys(myData);
  // grab a random key (author) and store it in author
  var author = authors[Math.floor(Math.random() * authors.length)];
  // grab the value(quote) that belongs to that key
  var quote = myData[author];
  document.querySelector("#author").textContent = author;
  document.querySelector("#quote").textContent = quote;
};
