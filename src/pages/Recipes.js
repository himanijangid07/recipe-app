export default function Recipes() {
    const searches = ["pizza", "burger", "cookies", "juice", "biryani", "salad", "ice-cream", "lasagna", "pudding", "soup"]
    return (
        <div>
            <div className="previous-searches section">
                <h2>Previous Searches</h2>
                <div className="previous-searches-container">
                    {
                        searches.map((search, index) => (
                            <div key={index } style={{animationDelay: index * .2  + "s"}} className="search-item">
                                {search}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}