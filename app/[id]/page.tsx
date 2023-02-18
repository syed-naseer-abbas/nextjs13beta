
export default function dynamicroutes({ params }: { params: { id: string } }) {
    return (
        <div>
            <h1> Dynamic Routing </h1>
            <h1> Following typed in URL : {params.id} </h1>
        </div>
    )
}
