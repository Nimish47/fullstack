import { utils,writeFile } from 'xlsx'
import styles from './TableDataToCsv.module.css'


const TableDataToCsv = ({ data }) => {


    // EXPORT data to a CSV file and DOWNLOADED
    // follows direct library approach (no blob)
    const exportCSV = () => {
        let myWorkBook,myWorkSheet

        // create a new workbook (means a brand new excel file)
        myWorkBook = utils.book_new();

        // creates a new excel sheet and adds data to it (one workbook can have multiple sheets)
        myWorkSheet = utils.json_to_sheet(data);

        // appends sheet into specified workbook, along with giving sheet a name
        utils.book_append_sheet(myWorkBook, myWorkSheet, "record")

        // Directly download as CSV
        writeFile(myWorkBook, "data.csv", { bookType: "csv" });        
    }     



    // EXPORT data to a CSV file and DOWNLOADED
    // follows the blob link download approach
    const exportCSVBlob = () => {
        // Convert JSON to worksheet
        const ws = utils.json_to_sheet(data);

        // Convert worksheet to CSV
        const csv = utils.sheet_to_csv(ws);

        // Create a Blob and trigger download
        const blob = new Blob([csv], { type: "text/csv" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `hello.csv`;
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
                <div className={styles.exportBtn} onClick={exportCSV}><span class={styles.exportText}>Export</span></div>
                <div className={styles.exportBtn} onClick={exportCSVBlob}><span class={styles.exportText}>Blob</span></div>
            </div>    
        </div>
    );
}

export default TableDataToCsv;
