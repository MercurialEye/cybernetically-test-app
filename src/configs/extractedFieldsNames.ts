import {Stock} from "../types/Stock";

export const extractedFieldsNames: Record<keyof Stock, string> = {
    symbol: 'Символ',
    sector: "Сектор",
    securityType: "Тип безопасности",
    bidPrice: "Цена предложения",
    bidSize: "Размер ставки",
    askPrice: "Спроси цену",
    askSize: "Спросите размер",
    lastUpdated: "Последнее обновление",
    lastSalePrice: "Последняя цена продажи",
    lastSaleSize: "Размер последней продажи",
    lastSaleTime: "Время последней распродажи",
    volume: "Объем",
}











