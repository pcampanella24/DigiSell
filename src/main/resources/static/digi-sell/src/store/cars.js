import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allCars: [],
    findCar: {},
    selectValue: {},
    showFind: false,
    showSearchButton: false
};

const carSlice = createSlice({
    name: 'car',
    initialState,
    reducers: {
        findAllModel(state, action) {
            state.allCars = action.payload;
        },
        findByName(state, action) {
            if (state.findCar) {
                state.findCar = action.payload;
                state.showFind = true;
            }
        },
        setSelectValue(state, action) {
            state.selectValue = action.payload;
        },
        setShowFind(state) {
            state.showFind = !state.showFind;
        },
        setShowSearchButton(state) {
            state.showSearchButton = !state.setShowSearchButton;
        },
        setShowSearchButtonFalse(state) {
            state.showSearchButton = false;
        }
    }
});

export const carActions = carSlice.actions;

export default carSlice.reducer;

/* const f = a => {
    if (a.length === 0) {
        throw new Error('l array non può avere lunghezza nulla');
    }
    let posFirstInt = -1;
    for (let i = 0; i < a.length; i++) {
        if (!isNan(a[i])) {
            posFirstInt = i;
            break;
        }
    }
    if (posFirstInt === -1) {
        throw new Error('l array non deve contenere almeno un numero');
    }
    let max = a[posFirstInt];
    for (let i = posFirstInt; i < a.length; i++) {
        if (!isNaN(a[i]) && a[i] > max) {
           max = a[i];
       }
    }
    return max;
} */