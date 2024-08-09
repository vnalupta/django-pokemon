'use client';

import Script from "next/script";
import "@/styles/global.scss";

import styles from "@/components/table.module.scss";
import { useEffect, useState } from "react";

type Pokemon = {
    id: number,
    name: string,
    display_type: string,
    description: string,
    attack: string
}

const Table = () => {
    const [order, setOrder] = useState({
        id: 0,
        name: 0,
        type: 0,
        attack: 0
    });
    const [pokemons, setPokemons] = useState<Array<Pokemon> | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch("http://127.0.0.1:8000/api/pokemon/");
            const json = await data.json();
            return json;
        };

        fetchData()
            .then((json) => {
                setPokemons(json)
            })
            .catch(console.error);
    }, []);

    function clickHandler(e: React.MouseEvent, col: string) {
        e.preventDefault();
        console.log()
    }

    if (!pokemons) {
        return <h1>No Data!</h1>
    }

    return (
        <>
            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            />
            <table className={styles.table}>
                <thead>
                    <tr>
                        {Object.keys(order).map((key, idx) =>
                            <th
                                scope="col"
                                key={idx}
                                onClick={(e) => clickHandler(e, `${key}`)}
                                >
                                    {key}
                            </th>
                        )}
                    </tr>
                </thead>
                <tbody>
                {pokemons.map(pokemon => (
                    <tr key={pokemon.id}>
                        <th scope="row">{pokemon.id}</th>
                        <td>{pokemon.name}</td>
                        <td>{pokemon.display_type}</td>
                        <td>{pokemon.attack}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};

export default Table;
