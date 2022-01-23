import { delay, take, put, call, takeEvery } from 'redux-saga/effects'

function double(number) {
    return number * 2;
}

export function* testSaga() {
    while(true) {
        // yield delay(1000);
        console.log("Starting Saga");
        const state = yield take('TEST_MESSAGE');
        const a = yield call(double, 2);
        console.log(a);
        const b = yield double(3);
        console.log(b);
        console.log("Finish saga function", state);
    }    
}

export function* count() {
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
}

export function* testSagaTakeEveryProcess({payload}) {
    console.log(`Starting Process for index ${payload}`);
    yield delay(3000);
    console.log(`Starting Process for index ${payload}`)
}

export function* testSagaTakeEvery() {
    const {payload} = takeEvery("TEST_MEESAGE_3", testSagaTakeEveryProcess)
    console.log(`finised takeevery for index ${payload}`)
}

export function* dispatchTest() {
    let index = 0;
    while(true) {
        yield delay(500);
        yield put({ type: 'TEST_MESSAGE_3', payload: index} );
        index++;
    }
}

