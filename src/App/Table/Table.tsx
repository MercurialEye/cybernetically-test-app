import {DragDropContext} from "react-beautiful-dnd";
import {TableHeader} from "../TableHeader/TableHeader";
import {TableBody} from "../TableBody/TableBody";
import './Table.css'
import {handleDragEnd} from "../../store/tableSlice";
import {useDispatch} from "react-redux";

export const Table = () => {
    const dispatch = useDispatch()

    return (
        <div className="table-container">
            <DragDropContext onDragEnd={(event) => dispatch(handleDragEnd({
                source: event.source?.index ?? 0,
                destination: event.destination?.index ?? 0,
            }))}>
                <table className="table">
                    <TableHeader/>
                    <TableBody/>
                </table>
            </DragDropContext>
        </div>
    )
}