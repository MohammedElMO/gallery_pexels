import { useQuery } from "@tanstack/react-query";
import clientApi from "../service/client-api";

export interface Photo {
  id: number;
  // url: https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/,
  // photographer: Joey Farina,
  // photographer_url: https://www.pexels.com/@joey,
  // photographer_id: 680589,
  src: {
    original: string;
    large: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  liked: boolean;
  alt: string;
}

const useGallery = () => {
  return useQuery<Photo[]>({
    queryKey: ["gallery"],
    queryFn: async () => clientApi.get("/curated"),
  });
};

export default useGallery;
