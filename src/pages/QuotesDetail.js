import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"

function QuotesDetail() {
    const quotes = useSelector(state => state.quotes.items)
    const { quote_id } = useParams()

    const quote = quotes.filter(que => que.quote_id === Number(quote_id))

    return (
        <div className="quotes-detail">
            <div className="quotes-note">
                <p>{quote[0].quote}</p>
            </div>
            <div className="author">
                <span className="author-key">Author</span>
                <span className="author-value">{quote[0].author}</span>
            </div>
        </div>
    )
}

export default QuotesDetail