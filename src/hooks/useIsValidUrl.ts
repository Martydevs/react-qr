import { useEffect, useState } from "react";

export default function useIsValidUrl(url: string) {
  const [isValidUrl, setIsValidUrl] = useState(false);

  useEffect(() => {
    setIsValidUrl(URL.canParse(url));
  }, [isValidUrl, url]);

  return isValidUrl
}