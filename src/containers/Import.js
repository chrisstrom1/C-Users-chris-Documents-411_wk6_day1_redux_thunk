import { connect } from 'react-redux';
import Import from '../components/Import';
import { fetchMakes, deleteMake } from '../redux/actions'; // Import fetchMakes and deleteMake actions

const mapStateToProps = (state) => ({
    makes: state.makes
});

const mapDispatchToProps = (dispatch) => ({
    fetchMakes: () => dispatch(fetchMakes()), // Map fetchMakes action to props
    deleteMake: (index) => dispatch(deleteMake(index)) // Map deleteMake action to props
});

export default connect(mapStateToProps, mapDispatchToProps)(Import);