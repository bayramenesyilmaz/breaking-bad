import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import Error from "../components/Error";


function Detail() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    const [character, setCharacter] = useState([])
    const { char_id } = useParams()


    useEffect(() => {
        async function getCharacter() {
            setLoading(true)
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_BASE_ENDPOINT}/characters/${char_id}`)
                console.log("ee");
                setLoading(false)
                setCharacter(res.data[0])
            } catch (error) {
                setLoading(false)
                setError(error.message)
                console.log(error);
            }

        }
        getCharacter()
    }, [char_id])

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error error={error} />
    }
    console.log(character);
    return (
        <div>
            {
                character && <div>

                    <div className="detail-page">
                        
                        <div className="detail-info">
                            <div className="name">
                                <span className="info-key">Name</span>
                                
                                <span className="info-value">{character.name}</span>
                            </div>
                            <div className="nickname">
                                <span className="info-key">Nickname</span>
                                
                                <span className="info-value">{character.nickname}</span>
                            </div>

                        </div>

                        <div className="detail-img">
                            <img src={character.img} alt={character.name} />
                        </div>
                    </div>


                </div>
            }
        </div>
    )
}

export default Detail