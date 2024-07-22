import HoraireDialog from "./HoraireDialog";


export default function HorairePage () {

    return (
        <div style={{
            display: 'inline',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
            boxSizing: 'border-box',

        }}>
            <HoraireDialog
                title={"Activités et Ptite Grenouille"}
                date={"02/09/2024"}
                icon={<img src={"../images/chest_icon"} alt={""}/>} //TODO: turn image into icon
                text={"Test"}
            />
        </div>

    )
}