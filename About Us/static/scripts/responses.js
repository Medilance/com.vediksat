function getBotResponse(input) {




    if(input==1){
        return "Press a if want help to place an order?..Press b if have an issue in order";
    }
    if(input=="a" || input=="A"){
        return "Go to this https://medilance.in/product-list.pdf and contact us on 9876839044  to confirm your order";
    }
    if(input=="b" || input=="B"){
        return "Please contact at 9876839044 or at mail info@medilance.in for more details";

    }

    if(input==2){
        return "Please contact us at 9876839044 or at info@medilance.in to get more information!!";
    }

    if(input==3){
        return "Please dial 9876839044 or mail us at info@medilance.in and tell us your query";
    }

    // Simple responses
    if (input == "hello" || input=="hi" || input=="Hey" || input=="hey" || input=="Hi" || input=="Hello" ) {
        return "Hello there! \n Press 1 for existing user..Press 2 to buy franchise..Press 3 if you need some help";
    } else if (input == "goodbye" || input=="Bye" || input=="bye" || input=="okay") {
        return "Talk to you later!";
    } else {
        return "Please mail your query at info@medilance.in or try asking something else!";
    }

}