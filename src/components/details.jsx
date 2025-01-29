import React from 'react';
import { useParams } from 'react-router-dom';
import CoconutRice from "../components/assets/images/Coconutrice.jpg";
import puliyotharaiRice from "../components/assets/images/puliyotharai.jpg";
import lemonRice from "../components/assets/images/lemonrice.jpg";
import tomatoRice from "../components/assets/images/tomatorice.jpg";
import curdRice from "../components/assets/images/curdrice.jpg";
import idli from "../components/assets/images/idli.jpg";
import { FaShareAlt, FaHeart, FaClock, FaUserFriends } from 'react-icons/fa';

function Details() {
  const { id } = useParams(); 
  console.log(id)

  const foodDetail = [
    {
      id: "0",
      name: "Coconut Rice",
      image: CoconutRice,
      ingredients: [
        "2 cups cooked rice",
        "1 cup grated coconut",
        "2 tbsp oil",
        "1 tsp mustard seeds",
        "1 tsp cumin seeds",
        "2 green chilies (chopped)",
        "A few curry leaves",
        "Salt to taste",
      ],
      process: [
        "Heat oil in a pan and add mustard seeds, cumin seeds, and curry leaves.",
        "Once they splutter, add green chilies and grated coconut. Sauté for a minute.",
        "Mix the cooked rice into the pan and stir gently to combine.",
        "Add salt to taste, mix well, and serve hot."
      ],
      medicalUses: [
        "Rich in healthy fats from coconut, good for digestion.",
        "Provides quick energy and is easy on the stomach.",
        "Coconut has antibacterial and antifungal properties."
      ]
    },
    {
      id: "1",
      name: "Puliyotharai Rice",
      image: puliyotharaiRice,
      ingredients: [
        "2 cups cooked rice",
        "2 tbsp tamarind paste",
        "1 tsp mustard seeds",
        "2 dry red chilies",
        "1/4 cup roasted peanuts",
        "1 tsp turmeric powder",
        "Salt to taste",
      ],
      process: [
        "Heat oil in a pan, add mustard seeds, and dry red chilies.",
        "Add tamarind paste, turmeric powder, and salt. Cook until the oil separates.",
        "Mix the cooked rice into the tamarind mixture.",
        "Add roasted peanuts, stir well, and serve."
      ],
      medicalUses: [
        "Tamarind is a natural digestive aid and rich in antioxidants.",
        "Turmeric is anti-inflammatory and boosts immunity.",
        "A comforting dish for upset stomachs."
      ]
    },
    {
                id:"2",
                  name: "Lemon Rice",
                  image: lemonRice,
                  ingredients: [
                    "2 cups cooked rice",
                    "2 tbsp lemon juice",
                    "1 tsp mustard seeds",
                    "1 green chili (chopped)",
                    "A few curry leaves",
                    "1/4 tsp turmeric powder",
                    "Salt to taste",
                  ],
                  process: [
                    "Heat oil in a pan and add mustard seeds and curry leaves.",
                    "Add green chili, turmeric powder, and salt. Sauté for a few seconds.",
                    "Mix the cooked rice into the pan.",
                    "Add lemon juice, stir gently, and serve."
                  ],
                  medicalUses: [
                    "Lemon is rich in vitamin C, boosting immunity.",
                    "A light and refreshing dish, good for hot climates.",
                    "Helps in detoxifying the body."
                  ]
                },
                {
                    id:"3",
                  name: "Tomato Rice",
                  image: tomatoRice,
                  ingredients: [
                    "2 cups cooked rice",
                    "1 cup chopped tomatoes",
                    "1 tsp ginger-garlic paste",
                    "1 tsp mustard seeds",
                    "1/4 tsp turmeric powder",
                    "Salt to taste",
                  ],
                  process: [
                    "Heat oil in a pan, add mustard seeds and let them splutter.",
                    "Add ginger-garlic paste, turmeric powder, and chopped tomatoes. Cook until soft.",
                    "Mix the cooked rice into the tomato mixture.",
                    "Add salt to taste, mix well, and serve hot."
                  ],
                  medicalUses: [
                    "Tomatoes are rich in antioxidants and vitamin C.",
                    "A good source of lycopene, beneficial for heart health.",
                    "Supports skin health and hydration."
                  ]
                },
                {
                    id:"4",
                  name: "Curd Rice",
                  image: curdRice,
                  ingredients: [
                    "2 cups cooked rice",
                    "1 cup curd (yogurt)",
                    "1 tsp mustard seeds",
                    "A few curry leaves",
                    "1 green chili (chopped)",
                    "Salt to taste",
                  ],
                  process: [
                    "Mash the cooked rice and mix it with curd.",
                    "Heat oil, add mustard seeds, curry leaves, and green chili. Sauté for a few seconds.",
                    "Pour the tempering over the curd rice and mix well.",
                    "Add salt to taste and serve chilled."
                  ],
                  medicalUses: [
                    "Curd is excellent for gut health and aids digestion.",
                    "A cooling dish, ideal for hot weather.",
                    "Provides probiotics that strengthen immunity."
                  ]
                },
                {
                    id:"5",
                  name: "Idli",
                  image: idli,
                  ingredients: [
                    "2 cups idli batter",
                    "Oil for greasing idli molds",
                  ],
                  process: [
                    "Grease idli molds with oil and pour the batter into each mold.",
                    "Steam cook for 10-12 minutes until idlis are fluffy.",
                    "Serve hot with chutney or sambar."
                  ],
                  medicalUses: [
                    "Fermented batter improves gut health.",
                    "Low in calories and easy to digest.",
                    "A balanced meal, providing carbohydrates and protein."
                  ]
                },
    // Add the other food items here...
  ];

  const selectedFood = foodDetail.find((food) => food.id === id);
  console.log(selectedFood)

  return (
    <>
      {selectedFood ? (
        <div className="food-detail-card">
          {/* Left Section: Image and Icons */}
          <div className="left-section">
          <div className="product-image">
            <div className="image-container">
              <img src={selectedFood.image} alt={selectedFood.name} className="food-image" />
              <div className="image-overlay">
                <h3>{selectedFood.name}</h3>
              </div>
            </div>
            </div>
            <div className="icon-section">
              <FaShareAlt className="icon" title="Share" />
              <FaHeart className="icon" title="Favorite" />
              <FaClock className="icon" title="Preparation Time" />
              <FaUserFriends className="icon" title="Servings" />
            </div>
          </div>

          {/* Right Section: Details */}
          <div className="right-section">
            <h2 className="food-title">{selectedFood.name}</h2>

            {/* Ingredients */}
            <div className="ingredients-section">
              <h3>Ingredients</h3>
              <ul>
                {selectedFood.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div className="process-section">
              <h3>Process</h3>
              <ol>
                {selectedFood.process.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>

            {/* Medical Uses */}
            <div className="medical-uses-section">
              <h3>Medical Uses</h3>
              <ul>
                {selectedFood.medicalUses.map((use, index) => (
                  <li key={index}>{use}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <p>Food details not found!</p>
      )}
    </>
  );
}

export default Details;
