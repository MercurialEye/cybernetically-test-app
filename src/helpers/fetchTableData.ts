export const fetchTableData = async () => {
    const token = process.env.REACT_APP_SERVICE_TOKEN
    const response = await fetch(`https://cloud.iexapis.com/stable/tops?token=${token}`)
    return await response.json()
}