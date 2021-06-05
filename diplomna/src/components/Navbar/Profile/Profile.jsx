import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    debugger;
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
        </div>
    );
}

export default Profile;