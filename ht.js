$(document).ready(function () {
    let x = $("#myForm").html();
    function hello() {

        return x;
    }
    $(".b1").click(function () {
        $("#myForm").after(hello());
    })
    $(document).on
        ("click", ".b2", function () {
            $(this).closest('.a0').remove();
            calculateTotal();
        });

    $(document).on
        ("input", ".z1, .z2", function () {
            let row = $(this).closest('.a0'); // Get the specific row
            let quantity = row.find(".z1").val();
            // alert(quantity)
            let price = row.find(".z2").val();
            let amount = quantity * price;
            // Update the corresponding amount input
            let Discount = 0;
            if (amount > 50) {
                Discount = Discount + 7
                if (amount > 100) {
                    Discount = Discount + 10
                }
            }
            else {
                Discount = 0;
            }

            row.find(".z3").val(Discount);
            amount = amount - Discount;
            row.find(".z4").val(amount);
            let dt = new Date();
       
            var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
            $(".z7").val(dt.toTimeString())
            $(".z8").val(dt.toDateString())
            calculateTotal();
        });
    function calculateTotal() {
        let total = 0, tax = 0;
        $(".z4").each(function () {
            let amount = parseFloat($(this).val()) || 0;
            total += amount;
        });
        if (total > 499) {
            tax = tax + 7;
            if (total > 999) {
                tax = tax + 6
                if (total > 1499) {
                    tax = tax + 7
                    if (total > 1999) {
                        tax = tax + 8
                    }
                } 


            }
        }
        $(".z6").val(tax);
        total=total+tax

        $(".z5").val(total); // Update the Total Amount field
    }



})















