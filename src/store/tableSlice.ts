import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {Stock} from "../types/Stock";
import {pageSize} from "../configs/pageSize";

export interface TableState {
    totalStocks: Stock[]
    stocks: Stock[]
    currentPage: number
    loaded: boolean
    hasError: boolean
}

const initialState: TableState = {
    totalStocks: [],
    stocks: [],
    currentPage: 0,
    loaded: false,
    hasError: false,
}

const getExtractedStocks = (stocksData: Stock[], currentPage: number): Stock[] => {
    const start = currentPage * pageSize;
    const end = (currentPage + 1) * pageSize;
    return stocksData.slice(start, end);
}

export const counterSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        fetchSuccess: (state, action: PayloadAction<{ data: Stock[] }>) => {
            state.totalStocks = action.payload.data
            state.stocks = getExtractedStocks(action.payload.data, state.currentPage)
            state.loaded = true
        },
        fetchError: (state) => {
            state.loaded = true
            state.hasError = true
        },
        handleDragEnd: (state, action: PayloadAction<{ source: number; destination: number; }>) => {
            let tempData = Array.from(state.stocks);
            let [source_data] = tempData.splice(action.payload.source, 1);
            tempData.splice(action.payload.destination, 0, source_data);
            state.stocks = tempData
        },
        onClickDoubleArrowLeft: (state) => {
            const nextPage = 0;
            state.currentPage = nextPage
            state.stocks = getExtractedStocks(state.totalStocks, nextPage)
        },
        onClickArrowLeft: (state) => {
            const nextPage = state.currentPage - 1;
            state.currentPage = nextPage
            state.stocks = getExtractedStocks(state.totalStocks, nextPage)
        },
        onClickArrowRight: (state) => {
            const nextPage = state.currentPage + 1;
            state.currentPage = nextPage
            state.stocks = getExtractedStocks(state.totalStocks, nextPage)
        },
        onClickDoubleArrowRight: (state) => {
            const nextPage = Math.ceil(state.totalStocks.length / 10) - 1;
            state.currentPage = nextPage
            state.stocks = getExtractedStocks(state.totalStocks, nextPage)
        },
    },
})

export const {
    fetchSuccess,
    fetchError,
    handleDragEnd,
    onClickDoubleArrowLeft,
    onClickArrowLeft,
    onClickArrowRight,
    onClickDoubleArrowRight,
} = counterSlice.actions

export default counterSlice.reducer