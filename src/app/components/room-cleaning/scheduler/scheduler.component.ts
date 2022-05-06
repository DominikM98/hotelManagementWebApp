import {Component, ViewChild, AfterViewInit, ChangeDetectorRef} from "@angular/core";
import {DayPilot, DayPilotSchedulerComponent} from "daypilot-pro-angular";
import {DataService} from "./data.service";
import EventData = DayPilot.EventData;
import SchedulerConfig = DayPilot.SchedulerConfig;
import {ReservationService} from "../reservation.service";

@Component({
  selector: 'scheduler-component',
  template: `
  <div class="space">
    <label for="readonly" style='font-size: 0'><input type="checkbox" id="readonly" style='width: 0;height: 0'[(ngModel)]="readonly" (change)="changed()"> Read-Only</label>
  </div>
  <daypilot-scheduler [config]="config" [events]="events" #scheduler></daypilot-scheduler>
`,
  styles: [``]
})
export class SchedulerComponent implements AfterViewInit {

  @ViewChild("scheduler")
  scheduler!: DayPilotSchedulerComponent;

  readonly: boolean = true;

  events: EventData[] = [];

  Res = {
    name: '',
    id: ''
  };

  Resources: any[] = [];
  Event: any[] = [];

  config: DayPilot.SchedulerConfig = {
    crosshairType: "Disabled",
    timeHeaders: [{"groupBy":"Month"},{"groupBy":"Day","format":"d"}],
    scale: "Day",
    days: DayPilot.Date.today().daysInYear(),
    startDate: DayPilot.Date.today().firstDayOfYear(),
    timeRangeSelectedHandling: "Disabled",
    eventMoveHandling: "Disabled",
    eventResizeHandling: "Disabled",
    eventDeleteHandling: "Disabled",
    eventClickHandling: "Disabled",
    eventHoverHandling: "Bubble",
    bubble: new DayPilot.Bubble({
      onLoad: (args) => {
        // if event object doesn't specify "bubbleHtml" property
        // this onLoad handler will be called to provide the bubble HTML
        args.html = "Event details";
      }
    }),
    treeEnabled: true,
   onTimeRangeSelected: async (args) => {
      const dp = args.control;
      dp.clearSelection();
      //dodawanie zdarzeń do Schedulera
      dp.events.add({
        start: args.start,
        end: args.end,
        id: DayPilot.guid(),
        resource: args.resource,
        barColor: "#38761d"
      });
    },


  };

  constructor(private ds: DataService, private rs: ReservationService) {}

  ngAfterViewInit(): void {

   this.config.resources = [{
       name: 'Number of rooms',
        id: 'NoR'
  }];

  }

  ngOnInit(): void{
    this.getRooms();
    this.getReservation();
  }

  getRooms(){
    this.rs.getRooms().subscribe(result => {
      this.Resources = result;
      console.log("r",this.Resources);
      this.setRooms(this.Resources)
    });
  }

  setRooms(variable:any){
    for(let i = 0; i < variable.length;i++){

      // @ts-ignore
      // @ts-ignore
      // @ts-ignore
      this.config.resources.push({
          name: variable[i].room_number,
          id: 'R'+variable[i].room_number
      })

    }

  }

  getReservation(){
    this.rs.getReservations().subscribe( reservation =>{
      this.Event = reservation;
      this.setReservations(this.Event);
    })
  }

  setReservations(variable: any){
    for (let i = 0; i < variable.length;i++){
      // @ts-ignore
      this.events.push({
        start: variable[i].check_in,
        end: variable[i].check_out,
        id: DayPilot.guid(),
        resource: 'R'+variable[i].room_number,
        text:''+variable[i].number_of_people+' people',
        barColor: "#38761d"
      });

    }

  }

  original: any;

  // scheduler tylko do odczytu
  changed():void {
    let properties = [
      "eventClickHandling",
      "eventDeleteHandling",
      "eventHoverHandling",
      "eventDoubleClickHandling",
      "eventMoveHandling",
      "eventResizeHandling",
      "rowClickHandling",
      "rowDoubleClickHandling",
      "rowCreateHandling",
      "rowSelectedHandling",
      "rowMoveHandling",
      "timeRangeClickHandling",
      "timeRangeDoubleClickHandling",
      "timeRangeSelectedHandling",
      "timeRangeRightClickHandling",
        "onEventClick"
    ];

    if (this.readonly) {
      this.original = {};

      properties.forEach(name => {
        // @ts-ignore
        this.original[name] = this.scheduler.control[name];
        // @ts-ignore
        this.config[name] = "Disabled";
      });

      this.scheduler.control.clearSelection();

    }
    else {
      properties.forEach(name => {
        // @ts-ignore
        this.config[name] = this.original[name];
      });
    }
  }
}
