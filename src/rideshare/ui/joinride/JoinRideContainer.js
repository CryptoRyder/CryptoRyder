import { connect } from 'react-redux'
import JoinRide from './JoinRide'
import { joinRide } from './JoinRideActions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onJoinRideFormSubmit: (ride_number, payment) => {
      dispatch(joinRide(ride_number, payment))
    }
  }
}

const JoinRideContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(JoinRide)

export default JoinRideContainer
