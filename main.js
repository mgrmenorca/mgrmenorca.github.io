        $(document).ready(function () {
            //iterate through each textboxes and add keyup
            //handler to trigger sum event
            $(".txt").each(function () {
                $(this).keyup(function () {
                    calculateSum();
                });
            });
        });

        function calculateSum() {
            var sum = 0;
            //iterate through each textboxes and add the values
            $(".txt").each(function () {
                //add only if the value is number
                if (!isNaN(this.value) && this.value.length != 0) {
                    sum += parseFloat(this.value);
                }
            });
            
            var sumQ = [];
            for (var i=1; i<=5; i++) {
                sumQ[i] = 0;
                $('td:nth-child('+(i+1)+')').find(".txt").each(function () {
                    if (!isNaN(this.value) && this.value.length != 0) {
                        sumQ[i] += parseFloat(this.value);
                    }
                });
                $(".span7").find('input').eq(i-1).val(sumQ[i].toFixed(2));
            }
            //.toFixed() method will roundoff the final sum to 2 decimal places
            var remain = [];
            var required = [2175,332,67,64,2000]
            for (var i=1; i<=5; i++) {
                remain[i] = required[i-1] - sumQ[i]
                $(".span8").find('input').eq(i-1).val(remain[i].toFixed(2));
            }
            //.toFixed() method will roundoff the final sum to 2 decimal places
            $("#remain").val(remain.toFixed(2));
          
        }