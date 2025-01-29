import React, { useEffect, useState } from "react";
import { IoCloseSharp, IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Katturai.css";
// import category_3 from './assets/katturai_images/category_3.png'
import category_3 from './assets/katturai_images/earth_gif.gif'
// import category_5 from './assets/katturai_images/category_5.png'
import category_5 from './assets/katturai_images/nature_gif.gif'
// import category_9 from './assets/katturai_images/category_9.png'
import category_9 from './assets/katturai_images/education_gif.gif'
// import category_11 from './assets/katturai_images/category_11.png'
import category_11 from './assets/katturai_images/rasipalan_gif.gif'
import category_7 from './assets/katturai_images/category_7.png'
import Astrology1 from './assets/katturai_images/astrology-08112024-09.png'
import Astrology2 from './assets/katturai_images/astrology-08112024-20 (1).png'
import Weekly from './assets/katturai_images/weekly-special-2991-1.png'
import TicTok from './assets/katturai_images/tiktok-2984-2.png'
import China from './assets/katturai_images/china2985-1.png'
import Vehicle from './assets/katturai_images/vehicle-2944-1.png'
import Tsunami from './assets/katturai_images/tsunami-2973-1.png'
import Chess from './assets/katturai_images/chess-2954-3.png'
import Num1 from './assets/katturai_images/15052023-64.png'
import Bus from './assets/katturai_images/bus2.png'
import black from './assets/katturai_images/back.png'
import Mother4 from './assets/katturai_images/mother4.png'
import real1 from './assets/katturai_images/real1.png'
import img602 from './assets/katturai_images/602-1.png'
import team from './assets/katturai_images/team.png'
import vasthu from './assets/katturai_images/vasthu1512.png'
import img521 from './assets/katturai_images/521-1.png'
import img503 from './assets/katturai_images/503-1.png'
import axios from 'axios'
import { config } from "../Utils/config";
import { useMediaQuery } from "react-responsive";
// import Astrology1 from './assets/katturai_images/astrology-08112024-09.png'


const Katturai = () => {
  const [activeLink, setActiveLink] = useState(""); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: "1150px" });

  
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const [data, setData] = useState([
    
                  {
                "type": 12,
                "title": "20-01-2025 - தேதிக்கான ராசி பலன்!",
                "short_desc": " வாங்க அன்பர்களே  இன்று வாழ்வில் உயர்வை பெற போகும்   ராசிக்கான பலன்களை குறித்து பார்ப்போம்",
                "image_url": `${Astrology2}`,
                "id": 2989
              },
              {
                "type": 12,
                "title": "வார ராசிபலன்! (19.01.2025 - 25.01.2025)",
                "short_desc": "இந்த வாரம் உங்களுக்கு எப்படி இருக்கும் என தெரிந்து கொள்ள வேண்டுமா? வாருங்கள்! மேஷம் முதல் மீனம் வரை 12 ராசிகளுக்கான, இந்த வார (19.01.2025 - 25.01.2025) ராசி பலனைக் காணலாம்.",
                "image_url": `${Astrology1}`,
                "id": 2990
              },
              {
                "type": 4,
                "title": "இந்த வார சிறப்புகள்..! (19.01.2025 - 25.01.2025)!",
                "short_desc": "இந்த வாரம் வரும் நாட்களின் முக்கியத்துவம், வரப்போகும் விசேஷங்கள், பண்டிகைகள் போன்றவற்றை பார்க்கலாம் வாங்க…!",
                "image_url": `${Weekly}`,
                "id": 2991
              },
              {
                "type": 13,
                "id_1": 4,
                "id_2": 11,
                "id_3": 10,
                "id_4": 6
              },
              {
                "type": 4,
                "title": "ஒரு காலத்தில் மிகப்பிரபலமாக இருந்த டிக்-டாக் Tik-Tok செயலியின் இப்போதைய நிலை என்ன தெரியுமா?",
                "short_desc": "நமது இந்தியாவில் தடை செய்யப்பட்ட செயலியாக இருந்தாலும், உலகம் முழுக்க உள்ள பிற நாடுகளிலிருந்து, சுமார் 100 கோடிக்கும் அதிகமானோர் இந்த செயலியை உபயோகித்துக் கொண்டு தான் உள்ளார்கள்.",
                "image_url": `${TicTok}`,
                "id": 2984
              },
              {
                "type": 12,
                "title": "'சீனா' எனப்படும் உலகின் தொழிற்சாலை!",
                "short_desc": "சென்ற ஆண்டில் மட்டும் சீனாவின் ஏற்றுமதி, முதல் முறையாக அதன் இறக்குமதியை காட்டிலும் 1 டிரில்லியன் டாலர் (சுமார் 85 லட்சம் கோடி இந்திய மதிப்பில்) அளவிற்கு உயர்ந்துள்ளது.",
                "image_url": `${China}`,
                "id": 2985
              },
              {
                "type": 12,
                "title": "ரோட்டில் கவனமின்றி செல்லும் ஒவ்வொருவரும் ஒரு மனித வெடிகுண்டே!",
                "short_desc": "இந்தியாவில் கடந்த 2023-ம் ஆண்டில் மட்டும் சுமார் 1,80,000 பேர் (தினம் சராசரி 500 பேர்) சாலை விபத்தில் இறந்துள்ளனர், 5,00,000-க்கும் அதிகமானோர் காயம் அடைந்துள்ளனர்.",
                "image_url": `${Vehicle}`,
                "id": 2944
              },
              {
                "type": 4,
                "title": "இந்த 20 வருடங்களில் நாம் இன்னொரு சுனாமிக்கு தயாராக உள்ளோமா?",
                "short_desc": "சரியாக 20 வருடத்திற்கு முன் ஏற்பட்ட சுனாமியில், சுமார் 2,30,000-க்கும் மேற்பட்டோர் இந்தோனேஷியா, தாய்லாந்து, இலங்கை, இந்தியா மற்றும் மாலத்தீவு போன்ற நாடுகளில் இறந்துள்ளனர்.",
                "image_url": `${Tsunami}`,
                "id": 2973
              },
              {
                "type": 4,
                "title": "உலக செஸ் மேப்பில் நம் சென்னை உற்று நோக்கி பார்க்கப்படுகிறது!",
                "short_desc": "1988-ல் நமது சென்னையை சேர்ந்த, திரு. விஸ்வநாதன் ஆனந்த் அவர்கள் முதல்  முறையாக இந்தியாவின் செஸ் கிராண்ட் மாஸ்டர் ஆனதுக்கு பிறகு, இது வரை நாம் 64 கிராண்ட் மாஸ்டர்களை உருவாக்கியுள்ளோம்.",
                "image_url": `${Chess}`,
                "id": 2954
              },
              {
                "type": 12,
                "title": "வெளிநாடுகளும் சில வினோத சட்டங்களும்!..",
                "short_desc": "உலகில் ஒவ்வொரு நாட்டிலும் ஒவ்வொரு மாதிரியான சட்ட திட்டங்கள் காணப்பட்டாலுமே அவற்றுள் சில மிகவும் விநோதமானவையாக உள்ளது. அவற்றை குறித்துத் தான் இந்தக் கட்டுரையில் நாம் காண இருக்கிறோம். வாங்க அந்த வினோத சட்டங்களைப் பற்றிப் பார்ப்போம். ",
                "image_url": `${Num1}`,
                "id": 1832
              },
              {
                "type": 4,
                "title": "தீதும் நன்றும் பிறர்தர வாரா! ",
                "short_desc": "அது ஒரு நள்ளிரவு வேளை. மணிக்கு 70 கிலோ மீட்டர் வேகத்தில் அந்தப் பேருந்து சென்று கொண்டு இருந்தது. ஜில் என்று காற்று.",
                "image_url": `${Bus}`,
                "id": 1002
              },
              {
                "type": 4,
                "title": "வெண் புள்ளி என்றால்?",
                "short_desc": "வெண் புள்ளி அல்லது வெண்புள்ளிகள் என்பது சருமத்தில் ஏற்படும் நிறமி இழப்பு ஆகும். இதனாலேயே சருமத்தில் வெண்மை நிறப் புள்ளிகள் தோன்றுகிறது.",
                "image_url": `${black}`,
                "id": 902
              },
              {
                "type": 4,
                "title": "அம்மா பிள்ளைகள்! பகுதி-1",
                "short_desc": "அம்மா பிள்ளைகள்! ",
                "image_url": `${Mother4}`,
                "id": 806
              },
              {
                "type": 4,
                "title": "நகரங்களில் சொந்த வீடு வாங்கலாமா?",
                "short_desc": "நகரங்களில் சொந்த வீடு வாங்கலாமா? அல்லது வாடகை வீட்டிலேயே இருந்து விடலாமா? பார்க்கலாம் வாங்க.",
                "image_url": `${real1}`,
                "id": 702
              },
              {
                "type": 12,
                "title": "தொண்டையும் சில தகவல்களும் !",
                "short_desc": "தொண்டை (Throat) என்பது தலையினையும், உடலினையும் இணைக்கும் கழுத்தின் முன்புறப் பகுதியாகும். தொண்டைக் குழி என்பது தொண்டையின் அடிப்பகுதி, அதாவது மார்பின் மேற்பகுதியைக் குறிக்கிறது.",
                "image_url": `${img602}`,
                "id": 602
              },
              {
                "type": 4,
                "title": "ஒரு பாடலைக் கேட்பதால் இவ்வளவு நன்மைகளா?\n",
                "short_desc": "பிடித்த பாடல்களைக் கேட்பதால், மனம், இதயத்துடிப்பு மற்றும் சுவாசம் ஆகியவற்றில் மிகப்பெரிய மாறுதல்கள் ஏற்படுவதாக ஆய்வாளர்கள் தற்போது கண்டறிந்துள்ளனர். ",
                "image_url": `${img503}`,
                "id": 503
              },
              {
                "type": 12,
                "title": "நீங்கள் எந்த ரகம்?",
                "short_desc": "ஒரு சீடன் தனது ஜென் குருவிடம் கேட்டானாம்!, \"குருவே நான் இந்த சமூகத்தில் வாழும் போது எப்படி இருக்க வேண்டும்?\" என்று.",
                "image_url": `${img521}`,
                "id": 521
              },
              {
                "type": 4,
                "title": "வாஸ்து சாஸ்திரத்தில் நிர்ருதி!",
                "short_desc": "இந்திரன், அக்னி, யமன், நிர்ருதி (நைருதி), வருணன், வாயு, குபேரன், ஈசானன் ஆகிய இவர்கள் எட்டு பேரையும் அஷ்ட திக் பாலகர்கள் என்று கூறுவோம்.",
                "image_url": `${vasthu}`,
                "id": 1427
              },
              {
                "type": 4,
                "title": "நீங்கள் முணுமுப்பவரா? இல்லை சாதிப்பவரா? ",
                "short_desc": "அந்தக் கம்பெனியின் நிர்வாகம் ஒரு நாள் ஒன்று கூடி போர்க்கால அடிப்படையில் அந்த வராக் கடனை வசூலிக்க முடிவு செய்தது.",
                "image_url": `${team}`,
                "id": 535
              },
              {
                "type": 14,
                "title": "உலகப் பொருள்களின் ஆதாரங்களை பொறுப்புடன் விளக்கும் ஞானப் பெட்டகம்!",
                "image_url": `${category_7}`,
                "id": 7
              }
  ]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`${config.api}articles/home`);
  //       setData(response.data.home); // Assuming `response.data.home` contains your desired data
  //       console.log('Data fetched successfully:', response);
  //     } catch (error) {
  //       console.error('Error fetching data:', error.message);
  //     }
  //   };

  //   fetchData(); // Call the async function
  // }, []);

  const handleSetActive = (link) => {
    setActiveLink(link); 
  };

  return (
    <div className="katturai">
      <div className="header">
      {isMobile && (
  <>
    <span className="menu-icon" onClick={toggleMenu}>
      ☰
    </span>
    <nav>
      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
      <span className="close" onClick={toggleMenu}>
      <IoCloseSharp size={24}/>
    </span>
        {/* <a href="#" className="nav-link active">
          Home
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a> */}
        <Link
            to=""
            className={`nav-link ${activeLink === "" ? "active" : ""}`}
            onClick={() => {handleSetActive("");toggleMenu()}}
          >
            Home
          </Link>
          <Link
            to="#trending"
            className={`nav-link ${activeLink === "trending" ? "active" : ""}`}
            onClick={() => {handleSetActive("trending");toggleMenu()}}
          >
            Trending
          </Link>
          <Link
            to="#news"
            className={`nav-link ${activeLink === "news" ? "active" : ""}`}
            onClick={() => {handleSetActive("news");toggleMenu()}}
          >
            News
          </Link>
          <Link
            to="#favourites"
            className={`nav-link ${activeLink === "favourites" ? "active" : ""}`}
            onClick={() => {handleSetActive("favourites");toggleMenu()}}
          >
            Favourites
          </Link>
          <Link
            to="#categories"
            className={`nav-link ${activeLink === "categories" ? "active" : ""}`}
            onClick={() => {handleSetActive("categories");toggleMenu()}}
          >
            Categories
          </Link>
          <Link
            to="#authors"
            className={`nav-link ${activeLink === "authors" ? "active" : ""}`}
            onClick={() => {handleSetActive("authors");toggleMenu()}}
          >
            Authors
          </Link>
          <Link
            to="#tags"
            className={`nav-link ${activeLink === "tags" ? "active" : ""}`}
            onClick={() => {handleSetActive("tags");toggleMenu()}}
          >
            Tags
          </Link>
      </div>
    </nav>
    
  </>
)}

        <div className="header-top">
          <h1>கட்டுரைகள்</h1>
          <button className="search-btn2">
            <IoSearch />
          </button>
        </div>
        <nav className="nav-links">
          <Link
            to=""
            className={`nav-link ${activeLink === "" ? "active" : ""}`}
            onClick={() => handleSetActive("")}
          >
            Home
          </Link>
          <Link
            to="#trending"
            className={`nav-link ${activeLink === "trending" ? "active" : ""}`}
            onClick={() => handleSetActive("trending")}
          >
            Trending
          </Link>
          <Link
            to="#news"
            className={`nav-link ${activeLink === "news" ? "active" : ""}`}
            onClick={() => handleSetActive("news")}
          >
            News
          </Link>
          <Link
            to="#favourites"
            className={`nav-link ${activeLink === "favourites" ? "active" : ""}`}
            onClick={() => handleSetActive("favourites")}
          >
            Favourites
          </Link>
          <Link
            to="#categories"
            className={`nav-link ${activeLink === "categories" ? "active" : ""}`}
            onClick={() => handleSetActive("categories")}
          >
            Categories
          </Link>
          <Link
            to="#authors"
            className={`nav-link ${activeLink === "authors" ? "active" : ""}`}
            onClick={() => handleSetActive("authors")}
          >
            Authors
          </Link>
          <Link
            to="#tags"
            className={`nav-link ${activeLink === "tags" ? "active" : ""}`}
            onClick={() => handleSetActive("tags")}
          >
            Tags
          </Link>
        </nav>
      </div>
      
      <div className="container">
        
        {data.map((article) => (
        //   <div className="article" key={article.id}>
        //     <h2>{article.title}</h2>
        //     <img src={article.image_url} alt={article.title} />
        //     <p>{article.short_desc}</p>
        //   </div>


        // {article.type === 12 && (
        //     <div className="type-one">
        //       <h2>Text</h2>
        //       <img src="image1.jpg" alt="Max Size Image" />
        //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        //     </div>
        //   )}
        <div>
        {article.type === 12 && (
          <Link to={'/katturai-details'} className="link">
            <div className="type-one" key={article.id}>
              <h2>{article.title}</h2>
              {/* <h1>{article.type}</h1> */}
              <img src={article.image_url} alt="Max Size Image" />
              <p>{article.short_desc}</p>
            </div>
            </Link>
          )}
          {article.type === 4 && (
  <div className="type-two">
    <div className="sep">
    <div className="text">
      <h3>{article.title}</h3>
      </div>
      <div className="image">
      <img src={article.image_url} alt="Small Image" />
      </div>
    </div>
   
      
    
    <p>{article.short_desc}</p>
  </div>
)}
      {article.type === 13 && (
  <div className="type-three" key={article.id}>
    {/* <div className="four-images"> */}
      {/* {[{Astrology2}, {Astrology2}, {Astrology2}, {Astrology2}].map((idKey, index) => ( */}
      
        <img
          src= {category_3}
          // {data.find((d) => d.id === article[idKey])?.image_url || ""}
          alt={`Image`}
          // key={idKey}
          className="equal-size-image"
        />
       
        {/* <div className="image-container">
  <span className="image-text">Your Text Here</span>
  <img
    src={category_3}
    alt="Image"
    className="equal-size-image"
  />
</div> */}
         <img
          src= {category_5}
          // {data.find((d) => d.id === article[idKey])?.image_url || ""}
          alt={`Image`}
          // key={idKey}
          className="equal-size-image"
        />
         <img
          src= {category_9}
          // {data.find((d) => d.id === article[idKey])?.image_url || ""}
          alt={`Image`}
          // key={idKey}
          className="equal-size-image"
        />
         <img
          src= {category_11}
          // {data.find((d) => d.id === article[idKey])?.image_url || ""}
          alt={`Image`}
          // key={idKey}
          className="equal-size-image"
        />
      {/* )) */}
      {/* } */}
    </div>
  // </div>
)}
{article.type === 14 && (
            <div className="type-one" key={article.id}>
              
              {/* <h1>{article.type}</h1> */}
              <img src={article.image_url} alt="Max Size Image" />
              <h2>{article.title}</h2>
            </div>
          )}

          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Katturai;
