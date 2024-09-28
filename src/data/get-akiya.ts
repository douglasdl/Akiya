import { supabase } from "../libs/supabaseClient";

export async function getAkiyas() {
  const { data: akiyas, error } = await supabase
    .from('Akiya')
    .select('*');

  if (error) {
    console.error('Error fetching Akiya:', error);
    return []; // Return an empty array to maintain consistent return type
  }

  return akiyas; // Return the fetched data
}
