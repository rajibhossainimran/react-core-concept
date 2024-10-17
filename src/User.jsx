import './Box.css';
export default function User({user}){
    // console.log(user);
    return (<div className='box'>
        <p>User Name : {user.name}</p>
        <p>User email : {user.email}</p>
    </div>)
}