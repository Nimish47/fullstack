import './App.css'
import TableDataToExcel from './components/tableDataToExcel/TableDataToExcel'
import { utils, writeFile } from 'xlsx'
import { goodRecord, badRecord1, badRecord2 } from './data/records'
import TableDataToCsv from './components/tableDataToCsv/TableDataToCsv'

function App() {


  // EXPORT data to an EXCEL having multiple sheets and DOWNLOADED
  // download does not follow blob approach explicitly (handled by xlsx library)
  // APPROACH
    //  create a new workbook
    // loop into data array
    // create new sheet from array data in each iteration
    // in each iteration,add the sheet created into specified workbook
    // finally after looping complete, complete the process and give workbook a name 
  const exportAll = (arr) => {
    let myWorkBook, myWorkSheet;
    myWorkBook = utils.book_new()
    arr.forEach((item, index) => {
      myWorkSheet = utils.json_to_sheet(item)
      utils.book_append_sheet(myWorkBook, myWorkSheet, `sheet-${index}`)
    })
    writeFile(myWorkBook, "allRecords.xlsx")
  }

  const exportAllViaBlob = () => {}


  return (
    <div className='rootContainer'>
      <div className='container'>
        <TableDataToExcel data={goodRecord} />
        <TableDataToExcel data={badRecord1} />
        <TableDataToExcel data={badRecord2} />
        <TableDataToCsv data={goodRecord} />
        <TableDataToCsv data={badRecord1} />
        <TableDataToCsv data={badRecord2} />
      </div>
      <div className='exportAll'
        onClick={() => exportAll([goodRecord, badRecord1, badRecord2])}
      >
        Export All
      </div>
    </div>
  );
}

export default App;
