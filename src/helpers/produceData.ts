import {RawStock} from "../types/RawStock";
import {Stock} from "../types/Stock";
import {convertToDate} from "./convertToDate";

export const produceData = (data: RawStock[]): Stock[] => {
    return data.map(el => {
        return {
            symbol: el.symbol,
            sector: el.sector,
            securityType: el.securityType,
            bidPrice: el.bidPrice,
            bidSize: el.bidSize,
            askPrice: el.askPrice,
            askSize: el.askSize,
            lastUpdated: convertToDate(el.lastUpdated),
            lastSalePrice: el.lastSalePrice,
            lastSaleSize: el.lastSaleSize,
            lastSaleTime: convertToDate(el.lastSaleTime),
            volume: el.volume,
        }
    })
}