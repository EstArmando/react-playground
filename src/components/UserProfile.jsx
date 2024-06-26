import './UserProfile.css'

const UserProfile = ({ user }) => {
  return (
    <div className="container">
      <h1>{user.name}</h1>
      <p>{user.age} años</p>
      <p className='description'>{user.description}</p>
    </div>
  )
}

export default UserProfile