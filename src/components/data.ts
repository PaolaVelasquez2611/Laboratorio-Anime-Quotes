export async function getApi(): Promise<Array< { anime: string, character: string, quote: string }> | undefined> {
    try {

        const dataanime = await fetch("https://animechan.vercel.app/api/quotes");
        const response = await dataanime.json();
        console.log(response)



        return response;

    } catch (error) {
        console.log("no sirve el api")
        

    }

}

