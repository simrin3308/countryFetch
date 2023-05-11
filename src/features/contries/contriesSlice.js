import { createSlice } from "@reduxjs/toolkit";
import { showAllCountries, searchByCode, searchByRegion } from "./contriesAction";

const initialState = {
    loading: false,
    countrySearched: [],
    countriesData: [],
    error: false,
    success: false,
    message: "",
    region: "",
    searchTerm: ""
}

export const countriesSlice = createSlice({
    name: 'countries',
    initialState: initialState,
    reducers: {
        reset: (state) => {
            state.loading = false;
            state.error = false;
            state.success = false;
            state.message = ""
        },
        setRegion: (state, action) => {
            state.region = action.payload;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(showAllCountries.pending, (state) => {
            state.loading = true;
        })
            .addCase(showAllCountries.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.countriesData = action.payload;
            })
            .addCase(showAllCountries.rejected, (state, action) => {
                state.error = false;
                state.success = false;
                state.message = action.payload;
                state.countriesData = [];
            })

        builder.addCase(searchByCode.pending, (state) => {
            state.loading = true;
        })
            .addCase(searchByCode.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.countrySearched = action.payload;
            })
            .addCase(searchByCode.rejected, (state, action) => {
                state.error = false;
                state.success = false;
                state.message = action.payload;
                state.countrySearched = [];
            })

        builder.addCase(searchByRegion.pending, (state) => {
            state.loading = true;
        })
            .addCase(searchByRegion.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.countriesData = action.payload;
            })
            .addCase(searchByRegion.rejected, (state, action) => {
                // state.loading = false;
                state.error = false;
                state.success = false;
                state.message = action.payload;
                state.countrySearched = [];
            })

    }
});

export const { reset, setRegion, setSearchTerm } = countriesSlice.actions

export default countriesSlice.reducer