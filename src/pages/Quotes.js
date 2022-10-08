import { useEffect } from 'react'
import Loading from "../components/Loading";
import Error from "../components/Error";

import { useDispatch, useSelector } from "react-redux";
import { getQuotes } from "../redux/quotesSlice";
import { Link } from 'react-router-dom';

function Quotes() {

    const dispatch = useDispatch();
    const status = useSelector(state => state.quotes.status)
    const error = useSelector(state => state.quotes.error)

    const quotes = useSelector(state => state.quotes.items)

    useEffect(() => {
        if (status === "idle") {
            dispatch(getQuotes())
        }
    }, [dispatch, status])

    if (status === "loading") {
        return <Loading />
    }

    if (error) {
        return <Error error={error} />
    }

    return (
        <div>
            {
                quotes.map(que => {
                    return <div key={que.quote_id} className="queto" >
                        <Link className='quotes-link' to={`/quotes/${que.quote_id}`} ><span>{que.quote} </span></Link>
                        <strong> {que.author}</strong>
                    </div>
                })
            }
        </div>
    )
}

export default Quotes