const reducer = (state = initialEntries, action) => {
    let newEntries;
    switch (action.type) {
        case 'ADD_ENTRY':
            newEntries = state.concat({ ...action.payload })
            return newEntries;

        case 'REMOVE_ENTRY':
            newEntries = state.filter(entry => entry.id !== action.payload.id);
            return newEntries;

        case 'UPDATE_ENTRY':
            newEntries = [...state];
            const index = newEntries.findIndex(entry => entry.id === action.payload.id);
            newEntries[index] = {...action.payload.entry};
            return newEntries;
        default:
            return state;
    }
}

export default reducer;

var initialEntries = [
    {
        description: "Work Income Redux",
        id: 1,
        value: 1000,
        isExpense: false
    },
    {
        description: "Water bill",
        id: 2,
        value: 10,
        isExpense: true
    },
    {
        description: "Rent",
        id: 3,
        value: 300,
        isExpense: true
    },
    {
        description: "Power bill",
        id: 4,
        value: 50,
        isExpense: true
    },
    {
        description: "Phone bill",
        id: 5,
        value: 80,
        isExpense: true
    }
]