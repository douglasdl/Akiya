import styles from './Akiya.module.css'

interface AkiyaProps {
    floorPlan: string | null | undefined;
    price: number | bigint;
    city: string | null | undefined;
    prefecture: string | null | undefined;
    mainImage: string | undefined;
    landArea: number | null | undefined;
    buildArea: number | null | undefined;
    built: number | null | undefined;
    vacantSince: number | null | undefined;
    garages: number | null | undefined;
    rooms: number | null | undefined;
}




export function Akiya(props:AkiyaProps) {

    const japaneseIene = Intl.NumberFormat("ja", {
        style: "currency",
        currency: "JPY",
    });

    const brazilianReal = Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    const BRLprice = Number(props.price) * 0.03975;

    
    return (
        <div className={styles.akiya}>
            <header>
                <div>
                    <h1>{props.floorPlan}</h1>
                    <h2>{japaneseIene.format(props.price)}</h2>
                    <div>{brazilianReal.format(BRLprice)}</div>
                </div>
                <div>
                    <h2>{props.city}</h2>
                    <h3>{props.prefecture}</h3>
                </div>
            </header>
            <img 
                className={styles.mainImage}
                src={props.mainImage}
            />
            <div className={styles.types}>
                <div className={styles.sale}>Venda</div>
                <div className={styles.migration}>Área de Migração</div>
                <div className={styles.rental}>Aluguel</div>
            </div>
            <div className={styles.mainInfo}>
                <div className={styles.areaInfo}>
                    <div className={styles.field}>{props.landArea}m²</div>
                    <div className={styles.field}>{props.buildArea}m²</div>
                </div>
                <div className={styles.buildInfo}>
                    <div className={styles.field}>🏠: {props.built}</div>
                    <div className={styles.field}>🏚️: {props.vacantSince}</div>
                </div>
                <div className={styles.roomsInfo}>
                    <div className={styles.field}>🚗: {props.garages}</div>
                    <div className={styles.field}>🛏️: {props.rooms}</div>
                </div>
            </div>
        </div>
    )
}