import Info from "./info"

function Biome (name, missions) {
    return <>
    <div className="biome-container">
            <ul className="info-list">
                {missions.map((x) => (
                    <Info name={x["CodeName"]} complexity={x["Complexity"]} length={x["Length"]}
                    primObj={x["PrimaryObjective"]} secObj={x["SecondaryObjective"]} id={x["id"]}
                    />
                ))}
            </ul>
        </div>
    </>
}