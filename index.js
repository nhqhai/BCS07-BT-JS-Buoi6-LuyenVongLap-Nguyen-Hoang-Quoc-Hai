// Bài Tập 1: Tìm số nguyên dương nhỏ nhất sao cho 1 + 2 + ... + n >10000

function timSoNguyenDuong(){
    var tong = 0;
    for(var i = 1; tong <= 10000; i ++){
        tong +=i;
    }
    return i-1;
}


document.getElementById("hienThiSoNguyenDuongNhoNhat").innerHTML = timSoNguyenDuong();

console.log("Số nguyên dương nhỏ nhất là: " + timSoNguyenDuong());

// ---------------------------------------

// Bài Tập 2: Viết chương trình nhập vào 2 số x, n. Tính tổng S(n)= x + x^2 + x^3 + ... + x^n (sử dụng vòng lặp và hàm)

function tinhTongSn(){
    var x = document.getElementById("soX").value *1;
    var n = document.getElementById("soN").value *1;
    var tongXN = 0;
    for (var i = 1; i <= n; i++) {
        tongXN += Math.pow(x, i);
    }
    document.getElementById("hienThiTong").innerHTML = "Tổng S(n) là: " + tongXN;
}
document.querySelector(".btn-dark").onclick = tinhTongSn;

// ---------------------------------------

// Bài Tập 3: Nhập vào n. Tính giai thừa 1*2*...n

function tinhGiaiThuaJ() {
    var soJ = document.getElementById("soJ").value * 1;
    var giaiThua = 1;
    for (var i = 1; i <= soJ; i++) {
        giaiThua *= i;
    }
    document.getElementById("hienThiGiaiThuaJ").innerHTML = "Giai thừa của " + soJ + " là " + giaiThua;
}

document.querySelector(".btn-success").onclick = tinhGiaiThuaJ;

// ---------------------------------------

// Bài Tập 4: Viết chương trình khi click vào button sẽ in ra 10 thẻ div. Div chẵn = đỏ - Div lẻ = xanh

function hienThiDiv() {
    var hienThi = document.getElementById("hienThiCacDiv");
    var soDiv = "";
    for (var i = 1; i <= 10; i++) {
      if (i % 2 === 0) {
        soDiv += "<div style='background-color: red;'>Div chẵn</div>";
      } else {
        soDiv += "<div style='background-color: blue;'>Div lẻ</div>";
      }
    }
    document.getElementById ("ketQuaDiv").innerHTML = soDiv;
  }

  document.querySelector(".btn-primary").onclick = hienThiDiv;

// ---------------------------------------

// BàiTập 5: Viết chương trình có 1 ô input, 1 button. Khi click vào button thì in ra các số nguyên tố từ 1 tới giá trị của ô input

function kiemTraSoNguyenTo(n) {
    if (n <= 1) {
      return false;
    }
    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  function inSoNguyenTo() {
    var soH = document.getElementById("soNguyenTo").value * 1;
    var input = "";
    for (var i = 1; i <= soH; i++) {
      if (kiemTraSoNguyenTo(i)) {
        input += i + ", ";
      }
    }
    document.getElementById("hienThiKetQuaSoNguyenTo").innerHTML =
      "Các số nguyên tố từ 1 tới " + soH + " là: " + input;
  }

  document.querySelector(".btn-danger").onclick = inSoNguyenTo;
