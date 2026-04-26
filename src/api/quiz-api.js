export const getQuizResponse = async () => {

    try {
        const response = await fetch(
            'https://the-trivia-api.com/v2/questions?categories=geography&limit=10'
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
