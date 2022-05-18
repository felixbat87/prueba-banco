import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import { ApiClientesService } from 'src/app/servicios/api-clientes.service';
  



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})

@Injectable()

export class ClienteComponent implements OnInit {

  constructor(private parametro:ActivatedRoute, private servico:ApiClientesService) { }
   dato:any;
   data:any;
   credito:number=0;
  pieChart: GoogleChartInterface = {
    chartType: GoogleChartType.ColumnChart,
    dataTable: [
      ['Clientes', 'Intereses'],
      ['A', 80],
      ['B', 30],
      ['C', 60]
    ],
    options: { 'title': 'Intereses del Cliente' },
  }


  pieChart2: GoogleChartInterface = {
    chartType: GoogleChartType.PieChart,
    dataTable: [
      ['Clientes', 'Intereses'],
      ['Personal', 40],
      ['Apartamento', 30],
      ['Automovil', 60]
    ],
    options: { 'title': 'Intereses del Cliente' },
  }
  
  ngOnInit(): void {
    this.dato= this.parametro.snapshot.params['id'];
    this.servico.cliente(this.dato).subscribe((response=>{
     console.log(response);
     this.data=response;
  
    }));

    
  }


}
