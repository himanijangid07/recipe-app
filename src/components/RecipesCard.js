import CustomImage from "./CustomImage"

export default function RecipesCard({recipe}) {
    return (
        <div className="recipe-card">
            <CustomImage imgSrc={recipe.img} alt="" pt="65%"/>
            <div className="recipe-card-info">
                <img className="chef-image" src={recipe.chefImage} alt=""/>
                <p className="recipe-title">{recipe.title}</p>
                <p className="recipe-desc">{recipe.desc}</p>
                <a className="view-btn" href="#!">View Recipe</a>
            </div>
        </div>
    )
}