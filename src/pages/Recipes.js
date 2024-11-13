import PreviousSearches from "../components/PreviousSearches"
import RecipesCard from "../components/RecipesCard"

export default function Recipes() {
    const recipes = [
        {
            title: "Shahi Paneer",
            img: "/img/gallery/img_1.jpg",
            chefImage: "/img/top chefs/img_1.jpg",
            desc: "Shahi Paneer is a rich and creamy North Indian dish made from paneer (Indian cottage cheese) cooked in a luscious gravy of tomatoes, onions, and cashew nuts."
        },
        {
            title: "Veg Pulao",
            img: "/img/gallery/img_2.jpg",
            chefImage: "/img/top chefs/img_3.jpg",
            desc: "Veg Pulao is a fragrant and flavorful Indian rice dish made with basmati rice, a mix of vegetables, and aromatic spices. The rice is cooked with ingredients like peas, carrots, green beans, and potatoes, combined with spices such as cumin, cloves, bay leaves, and cardamom, which give it a rich aroma. "
        },
        {
            title: "Buttery Chhole Kulche",
            img: "/img/gallery/img_3.jpg",
            chefImage: "/img/top chefs/img_5.jpg",
            desc: "Buttery Chhole Kulche is a popular North Indian street food that combines soft, fluffy kulchas (a type of leavened flatbread) with a hearty chickpea curry, or chhole. The chickpeas are cooked in a rich, spicy, and buttery gravy made with tomatoes, onions, ginger, garlic, and aromatic spices like cumin, coriander, and garam masala."
        },
        {
            title: "North Indian Thali",
            img: "/img/gallery/img_4.jpg",
            chefImage: "/img/top chefs/img_4.jpg",
            desc: "A North Indian Thali is a delightful assortment of regional dishes served on a single platter, showcasing the diverse flavors and culinary richness of North India. Typically, a thali includes a mix of dishes that balance flavors, textures, and spices."
        },
        {
            title: "Heeng Aloo",
            img: "/img/gallery/img_5.jpg",
            chefImage: "/img/top chefs/img_2.jpg",
            desc: "Heeng Aloo (Asafoetida Potatoes) is a simple yet flavorful North Indian dish made with boiled potatoes seasoned with a unique blend of spices, including asafoetida (heeng), which gives the dish its distinctive aroma and taste. "
        },
        {
            title: "Dal Makhni",
            img: "/img/gallery/img_6.jpg",
            chefImage: "/img/top chefs/img_3.jpg",
            desc: "Dal Makhni is a rich, creamy, and flavorful lentil dish from North India, often enjoyed in Punjabi cuisine. Known for its smooth texture and luscious taste, this dish is a restaurant favorite and a staple in Indian homes."
        },
        {
            title: "Farm House Pizza",
            img: "/img/gallery/img_7.jpg",
            chefImage: "/img/top chefs/img_5.jpg",
            desc: "Farm House Pizza is a popular choice for veggie lovers, offering a fresh, garden-inspired experience on a classic pizza crust. This pizza is topped with a variety of fresh vegetables and delivers a balance of flavors and textures."
        },
        {
            title: "Pasta",
            img: "/img/gallery/img_8.jpg",
            chefImage: "/img/top chefs/img_1.jpg",
            desc: "Pasta is a beloved Italian dish known for its versatility, simplicity, and comforting flavors. Made primarily from wheat, water, and sometimes eggs, pasta serves as a blank canvas for a wide variety of sauces, vegetables, meats, and cheeses."
        },
        {
            title: "Burger",
            img: "/img/gallery/img_9.jpg",
            chefImage: "/img/top chefs/img_4.jpg",
            desc: "A burger is a classic, widely loved sandwich featuring a savory patty—typically beef, but also available in chicken, turkey, and vegetarian options—placed within a soft bun and often topped with various fresh and flavorful ingredients."
        },
        {
            title: "Noodles",
            img: "/img/gallery/img_10.jpg",
            chefImage: "/img/top chefs/img_2.jpg",
            desc: "Noodles are a beloved dish and staple in many cuisines around the world, known for their versatile form and ability to absorb a variety of flavors. Made from wheat, rice, or other flours, noodles come in numerous shapes, textures, and lengths and can be prepared in countless ways."
        }
    ].sort(() => Math.random() - 0.5)
    return (
        <div>
            <PreviousSearches/>
            <div className="recipes-container">
                {
                    recipes.map((recipe, index) => (
                        <RecipesCard key={index} recipe={recipe}/>
                    ))
                }
            </div>
        </div>
    )
}