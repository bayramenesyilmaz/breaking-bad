import Masonry from "react-masonry-css";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/Error";
import { Link } from "react-router-dom";
import { getCharacters } from "../redux/charactersSlice";

function Home() {
    const characters = useSelector(state => state.characters.items)
    const page = useSelector(state => state.characters.page)
    const hasNextPage = useSelector(state => state.characters.hasNextPage)
    const status = useSelector(state => state.characters.status)
    const error = useSelector(state => state.characters.error)
    const dispatch = useDispatch()

    useEffect(() => {
        if (status === "idle") {
            dispatch(getCharacters())
        }

    }, [dispatch, status])


    if (status === "failed") {
        return <Error error={error} />
    }


    return (
        <div>
            <Masonry
                breakpointCols={4}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">

                {
                    characters.map(character => (
                        <div key={character.char_id} className="ch-box">
                            <Link className="ch-link" to={`/detail/${character.char_id}`} >
                                <img src={character.img} alt={character.name} className="ch-image" />
                                <p className="ch-name">{character.name} </p>
                            </Link>
                        </div>
                    ))
                }
            </Masonry>

            <div>
                {
                    hasNextPage &&  (
                        <div className="load-more">
                            <button className="load-more-btn" onClick={() => dispatch(getCharacters(page))}>
                                {
                                    status === "loading" ? "Loading..." : `Load More (${page})`
                                }
                            </button>
                        </div>

                    )
                }
                {
                    !hasNextPage && <p className="load-more-btn" style={{ textAlign: "center" }}>Gösterilecek gönderi yok</p>
                }
            </div>
        </div>
    )
}

export default Home