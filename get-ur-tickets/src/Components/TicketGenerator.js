import React, { useState, useEffect } from 'react';
import DetailsPopover from "../Components/popOver.tsx";
   
    

    export class TicketComponent extends React.Component{

        location = "N/A"
        event = "N/A"
        flight = "N/A"
        hotel = "N/A"
        price = "N/A"
        hyperlink = "N/A"
        from = "N/A"
        to = "N/A"
    
        setParams(event, hotel, flight, price, location, hyperlink, from, to){
            this.location = location
            this.event = event
            this.flight = flight
            this.hotel = hotel
            this.price = price
            this.hyperlink = hyperlink
            this.from = from
            this.to = to
        }
    
    startRender(){
            return (
            <div className="Ticket-Box" 
            style=
            {{       
                height: 'auto', 
                display: 'flex', 
                justifyContent: 'space-between', 
                padding: '20px', 
                border: '1px solid #ddd', 
                margin: '10px 0' 
            }}>
            <div style=
            {{ 
                flex: 1, 
                textAlign: 'left', 
                paddingRight: '10px' 
            }}>
                <strong>Location:</strong>
                <br/> {this.location}     
            </div>
    
            <div style=
            {{ 
                flex: 2, 
                textAlign: 'left', 
                paddingRight: '10px' 
            }}>
                <strong>Event:</strong> {this.event}
                <br/>
                <a href={this.hyperlink}> event details</a>
                <br/>
                Dates: {this.from + " - " + this.to}  
            </div>
    
            <div style=
            {{ 
                flex: 2, 
                textAlign: 'left', 
                paddingRight: '10px' 
            }}>
                <strong>Flight:
                </strong> {this.flight}
                <br/>
                {/* First implementation of details popover. Replace props as needed. (name, header, etc...) */}
                <DetailsPopover
                name = "Flight Details"
                header = "DEP -> ARR"
                line1 = "From: Departure City"
                line2 = "To: Arrival City"
                />
            </div>
    
            <div style=
            {{  
                flex: 2, 
                textAlign: 'left', 
                paddingRight: '10px' 
            }}>
                <strong>Hotel:</strong> {this.hotel}
                {/* Placeholder for additional details or subpage */}
                <br/><DetailsPopover /> {/* */}
            </div>
            
            <div style=
            {{ 
                flex: 1, 
                textAlign: 'right' 
            }}>
                <strong>Price:</strong> {"$ " + this.price}
            </div>
            </div>
            )
        /*this will be used to create the display ticket with prices, location, link, etc... */
    };
}
    
    export class Tickets extends TicketComponent {
        getTickets(ticketNum, tracking){
            var ahh = [];
            if(ticketNum.length === 0){
                console.log(" returning home ")
                return;
            }
            else if((ticketNum.length - tracking) >= 5){
                var previous = tracking;
                tracking += 5;
                console.log(previous + " previous and tracking " + tracking)
            }
            else{
                var previous = tracking;
                tracking += ticketNum.length - tracking;
                console.log(previous + " not greater than or equal to 5 " + tracking)
            }
            /*For loop to push Ticket display into array, testing with 5 for now. Here you will get the number of result and ticket information from get command */

            for ( let i = 0; i < tracking; i++){
                console.log("!!!!!!")
                this.setParams(ticketNum[i][1], "", "", ticketNum[i][0], ticketNum[i][2][0] + " " + ticketNum[i][2][1], ticketNum[i][3], ticketNum[i][4], ticketNum[i][5])
                ahh.push(this.startRender())
            }
            console.log(previous + " RETURNING " + tracking + "  " + ahh.length)
            return ahh;
        }
    }
