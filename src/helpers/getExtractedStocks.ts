import {Stock} from "../types/Stock";
import {pageSize} from "../configs/pageSize";

export const getExtractedStocks = (stocksData: Stock[], currentPage: number): Stock[] => {
    const start = currentPage * pageSize;
    const end = (currentPage + 1) * pageSize;
    return stocksData.slice(start, end);
}