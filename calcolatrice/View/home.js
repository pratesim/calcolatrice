calcolatrice.home = function(params){
    var viewModel = {
        onOperand1: ko.observable(true),
        isOn: ko.observable(false),
        operand1: ko.observable(''),
        operand2: ko.observable(''),
        operator: ko.observable(''),
        displayText: ko.observable(''),
        clickButton: function(param){
            if (param == 'c') {
                this.onOperand1(true);
                this.operand1("");
                this.operand2("");
                this.operator("");
                this.displayText("0");
                this.isOn(true);
                return;
            }
            else if (this.isOn() == true){
                switch(param){
                    case '+' : case '-': case '*': case '/': this.operator(param);this.onOperand1(false);break;
                    case '=' : this.risultato();return;
                    case 'c' : this.onOperand1(true); this.operand1(""); this.operand2(""); this.operator(""); this.displayText("0");return;
                    default : this.onOperand1() == true? this.operand1(this.operand1() + param): this.operand2(this.operand2() + param);break;
                }
                this.displayText(this.operand1() + " " + this.operator() + " " + this.operand2());
            }
    	},
        risultato: function (){
            var num1 = parseFloat(this.operand1());
            var num2 = parseFloat(this.operand2());
            var res = 0;
 
            switch (this.operator()){
                case '+': res = num1 + num2; break;
                case '-': res = num1 - num2; break;
                case '*': res = num1 * num2; break;
                case '/': res = num1 / num2; break;
            }
            this.displayText(res.toString());
            this.onOperand1(true); 
            this.operand1(""); 
            this.operand2(""); 
            this.operator("");
    	}
    };
    return viewModel;
};