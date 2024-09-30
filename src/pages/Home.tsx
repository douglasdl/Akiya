import { Akiya as AkiyaComponent, AkiyaProps } from "../components/Akiya";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import { supabase } from "../libs/supabaseClient";
import { languages } from "../utils/dictionary";

export function Home() {
  const [currentLanguage, serCurrentLanguage] = useState(languages.Portuguese)
  const [akiyas, setAkiyas] = useState<AkiyaProps[]>([]);

  async function getAkiyas() {
    const { data, error } = await supabase.from("Akiya").select();
    if (error) {
      console.error('Error fetching akiyas:', error);
      return;
    }
    if (data) {
      setAkiyas(data);
    }
  }

  useEffect(() => {
    getAkiyas();
    serCurrentLanguage(languages.Portuguese)
  }, []);

  return (
    <div>
      <Header currentLanguage={currentLanguage} />
      <div className="grid-cols-1 max-w-full my-0 mx-auto py-0 px-4 grid md:grid-cols-3 items-start bg-slate-100 dark:bg-slate-800 text-green-700 dark:text-green-200">
        {akiyas.map(akiya => {
          const mainImage = akiya.mainImage? akiya.mainImage : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
          
          return (
            <AkiyaComponent 
              key={akiya.id}
              floorPlan={akiya.floorPlan}
              isSelling={akiya.isSelling}
              salePrice={akiya.salePrice}
              isRenting={akiya.isRenting}
              rentalPrice={akiya.rentalPrice}
              isMigrationArea={akiya.isMigrationArea}
              city={akiya.city}
              prefecture={akiya.prefecture}
              address={akiya.address}
              map={akiya.map}
              mainImage={mainImage}
              floorPlanImage={akiya.floorPlanImage}
              images={akiya.images}
              videos={akiya.videos}
              landArea={akiya.landArea}
              buildArea={akiya.buildArea}
              buildYear={akiya.buildYear}
              vacantSince={akiya.vacantSince}
              garages={akiya.garages}
              url={akiya.url}
              currentLanguage={currentLanguage}
              sellerId={"0"}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}