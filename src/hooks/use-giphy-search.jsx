import React from "react";
import debounce from "lodash.debounce";

export function useGiphySearchAPI(initialKeyword, offset, limit) {
  const [gifs, setGifs] = React.useState([]);
  const [keyword, setKeyword] = React.useState(initialKeyword);

  React.useEffect(() => {
    const keywordParams = new URLSearchParams(keyword).toString();
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=cl15uxxlaJNkx41SH105GNl0mAdB2M1J&q=${keywordParams}&limit=${limit}&offset=${offset}&rating=g&lang=en`
    )
      .then((response) => response.json())
      .then((body) =>
        body.data.map((item) => ({
          images: item.images,
          embedURL: item["embed_url"],
        }))
      )
      .then((images) => setGifs(images));
  }, [keyword, offset, limit]);

  const updateKeyword = React.useCallback(
    (value) => {
      setKeyword(value);
    },
    [setKeyword]
  );

  const debouncedChangeHandler = React.useMemo(
    () => debounce(updateKeyword, 300),
    [updateKeyword]
  );

  // Stop the invocation of the debounced function
  // after unmounting
  React.useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, [debouncedChangeHandler]);

  return {
    gifs,
    updateKeyword: updateKeyword,
  };
}
