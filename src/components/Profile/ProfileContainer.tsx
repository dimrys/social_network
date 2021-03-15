import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";

type MapStateToProps = {
    profile: ProfileType
}

interface ProfileTypeProps extends MapStateToProps{
    setUserProfile: (profile:ProfileType) => void
}

class ProfileContainer extends React.Component<ProfileTypeProps>{
    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(resolve => {
                this.props.setUserProfile(resolve.data)
            } )
    }

    render () {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }

}
const mapStateToProps = (state: AppStateType):MapStateToProps => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps,{setUserProfile})(ProfileContainer)