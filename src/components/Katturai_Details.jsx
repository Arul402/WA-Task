import React, { useState } from "react";
import Astrology1 from './assets/katturai_images/astrology-08112024-09.png'
import Astrology2 from './assets/katturai_images/rasipalan2.gif'
import Astrology3 from './assets/katturai_images/astrology3.png'
import Astrology4 from './assets/katturai_images/astrology4.gif'
import Astrology5 from './assets/katturai_images/astrology5.gif'
import Astrology6 from './assets/katturai_images/astrology6.gif'
import Astrology7 from './assets/katturai_images/astrology7.jpg'
import Astrology8 from './assets/katturai_images/astrology8.gif'
import person_img from './assets/katturai_images/logo_img.png'
import './Katturai_details.css'
import {  FaHeart,FaBookOpen } from 'react-icons/fa';
import { FaArrowLeft } from "react-icons/fa6";
import Zoom from './assets/images/zoom.jpg'
import { Link } from "react-router-dom";
import { SlLike,SlDislike } from "react-icons/sl";
import { IoShareSocial } from "react-icons/io5";

const ArticleDetails = ({ article }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedLike, setIsClickedLike] = useState(false);
  const [isClickedDislike, setIsClickeddislike] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);


  const changeLike = () => {
    setIsClickedLike(!isClickedLike); 
  };
  const changeDislike = () => {
    setIsClickeddislike(!isClickedDislike); 
  };

  const handleClick = () => {
    setIsClicked(!isClicked); 
  };
  const handleZoom = () => {
    setIsZoomed(!isZoomed);
  };
  return (
    <>
    <div className="header-detail">
      <Link to="/">
      <FaArrowLeft/>
      </Link>
      <div className="header-detail2">
      <img
        src={Zoom}
        alt=""
        width={20}
        className={isZoomed ? "zoomed" : ""}
        onClick={handleZoom}
        style={{ cursor: "pointer" }}
      />
        <FaHeart 
       onClick={handleClick}
       style={{ color: isClicked ? "green" : "gray", cursor: "pointer" }}
       size={24}
       />
      </div>
    </div>
    <div className="container-details">
      {/* Title */}
      <h1 className="article-title">{article.title}</h1>

      <div className="article-grid">
        {/* Left: Banner Image */}
        <div className="banner-section">
          {article.banner_url && (
            <img
              src={article.banner_url}
              alt={article.title}
              className="banner-image"
            />
          )}
          {/* Author Details */}
          <div className="author-details">
            <p>
              <img src={person_img} alt="" className="person-logo" />
            </p>
            <p>
              <span className="label"></span> {article.author_name}
            </p>
            |
            <p>
              <span className="label"></span>{" "}
              {new Date(article.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Right: Short Description */}
        <div className="short-desc">
          <p>{article.short_desc}</p>
        </div>
      </div>

      {/* Article Content */}
      <div className="content">
        {article.content.map((section, index) => (
          <div key={index} className="section">
            {section.title && <h2 className="section-title">{section.title}</h2>}
            {section.quote && (
              <blockquote className="quote">{section.quote}</blockquote>
            )}
            {section.para && <p className="paragraph">{section.para}</p>}
            {section.img_url && (
              <img
                src={section.img_url}
                alt={section.img_desc}
                className="section-image"
              />
            )}
          </div>
        ))}
      </div>

      {/* Tags */}
      {article.tags && article.tags.length > 0 && (
        <div className="tags">
          {article.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Icons */}
      <div className="icons">
        {/* <button className="icon-button">👍 Like</button> */}<span><SlLike onClick={changeLike} style={{ color: isClickedLike ? "red" : "gray", cursor: "pointer" }}/>&nbsp; 123</span>
        {/* <button className="icon-button">👎 Dislike</button> */}<span><SlDislike onClick={changeDislike} style={{ color: isClickedDislike ? "red" : "gray", cursor: "pointer" }}/>&nbsp; 123</span>
        {/* <button className="icon-button">📚 Bookmark</button> */}<span><FaBookOpen />&nbsp; 1110</span>
        {/* <button className="icon-button">🔗 Share</button> */}<span><IoShareSocial /></span>
      </div>
      
      {/* Related Articles */}
      {article.relevance && article.relevance.length > 0 && (
        <div className="related-articles">
          <h3>Related Articles</h3>
          <div className="related-grid">
            {article.relevance.map((related) => (
              <div key={related.id} className="related-item">
                <h4>{related.title}</h4>
                <img
                  src={related.thumbnail_url}
                  alt={related.title}
                  className="related-image"
                />
                <p>{new Date(related.date_of_publish).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
    {/* )} */}
  {/* </div> */}
  </>
  
  );
};


const Katturai_Details = () => {
  const articleData = {
    "id": 3002,
    "category_ids": [
        11
    ],
    "tag_ids": [
        679,
        943,
        1391,
        1419,
        1537,
        1415
    ],
    "author_id": 16,
    "title": "28-01-2025 - தேதிக்கான ராசி பலன்!",
    "short_desc": '"வாங்க அன்பர்களே வாழ்க்கையில்  தைரியமும் தன்னம்பிக்கை பெறபோகும் ராசிக்கான பலன்களை குறித்து பார்ப்போம்"',
    "keywords": "God, Spirituality, Zodiac singns, Rasi, Zodiac, Rasipalan, கடவுள், ஆன்மீகம், ராசிகள், ராசி, ராசி, ராசிபலன், ராசி பலன், தின பலன், மேஷம், ரிஷபம், மிதுனம், கடகம், சிம்மம், கன்னி, துலாம், விருச்சிகம், தனுசு, மகரம், கும்பம், மீனம்",
    "thumbnail_url": "images/astrology-08112024-08.png",
    "banner_url": `${Astrology1}`,
    "score": 1260,
    "likes": 7,
    "dislikes": 0,
    "viewed": 1225,
    "author_name": "லட்சுமி நாராயணன்",
    "createdAt": "2025-01-27T11:02:10.684Z",
    "tags": [
                "horoscope",
                "Zodiac signs",
                "Rasi",
                "Horoscopes",
                "Rasipalan",
                "Zodiac"
            ],
    "relevance": [
                {
                    "id": 2999,
                    "title": "27-01-2025 - தேதிக்கான ராசி பலன்!",
                    "thumbnail_url": `${Astrology1}`,
                    "date_of_publish": "2025-01-24T08:17:52.645Z"
                },
                {
                    "id": 2998,
                    "title": "26-01-2025 - தேதிக்கான ராசி பலன்!",
                    "thumbnail_url": `${Astrology3}`,
                    "date_of_publish": "2025-01-24T07:57:41.689Z"
                },
                {
                    "id": 2994,
                    "title": "23-01-2025 - தேதிக்கான ராசி பலன்!",
                    "thumbnail_url": `${Astrology4}`,
                    "date_of_publish": "2025-01-22T04:21:00.842Z"
                },
                {
                    "id": 2997,
                    "title": "25-01-2025 - தேதிக்கான ராசி பலன்!",
                    "thumbnail_url": `${Astrology5}`,
                    "date_of_publish": "2025-01-24T07:47:55.057Z"
                },
                {
                    "id": 3001,
                    "title": "வார ராசிபலன்! (26.01.2025 - 01.02.2025)",
                    "thumbnail_url": `${Astrology6}`,
                    "date_of_publish": "2025-01-24T13:47:23.628Z"
                },
                {
                    "id": 2995,
                    "title": "24-01-2025 - தேதிக்கான ராசி பலன்!",
                    "thumbnail_url": `${Astrology7}`,
                    "date_of_publish": "2025-01-23T04:05:38.278Z"
                },
                {
                    "id": 2990,
                    "title": "வார ராசிபலன்! (19.01.2025 - 25.01.2025)",
                    "thumbnail_url": `${Astrology8}`,
                    "date_of_publish": "2025-01-18T16:01:42.642Z"
                },
                {
                    "id": 2992,
                    "title": "21-01-2025 - தேதிக்கான ராசி பலன்!",
                    "thumbnail_url": `${Astrology3}`,
                    "date_of_publish": "2025-01-20T03:18:47.414Z"
                },
                {
                    "id": 2989,
                    "title": "20-01-2025 - தேதிக்கான ராசி பலன்!",
                    "thumbnail_url": `${Astrology2}`,
                    "date_of_publish": "2025-01-18T04:01:33.804Z"
                },
                {
                    "id": 2993,
                    "title": "22-01-2025 - தேதிக்கான ராசி பலன்!",
                    "thumbnail_url": `${Astrology4}`,
                    "date_of_publish": "2025-01-21T17:50:52.831Z"
                }
            ],
    "content": [
        {
            // "title": "28-01-2025 - தேதிக்கான ராசி பலன்!"
        },
        {
            // "quote": "வாங்க அன்பர்களே வாழ்க்கையில்  தைரியமும் தன்னம்பிக்கை பெறபோகும் ராசிக்கான பலன்களை குறித்து பார்ப்போம்"
        },
        {
            "para": "மேஷம் : எவ்வளவு பணம் வந்தாலும் எடுத்து வைக்க முடியவில்லையே என்று ஆதங்கப்படுவீர்கள். சிலர் உங்களை மட்டம் தட்டிப் பேசினாலும் உணர்ச்சி வசப்படாதீர்கள். பணம், நகையை கவனமாகக் கையாளுங்கள். வியாபாரத்தில் ஒப்பந்தம் தள்ளிப் போகும். உத்யோகத்தில் மற்றவர்களை நம்பி எந்த வேலையையும் ஒப்படைக்காதீர்கள். விழிப்புணர்வு தேவைப்படும் நாள்."
        },
        {
            "para": "ரிஷபம் : பணப்புழக்கம் அதிகரிக்கும். பழைய உறவினர் நண்பர்கள் தேடி வந்து பேசுவார்கள். வியாபாரத்தில் எதிர்பார்த்த ஒப்பந்தம் கையெழுத்தாகும். உத்தியோகத்தில் சில புதுமைகளைச் செய்து எல்லோரின் கவனத்தையும் ஈர்ப்பீர்கள். அமோகமான நாள்."
        },
        {
            "para": "மிதுனம் : தெளிவான முடிவுகள் எடுக்க முடியாமல் குழம்புவீர்கள். குடும்பத்தில் உள்ளவர்கள் உங்கள் நிறை குறைகளை எடுத்துச் சொன்னால் கோவப்படாதீர்கள். வியாபாரத்தில் வேலையாட்களிடம் தொழில் ரகசியங்களை சொல்லிக் கொண்டிருக்க வேண்டாம். உத்தியோகத்தில் ஈகோ வந்து செல்லும். கவனம் தேவைப்படும் நாள்."
        },
        {
            "para": "கடகம் : உங்களின் இலக்கை நோக்கி முன்னேறுவீர்கள். பெற்றோரின் ஒத்துழைப்பு அதிகரிக்கும். வீட்டைப் புதுப்பிக்க திட்டமிடுவீர்கள். அதன் காரணமாக சில சுபச் செலவுகள் ஏற்படலாம். புது பொருள் சிலருக்கு வந்து சேரும். வியாபாரத்தில் புதுத் தொழில் தொடங்கும் முயற்சி வெற்றி அடையும். உத்தியோகத்தில் உங்கள் கை ஓங்கும். திட்டங்கள் நிறைவேறும் நாள்."
        },
        {
            "para": "சிம்மம் : உங்களை அறியாமலேயே ஒருவித படபடப்பு தாழ்வுமனப்பான்மை வந்து செல்லும். தன்னம்பிக்கை குறையாமல் பார்த்துக் கொள்ளுங்கள். உறவினர்கள் நண்பர்கள் உங்களிடம் அதிக உரிமை எடுத்துக் கொள்வார்கள். வர வேண்டிய பணத்தை போராடி வசூலிப்பீர்கள். வியாபாரத்தில் புது முதலீடு செய்யலாம். உத்தியோகத்தில் சில சூட்சமங்களை கற்றுக் கொள்வீர்கள். தடைகள் ஏற்படும் நாள். எனினும், இறை அருளால் இறுதியில் சமாளித்து வெற்றி பெறுவீர்கள்."
        },
        {
            "para": "கன்னி : மற்றவர்களை நம்பி எந்த முடிவும் எடுக்க கூடாது என்று முடிவெடுப்பீர்கள். உறவினர்கள் உண்மையானவர்களை கண்டறிவீர்கள். அக்கம் பக்கம் வீட்டாரின் அன்புத் தொல்லை அதிகரிக்கும். கடையை விரிவுபடுத்துவீர்கள். உத்தியோகத்தில் அதிகாரிகள் வலிய வந்து உதவுவார்கள். புதுமை படைக்கும் நாள்."
        },
        {
            "img_url": `${Astrology2}`,
            "img_desc": ""
        },
        {
            "para": "துலாம் : விலை உயர்ந்த பொருட்களை கவனமாகக் கையாளுங்கள். கணவன்-மனைவிக்குள் கருத்து வேறுபாடுகள் வந்து நீங்கும். வாகனத்தை இயக்கும் போது அலைப்பேசியில் பேச வேண்டாம். வியாபாரத்தில் போட்டிகளை சமாளிப்பீர்கள். உத்தியோகத்தில் மேலதிகாரிகளால் விவாதம் வரக்கூடும். அதிகம் உழைக்க வேண்டிய நாள்."
        },
        {
            "para": "விருச்சிகம் : கடினமான காரியங்களை எளிதாக முடிப்பீர்கள். பிள்ளைகள் உங்கள் அறிவுரையை ஏற்றுக் கொள்வார்கள். மனைவி வழியில் நல்ல செய்தி உண்டு. வேற்று மதத்தவர் உதவுவார். வியாபாரத்தில் வேலையாட்கள் மதிப்பார்கள். உத்தியோகத்தில் பெரிய பொறுப்புகள் தேடி வரும்.  திறமைகள் வெளிப்படும் நாள்."
        },
        {
            "para": "தனுசு : முக்கிய அலுவல்களை மற்றவர்களை நம்பி ஒப்படைக்காமல் நீங்களே முடிப்பது நல்லது. பிள்ளைகளை அவர்கள் போக்கில் விட்டுப் பிடியுங்கள். வாகனத்தை இயக்கும் போது அலைப்பேசியில் பேச வேண்டாம். உத்தியோகத்தில் ஈகோ பிரச்சனை வந்து நீங்கும். பேச்சில் இங்கிதம் தேவைப்படும் நாள்."
        },
        {
            "para": "மகரம் : உங்களை அறியாமலேயே ஒருவித படபடப்பு தாழ்வுமனப்பான்மை வந்து செல்லும். உங்களை நீங்களே குறைத்து மதிப்பிடாதீர்கள். வியாபாரத்தில் பழைய சரக்குகளை போராடி விற்பீர்கள். உத்தியோகத்தில் அதிகாரிகளுடன் பனிப்போர் வந்து நீங்கும். விழிப்புணர்வு தேவைப்படும் நாள்."
        },
        {
            "para": "கும்பம் : அலைச்சல் இருந்தாலுமே எதிலும் வெற்றி பெறுவீர்கள். காணாமல் போன முக்கிய ஆவணங்கள் கிடைக்கும். சிலர் நாடி வந்தவர்களுக்கு தேடி உதவி செய்வீர்கள். வியாபாரத்தில் வேலையாட்கள் கடமையுணர்வுடன் செயல்படுவார்கள். உத்தியோகத்தில் சில நுணுக்கங்களை கற்றுக்கொள்வீர்கள். தேவைகள் பூர்த்தியாகும் நாள்."
        },
        {
            "para": "மீனம் : சொன்ன சொல்லை போராடிக் காப்பாற்றுவீர்கள். உறவினர்கள் நண்பர்கள் உங்களை கலந்தாலோசித்து சில முக்கிய முடிவுகள் எடுப்பார்கள். உங்களால் பயனடைந்தவர்கள் இப்போது உங்களுக்கு உதவி செய்வார்கள். வியாபாரத்தில் அதிரடி மாற்றம் செய்து லாபம் ஈட்டுவீர்கள். உத்தியோகத்தில் புதிய முயற்சிகள் பலிதமாகும். கடமை உணர்வுடன் செயல்படும் நாள்."
        },
        {
            
        },
        
        
        
        {
            
        }
    ],
    
    "updatedAt": "2025-01-28T18:07:44.830Z"
}

  return <ArticleDetails article={articleData} />;
};

export default Katturai_Details;
