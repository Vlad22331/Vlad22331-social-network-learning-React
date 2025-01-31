import axios from "axios";

const fetchUserData = async ( props ) => {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${props.queryKey[1]}`
    );
    return response.data;
};

export default fetchUserData;
