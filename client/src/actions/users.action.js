import axios from 'axios';

export const GET_USERS = 'GET_USERS';

export const getUsers = () =>{
    return(dispatch) =>{
        axios.get('http://localhost:3000/api/user')
        .then(response => {
            dispatch({
                type: GET_USERS,
                payload: response.data
            })
            // console.log(response.data);
        })
        .catch(error => { console.log(error) });
    }
}