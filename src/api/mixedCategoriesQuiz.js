export const getMixedQuizResponse = async () => {

    try {
        const response = await fetch(
            'https://the-trivia-api.com/v2/questions?categories=general_knowledge,history,music,science,food_and_drink,film_and_tv&limit=10&difficulty=medium'
        );

        if(!response.ok){
            console.error('Quiz response error');
            return
        }
        
        const questions = await response.json();
        return questions
    } catch (error) {
        console.log(error);
        
    }

}