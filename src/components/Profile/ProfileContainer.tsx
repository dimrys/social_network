import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatus, getUserProfile, ProfileType, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";

type MapStateToProps = {
    profile: ProfileType
    status: string

}

interface ProfileConnectTypeProps extends MapStateToProps {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

type PathParams = {
    userId: string
}
type PropsType = RouteComponentProps<PathParams> & ProfileConnectTypeProps

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '15318'
            //  userId = '2'
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }


    render() {

        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status = {this.props.status}
                     updateStatus = {this.props.updateStatus}
            />
        )
    }

}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}


// let WithDataContainerProfile = withRouter(ProfileContainer)
//
// export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithDataContainerProfile))
export default compose<React.ComponentType>(
    // withAuthRedirect,
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter
)(ProfileContainer)