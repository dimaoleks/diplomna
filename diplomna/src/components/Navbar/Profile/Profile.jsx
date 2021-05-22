import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
        </div>
    );
}

export default Profile;