import {Droppable} from "react-beautiful-dnd";
import {TableBodyRow} from "../TableBodyRow/TableBodyRow";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";

export const TableBody = () => {
    const stocks = useSelector((state: RootState) => state.table.stocks)

    return (
        <Droppable droppableId="droppable-1">
            {(provider) => (
                <tbody
                    ref={provider.innerRef}
                    {...provider.droppableProps}
                >
                {stocks?.map((stock, index) => (
                    <TableBodyRow key={index} index={index} stock={stock}/>
                ))}
                {provider.placeholder}
                </tbody>
            )}
        </Droppable>
    )
}