import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh} from '@fortawesome/free-solid-svg-icons';
import { faXmarkCircle, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Speak from "../Controllers/Speak"
import Share from "../Controllers/Share"

const ViewWord = ({ word, closeView }) => {
    return (
        <div className="viewWord">
            <div className="word-header">
                <div className="word-head">
                    <h2>{word[0].word[0].toUpperCase() + word[0].word.slice(1, word[0].word.length)}</h2>
                    <button type="submit" onClick={() => Speak(word[0].word)}>
                        <FontAwesomeIcon className="word-head-icon" icon={faBookmark}/>
                        <FontAwesomeIcon className="word-head-icon" icon={faVolumeHigh} />
                    </button>
                </div>
                <div className="second-header-line">
                    <p className="phonetic">{word[0].phonetic > 0 ? word[0].phonetic : "N/A"}</p>
                    <button type="submit" onClick={() => Share(word[0].word)}>
                        <FontAwesomeIcon icon={ faWhatsapp } />
                    </button>
                </div>
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
                            {meaning.synonyms.length > 0 &&
                                <div className="tab">
                                    <h5>Synonyms</h5>
                                    <ul className="syn_tab">
                                        {
                                            meaning.synonyms.map((synonym, index) => <li key={index}>{synonym}</li>)}
                                    </ul>
                                </div>
                            }
                            {meaning.antonyms.length > 0 &&
                                <div className='tab'>
                                    <h5>Antonyms</h5>
                                    <ul className="ant_tab">
                                        {
                                            meaning.antonyms.map((antonym, index) => (
                                                <li key={index}>{antonym}</li>
                                            ))}
                                    </ul>
                                </div>
                            }
                        </div>
                    }
                </>
            ))}
            <div className="floating_button" >
                <div className="button iconbutton">
                    <FontAwesomeIcon icon={faXmarkCircle} className="icon" onClick={closeView} />
                </div>
            </div>
        </div>
    )
}
export default ViewWord