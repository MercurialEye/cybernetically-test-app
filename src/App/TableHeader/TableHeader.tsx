import './TableHeader.css'
import {extractedField} from "../../configs/extractedField";
import {extractedFieldsNames} from "../../configs/extractedFieldsNames";

export const TableHeader = () => {

    return (
        <thead>
        <tr>
            <th/>
            {extractedField.map(el => <th className="table-header" key={el}>{extractedFieldsNames[el]}</th>)}
        </tr>
        </thead>
    )
}