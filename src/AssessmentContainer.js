import React from 'react';
import {connect} from 'react-redux';
import DisplaySeason from './Assessment';
import {seasonRequest} from './store/action';

const mapDispatchToProps = (dispatch) => ({
  sendRequest:()=>{dispatch(seasonRequest())}
})

const mapStateToProps = (state) => ({
  seasonResponse:state.seasonResponse
})

export default connect(mapStateToProps,mapDispatchToProps)(DisplaySeason)
