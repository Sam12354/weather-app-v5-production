const quotesForToday = [
    "Your next win is already looking for you—just don't stand still.",
    "Today might be heavy, but luck hasn't forgotten you — it's just gathering momentum.",
    "You're not off track; you're in the middle of a plot twist. Better things are already on their way.",
    "If today drained you, let tomorrow restore you. You're not done yet, and the good isn't done with you either.",
    "You're closer than you think. Every setback is secretly pushing you toward something better.",
    "Everything you've lost is making space for everything you're about to gain.",
    "Some days are meant to break you a little so the coming days can lift you higher than ever.",
    "Luck loves the relentless. Fortune follows those who refuse to quit.",
    "Keep showing up. Every step forward is a silent revolution in your favor.",
    "The harder the climb, the higher the view. Your summit is closer than you think.",
    "Excuses are for those who already quit. You? You fight.",
    "This is the battlefield of your dreams. Either fight or watch someone else live them.",
    "Someday, you'll look back at this moment and realize the battle you fought was the making of you.",
    "A winner isn't someone who never loses. It's someone who refuses to stay down.",
    "Winning isn't about being the best. It's about being relentless when others quit.",
    "Winners are made when nobody's watching, in the moments everyone else gave up.",
    "Wave to the people you pass on your way up—you never know whose road you might cross again.",
    "Those who are humble on the way up are the ones remembered at the top.",
    "Your journey up is not a reason to step over others. Leave a path, not a shadow.",
    "Never look down on anyone; life has a way of leveling mountains.",
    "To know the heights, you must first have felt the depths."
];

export const getquotesForToday = () => {
    const result = quotesForToday[Math.floor(Math.random() * quotesForToday.length)]
    
    return result
}