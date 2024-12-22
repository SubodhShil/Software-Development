const getQuote = async () => {
    const fetchURL = await fetch(
        "https://jsonplaceholder.typicode.com/todos/5"
    );
    const data = await fetchURL.json();
    return data;
};

export default getQuote;
