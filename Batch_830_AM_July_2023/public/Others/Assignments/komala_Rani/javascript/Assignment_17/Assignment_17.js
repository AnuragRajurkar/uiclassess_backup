var empdetails = {
    readempdata () {
        this.Name = prompt("Enter Employee Name: ");
        this.Age = parseInt(prompt("Enter Employee Age: "));
        this.Gender = prompt("Enter Employee Gender: ");
        this.Dept = prompt("Enter Employee Dept: ");
        this.Salary =parseInt(prompt("Enter Employee Salary: "));
        this.getemptotal();
    },
    getemptotal () {
        this.pf = (12 / 100) * this.Salary;
        this.hra = (24 / 100) * this.Salary;
        this.totalsal = this.pf + this.hra  + this.Salary;
        this.getemptaxdetails();
    },
    getemptaxdetails () {
        if(this.Gender == "male" || this.Gender== "Male") {
                if(this.totalsal >= 300000) {
                this.tax = (15 / 100) * this.totalsal;
                console.log("tax paid is " + tax);
                this.totalsal = this.totalsal - tax;
                console.log("after paid tax totalsal is " + this.totalsal);
            } else if(this.totalsal >= 200000) {
                tax = (10 / 100) * this.totalsal;
                console.log("tax paid is " + tax);
                this.totalsal = this.totalsal - tax;
                console.log("after paid tax totalsal is " + this.totalsal);
            } else if(this.totalsal >= 100000) {
                tax = (5 / 100) * this.totalsal;
                console.log("tax paid is " + tax);
                this.totalsal = this.totalsal - tax;
                console.log("after paid tax totalsal is " + this.totalsal);
            } else{
                tax = 0;
                console.log("tax paid is " + tax);
                this.totalsal = this.totalsal - tax;
                console.log("after paid tax totalsal is " + this.totalsal);
            }
        } else if(this.Gender == "female" || this.Gender == "Female") {
            if(this.totalsal >= 300000) {
                tax = (10 / 100) * this.totalsal;
                console.log("tax paid is " + tax);
                this.totalsal = this.totalsal - tax;
                console.log("after paid tax totalsal is " + this.totalsal);
            } else if(this.totalsal >= 200000) {
                tax = (5 / 100) * this.totalsal;
                console.log("tax paid is " + tax);
                this.totalsal = this.totalsal - tax;
                console.log("after paid tax totalsal is " + this.totalsal);
            } else{
                tax = 0;
                console.log("tax paid is "+ tax);
                this.totalsal = this.totalsal - tax;
                console.log("after paid tax totalsal is " + this.totalsal);
            }
        } else{
            console.log("Zero tax");
        }
    },
    getDisplayEmpDetails () {
        this.readempdata();
        console.log("Enter Employee Name: " +this.Name);
        console.log("Enter Employee Age: " +this.Age);
        console.log("Enter Employee Gender: " +this.Gender);
        console.log("Enter Employee Dept: " +this.Dept);
        console.log("Enter Employee Salary: " +this.Salary);
        console.log("Enter Employee PF: " +this.pf);
        console.log("Enter Employee HRA: " +this.hra);
        console.log("Enter Employee TotalSalary: " +this.totalsal);
        this.getemptaxdetails();

    },

};
empdetails.getDisplayEmpDetails();   