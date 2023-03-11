import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { faXmarkCircle, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Speak from "../Controllers/Speak"
import Share from "../Controllers/Share"
import Bookmark from '../Controllers/Bookmark';
import CapitalizeWord from '../Controllers/CapitalizeWord';

const ViewWord = ({ word, closeView, BookMarkCountRefresh }) => {
    const change = () => {
        Bookmark(word);
        BookMarkCountRefresh();
    }
    return (
        <div className="viewWord">
            <div className="word-header">
                <div className="word-head">
                    <h2>{CapitalizeWord(word[0].word)}</h2>
                    <button type="submit" >
                        <FontAwesomeIcon className="word-head-icon" icon={faVolumeHigh} onClick={() => Speak(word[0].word)} />
                    </button>
                </div>
                <div className="second-header-line">
                    <p className="phonetic">{word[0].phonetic > 0 ? word[0].phonetic : "N/A"}</p>
                    <div className="button-div">
                        <button type="submit" onClick={() => change()}>
                            <FontAwesomeIcon className="word-head-icon" icon={faBookmark} />
                        </button>
                        <button type="submit" onClick={() => Share(word[0].word)}>
                            <FontAwesomeIcon icon={faWhatsapp} className="word-head-icon" />
                        </button>
                    </div>

                </div>
            </div>
            {word[0].meanings.map((meaning, index) => (
                <>
                    {meaning.partOfSpeech &&
                        <div className='partofspeech' key={index}>
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