import {Injectable} from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_FILE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=UTF-8';
const EXCEL_EXT = '.xlsx';

@Injectable()
export class ExportFileService{
  exportToExcel(json: any[], excelFilName: string): void{
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const worbook: XLSX.WorkBook ={
      Sheets: {'data': worksheet},
      SheetNames: ['data']
    }

    const excelBuffer: any = XLSX.write(worbook, {bookType: 'xlsx', type: 'array'});
    this.saveAsExcel(excelBuffer, excelFilName);
  }

   saveAsExcel(buffer: any, fileName: string): void{
    const data: Blob = new Blob([buffer], {type: EXCEL_FILE});
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXT);
  }
}
