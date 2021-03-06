interface User{
    id: number,
    name: string,
    room:string
}
const users: User[] = [];
export const addUser = ({ id, name, room }: User) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );
    
    if (existingUser) {
        return {error: 'username is taken'}
    }

    const user = { id, name, room };
    users.push(user)
    return {user}
};


export const removeUser = (id:number) => {
    const index = users.findIndex((user) => user.id === id);
    
    if (index !== -1) {
        return users.splice(index, 1)[0];
    }
}
export const getUser = (id: number) => users.find(user => user.id === id)


export const getUsersInRoom = (room: string) => users.filter(user => user.room === room)

