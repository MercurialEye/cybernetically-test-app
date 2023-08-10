import {Draggable} from "react-beautiful-dnd";
import {Stock} from "../../types/Stock";
import './TableBodyRow.css'
import {extractedField} from "../../configs/extractedField";

interface ITableBodyRowProps {
    stock: Stock
    index: number
}

export const TableBodyRow = ({stock, index}: ITableBodyRowProps) => {
    return (
        <Draggable
            index={index}
            key={stock.symbol}
            draggableId={stock.symbol}
        >
            {(provider) => (
                <tr
                    {...provider.draggableProps}
                    ref={provider.innerRef}
                >
                    <td className="table-body-row"{...provider.dragHandleProps}>=</td>
                    {extractedField.map((el) => <td className="table-body-row" key={el}>{stock[el]}</td>)}
                </tr>
            )}
        </Draggable>
    )
}