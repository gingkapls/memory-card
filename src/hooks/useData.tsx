import { useEffect, useState } from "react";

function useData<T>(url: string): T | null {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(url, { signal: controller.signal })
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((e) => console.error(e));

    return () => {
      controller.abort();
    };
  }, [url]);

  return data;
}

export default useData;
