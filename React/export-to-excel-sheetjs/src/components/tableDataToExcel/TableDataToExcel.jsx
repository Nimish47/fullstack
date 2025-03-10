import { utils, writeFile, write } from 'xlsx'
import styles from './TableDataToExcel.module.css'


const TableDataToExcel = ({ data }) => {

    // EXPORT data to an EXCEL(single sheet) and DOWNLOADED
    // download does not follow blob approach explicitly (handled by xlsx library)
    const exportExcel = () => {
        let myWorkBook,myWorkSheet;
        // create a new workbook (means a brand new excel file)
        myWorkBook = utils.book_new();

        // creates a new excel sheet and adds data to it (one workbook can have multiple sheets)
        myWorkSheet = utils.json_to_sheet(data);

        // appends sheet into specified workbook, along with giving sheet a name
        utils.book_append_sheet(myWorkBook, myWorkSheet, "records")

        // finalizes the process, and assigns workbook a name
        writeFile(myWorkBook, "allRecords.xlsx")
    }
    // EXPORT data to an EXCEL(single sheet) and DOWNLOADED
    // downloaded via blob approach
    const exportExcelViaBlob = () => {
        let myWorkBook,myWorkSheet;

        // create a new workbook (means a brand new excel file)
        myWorkBook = utils.book_new();

        // creates a new excel sheet and adds data to it (one workbook can have multiple sheets)
        myWorkSheet = utils.json_to_sheet(data);

        // appends sheet into specified workbook, along with giving sheet a name
        utils.book_append_sheet(myWorkBook, myWorkSheet, "record")

        // Convert workbook to Blob
        const wbout = write(myWorkBook, { bookType: "xlsx", type: "array" });
        const blob = new Blob([wbout], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });

        // Create a download link and trigger the download
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `allRecords.xlsx`;
        a.click();
        URL.revokeObjectURL(url);        

    }
    

    return (
        <div className={styles.table}>
            <table>
                {
                    data.map(item => (
                        <tr key={item._id}>
                            <td>{item._id}</td>
                            <td>{item.fName}</td>
                            <td>{item.lName}</td>
                            <td>{item.company}</td>
                            <td>{item.age}</td>
                        </tr>
                    ))
                }
            </table>
            <div className={styles.btnContainer}>
                <div className={styles.exportBtn} onClick={exportExcel}><span class={styles.exportText}>Export</span></div>
                <div className={styles.exportBtn} onClick={exportExcelViaBlob}><span class={styles.exportText}>Blob</span></div>    
            </div>    
        </div>
    );
}

export default TableDataToExcel;
