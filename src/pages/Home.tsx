import { Akiya as AkiyaComponent } from "../components/Akiya";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import { supabase } from "../libs/supabaseClient";

interface Akiya {
  id: string; // Assuming id is a string (UUID)
  floorPlan: string;
  price: number;
  salePrice: number;
  city: string;
  prefecture: string;
  mainImage?: string;
  picture: string[];
  landArea: number;
  buildArea: number;
  built?: Date; // Assuming built is a Date object
  buildYear: number;
  vacantSince: number;
  garages: number;
  rooms: number;
  bedrooms: number;
}

export function Home() {
  const [akiyas, setAkiyas] = useState<Akiya[]>([]);

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
  }, []);

  return (
    <div>
      <Header />
      <div className="grid-cols-1 max-w-full my-0 mx-auto py-0 px-4 grid md:grid-cols-3 items-start bg-slate-100 dark:bg-slate-800 text-green-700 dark:text-green-200">
        {akiyas.map(akiya => {
          const mainImage = akiya.picture.length > 0 ? akiya.picture[0] : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
          
          return (
            <AkiyaComponent 
              key={akiya.id}
              floorPlan={akiya.floorPlan}
              price={akiya.salePrice}
              city={akiya.city}
              prefecture={akiya.prefecture}
              landArea={akiya.landArea}
              buildArea={akiya.buildArea}
              mainImage={mainImage}
              garages={akiya.garages}
              built={akiya.buildYear}
              vacantSince={akiya.vacantSince}
              rooms={akiya.rooms}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}