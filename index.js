// formula to cal bmi = weight in kg/(height in m) squared

// id weight height result

let disp_sel = document.getElementById("result");

let bmi = 0;

document.getElementById("submit").addEventListener("click", (e) => {
    e.preventDefault
    let weight_sel = document.getElementById("weight").value;
    let height_sel = document.getElementById("height").value;


    if(weight_sel < 0 || isNaN(weight_sel) || weight_sel == "") showerror(`Please enter a valid no ${weight_sel}`);        
    else if (height_sel < 0 || isNaN(height_sel) || weight_sel == "") showerror(`Please enter a valid no ${height_sel}`);
    else{    
        bmi = cal_bmi(weight_sel, height_sel);
        showbmi(bmi);
    }
});

const cal_bmi = (weight, height) => {
    return (weight / (height * height).toFixed(2));
}
// Less than 18.6 Under weight
// Between 18.6 and 24.9
// Above 24.9 obese

function showbmi(bmi){
    if(bmi < 18.6) disp_sel.textContent = "You are underweight";
    else if (bmi >= 18.6 && bmi <= 24.9) disp_sel.textContent= "You are normal";
    else disp_sel.textContent = "You are obese";
}

function showerror(msg){
    disp_sel.textContent = msg;
}


