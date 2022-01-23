import axios from "axios";
import { put, take, call } from "redux-saga/effects";
import entriesTypes from '../actions/entries.actions';

export function* deleteEntrySaga() {
    while(true) {
        const {payload} = yield take(entriesTypes.REMOVE_ENTRY);
        yield call(deleteEntry, payload.id);
        yield put({type: 'REMOVE_ENTRY_RESULT', payload: {id: payload.id}})
    } 
}

async function deleteEntry(id) {
    await axios.delete(`http://localhost:3001/entries/${id}`);
    await axios.delete(`http://localhost:3001/values/${id}`);
    // Blocking saga for slow network avoiding multiple call
    // await new Promise(s => setTimeout(s, 3000))
}