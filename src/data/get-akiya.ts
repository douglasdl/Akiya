import { supabase } from "../libs/supabaseClient";

export interface FilterParams {
  city?: string;
  prefecture?: string;
  priceMin?: number;
  priceMax?: number;
  orderBy?: string;
  orderDirection?: 'asc' | 'desc';
}


export async function getAkiyas(params: FilterParams = {}) {
  let query = supabase.from('Akiya').select('*');

  // Apply filters
  if (params.city) {
    query = query.eq('city', params.city);
  }
  if (params.prefecture) {
    query = query.eq('prefecture', params.prefecture);
  }
  if (params.priceMin) {
    query = query.gte('price', params.priceMin);
  }
  if (params.priceMax) {
    query = query.lte('price', params.priceMax);
  }

  // Apply ordering
  if (params.orderBy) {
    query = query.order(params.orderBy, { ascending: params.orderDirection === 'asc' });
  }

  const { data: akiyas, error } = await query;

  if (error) {
    console.error('Error fetching Akiya:', error);
    return [];
  }

  return akiyas;
}
