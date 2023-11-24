// const [urlParamsLoaded, setUrlParamsLoaded] = useState(false);

// useEffect(() => {
//   if (!urlParamsLoaded) {
//     const queryParam = searchParams.get("query") || "";
//     const sortParam = searchParams.get("sortBy") || "Title";
//     const genreParam = searchParams.get("genre") || "";

//     setSearchQuery(queryParam);
//     setSortCriterion(sortParam);
//     setActiveGenre(genreParam);

//     setUrlParamsLoaded(true);
//   }
// }, [searchParams, urlParamsLoaded]);

// useEffect(() => {
//   const params = new URLSearchParams();
//   if (searchQuery) params.set("query", searchQuery);
//   if (sortCriterion) params.set("sortBy", sortCriterion);
//   if (activeGenre) params.set("genre", activeGenre);

//   // navigate(`?${params.toString()}`);
// }, [searchQuery, sortCriterion, activeGenre]);
