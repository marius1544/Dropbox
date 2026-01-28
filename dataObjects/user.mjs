export const Users = {};

function user(){
    return{
        id: null,
        username: null
    }
}

export function generateID(){
    let id = null;
    do {
        id = (Math.random() * Number.MAX_SAFE_INTEGER).toString(16);
    } while (Users[id])
        return id;
}

export function generateUsername(userName){
  return userName;
}

export default user;