import { useState } from "react";

function Spreadsheet() {
  const [sheet, setSheet] = useState<string[][]>(() =>
    new Array(100).fill(new Array(100).fill(""))
  );

  // TODO expand the sheet to 10000x10000 (buttons to go farther)
  // TODO add column and row headers
  // TODO add cell update, calculate displayValue and calculateColumnName

  return (
    <div className="spreadsheet-wrapper">
      <div className="spreadsheet">
        <div className="row header">
          <div className="cell header" key={-1}></div>
          {sheet[0].map((col, j) => (
            <div className="cell header" key={j}>
              {j + 1}
            </div>
          ))}
        </div>
        {sheet.map((row, i) => (
          <div key={i} className="row">
            <div className="cell header" key={-1}>
              {i + 1}
            </div>
            {row.map((cell, j) => (
              <div
                className="cell"
                key={j}
                onClick={() => console.log("clicked", { i, j, cell })}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Spreadsheet;
