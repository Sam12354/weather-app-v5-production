export default function FunFactsItem({facts}){
    return (
        <div className="portfolio-item">
            <div className="show-facts">
                <span className="fw-bold fs-5">{facts}</span>
            </div>
        </div>
    )
}