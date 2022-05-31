export default async function getSearchQuery(query) {
    try {
        const response = await fetch(`http://localhost:5000/api/search/?q=${query}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const json = await response.json();
        const {data} = json
        return data
    } catch (error) {
        console.error('Ошибка:', error);
    }
}