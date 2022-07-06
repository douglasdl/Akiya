import { Akiya } from "../components/Akiya";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useGetAkiyasQuery } from "../graphql/generated";

import styles from "./Home.module.css";

export function Home() {

    const { data } = useGetAkiyasQuery();

    return (
        <div>
            <Header />
            <div className={styles.wrapper}>
                {data?.akiyas.map(akiya => {
                    if(akiya.picture.length === 1) {
                        const mainImage = akiya.picture[0].url;
                        return (
                            <Akiya 
                                key={akiya.id}
                                floorPlan={akiya.floorPlan}
                                price={akiya.salePrice}
                                city={akiya.city}
                                landArea={akiya.landArea}
                                buildArea={akiya.buildArea}
                                mainImage={mainImage}
                                garages={akiya.garages}
                                built={akiya.buildYear}
                                vacantSince={akiya.vacantSince}
                                rooms={akiya.bedrooms}
                            />
                        )
                    } else {
                        return (
                            <Akiya 
                                key={akiya.id}
                                floorPlan={akiya.floorPlan}
                                price={akiya.salePrice}
                                city={akiya.city}
                                landArea={akiya.landArea}
                                buildArea={akiya.buildArea}
                                mainImage={""}
                                garages={akiya.garages}
                                built={akiya.buildYear}
                                vacantSince={akiya.vacantSince}
                                rooms={akiya.bedrooms}
                            />
                        )
                    }
                })}
            </div>
            <Footer />
        </div>
    )
}