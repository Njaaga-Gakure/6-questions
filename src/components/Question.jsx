import {CiCirclePlus, CiCircleMinus} from 'react-icons/all'
import { useGlobalContext } from '../context/AppProvider'
const Question = ({id, title, info}) => {
    const {activeID, showMore} = useGlobalContext()
    const showInfo = activeID === id
    return (
           <div className="question-container">
                 <h5 className="question-title">{title}</h5>
                 {showInfo && <p className="question-info">{info}</p>}
                 <button onClick={() => showMore(id)}className='toggle-btn'>
                    {showInfo? <CiCircleMinus /> : <CiCirclePlus />}
                 </button>
           </div>
    )
}
export default Question