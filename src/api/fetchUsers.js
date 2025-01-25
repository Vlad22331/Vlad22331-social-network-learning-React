// import axios from "axios";

// const fetchUsers = async (props) => {
//     if(!props.pageParam){
//         return
//     }
//     else{
//         const response = await axios.get (`https://jsonplaceholder.typicode.com/users?_limit=5&_page=${props.pageParam}`)
    
//         return response.data
//     }
// }

// export default fetchUsers;

import axios from "axios";

const fetchUsers = async ({ pageParam = 1 }) => {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users?_limit=3і&_page=${pageParam}`
    );
    return response.data;
};

export default fetchUsers;
