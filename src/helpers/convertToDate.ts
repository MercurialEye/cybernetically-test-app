import {addZero} from "./addZero";

export const convertToDate = (value: number): string => {
    const dateValue = new Date(value);

    const seconds = addZero(dateValue.getSeconds())
    const minutes = addZero(dateValue.getMinutes())
    const hours = addZero(dateValue.getHours())

    const date = addZero(dateValue.getDate())
    const month = addZero(dateValue.getMonth() + 1)
    const year = addZero(dateValue.getFullYear())

    return `${date}-${month}-${year} ${hours}:${minutes}:${seconds}`
}