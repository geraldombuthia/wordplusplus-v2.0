import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh, faXmark } from '@fortawesome/free-solid-svg-icons'
const ViewWord = ({ word, closeView }) => {
    return (
        <div className="viewWord">
            <div className="word-header">
                <div className="word-head-button">
                    <h2>{word[0].word[0].toUpperCase() + word[0].word.slice(1, word[0].word.length)}</h2>
                    <button type="submit">
                        <FontAwesomeIcon icon={faVolumeHigh} />
                    </button>
                </div>
                <p className="phonetic">{word[0].phonetic > 0 ? word[0].phonetic : "N/A"}</p>
            </div>
            {/* <div classname="def-syn-ant">
                <p className='lorem'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae, sunt tenetur atque, in repellendus explicabo, natus vel pariatur non consequuntur illum quaerat adipisci eligendi repudiandae aliquam. Quis, explicabo maiores.</p>
                <h3>Defintions</h3>
                <h3>Synonyms</h3>
                <h3>Antonyms</h3>
            </div> */}
            {word[0].meanings.map((meaning, index) => (
                <>
                    {meaning.partOfSpeech &&
                        <div className='partofspeech'>
                            <h3 key={index} className="part-header">{meaning.partOfSpeech}</h3>
                            {meaning.definitions.map((definition, ind) => (
                                <p key={ind} className="definition"><span>{ind + 1}. </span>{definition.definition}</p>
                            ))}
                        </div>
                    }
                    {meaning.synonyms.length > 0 &&
                        <>
                            <h5>Synonyms</h5>
                            <ul className="syn_tab">
                                {
                                    meaning.synonyms.map((synonym, index) => <li key={index}>{synonym}</li>)}
                            </ul>
                        </>
                    }
                    {meaning.antonyms.length > 0 &&
                        <>
                            <h5>Antonyms</h5>
                            <ul className="ant_tab">
                                {
                                    meaning.antonyms.map((antonym, index) => (
                                        <li key={index}>{antonym}</li>
                                    ))}
                            </ul>
                        </>
                    }
                </>
            ))}
            <div className="floating_button" >
                <div className="button iconbutton">
                    <FontAwesomeIcon icon={faXmark} className="icon" onClick={closeView}/>
                </div>
            </div>
        </div>
    )
}

export default ViewWord