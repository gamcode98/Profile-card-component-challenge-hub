const d = document;
const $html = d.documentElement;
const $body = d.body;
const $card = d.querySelector(".card");
const $top = d.querySelector(".top");
const $middle = d.querySelector(".middle");
const $img = d.querySelector("img");
const $personalInfo = d.querySelector(".personal__info");
const $name = d.querySelector(".name");
const $age = d.querySelector(".age");
const $city = d.querySelector(".city");
const $bottom = d.querySelector(".bottom");
const $number = d.querySelectorAll(".number");
const $p = d.querySelectorAll(".p");
const $attribution = d.querySelector(".attribution");
const $attributionLink = d.querySelector(".attribution a");

//Custom properties
let darkCyan = getComputedStyle($html).getPropertyValue("--dark-cyan");

let veryDarkDesaturatedBlue = getComputedStyle($html).getPropertyValue(
  "--very-dark-desaturated-blue"
);
let darkGrayishBlue = getComputedStyle($html).getPropertyValue(
  "--dark-grayish-blue"
);
let darkGray = getComputedStyle($html).getPropertyValue("--dark-gray");

// Styles
//Body styles
$body.style.minHeight = "100vh";
$body.style.fontFamily = "Kumbh Sans";
$body.style.display = "flex";
$body.style.justifyContent = "center";
$body.style.alignItems = "center";
$body.style.flexDirection = "column";
$body.style.overflow = "hidden";
$body.style.margin = "0";
$body.style.background =
  "url(../images/bg-pattern-top.svg),url(../images/bg-pattern-bottom.svg),darkCyan";
$body.style.backgroundRepeat = "no-repeat";
$body.style.backgroundPosition = "right 52vw bottom 30vh, left 50vw top 44vh";

//Card styles
$card.style.borderRadius = "20px";
$card.style.overflow = "hidden";
$card.style.width = "300px";
$card.style.backgroundColor = "#fff";

//Top styles
$top.style.background = "url(../images/bg-pattern-card.svg)";
$top.style.height = "125px";

//Middle styles
$middle.style.borderBottom = "1px solid #ccc";
$middle.style.marginBottom = "10px";

//Img styles
$img.style.borderRadius = "50%";
$img.style.display = "block";
$img.style.marginTop = "-50px";
$img.style.marginLeft = "auto";
$img.style.marginRight = "auto";
$img.style.border = "5px solid #fff";

//Personal info styles
$personalInfo.style.display = "flex";
$personalInfo.style.flexDirection = "column";
$personalInfo.style.justifyContent = "center";
$personalInfo.style.alignItems = "center";

//Name styles
$name.style.fontWeight = "700";
$name.style.color = "veryDarkDesaturatedBlue";
$name.style.marginBottom = "13px";

//Age styles
$age.style.marginLeft = "3px";
$age.style.fontWeight = "400";
$age.style.color = "darkGrayishBlue";

//City styles
$city.style.marginTop = "0";
$city.style.marginBottom = "23px";
$city.style.color = "darkGray";
$city.style.fontWeight = "400";

//Bottom styles
$bottom.style.display = "flex";
$bottom.style.justifyContent = "space-evenly";
$bottom.style.alignItems = "center";
$bottom.style.textAlign = "center";
$bottom.style.marginBottom = "15px";

//Number styles
$number.forEach((number) => {
  number.style.color = "veryDarkDesaturatedBlue";
  number.style.fontWeight = "700";
  number.style.fontSize = "18px";
  number.style.marginBottom = "0";
});

//P styles

$p.forEach((p) => {
  p.style.marginTop = "5px";
  p.style.fontSize = "11px";
  p.style.letterSpacing = "2px";
  p.style.fontWeight = "400";
  p.style.color = "darkGray";
});

//Atttribution styles
$attribution.style.fontSize = "11px";
$attribution.style.textAlign = "center";
$attribution.style.marginTop = "20px";

//Atributon link styles
$attributionLink.style.color = "hsl(228, 45%, 44%)";
