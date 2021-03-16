import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type MapStateToProps = {
    profile: ProfileType
}

interface ProfileConnectTypeProps extends MapStateToProps {
    setUserProfile: (profile: ProfileType) => void
}

type PathParams = {
    userId: string
}
type PropsType = RouteComponentProps<PathParams> & ProfileConnectTypeProps

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(resolve => {
                this.props.setUserProfile(resolve.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        profile: state.profilePage.profile
    }
}


let WithDataContainerProfile = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithDataContainerProfile)