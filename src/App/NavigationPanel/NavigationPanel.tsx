import {ReactComponent as ArrowLeft} from '../../svgs/arrowLeft.svg'
import {ReactComponent as ArrowRight} from '../../svgs/arrowRight.svg'
import {ReactComponent as DoubleArrowLeft} from '../../svgs/doubleArrowLeft.svg'
import {ReactComponent as DoubleArrowRight} from '../../svgs/doubleArrowRight.svg'
import './NavigationPanel.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {
    onClickArrowLeft,
    onClickArrowRight,
    onClickDoubleArrowLeft,
    onClickDoubleArrowRight
} from "../../store/tableSlice";

export const NavigationPanel = () => {
    const dispatch = useDispatch()
    const currentPage = useSelector((state: RootState) => state.table.currentPage)
    const totalStocks = useSelector((state: RootState) => state.table.totalStocks)

    const maxPage = Math.ceil(totalStocks.length / 10) - 1

    const doubleArrowLeftEnabled = currentPage > 0
    const arrowLeftEnabled = currentPage > 0
    const arrowRightEnabled = currentPage < maxPage
    const doubleArrowRightEnabled = currentPage < maxPage

    return (
        <div className="navigation-panel">
            <button disabled={!doubleArrowLeftEnabled} onClick={() => dispatch(onClickDoubleArrowLeft())}>
                <DoubleArrowLeft/>
            </button>
            <button disabled={!arrowLeftEnabled} onClick={() => dispatch(onClickArrowLeft())}>
                <ArrowLeft/>
            </button>
            <div className="navigation-panel__page-info">
                <span className="navigation-panel__page-text">Текущая страница</span>
                <span className="navigation-panel__page-text">{currentPage + 1}</span>
            </div>
            <button disabled={!arrowRightEnabled} onClick={() => dispatch(onClickArrowRight())}>
                <ArrowRight/>
            </button>
            <button disabled={!doubleArrowRightEnabled} onClick={() => dispatch(onClickDoubleArrowRight())}>
                <DoubleArrowRight/>
            </button>
        </div>
    )
}