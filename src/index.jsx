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
            <ul className="row">
                {rows.map(cols => {
                    return (
                    <ul className="col">
                        {cols.map(val => {
                            let classNames = "square "

                            if(val === 1) {
                                classNames += "active"
                            } else {
                                classNames += "idle"
                            }

                            return <li className={classNames}></li>
                        })}
                    </ul>
                    )
                })}
            </ul>
        </div>
    );
}

Heatmap.defaultProps = {
    values: []
}
