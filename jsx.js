const root= document.getElementById("root");
// function fullNmae(user){
//     return user.firstName + ' '+user.lastName;

// }
// const firstName=prompt("enter your firstName");
// const lastName=prompt("Enter your last Name:")
// const user={firstName, lastName}

// const style="style";
// const element= <h1 className={style}>Hello {fullNmae(user)}</h1>
const element=(
    <div>
        <h1 className="gretting">hell world</h1>
        <p className="para">hello world  are you now</p>
        </div>
)
ReactDOM.render(element,root)