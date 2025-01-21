const fetchUsers = async (page = 0) => {
    const response = await fetch (`https://jsonplaceholder.typicode.com/users?_limit=3&_page=${page.queryKey[1]}`)
    return response.json()
}

export default fetchUsers;