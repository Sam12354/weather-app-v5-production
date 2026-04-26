const funFacts = [
    "The multicell cluster thunderstorm is the most common type, characterized by inner mature storms at the center and dissipating storms around the outer edge, and can include weak tornadoes.",
    "Central Canada and the Midwest in the United States are considered to be 'blizzard country'. To deal with the regular blizzards in these regions homes are often built with steep roofs. ",
    "The most snow to fall in a single calendar day in the United States occurred in 1913 in Georgetown, Colorado. They received 63 inches that day. Colorado also had the most snow fall in a 24 hour period in 1921, with 75.8 inches." ,
    "In 426 BC, a Greek historian Thucydides wrote about tsunamis in his book History of the Peloponnesian War. He suggested that they were caused by earthquakes. ",
    "It is estimated that there are approximately 500,000 lightning strikes during a monsoon.",
    "There is less than 0.1% chance that a tornado will be an F5 on the F-scale, which is the highest rating. F0 is the weakest. "
]

export const getFunFacts = () => {
    const result = funFacts[Math.floor(Math.random() * funFacts.length)]
    
    return result
}