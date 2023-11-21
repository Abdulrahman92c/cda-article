export const Date_now = {
    builder() {
        console.log("hello cest lui");
    },
    dates: new Date().getFullYear(),
    el: document.querySelector("time")

};