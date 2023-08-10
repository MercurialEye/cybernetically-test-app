import {Loader} from "../components/Loader/Loader";
import {NavigationPanel} from "./NavigationPanel/NavigationPanel";
import {Table} from "./Table/Table";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store/store";
import {fetchError, fetchSuccess} from "../store/tableSlice";
import {ErrorMessage} from "./ErrorMessage/ErrorMessage";
import "./App.css"

const fetchData = async () => {
    const token = process.env.REACT_APP_SERVICE_TOKEN
    const response = await fetch(`https://cloud.iexapis.com/stable/tops?token=${token}`)
    return await response.json()
}

export const App = () => {
    const dispatch = useDispatch()
    const loaded = useSelector((state: RootState) => state.table.loaded)
    const hasError = useSelector((state: RootState) => state.table.hasError)

    useEffect(() => {
        (async () => {
            try {
                const data = await fetchData()
                dispatch(fetchSuccess({data}))
            } catch (error) {
                dispatch(fetchError())
            }
        })()
    }, [])

    if (!loaded) {
        return (
            <div className="message-container">
                <Loader/>
            </div>
        )
    }

    if (hasError) {
        return (
            <div className="message-container">
                <ErrorMessage/>
            </div>
        )
    }

    return (
        <div className="app">
            <Table/>
            <NavigationPanel/>
        </div>
    );
};
