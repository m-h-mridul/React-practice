export default function DataView({ data = 0 }) {
    if (data >= 100) {
        return (
            <div>
                <h1>The water would boil {data}</h1>
            </div>
        )
    }
    return (
        <div><h1>The water would not boil</h1>
        </div>
    )
}