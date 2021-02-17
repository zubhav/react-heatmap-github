import React from 'react';
import './styles.scss'

export function Heatmap({ values }) {
    const rows = []
    const chunk = 7;

    for (let i = 0; i < values.length; i += chunk) {
        let weekChunk = values.slice(i, i + chunk);
        rows.push(weekChunk)
    }

    return (
        <div className="chart">
            <svg width={values.length * 2 + 10} height={88}>
                {rows.map((cols, rowIdx) => {
                    return (
                        <g transform={`translate(${rowIdx * 14}, 0)`}>
                            {cols.map((val, colIdx) => {
                                const classes = ["square", `green-${val}`]
                                let classNames = classes.join(" ")

                                return <rect width="10" height="10" x="0" y={`${colIdx * 13}`} className={classNames} rx="2" ry="2"></rect>
                            })}
                        </g>
                    )
                })}
            </svg>
        </div>
    );
}

Heatmap.defaultProps = {
    values: []
}
