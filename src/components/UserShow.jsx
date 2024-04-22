
// Code Exercise 4 
export const userData = {
    firstName: 'Amir', // feel free to replace the name value
    lastName: 'Firoozi', // feel free to replace the name value
    title: 'Instructor', // feel free to replace the title value
};

export default function UserShow() {
    return (
        <div id="user" data-testid="user">
            <h2>
                TODO: {userData.firstName} {userData.lastName}
            </h2>
            <p>TODO: {userData.title}</p>
        </div>
    );
}



// function App() {
//   return (
//     <div id="app">
//       <h1>Time to Practice</h1>
//       <p>Welcome on board of this course! You got this 💪</p>
//       <User />
//     </div>
//   );
// }
// END Code Exercise 4  //////////////////////