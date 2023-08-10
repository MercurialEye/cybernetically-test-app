import {Stock} from "../types/Stock";

export const extractedField: (keyof Stock)[] = [
    'symbol',
    'sector',
    'securityType',
    'bidPrice',
    'bidSize',
    'askPrice',
    'askSize',
    'lastUpdated',
    'lastSalePrice',
    'lastSaleSize',
    'lastSaleTime',
    'volume',
]