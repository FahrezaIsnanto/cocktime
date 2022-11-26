import "./CocktailCard.css";


export default function CocktailCard() {
    return(
        <div className="card">
            <div className="card-img">
                    <img src="https://images.unsplash.com/photo-1669172460021-cf270d946e56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="icon egg" className="w-2/5 mx-auto my-auto" />
            </div>
            <div >
                <p className="title">
                    Alya
                </p>
                <p className="title-1">
                    Zahra
                </p>
            
                <p className="title-2">
                    Fatikha
                </p>
            </div>
        </div>
    )
}