import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [,employeeId] = itemClicked.id.split("--")
            let employeeName = ""
            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    employeeName = employee.name
                }
            }
            let productsSold = 0;
            for (const order of orders) {
                if (order.employeeId === parseInt(employeeId)) {
                   productsSold += 1
                }
            }
            window.alert(`${employeeName} sold ${productsSold} products.`)
        }
    }
)

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

