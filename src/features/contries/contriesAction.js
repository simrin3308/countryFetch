// for api calls

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


// show all countries
export const showAllCountries = createAsyncThunk("countries/showAll", async (_, thunkAPI) => {
   try {
      const response = await axios.get(`https://restcountries.com/v3.1/all`)
      return response.data



   } catch (error) {
      const message = (error.response && error.response.data) || error.message;
      //    we have to set this message to the initial state. so we will make use of 

      // reject with value send the error a payload
      return thunkAPI.rejectWithValue(message)
   }
})


// search by CIOC code

export const searchByCode = createAsyncThunk("contries/searchByCode", async (code, thunkAPI) => {
   try {
      const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`)

      return response.data
   } catch (error) {
      const message = (error.response && error.response.data) || error.message;
      return thunkAPI.rejectWithValue(message)
   }
})


// searchByRegion

export const searchByRegion = createAsyncThunk("contries/searchByRegion", async (region, thunkAPI) => {
   try {
      const response = await axios.get(`https://restcountries.com/v3.1/region/${region}`)

      return response.data
   } catch (error) {
      const message = (error.response && error.response.data) || error.message;
      return thunkAPI.rejectWithValue(message)
   }
})

