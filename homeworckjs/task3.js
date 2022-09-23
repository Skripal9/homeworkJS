
let userInfo = {
    name: "Nick",
    age: 55,
    role: "ceo",
};
userInfo.married = true;

var fillCoud = 0
for (key in userInfo) {
    fillCoud++;
    console.log(key + " - " + userInfo[key]);
 }
console.log("fillCoud", fillCoud);

if ("role" in userInfo) {
    userInfo["City"] = "Dnepr"
    console.log(userInfo);
}
