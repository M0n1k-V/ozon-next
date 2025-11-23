"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Search() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [search, updateSearch] = useState('')

  const updateFilter = (value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const searchParam = params.get('search')

    if (searchParam) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        updateSearch(searchParam)
    } else {
        updateSearch('')
    }
  }, [searchParams])

  return (
    <div className="search">
      <div className="search-wrapper">
            <input className="search-wrapper_input" 
            type="text" 
            value={search}
            onChange={(event) => updateSearch(event.target.value)}
        />
      </div>
      <div className="search-btn">
        <button onClick={() => updateFilter(search)}></button>
      </div>
    </div>
  );
}
