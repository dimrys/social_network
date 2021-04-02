import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import { compose } from "redux";

type MapStateToProps = {
    profile: ProfileType

}

interface ProfileConnectTypeProps extends MapStateToProps {
    getUserProfile: (userId: string) => void
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
        this.props.getUserProfile(userId)
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }

}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        profile: state.profilePage.profile,
    }
}


// let WithDataContainerProfile = withRouter(ProfileContainer)
//
// export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithDataContainerProfile))
export default compose<React.ComponentType>(
    // withAuthRedirect,
    connect(mapStateToProps, {getUserProfile}),
    withRouter
)(ProfileContainer)