import { Akiya } from "../components/Akiya";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Home() {

  const data = {
    akiyas: [
      {
        id: 1,
        floorPlan: "3LDK",
        price: 70000,
        salePrice: 10000000,
        city: "Hirakata",
        prefecture: "Osaka",
        mainImage: undefined,
        picture: [
          {
            url: ""
          }
        ],
        landArea: 0,
        buildArea: 60,
        built: undefined,
        buildYear: 0,
        vacantSince: 0,
        garages: 0,
        rooms: 3,
        bedrooms: 3
      }
    ]
  }

  return (
    <div>
      <Header />
      <div className="grid-cols-1 max-w-full my-0 mx-auto py-0 px-4 grid md:grid-cols-3 items-start bg-slate-100 text-green-700">
        {data?.akiyas.map(akiya => {
          if(akiya.picture.length === 1 && akiya.salePrice !== -1) {
            const mainImage = akiya.picture[0].url;
            return (
              <Akiya 
                key={akiya.id}
                floorPlan={akiya.floorPlan}
                price={Number(akiya.salePrice)}
                city={akiya.city}
                prefecture={akiya.prefecture}
                landArea={akiya.landArea}
                buildArea={akiya.buildArea}
                mainImage={mainImage}
                garages={akiya.garages}
                built={akiya.buildYear}
                vacantSince={akiya.vacantSince}
                rooms={akiya.bedrooms}
              />
            )
          } else if(akiya.picture.length <= 0 && akiya.salePrice !== -1) {
            return (
              <Akiya 
                key={akiya.id}
                floorPlan={akiya.floorPlan}
                price={Number(akiya.salePrice)}
                city={akiya.city}
                prefecture={akiya.prefecture}
                landArea={akiya.landArea}
                buildArea={akiya.buildArea}
                mainImage={"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"}
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