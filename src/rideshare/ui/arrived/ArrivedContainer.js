import { connect } from 'react-redux'
import Arrived from './Arrived'
import { arrived } from './ArrivedActions'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onArrivedFormSubmit: (ride_number) => {
      dispatch(arrived(ride_number))
    }
  }
}

const ArrivedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Arrived)

export default ArrivedContainer
