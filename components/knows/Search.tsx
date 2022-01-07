const initialDataAtom = atom([
  "some",
  "data",
  "I will probably rewrite this as objects instead of strings",
]);
const readInitialDataAtom = atom((get) => get(initialDataAtom));

const queriesAtom = atom<string[]>([]);
const readQueriesAtom = atom((get) => get(queriesAtom));

const addQueryAtom = atom(null, (_get, set, newQuery) => {
  set(queriesAtom, (prev) => [...prev, newQuery as string]);
});
const removeQueryAtom = atom(null, (_get, set, removedQuery: string) => {
  set(queriesAtom, (prev) =>
    prev.filter((value) => value.toLowerCase() != removedQuery.toLowerCase())
  );
});

const filteredDataAtom = atom((get) => {
  return get(queriesAtom)
    .map((serachItem) => {
      return get(initialDataAtom).filter(
        (item) => item.toLowerCase() == serachItem.toLowerCase()
      );
    })
    .flat();
});

export const Search = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [queries] = useAtom(readQueriesAtom);
  const [initialData] = useAtom(readInitialDataAtom);
  const [filteredData] = useAtom(filteredDataAtom);
  const [, addQuery] = useAtom(addQueryAtom);
  const [, removeQuery] = useAtom(removeQueryAtom);

  return (
    <>
      <form
        onSubmit={(e) => {
          if (inputRef.current) {
            if (
              inputRef.current.value &&
              !queries.includes(inputRef.current.value)
            ) {
              addQuery(inputRef.current.value);
            }
          }
          e.preventDefault();
        }}
      >
        <label htmlFor="serachBox">SearchBox</label>
        <input ref={inputRef} id="serachBox" type="text" />
        <button>Submit</button>
      </form>

      <ul>
        {queries?.map((item) => (
          <li key={item}>
            {item}{" "}
            <button
              onClick={() => {
                removeQuery(item);
              }}
            >
              remove
            </button>
          </li>
        ))}
      </ul>

      <br />
      <br />
      <br />
      <h6>FilteredData</h6>
      <ul>{filteredData && filteredData.map((t) => <li key={t}>{t}</li>)}</ul>

      <br />
      <br />
      <br />
      <h6>All tech</h6>
      <ul>
        {initialData.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </>
  );
};

import { useEffect, useRef, useState } from "react";
import { atom, useAtom } from "jotai";
