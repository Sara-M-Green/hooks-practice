function CoinTossCounter({ results, setResults, counts, setCounts }) {
    const handleClick = (value) => {
        setResults([...results, value])
        setCounts({
            ...counts,
            [value]: counts[value] + 1
        })
    }

    const deleteToss = () => {
        const last = results[results.length - 1]
        const list = results.slice(0, -1)

        setResults(list)
        if (last) {
            setCounts({
                ...counts,
                [last]: counts[last] - 1
            })
        }
    }

    console.log(counts)
    return (
        <section>
                <button onClick={() => handleClick('H')}>Heads</button>
                <button onClick={() => handleClick('T')}>Tails</button>
                <div>
                    <button onClick={deleteToss}>Delete Last</button>
                </div>
                <ul>
                    <li>Heads: {counts["H"]}</li>
                    <li>Tails: {counts["T"]}</li>
                </ul>
        </section>
    )
}

export default CoinTossCounter