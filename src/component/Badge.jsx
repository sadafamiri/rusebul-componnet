export default function({label,value}){
    return(
        <div className="badge-row">
            <span className="badge-label">{label}:</span>
            <span className="badge-value">{value}</span>
        </div>
    )
}